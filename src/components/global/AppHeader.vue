<script setup>
import { useRouter } from "vue-router";
import { useAccountStore, useModalStore } from "@/store";

const router = useRouter();

const { isAdmin, token, logout: logoutFn } = useAccountStore();
const { openModal } = useModalStore();

const logout = () => {
  logoutFn();
  router.push({ name: "home" });
};
</script>

<template>
  <header>
    <article>
      <img src="@/assets/logo.png" alt="logo" />
    </article>
    <nav>
      <template v-if="isAdmin">
        <router-link :to="{ name: 'employee' }" href="#">
          Сотрудники
        </router-link>
        <router-link :to="{ name: 'shift' }">Смены</router-link>
      </template>
      <template v-if="token">
        <router-link :to="{ name: 'orders' }">Заказы</router-link>
        <a href="#" class="cancel_button" @click="logout">Выход</a>
      </template>
      <a v-if="!token" href="#" class="approve_button" @click="openModal(0)">
        Вход
      </a>
    </nav>
  </header>
</template>

<style scoped lang="scss"></style>
