<template>
  <div
    :style="ctaButtonStyle"
    class="cursor-pointer w-fit flex gap-2 items-center justify-center group"
    :class="{
      'rounded-lg px-4 py-2 hover:bg-[linear-gradient(rgb(0_0_0/20%)_0_0);] text-center':
        !isTransparent
    }"
    @click="handleClick"
  >
    {{ props.label }}
    <FontAwesomeIcon
      v-if="props.icon"
      class="group-hover:translate-x-2 transition-all"
      :icon="props.icon"
    />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { getTxtColor, getBgColor } from '@/utils/utils'
import type { ThemeColor } from '@/utils/types'
import type { IconName } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
const props = withDefaults(
  defineProps<{
    name: string
    label: string
    bgColor?: `#${string}`
    color?: `#${string}`
    themeColor?: ThemeColor
    icon?: IconName
    type?: 'default' | 'transparent'
  }>(),
  {
    bgColor: undefined,
    color: undefined,
    themeColor: undefined,
    icon: undefined,
    type: 'default'
  }
)

const emits = defineEmits(['click'])

/** COMPUTED */
const ctaButtonStyle = computed(() => {
  const color = getTxtColor(props.color, props.themeColor)
  return isTransparent.value
    ? { color: color }
    : {
        color: color,
        backgroundColor: getBgColor(props.bgColor, props.themeColor)
      }
})

const isTransparent = computed(() => props.type === 'transparent')

/** METHODS */
const handleClick = () => emits('click', props.name)
</script>
