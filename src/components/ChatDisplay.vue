<template>
  <div class="rounded w-full p-4" :style="chatStyle">
    <div
      v-if="props.loading"
      class="ml-4 animate-[loadingDots_1s_infinite_linear] before:animate-[loadingDotsBefore_1s_infinite_linear] after:animate-[loadingDotsAfter_1s_infinite_linear] rounded-[5px] h-[8px] w-[8px] before:h-[8px] before:w-[8px] before:rounded-[5px] before:-left-4 before:content-[''] before:top-0 before:absolute after:absolute after:content-[''] after:top-0 after:h-[8px] after:w-[8px] after:rounded-[5px] after:left-4 bg-[var(--bg-color-loading-dots)] before:bg-[var(--bg-color-loading-dots)] after:bg-[var(--bg-color-loading-dots)]"
      :style="loadingDotsStyle"
    ></div>
    <p v-else>{{ displayedText }}</p>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
const props = withDefaults(
  defineProps<{
    text?: string
    loading?: boolean
    textAnimated?: boolean
    bgColor?: `#${string}`
    color?: `#${string}`
  }>(),
  {
    text: '',
    loading: false,
    textAnimated: true,
    bgColor: '#4b5563',
    color: '#fff'
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
const chatStyle = computed(() => ({
  color: props.color,
  backgroundColor: props.bgColor
}))
const loadingDotsStyle = computed(() => ({
  '--bg-color-loading-dots': props.color
}))
</script>
