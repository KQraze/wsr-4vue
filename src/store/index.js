import { createStore } from "vuex";
import { $api } from "@/assets";

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
    loginUser: async ({ dispatch }, { login, password, role }) => {
      const { data } = await $api.post("login", { login, password });

      await dispatch("setToken", data.data?.user_token ?? null);
      await dispatch("setRole", role ?? null);
    },

    logoutUser: async ({ dispatch }) => {
      await $api.get("logout");
    },

    setToken: ({ commit }, value) => {
      localStorage.setItem("token", value);
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
  },
  modules: {},
});
