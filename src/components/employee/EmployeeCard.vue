<script setup>
import { defineProps } from "vue";

defineProps({
  name: String,
  status: String,
  jobTitle: String,
});
</script>

<template>
  <article>
    <span>{{ name }}</span>
    <span>{{ status }}</span>
    <span>{{ jobTitle }}</span>
    <button>Подробнее</button>
  </article>
</template>

<style scoped lang="scss"></style>
