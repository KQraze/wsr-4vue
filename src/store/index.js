import { useAccountStore } from "@/store/account";
import { useShiftStore } from "@/store/shift";
import { useOrderStore } from "@/store/order";

export * from "./account";
export * from "./employee";
export * from "./modal";
export * from "./shift";
export * from "./order";

export const init = async () => {
  useAccountStore().setToken(localStorage.token ?? "");
  useAccountStore().setRole(localStorage.role ?? "");
  await useShiftStore().getCurrentShift();
  await useOrderStore().getOrders();
};
