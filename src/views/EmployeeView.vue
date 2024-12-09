<script setup>
import { EmployeeCard } from "@/components/employee";
import { useAccountStore, useEmployeeStore, useModalStore } from "@/store";
import { onMounted } from "vue";

const { isAdmin } = useAccountStore();
const { employers, initEmployers } = useEmployeeStore();
const { openModal } = useModalStore();

onMounted(initEmployers);
</script>

<template>
  <section class="employees">
    <article>
      <span>Имя</span>
      <span>Статус</span>
      <span>Должность</span>
      <button v-if="isAdmin" @click="openModal(3)">+</button>
    </article>
    <EmployeeCard
      v-for="employee in employers"
      :key="employee"
      v-bind="employee"
      @set-modal-data="openModal(4, employee)"
    />
  </section>
</template>

<style scoped lang="scss"></style>
