<script setup>
import { defineProps } from "vue";

defineProps({
  id: Number,
  table: String,
  shift_workers: String,
  status: String,
  price: Number,
});
</script>

<template>
  <article>
    <h2>{{ table }}</h2>
    <p>Официант: {{ shift_workers }}</p>
    <p class="fired">Статус: {{ status }}</p>
    <p>Цена: {{ price }}</p>
    <button class="approve_button">Управление</button>
  </article>
</template>

<style scoped lang="scss"></style>
