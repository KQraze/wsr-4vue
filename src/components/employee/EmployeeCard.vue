<script setup>
import { defineProps, defineEmits } from "vue";

defineProps({
  name: String,
  status: String,
  group: String,
});

defineEmits(["set-modal-data"]);
</script>

<template>
  <article>
    <span>{{ name }}</span>
    <span>{{ status }}</span>
    <span>{{ group }}</span>
    <button>Подробнее</button>
  </article>
</template>

<style scoped lang="scss"></style>
