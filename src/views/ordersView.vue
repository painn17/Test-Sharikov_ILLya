<template>
  <GenericPage
    endpoint="orders"
    :columns="stocks.columns"
    :sortState="stocks.sortState"
    chart-field="price"
  />
</template>

<script setup>
import GenericPage from '@/components/GenericPage.vue'
import { stocks } from '@/consts/constants.js'
</script>
