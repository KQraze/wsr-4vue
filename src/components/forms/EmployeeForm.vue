<script setup></script>

<template>
  <form>
    <h2>Добавление нового сотрудника</h2>
    <div>
      <label for="name">Имя</label>
      <input type="text" name="name" id="name" />
    </div>
    <div>
      <label for="login">Логин</label>
      <input type="text" name="login" id="login" />
    </div>
    <div>
      <label for="password">Пароль</label>
      <input type="password" name="password" id="password" />
    </div>
    <div>
      <label for="photo_file" class="photo_input">Фото</label>
      <input type="file" name="photo" id="photo_file" />
    </div>
    <div>
      <label for="role">Роль</label>
      <select name="role" id="role">
        <option value="nothing" selected disabled>Выберите роль:</option>
        <option value="1">Администратор</option>
        <option value="2">Официант</option>
        <option value="3">Повар</option>
      </select>
    </div>
    <div>
      <button class="approve_button">Отправить</button>
      <button class="cancel_button">Отмена</button>
    </div>
  </form>
</template>

<style scoped lang="scss"></style>
