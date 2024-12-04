<script setup>
import { OrderCard } from "@/components/order";
</script>

<template>
  <section class="orders">
    <button class="approve_button">Принять заказ</button>
    <OrderCard
      v-for="i in 6"
      :key="i"
      :id="i"
      name="John"
      price="248"
      status="Принят"
    />
  </section>
</template>

<style scoped lang="scss"></style>
