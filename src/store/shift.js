import { ref } from "vue";
import { $api } from "@/assets";

const shifts = ref([]);
const currentShift = ref(null);

export const useShiftStore = () => {
  const initShifts = async () => {
    shifts.value = (await $api.get("work-shift")).data ?? [];
  };

  const getCurrentShift = async () => {
    const token = (
      await $api.post("login", { login: "locadm", password: "12345" })
    ).data?.data?.user_token;

    if (!token) return;

    const shifts = (await $api.get("work-shift")).data;

    if (!shifts) return;

    currentShift.value = shifts.find((shift) => !!shift.active).id;
  };

  return { shifts, currentShift, initShifts, getCurrentShift };
};
