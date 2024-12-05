<script setup>
import { useStore } from "vuex";
import { reactive } from "vue";

const store = useStore();

const model = reactive({
  login: "",
  password: "",
});

const login = async () => {
  await store.dispatch("loginUser", { ...model, role: "admin" });
  await store.dispatch("openModal", null);
};
</script>

<template>
  <form @submit.prevent="login">
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
      <button class="cancel_button" type="button">Отмена</button>
    </div>
  </form>
</template>

<style scoped lang="scss"></style>
