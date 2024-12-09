import { computed, ref } from "vue";
import { $api, headers } from "@/assets";
import { useModalStore } from "@/store/modal";

const token = ref(localStorage.getItem("token") ?? null);
const role = ref(localStorage.getItem("role") ?? null);

export const useAccountStore = () => {
  const isAdmin = computed(() => role.value === "admin");
  const isWaiter = computed(() => role.value === "waiter");
  const isCook = computed(() => role.value === "cook");

  const login = async ({ login, password }) => {
    const { data } = await $api.post("login", { login, password });

    if (!data.data?.user_token) return false;

    setToken(data.data.user_token ?? null);

    const [checkAdm, checkCook] = await Promise.allSettled([
      $api.get("user"),
      $api.get("order/taken/get"),
    ]);

    if (!checkAdm.value?.data?.error) setRole("admin");
    else if (!checkCook.value?.data?.error) setRole("cook");
    else setRole("waiter");

    return useModalStore().openModal(null);
  };

  const logout = () => {
    $api.get("logout").then(() => true);
    clearToken();
    setRole("");
  };

  const setToken = (value) => {
    localStorage.token = value;
    headers.Authorization = `Bearer ${value}`;
    token.value = value;
  };

  const clearToken = () => {
    localStorage.removeItem("token");
    token.value = null;
  };

  const setRole = (value) => {
    localStorage.role = value;
    role.value = value;
  };

  return {
    token,
    role,
    isAdmin,
    isWaiter,
    isCook,
    login,
    logout,
    setToken,
    setRole,
  };
};
