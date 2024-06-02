<template>
  <div
    :style="ctaSectionStyle"
    class="cTASection px-10 py-5 sm:py-10 text-center gap-5 flex flex-col"
  >
    <div v-if="props.title" class="cTASection_title text-4xl font-semibold">
      {{ props.title }}
    </div>
    <div v-if="props.subTitle" class="cTASection_subTitle">{{ props.subTitle }}</div>
    <div
      v-if="props.ctaButtons && props.ctaButtons.length > 0"
      class="cTASection_ctaButtons flex items-center justify-center gap-3 sm:flex-row flex-col"
    >
      <CTAButton
        v-for="(ctaButton, idx) in props.ctaButtons"
        :key="`ctaButton_${idx}`"
        v-bind="ctaButton"
        class="cTASection_ctaButton sm:w-auto w-full"
        @click="handleClickCTA"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { getTxtColor, getBgColor } from '@/utils/utils'
import type { ThemeColor, CTAButtonType } from '@/utils/types'
import CTAButton from '@/commons/CTAButton.vue'
const props = withDefaults(
  defineProps<{
    title?: string
    subTitle?: string
    ctaButtons?: CTAButtonType[]
    bgColor?: `#${string}`
    color?: `#${string}`
    themeColor?: ThemeColor
  }>(),
  {
    title: undefined,
    subTitle: undefined,
    ctaButtons: () => [],
    bgColor: undefined,
    color: undefined,
    themeColor: undefined
  }
)

const emits = defineEmits(['clickCtaButton'])
/** COMPUTED */
const ctaSectionStyle = computed(() => ({
  color: getTxtColor(props.color, props.themeColor),
  backgroundColor: getBgColor(props.bgColor, props.themeColor)
}))

/** METHODS */
const handleClickCTA = (buttonName: string) => emits('clickCtaButton', buttonName)
</script>
