<script setup></script>

<template>
  <form>
    <h2>Добавление заказа</h2>
    <div>
      <label for="work_shift_id">Работник</label>
      <input type="text" name="login" id="work_shift_id" />
    </div>
    <div>
      <label for="table_id">Номер столика</label>
      <input type="number" name="password" id="table_id" />
    </div>
    <div>
      <label for="number_of_person">Количество персон</label>
      <input type="number" name="password" id="number_of_person" />
    </div>
    <div>
      <button class="approve_button">Отправить</button>
      <button class="cancel_button">Отмена</button>
    </div>
  </form>
</template>

<style scoped lang="scss"></style>
