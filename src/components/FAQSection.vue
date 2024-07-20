<template>
  <div class="faqSection">
    <CTASection
      v-if="hasCTASection"
      v-bind="props.topSection"
      class="faqSection_ctaSection"
      @click-cta-button="handleClickTopSectionCTAButton"
    />
    <div
      v-if="props.bottomSection?.faqQuestions && props.bottomSection.faqQuestions.length > 0"
      class="faqSection_accordionContainer w-full text-left pb-10"
      :style="bottomSectionStyle"
    >
      <AccordionComponent
        v-for="(faqQuestion, idx) in props.bottomSection.faqQuestions"
        :key="`faqQuestion_${idx}`"
        class="faqSection_accordion border-b py-4 max-w-[800px] mx-auto"
      >
        <template #header>
          <p
            v-safe-html="faqQuestion.question"
            class="faqSection_accordionQuestion text-lg font-semibold"
          ></p>
        </template>
        <template #content>
          <p v-safe-html="faqQuestion.answer" class="faqSection_accordionAnswer px-4"></p>
        </template>
      </AccordionComponent>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { FAQSectionType } from '@/types/types'
import CTASection from '@/components/CTASection.vue'
import AccordionComponent from '@/commons/AccordionComponent.vue'
import { computed } from 'vue'
import { getBgColor, getTxtColor, hexToRgb } from '@/utils/utils'

const props = withDefaults(defineProps<FAQSectionType>(), {
  topSection: undefined,
  bottomSection: undefined
})

const emits = defineEmits(['clickTopSectionCtaButton'])

/** COMPUTED */
const hasCTASection = computed(
  () =>
    props.topSection &&
    (props.topSection.title || props.topSection.subtitle || props.topSection.ctaButtons)
)

const bottomSectionStyle = computed(() => ({
  color: getTxtColor(props.bottomSection?.color, props.bottomSection?.themeColor),
  backgroundColor: getBgColor(props.bottomSection?.bgColor, props.bottomSection?.themeColor),
  borderColor: props.bottomSection?.color
    ? `rgba(${hexToRgb(props.bottomSection?.color)}, .3)`
    : `rgba(0,0,0,.3)`
}))

/** METHODS */
const handleClickTopSectionCTAButton = (buttonName: string) =>
  emits('clickTopSectionCtaButton', buttonName)
</script>
