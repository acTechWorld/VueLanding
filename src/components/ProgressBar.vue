<template>
  <div class="flex items-center gap-2" data-test="progressBar">
    <div class="h-5 rounded w-full" :style="progressBarContainerStyle">
      <div
        :style="progressBarStyle"
        class="h-full rounded animate-[loadingSlide_1s_linear] duration-300"
        data-test="progressBarValueBar"
      ></div>
    </div>
    <div v-if="props.displayValue" data-test="progressBarValue">{{ props.value }}%</div>
  </div>
</template>

<script setup lang="ts">
import type { ThemeColor } from '@/utils/types'
import { getBgColor, hexToRgb } from '@/utils/utils'
import { computed } from 'vue'

const props = withDefaults(
  defineProps<{
    value: number
    displayValue?: boolean
    bgColor?: `#${string}`
    themeColor?: ThemeColor
  }>(),
  {
    value: 0,
    displayValue: false,
    bgColor: undefined,
    themeColor: undefined
  }
)
const bgColor = computed(() => getBgColor(props.bgColor, props.themeColor))
const progressBarStyle = computed(() => {
  return {
    maxWidth: `${props.value}%`,
    backgroundColor: bgColor.value
  }
})
const progressBarContainerStyle = computed(() => {
  const rgbBgColor = hexToRgb(bgColor.value)
  return {
    backgroundColor: `rgba(${rgbBgColor}, .2)`
  }
})
</script>
