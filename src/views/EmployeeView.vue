<script setup>
import { EmployeeCard } from "@/components/employee";
</script>

<template>
  <section class="employees">
    <article>
      <span>Имя</span>
      <span>Статус</span>
      <span>Должность</span>
      <button>+</button>
    </article>
    <EmployeeCard
      v-for="i in 5"
      :key="i"
      name="Ariane"
      status="Работает"
      job-title="Официант"
    />
  </section>
</template>

<style scoped lang="scss"></style>
