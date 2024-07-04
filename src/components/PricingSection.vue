<template>
  <div class="pricingSection">
    <CTASection
      v-if="hasCTASection"
      v-bind="props.topSection"
      :class="{
        'sm:pb-20': hasPricings
      }"
      class="pricingSection_ctaSection"
      @click-cta-button="handleClickTopSectionCTAButton"
    />
    <div
      v-if="hasPricings"
      class="pricingSection_pricings flex flex-col sm:flex-row gap-4 justify-center p-4"
      :style="bottomStyle"
    >
      <div
        v-for="(pricing, idx) in props.bottomSection?.pricings"
        :key="`pricing_${idx}`"
        class="pricingSection_pricing sm:w-[300px] p-5 text-center cursor-pointer shadow-lg rounded-lg border"
        :style="pricingStyle(pricing)"
        :class="{ 'sm:-mt-14': hasCTASection }"
        @click="handleClickPricing(pricing)"
      >
        <div class="pricingSection_pricingTop mb-4 flex flex-col gap-3">
          <div
            v-if="pricing.type"
            class="pricingSection_pricingType border rounded-full w-fit px-3 self-center mb-2"
          >
            {{ pricing.type }}
          </div>
          <div class="pricingSection_pricingAmount text-4xl font-semibold">
            {{ getPricing(pricing.amount, pricing.currency, pricing.frequency) }}
          </div>
          <div v-if="pricing.description" class="pricingSection_pricingDescription">
            {{ pricing.description }}
          </div>
          <div
            v-if="pricing.ctaButtons && pricing.ctaButtons.length > 0"
            class="pricingSection_pricingCtaButtons flex flex-col gap-2"
          >
            <CTAButton
              v-for="(ctaButton, idxCtaButton) in pricing.ctaButtons"
              :key="`pricing_${idx}_ctaButton_${idxCtaButton}`"
              v-bind="ctaButton"
              class="pricingSection_pricingCtaButton w-full"
              @click="(buttonName) => handleClickPricingCTAButton(pricing, buttonName)"
            />
          </div>
        </div>
        <div
          v-if="pricing.features && pricing.features.length > 0"
          class="pricingSection_pricingFeatures pt-4 border-t border-[inherit] text-left"
        >
          <div
            v-for="(feature, idxFeature) in pricing.features"
            :key="`pricing_${idx}_feature_${idxFeature}`"
            class="pricingSection_pricingFeature flex gap-2 items-center"
          >
            <FontAwesomeIcon icon="check" />
            {{ feature }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import CTASection from '@/components/CTASection.vue'
import CTAButton from '@/commons/CTAButton.vue'
import { computed } from 'vue'
import type { Pricing, PricingSectionType } from '@/types/types'
import { getBgColor, getTxtColor, hexToRgb } from '@/utils/utils'
const props = withDefaults(defineProps<PricingSectionType>(), {
  topSection: undefined,
  bottomSection: undefined
})

const emits = defineEmits(['clickTopSectionCtaButton', 'clickPricingCtaButton', 'clickPricing'])

/** COMUTED */
const hasCTASection = computed(
  () =>
    props.topSection &&
    (props.topSection.title || props.topSection.subtitle || props.topSection.ctaButtons)
)

const hasPricings = computed(
  () => props.bottomSection?.pricings && props.bottomSection?.pricings.length > 0
)

const bottomStyle = computed(() => ({
  backgroundColor: getBgColor(props.bottomSection?.bgColor, props.bottomSection?.themeColor)
}))

/** METHODS */
const getPricing = (amount: number, currency?: string, frequency?: string) => {
  return `${amount}${currency || '$'}/${frequency || 'year'}`
}
const pricingStyle = (pricing: Pricing) => {
  const color = getTxtColor(pricing.color, pricing.themeColor)
  return {
    color: color,
    backgroundColor: getBgColor(pricing.bgColor, pricing.themeColor),
    borderColor: `rgba(${hexToRgb(color)}, .5)`
  }
}
const handleClickTopSectionCTAButton = (buttonName: string) =>
  emits('clickTopSectionCtaButton', buttonName)

const handleClickPricingCTAButton = (pricing: Pricing, buttonName: string) =>
  emits('clickPricingCtaButton', { pricing: pricing, buttonName: buttonName })

const handleClickPricing = (pricing: Pricing) => emits('clickPricing', pricing)
</script>
