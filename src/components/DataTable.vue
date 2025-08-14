<script setup>
import { defineProps, computed } from 'vue'
import { NDataTable } from 'naive-ui'

const props = defineProps({
  items: Array,
})

const autoColumns = computed(() => {
  if (!props.items?.length) return []
  return Object.keys(props.items[0]).map((key) => ({
    title: key,
    key,
    sorter: 'default',
  }))
})
</script>

<template>
  <n-data-table :columns="autoColumns" :data="items" :sorter="sorter" :bordered="true" />
</template>
