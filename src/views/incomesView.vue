<template>
  <GenericPage
    endpoint="incomes"
    :columns="stocks.columns"
    :sortState="stocks.sortState"
    chartField="price"
  />
</template>

<script setup>
import GenericPage from '@/components/GenericPage.vue'
import { stocks } from '@/consts/constants.js'
</script>
