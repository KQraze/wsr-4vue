<script setup>
import { useStore } from "vuex";
import { computed } from "vue";
import { useRouter } from "vue-router";

const store = useStore();
const router = useRouter();

const isAdmin = computed(() => store.getters.isAdmin);
const token = computed(() => store.getters.token);

const openModal = () => store.dispatch("openModal", 0);
const logout = () => {
  store.dispatch("logoutUser");
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
      <a v-if="!token" href="#" class="approve_button" @click="openModal">
        Вход
      </a>
    </nav>
  </header>
</template>

<style scoped lang="scss"></style>
