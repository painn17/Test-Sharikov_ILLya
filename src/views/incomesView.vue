<template>
  <GenericPage endpoint="incomes" :columns="incomes.columns" chartField="quantity" />
</template>

<script setup>
import GenericPage from '@/components/GenericPage.vue'
import { incomes } from '@/consts/constants.js'
</script>
