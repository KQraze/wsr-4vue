<script setup>
import { defineProps } from "vue";

defineProps({
  id: Number,
  start: [String, Date],
  end: [String, Date],
  active: String,
});
</script>

<template>
  <article>
    <h2>Смена №{{ id }}</h2>
    <p>Начало смены в {{ start }}</p>
    <p>Конец смены в {{ end }}</p>
    <p class="fired">Статус: {{ active ? "Открыта" : "Закрыта" }}</p>
    <button class="approve_button">Управление</button>
  </article>
</template>

<style scoped lang="scss"></style>
