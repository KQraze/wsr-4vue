<script setup>
import { AppFooter, AppHeader, AppModal } from "@/components";
import { init, useModalStore } from "@/store";
import { onMounted } from "vue";

const { openedModal } = useModalStore();

onMounted(() => init());
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
