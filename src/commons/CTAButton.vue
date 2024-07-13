<template>
  <div
    :style="ctaButtonStyle"
    class="w-fit flex gap-2 items-center justify-center group"
    :class="[
      {
        'rounded-lg px-4 py-2 text-center': !isTransparent
      },
      props.disabled
        ? 'opacity-50'
        : 'cursor-pointer hover:bg-[linear-gradient(rgb(0_0_0/20%)_0_0);]'
    ]"
    @click.stop="handleClick"
  >
    {{ props.label }}
    <FontAwesomeIcon
      v-if="props.icon"
      class="transition-all"
      :class="{ 'group-hover:translate-x-2': !props.disabled }"
      :icon="props.icon"
    />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { getTxtColor, getBgColor } from '@/utils/utils'
import type { ThemeColor } from '@/types/types'
import type { IconName } from '@fortawesome/fontawesome-svg-core'
const props = withDefaults(
  defineProps<{
    name: string
    label: string
    bgColor?: `#${string}`
    color?: `#${string}`
    themeColor?: ThemeColor
    icon?: IconName
    type?: 'default' | 'transparent'
    disabled?: boolean
  }>(),
  {
    bgColor: undefined,
    color: undefined,
    themeColor: undefined,
    icon: undefined,
    type: 'default',
    disabled: false
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
