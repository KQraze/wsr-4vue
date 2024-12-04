<script setup>
// eslint-disable-next-line no-undef
defineProps({
  shiftId: Number,
  shiftStartDate: [String, Date],
  shiftEndDate: [String, Date],
  status: String,
});
</script>

<template>
  <article>
    <h2>Смена №{{ shiftId }}</h2>
    <p>Начало смены в {{ shiftStartDate }}</p>
    <p>Конец смены в {{ shiftEndDate }}</p>
    <p class="fired">Статус: {{ status }}</p>
    <button class="approve_button">Управление</button>
  </article>
</template>

<style scoped lang="scss"></style>
