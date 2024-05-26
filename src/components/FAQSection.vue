<template>
  <div data-test="faqSection">
    <CTASection
      v-if="hasCTASection"
      v-bind="props.topSection"
      data-test="faqSection-ctaSection"
      @click-cta-button="handleClickTopSectionCTAButton"
    />
    <div
      v-if="props.bottomSection?.faqQuestions && props.bottomSection.faqQuestions.length > 0"
      class="max-w-[800px] mx-auto text-left"
    >
      <AccordionComponent
        v-for="(faqQuestion, idx) in props.bottomSection.faqQuestions"
        :key="`faqQuestion_${idx}`"
        class="border-b py-4"
        :style="bottomStyle"
        data-test="pricingSection-faqAccordion"
      >
        <template #header>
          <p
            v-safe-html="faqQuestion.question"
            class="text-lg font-semibold"
            data-test="pricingSection-faqQuestion"
          ></p>
        </template>
        <template #content>
          <p v-safe-html="faqQuestion.answer" data-test="pricingSection-faqAnswer"></p>
        </template>
      </AccordionComponent>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ThemeColor, CTAButtonType } from '@/utils/types'
import CTASection from '@/components/CTASection.vue'
import AccordionComponent from '@/commons/AccordionComponent.vue'
import { computed } from 'vue'
import { hexToRgb } from '@/utils/utils'

const props = withDefaults(
  defineProps<{
    topSection?: {
      title?: string
      subTitle?: string
      ctaButtons?: CTAButtonType[]
      bgColor?: `#${string}`
      color?: `#${string}`
      themeColor?: ThemeColor
    }
    bottomSection?: {
      color?: `#${string}`
      faqQuestions?: { question: string; answer: string }[]
    }
  }>(),
  {
    topSection: undefined,
    bottomSection: undefined
  }
)

const emits = defineEmits(['clickTopSectionCtaButton'])

/** COMPUTED */
const hasCTASection = computed(
  () =>
    props.topSection &&
    (props.topSection.title || props.topSection.subTitle || props.topSection.ctaButtons)
)

const bottomStyle = computed(() => ({
  color: props.bottomSection?.color || 'unset',
  borderColor: props.bottomSection?.color
    ? `rgba(${hexToRgb(props.bottomSection?.color)}, .3)`
    : `rgba(0,0,0,.3)`
}))

/** METHODS */
const handleClickTopSectionCTAButton = (buttonName: string) =>
  emits('clickTopSectionCtaButton', buttonName)
</script>
