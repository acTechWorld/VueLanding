<template>
  <div>
    <CTASection
      v-if="hasCTASection"
      v-bind="props.topSection"
      :class="{
        'sm:pb-20': hasPricings
      }"
    />
    <div
      v-if="hasPricings"
      class="flex flex-col sm:flex-row gap-4 justify-center p-4"
      :style="bottomStyle"
    >
      <div
        v-for="(pricing, idx) in props.bottomSection?.pricings"
        :key="`pricing_${idx}`"
        class="sm:w-[300px] p-5 text-center cursor-pointer shadow-lg rounded-lg border"
        :style="pricingStyle(pricing)"
        :class="{ 'sm:-mt-14': hasCTASection }"
      >
        <div class="mb-4 flex flex-col gap-3">
          <div v-if="pricing.type" class="border rounded-full w-fit px-3 self-center mb-2">
            {{ pricing.type }}
          </div>
          <div class="text-4xl font-semibold">
            {{ getPricing(pricing.amount, pricing.currency, pricing.frequency) }}
          </div>
          <div v-if="pricing.description">{{ pricing.description }}</div>
          <div
            v-if="pricing.ctaButtons && pricing.ctaButtons.length > 0"
            class="flex flex-col gap-2"
          >
            <CTAButton
              v-for="(ctaButton, idxCtaButton) in pricing.ctaButtons"
              :key="`pricing_${idx}_ctaButton_${idxCtaButton}`"
              v-bind="ctaButton"
              class="w-full"
            />
          </div>
        </div>
        <div
          v-if="pricing.features && pricing.features.length > 0"
          class="pt-4 border-t border-[inherit] text-left"
        >
          <div
            v-for="(feature, idxFeature) in pricing.features"
            :key="`pricing_${idx}_feature_${idxFeature}`"
            class="flex gap-2 items-center"
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
import type { ThemeColor, Pricing, CTAButtonType } from '@/utils/types'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { getBgColor, getTxtColor, hexToRgb } from '@/utils/utils'
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
      bgColor?: `#${string}`
      themeColor?: ThemeColor
      pricings?: Pricing[]
    }
  }>(),
  {
    topSection: undefined,
    bottomSection: undefined
  }
)

/** COMUTED */
const hasCTASection = computed(
  () =>
    props.topSection &&
    (props.topSection.title || props.topSection.subTitle || props.topSection.ctaButtons)
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
</script>
