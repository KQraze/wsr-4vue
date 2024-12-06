<script setup>
import { AppFooter, AppHeader, AppModal } from "@/components";
import { computed, onMounted } from "vue";
import { useStore } from "vuex";

const store = useStore();

// const isAdmin = computed(() => store.getters.isAdmin);
// const isWaiter = computed(() => store.getters.isWaiter);
// const isCook = computed(() => store.getters.isCook);
const openedModal = computed(() => store.getters.openedModal);

onMounted(() => store.dispatch("init"));
</script>

<template>
  <div class="wrapper">
    <AppModal v-if="openedModal" :modal="openedModal" />
    <AppHeader />
    <main>
      <RouterView />
    </main>
    <AppFooter />
  </div>
</template>

<style lang="scss"></style>
