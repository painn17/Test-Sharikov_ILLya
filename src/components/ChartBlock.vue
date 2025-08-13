<script setup>
import { computed } from 'vue'
import { Bar } from 'vue-chartjs'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

const props = defineProps({
  items: { type: Array, required: true },
  chartField: { type: String, required: true }, // название поля с данными
  labelField: { type: String, default: 'date' },
  position: { type: String, default: 'bottom' },
})

const chartData = computed(() => ({
  labels: props.items.map((item) => item[props.labelField]),
  datasets: [
    {
      label: props.labelField,
      data: props.items.map((item) => Number(item[props.chartField])),
      backgroundColor: '#42A5F5',
    },
  ],
}))

const chartOptions = { responsive: true, plugins: { legend: { position: props.position } } }
</script>

<template>
  <div>
    <Bar id="bar-chart" :data="chartData" :options="chartOptions" />
  </div>
</template>
