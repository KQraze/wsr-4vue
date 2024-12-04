<script setup>
import { ShiftCard } from "@/components/shift";
</script>

<template>
  <section class="shift">
    <button class="approve_button">Добавить смену</button>
    <ShiftCard
      v-for="i in 5"
      :key="i"
      :shift-id="i"
      shift-start-date="2021-09-19 08:00"
      shift-end-date="2021-09-19 18:00"
      status="Открыта"
    />
  </section>
</template>

<style scoped lang="scss"></style>
