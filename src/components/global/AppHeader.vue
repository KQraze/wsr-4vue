<script setup>
import { useStore } from "vuex";
import { computed } from "vue";

const store = useStore();

const isAdmin = computed(() => store.getters.isAdmin);
const token = computed(() => store.getters.token);

const openModal = () => store.dispatch("openModal", 0);
</script>

<template>
  <header>
    <article>
      <img src="@/assets/logo.png" alt="logo" />
    </article>
    <nav>
      <template v-if="isAdmin">
        <a href="#">Сотрудники</a>
        <a href="#">Смены</a>
      </template>
      <template v-if="token">
        <router-link :to="{ name: 'orders' }">Заказы</router-link>
        <a href="#" class="cancel_button">Выход</a>
      </template>
      <a v-if="!token" href="#" class="approve_button" @click="openModal">
        Вход
      </a>
    </nav>
  </header>
</template>

<style scoped lang="scss"></style>
