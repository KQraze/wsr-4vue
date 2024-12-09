import { ref } from "vue";
import { useShiftStore } from "@/store";
import { $api } from "@/assets";

const orders = ref([]);

export const useOrderStore = () => {
  const getOrders = async () => {
    const { currentShift } = useShiftStore();

    if (!currentShift.value) return;
    orders.value =
      (await $api.get(`work-shift/${currentShift.value}/order`)).data?.data
        ?.orders ?? [];
  };

  return { orders, getOrders };
};
