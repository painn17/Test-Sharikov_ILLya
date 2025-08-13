<script setup>
const selectedEndDate = defineModel('selectedEndDate')
const selectedStartDate = defineModel('selectedStartDate')
const selectedLimit = defineModel('selectedLimit')

const props = defineProps({
  onDataChange: { type: Function, required: true },
})

function handleChange() {
  props.onDataChange()
}
</script>

<template>
  <section class="flex gap-4 w-fit text-lg text-white filter-section">
    <div>
      Дата до:
      <input
        type="date"
        class="border-2 border-black rounded-lg px-2"
        v-model="selectedEndDate"
        @change="handleChange"
      />
    </div>
    <div>
      Дата с:
      <input
        type="date"
        class="border-2 border-black rounded-lg px-2"
        v-model="selectedStartDate"
        @change="handleChange"
      />
    </div>
    <div>
      Данных на страницу:
      <input
        type="number"
        class="border-2 border-black rounded-lg max-w-20 px-2"
        v-model="selectedLimit"
        @change="handleChange"
      />
    </div>
  </section>
</template>
