<template>
  <div
    :style="ctaButtonStyle"
    class="px-4 py-2 rounded-lg cursor-pointer w-fit hover:bg-[linear-gradient(rgb(0_0_0/20%)_0_0);]"
    @click="handleClick"
  >
    {{ props.label }}
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { getTxtColor, getBgColor } from '@/utils/utils'
import type { ThemeColor } from '@/utils/types'
const props = withDefaults(
  defineProps<{
    name: string
    label: string
    bgColor?: `#${string}`
    color?: `#${string}`
    themeColor?: ThemeColor
  }>(),
  {
    bgColor: undefined,
    color: undefined,
    themeColor: undefined
  }
)

const emits = defineEmits(['click'])

/** COMPUTED */
const ctaButtonStyle = computed(() => ({
  color: getTxtColor(props.color, props.themeColor),
  backgroundColor: getBgColor(props.bgColor, props.themeColor)
}))

/** METHODS */
const handleClick = () => emits('click', props.name)
</script>
