<template>
  <div
    :style="ctaSectionStyle"
    class="px-10 py-5 sm:py-10 text-center gap-5 flex flex-col"
    data-test="cTASection"
  >
    <div v-if="props.title" class="text-4xl font-semibold" data-test="cTASection-title">
      {{ props.title }}
    </div>
    <div v-if="props.subTitle" data-test="cTASection-subTitle">{{ props.subTitle }}</div>
    <div
      v-if="props.ctaButtons && props.ctaButtons.length > 0"
      class="flex items-center justify-center gap-3 sm:flex-row flex-col"
      data-test="cTASection-ctaButtons"
    >
      <CTAButton
        v-for="(ctaButton, idx) in props.ctaButtons"
        :key="`ctaButton_${idx}`"
        v-bind="ctaButton"
        class="sm:w-auto w-full"
        data-test="cTASection-ctaButton"
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

const emits = defineEmits(['clickCTAButton'])
/** COMPUTED */
const ctaSectionStyle = computed(() => ({
  color: getTxtColor(props.color, props.themeColor),
  backgroundColor: getBgColor(props.bgColor, props.themeColor)
}))

/** METHODS */
const handleClickCTA = (buttonName: string) => emits('clickCTAButton', buttonName)
</script>
