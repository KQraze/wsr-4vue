<script setup>
import { OrderCard } from "@/components/order";
import { useOrderStore } from "@/store";
import { onMounted } from "vue";

const { orders, getOrders } = useOrderStore();

onMounted(getOrders);
</script>

<template>
  <section class="orders">
    <button class="approve_button">Принять заказ</button>
    <OrderCard v-for="order in orders" :key="order" v-bind="order" />
  </section>
</template>

<style scoped lang="scss"></style>
