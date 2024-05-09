<template>
  <div class="flex items-center gap-2" data-test="progressBar">
    <div class="bg-slate-200 h-5 rounded w-full">
      <div
        :style="progressWidth"
        class="h-full rounded bg-blue-400 animate-[loadingSlide_1s_linear] duration-300"
        data-test="progressBarValueBar"
      ></div>
    </div>
    <div v-if="props.displayValue" data-test="progressBarValue">{{ props.value }}%</div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(
  defineProps<{
    value: number
    displayValue?: boolean
  }>(),
  {
    value: 0,
    displayValue: false
  }
)

const progressWidth = computed(() => {
  return {
    maxWidth: `${props.value}%`
  }
})
</script>
