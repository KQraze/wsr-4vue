<script setup>
import { defineProps } from "vue";
import { EmployeeForm, AuthForm, OrderForm, ShiftForm } from "@/components";

defineProps({
  modal: String,
});
</script>

<template>
  <article class="modal">
    <EmployeeForm v-if="modal === 'employee'" />
    <AuthForm v-else-if="modal === 'auth'" />
    <OrderForm v-else-if="modal === 'order'" />
    <ShiftForm v-else-if="modal === 'shift'" />
  </article>
</template>

<style scoped lang="scss"></style>
