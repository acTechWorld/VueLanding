<template>
  <div class="rounded w-full p-4" :style="chatStyle" data-test="chatDisplay">
    <div
      v-if="props.loading"
      class="ml-4 animate-[loadingDots_1s_infinite_linear] before:animate-[loadingDotsBefore_1s_infinite_linear] after:animate-[loadingDotsAfter_1s_infinite_linear] rounded-[5px] h-[8px] w-[8px] before:h-[8px] before:w-[8px] before:rounded-[5px] before:-left-4 before:content-[''] before:top-0 before:absolute after:absolute after:content-[''] after:top-0 after:h-[8px] after:w-[8px] after:rounded-[5px] after:left-4 bg-[var(--bg-color-loading-dots)] before:bg-[var(--bg-color-loading-dots)] after:bg-[var(--bg-color-loading-dots)]"
      :style="loadingDotsStyle"
      data-test="chatDisplayLoader"
    ></div>
    <p v-else data-test="chatDisplayText">{{ displayedText }}</p>
  </div>
</template>

<script setup lang="ts">
import type { ThemeColor } from '@/utils/types'
import { getTxtColor, getBgColor } from '@/utils/utils'
import { computed, ref } from 'vue'
const props = withDefaults(
  defineProps<{
    text?: string
    loading?: boolean
    textAnimated?: boolean
    bgColor?: `#${string}`
    color?: `#${string}`
    themeColor?: ThemeColor
  }>(),
  {
    text: '',
    loading: false,
    textAnimated: true,
    bgColor: undefined,
    color: undefined,
    themeColor: undefined
  }
)
const countdownLetters = ref(0)

const intervalDisplayLetters = setInterval(() => {
  countdownLetters.value += 2
  if (countdownLetters.value >= props.text.length) clearInterval(intervalDisplayLetters)
}, 10)

const displayedText = computed(() =>
  props.textAnimated ? props.text.slice(0, countdownLetters.value) : props.text
)
const color = computed(() => getTxtColor(props.color, props.themeColor))

const chatStyle = computed(() => ({
  color: color.value,
  backgroundColor: getBgColor(props.bgColor, props.themeColor)
}))
const loadingDotsStyle = computed(() => ({
  '--bg-color-loading-dots': color.value
}))
</script>
