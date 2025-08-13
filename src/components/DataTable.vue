<template>
  <n-data-table
    :columns="columns"
    :data="items"
    :sorter="sorter"
    :scroll-x="true"
    :bordered="true"
    :single-column-sort="false"
    :pagination="false"
  />
</template>

<script setup>
import { defineProps, computed } from 'vue'
import { NDataTable } from 'naive-ui'

const props = defineProps({
  items: {
    type: Array,
    default: () => [],
  },
  columns: {
    type: Array,
    default: () => [],
  },
  sortState: {
    type: Array,
    default: () => [],
  },
})

const sorter = computed(() => {
  const obj = {}
  props.sortState.forEach((s) => {
    obj[s.key] = s.order
  })
  return obj
})
</script>
