import { ref } from "vue";

const modals = ["auth", "shift", "order", "employee", "employee-show"];
const openedModal = ref(null);
const modalData = ref({});

export const useModalStore = () => {
  const openModal = (modalIndex, data = null) => {
    openedModal.value = modals[modalIndex] ?? null;
    modalData.value = data ?? {};
  };

  return { openedModal, modalData, openModal };
};
