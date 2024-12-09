<script setup>
import { reactive } from "vue";
import { useAccountStore, useModalStore } from "@/store";

const { login } = useAccountStore();
const { openModal } = useModalStore();

const model = reactive({
  login: "",
  password: "",
});
</script>

<template>
  <form @submit.prevent="login(model)">
    <h2>Авторизация</h2>
    <div>
      <label for="login_enter">Логин</label>
      <input v-model="model.login" type="text" name="login" id="login_enter" />
    </div>
    <div>
      <label for="password_enter">Пароль</label>
      <input
        v-model="model.password"
        type="password"
        name="password"
        id="password_enter"
      />
    </div>
    <div>
      <button
        class="approve_button"
        :disabled="!model.login || !model.password"
      >
        Отправить
      </button>
      <button class="cancel_button" type="button" @click="openModal(null)">
        Отмена
      </button>
    </div>
  </form>
</template>

<style scoped lang="scss"></style>
