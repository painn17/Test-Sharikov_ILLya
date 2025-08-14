<script setup>
import { ref, onMounted } from 'vue'
import FilterSection from './FilterSection.vue'
import ChartBlock from './ChartBlock.vue'
import DataTable from './DataTable.vue'
import { api } from '@/services/api'
import { normalizeItems } from '@/services/misc'

const props = defineProps({
  endpoint: { type: String, required: true },
  columns: { type: Array, required: true },
  sortState: { type: Array, required: true },
  chartField: { type: String, required: true },
})

const items = ref([])
const page = ref(1)
const lastPage = ref(null)
const selectedStartDate = ref(new Date().toISOString().slice(0, 10))
const selectedEndDate = ref(new Date().toISOString().slice(0, 10))
const selectedLimit = ref(50)
const loading = ref(false)

// Функция пагинации
const loadPage = async (pageNum = 1) => {
  if (loading.value) return
  if (lastPage.value !== null && pageNum > lastPage.value) return
  loading.value = true
  try {
    const res = await api.getInfo(
      selectedStartDate.value,
      selectedEndDate.value,
      pageNum,
      selectedLimit.value,
      props.endpoint,
    )
    if (res.status === 400) {
      items.value = []
      setTimeout(() => {
        selectedEndDate.value = new Date().toISOString().slice(0, 10)
        selectedStartDate.value = new Date().toISOString().slice(0, 10)
        loadPage(1)
      }, 1000)
      return null
    }

    const normalized = normalizeItems(res.data.data)
    if (pageNum === 1) items.value = normalized
    else items.value.push(...normalized)
    page.value = pageNum + 1

    lastPage.value = res.data.meta.last_page
  } catch (e) {
    console.error(e)
  } finally {
    loading.value = false
  }
}

const refreshData = () => {
  page.value = 1
  loadPage(1)
}

// Обработчик скролла
const handleScroll = (event) => {
  const element = event.target
  if (element.scrollTop + element.clientHeight >= element.scrollHeight - 10) {
    loadPage(page.value)
  }
}

onMounted(() => {
  loadPage(1)
})
</script>
<template>
  <div class="flex flex-col gap-6" v-if="items.length">
    <!-- Фильтрация таблицы -->
    <FilterSection
      v-model:selectedStartDate="selectedStartDate"
      v-model:selectedEndDate="selectedEndDate"
      v-model:selectedLimit="selectedLimit"
      :onDataChange="refreshData"
    />

    <!-- Таблица с пагинацией -->
    <div class="overflow-auto h-[500px]" @scroll="handleScroll">
      <DataTable :items="items" :columns="columns" />

      <div v-if="loading" class="text-center py-2">Загрузка...</div>
      <div class="text-center p-2 text-xl" v-if="lastPage !== null && page > lastPage">
        Больше нет данных
      </div>
    </div>

    <!-- График -->
    <ChartBlock :items="items" :chartField="chartField" :labelField="chartField" />
  </div>
  <div v-else class="alert-text flex justify-center">Данные не были загружены</div>
</template>
