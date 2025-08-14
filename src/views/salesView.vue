<template>
  <GenericPage endpoint="sales" :columns="sales.columns" chart-field="total_price" />
</template>

<script setup>
import GenericPage from '@/components/GenericPage.vue'
import { sales } from '@/consts/constants.js'
</script>
