<script setup>
import { reactive } from "vue";
import { useEmployeeStore, useModalStore } from "@/store";

const { addEmployee } = useEmployeeStore();
const { openModal } = useModalStore();

const model = reactive({
  name: "",
  login: "",
  password: "",
  role_id: "nothing",
});
</script>

<template>
  <form enctype="multipart/form-data" @submit.prevent="addEmployee(model)">
    <h2>Добавление нового сотрудника</h2>
    <div>
      <label for="name">Имя</label>
      <input v-model="model.name" type="text" name="name" id="name" />
    </div>
    <div>
      <label for="login">Логин</label>
      <input v-model="model.login" type="text" name="login" id="login" />
    </div>
    <div>
      <label for="password">Пароль</label>
      <input
        v-model="model.password"
        type="password"
        name="password"
        id="password"
      />
    </div>
    <div>
      <label for="photo_file" class="photo_input">Фото</label>
      <input type="file" name="photo" id="photo_file" />
    </div>
    <div>
      <label for="role">Роль</label>
      <select v-model="model.role_id" name="role" id="role">
        <option value="nothing" selected disabled>Выберите роль:</option>
        <option value="1">Администратор</option>
        <option value="2">Официант</option>
        <option value="3">Повар</option>
      </select>
    </div>
    <div>
      <button class="approve_button" type="submit">Отправить</button>
      <button class="cancel_button" @click="openModal(null)" type="button">
        Отмена
      </button>
    </div>
  </form>
</template>

<style scoped lang="scss"></style>
