<script setup>
import { defineProps } from "vue";

defineProps({
  id: Number,
  name: String,
  status: String,
  price: Number,
});
</script>

<template>
  <article>
    <h2>Столик №{{ id }}</h2>
    <p>Официант: {{ name }}</p>
    <p class="fired">Статус: {{ status }}</p>
    <p>Цена: {{ price }}</p>
    <button class="approve_button">Управление</button>
  </article>
</template>

<style scoped lang="scss"></style>
