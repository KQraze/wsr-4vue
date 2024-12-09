import { $api } from "@/assets";
import { useModalStore } from "@/store/modal";
import { ref } from "vue";

const employers = ref([]);

export const useEmployeeStore = () => {
  const addEmployee = async (model) => {
    const { response } = await $api.post("user", model);

    if (response?.status === 201) {
      useModalStore().openModal(null);
      await initEmployers();
    }
  };

  const initEmployers = async () => {
    employers.value = (await $api.get("user")).data?.data ?? [];
  };

  return { employers, addEmployee, initEmployers };
};
