<script setup>
import { ShiftCard } from "@/components/shift";
import { useShiftStore } from "@/store";
import { onMounted } from "vue";

const { shifts, initShifts } = useShiftStore();

onMounted(initShifts);
</script>

<template>
  <section class="shift">
    <button class="approve_button">Добавить смену</button>
    <ShiftCard v-for="shift in shifts" :key="shift" v-bind="shift" />
  </section>
</template>

<style scoped lang="scss"></style>
