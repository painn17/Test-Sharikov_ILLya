<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <header class="mx-auto w-full container header-bg">
    <div class="flex gap-2 w-full justify-around rounded-full py-3 my-3 text-big">
      <!-- <RouterLink to="/" class="nav-link" active-class="nav-link-active">Home</RouterLink> -->
      <RouterLink to="/incomes" class="nav-link" active-class="nav-link-active">Incomes</RouterLink>
      <RouterLink to="/orders" class="nav-link" active-class="nav-link-active">Orders</RouterLink>
      <RouterLink to="/sales" class="nav-link" active-class="nav-link-active">Sales</RouterLink>
      <RouterLink to="/stocks" class="nav-link" active-class="nav-link-active">Stocks</RouterLink>
    </div>
  </header>
  <div class="mx-auto w-full min-h-screen container"><router-view></router-view></div>
</template>

<style scoped></style>
