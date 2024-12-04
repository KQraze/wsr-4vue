<script setup></script>

<template>
  <form>
    <h2>Добавление смены</h2>
    <div>
      <label for="start">Начало</label>
      <input type="datetime-local" name="login" id="start" />
    </div>
    <div>
      <label for="end">Конец</label>
      <input type="datetime-local" name="password" id="end" />
    </div>
    <div>
      <button class="approve_button">Отправить</button>
      <button class="cancel_button">Отмена</button>
    </div>
  </form>
</template>

<style scoped lang="scss"></style>
