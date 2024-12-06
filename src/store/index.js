import { createStore } from "vuex";
import { $api, headers } from "@/assets";

const modals = ["auth", "shift", "order", "employee"];

export default createStore({
  state: {
    token: localStorage.getItem("token") ?? null,
    role: localStorage.getItem("role") ?? null,
    modal: null,
  },
  getters: {
    isAdmin: (state) => state.role === "admin",
    isWaiter: (state) => state.role === "waiter",
    isCook: (state) => state.role === "cook",
    token: (state) => state.token,
    openedModal: (state) => state.modal,
  },
  mutations: {
    setToken: (state, value) => (state.token = value),
    setRole: (state, value) => (state.role = value),
    setModal: (state, value) => (state.modal = value),
  },
  actions: {
    loginUser: async ({ dispatch }, { login, password }) => {
      const { data } = await $api.post("login", { login, password });

      if (data.data?.user_token) {
        await dispatch("setToken", data.data?.user_token ?? null);

        const [checkAdm, checkCook] = await Promise.allSettled([
          $api.get("user"),
          $api.get("order/taken/get"),
        ]);

        if (!checkAdm.value?.data?.error) await dispatch("setRole", "admin");
        else if (!checkCook.value?.data?.error) {
          await dispatch("setRole", "cook");
        } else await dispatch("setRole", "waiter");

        return true;
      }

      return false;
    },

    logoutUser: async ({ dispatch }) => {
      await $api.get("logout");
      await dispatch("clearToken");
      await dispatch("setRole", "");
    },

    setToken: ({ commit }, value) => {
      localStorage.setItem("token", value);
      headers.Authorization = `Bearer ${value}`;
      commit("setToken", value);
    },

    setRole: ({ commit }, value) => {
      localStorage.setItem("role", value);
      commit("setRole", value);
    },

    clearToken: ({ commit }) => {
      localStorage.removeItem("token");
      commit("setToken", "");
    },

    openModal: ({ commit }, modalId) => {
      commit("setModal", modals[modalId] ?? null);
    },

    addEmployee: async (injected, model) => {
      const { response } = await $api.post("user", model);

      if (response?.status === 201) {
        return true;
      }
    },

    init: async ({ dispatch }) => {
      await dispatch("setToken", localStorage.getItem("token") ?? "");
      await dispatch("setRole", localStorage.getItem("role") ?? "");
    },
  },
  modules: {},
});
