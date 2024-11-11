<template>
  <div class="pricing_section flex flex-col">
    <CTASection
      v-if="hasCTASection"
      v-bind="props.topSection"
      class="pricingSection_ctaSection"
      @click-cta-button="handleClickTopSectionCTAButton"
    />
    <div
      v-if="hasPricings || hasFeatures"
      class="pricingSection_pricings px-5"
      :style="bottomStyle"
    >
      <div
        class="pricingSection_pricings_desktop md:flex flex-col w-full p-6 pt-10 overflow-scroll hidden"
      >
        <div
          v-if="hasPricings"
          class="pricingSection_pricings_header grid w-max mx-auto"
          :style="styleTableColsNb"
        >
          <div class="sm:w-[300px]"></div>
          <div
            v-for="pricing in props.bottomSection?.pricings"
            :key="`pricing_${pricing.id}`"
            class="pricingSection_pricing sm:w-[300px] p-5 text-center rounded-t-lg relative"
            :class="[
              {
                'bg-[linear-gradient(rgb(0_0_0/10%)_0_0);]':
                  princingHoverId === pricing.id && !pricing.disabled
              }
            ]"
            :style="pricingStyle(pricing)"
            @click="handleClickPricing(pricing.id)"
            @mouseenter="princingHoverId = pricing.id"
            @mouseleave="princingHoverId = null"
          >
            <div
              v-if="pricing.disabled && pricing.disabledText"
              class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full font-bold px-2 text-lg"
            >
              {{ pricing.disabledText }}
            </div>
            <div
              class="pricingSection_pricingTop mb-4 flex flex-col gap-3"
              :class="pricing.disabled ? 'opacity-20' : 'cursor-pointer'"
            >
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
              <CTAButton
                v-if="pricing.ctaButton"
                v-bind="pricing.ctaButton"
                :disabled="pricing.disabled"
                class="pricingSection_pricingCtaButton w-full"
                @click="handleClickPricing(pricing.id)"
              />
            </div>
          </div>
        </div>
        <div
          v-if="hasFeatures"
          class="pricingSection_pricingFeatures_grid grid mx-auto"
          :style="styleTableRowsNb"
        >
          <div
            v-for="(feature, idx) in displayedFeaturesValues"
            :key="`feature_${idx}`"
            class="pricingSection_pricingFeature_row grid h-[60px] items-center w-max"
            :class="[
              {
                'rounded-tl-lg': idx === 0,
                'rounded-bl-lg': idx === displayedFeaturesValues.length - 1,
                'rounded-br-lg':
                  idx === displayedFeaturesValues.length - 1 &&
                  props.bottomSection.hideBottomPricingCTA
              }
            ]"
            :style="[styleTableColsNb, getFeatureStyle(idx)]"
          >
            <div class="pricingSection_pricingFeature_label pl-5 sm:w-[300px]">
              {{ feature.label }}
            </div>
            <div
              v-for="pricingValue in feature.pricingValues"
              :key="`feature_${idx}_pricing_${pricingValue.id}`"
              class="pricingSection_pricingFeature_value sm:w-[300px] border-l border-[#000] h-full justify-center flex items-center"
              :class="[
                {
                  'bg-[linear-gradient(rgb(0_0_0/10%)_0_0);]':
                    princingHoverId === pricingValue.id && !isPricingDisabled(pricingValue.id)
                },
                isPricingDisabled(pricingValue.id) ? 'opacity-20' : 'cursor-pointer'
              ]"
              @click="handleClickPricing(pricingValue.id)"
              @mouseenter="princingHoverId = pricingValue.id"
              @mouseleave="princingHoverId = null"
            >
              <FontAwesomeIcon
                v-if="pricingValue.value === true"
                class="text-[#269126]"
                icon="fa-regular fa-circle-check"
                size="lg"
              />
              <span v-else>{{ pricingValue.value }}</span>
            </div>
          </div>
        </div>
        <div
          v-if="hasPricings && !props.bottomSection?.hideBottomPricingCTA"
          class="pricingSection_pricings_bottom grid w-max mx-auto"
          :style="styleTableColsNb"
        >
          <div class="sm:w-[300px]"></div>
          <div
            v-for="pricing in props.bottomSection?.pricings"
            :key="`bottom_pricing_${pricing.id}`"
            class="pricingSection_pricingBottom_ctaButton sm:w-[300px] rounded-b-lg p-5"
            :class="[
              {
                'bg-[linear-gradient(rgb(0_0_0/10%)_0_0);]':
                  princingHoverId === pricing.id && !pricing.disabled
              },
              pricing.disabled ? 'opacity-20' : 'cursor-pointer'
            ]"
            :style="pricingStyle(pricing)"
            @click="handleClickPricing(pricing.id)"
            @mouseenter="princingHoverId = pricing.id"
            @mouseleave="princingHoverId = null"
          >
            <CTAButton
              v-if="pricing.ctaButton"
              v-bind="pricing.ctaButton"
              :disabled="pricing.disabled"
              class="pricingSection_pricingCtaButton w-full"
              @click="handleClickPricing(pricing.id)"
            />
          </div>
        </div>
      </div>
      <div class="pricingSection_pricings_mobile md:hidden flex flex-col items-center gap-10 py-10">
        <div
          v-for="pricing in props.bottomSection?.pricings"
          :key="`pricing_${pricing.id}`"
          class="pricingSection_pricing_mobile w-full sm:w-[500px] p-5 rounded-lg flex flex-col shadow-lg relative"
          :style="pricingStyle(pricing)"
          @click="handleClickPricing(pricing.id)"
        >
          <div
            v-if="pricing.disabled && pricing.disabledText"
            class="absolute top-[20%] text-center left-1/2 -translate-x-1/2 w-4/5 font-bold px-5 text-lg"
          >
            {{ pricing.disabledText }}
          </div>
          <div :class="pricing.disabled ? 'opacity-20' : 'cursor-pointer'">
            <div class="pricingSection_pricingTop_mobile mb-4 flex flex-col gap-3 text-center">
              <div
                v-if="pricing.type"
                class="pricingSection_pricingType_mobile border rounded-full w-fit px-3 self-center mb-2"
              >
                {{ pricing.type }}
              </div>
              <div class="pricingSection_pricingAmount_mobile text-4xl font-semibold">
                {{ getPricing(pricing.amount, pricing.currency, pricing.frequency) }}
              </div>
              <div v-if="pricing.description" class="pricingSection_pricingDescription_mobile">
                {{ pricing.description }}
              </div>
              <CTAButton
                v-if="pricing.ctaButton"
                v-bind="pricing.ctaButton"
                :disabled="pricing.disabled"
                class="pricingSection_pricingCtaButton_mobile w-full"
                @click="handleClickPricing(pricing.id)"
              />
            </div>
            <div class="pricingSection_pricingFeatures_mobile rounded-lg overflow-hidden">
              <div
                v-for="(feature, idxFeature) in displayedFeaturesValues"
                :key="`pricing_${pricing.id}_feature_${idxFeature}`"
                class="pricingSection_pricingFeature_mobile flex h-[60px] justify-between px-5 items-center"
                :class="{ 'cursor-pointer': !pricing.disabled }"
                :style="getFeatureStyle(idxFeature)"
              >
                <div class="pricingSection_pricingFeature_label_mobile">{{ feature.label }}</div>
                <div class="pricingSection_pricingFeature_value_mobile">
                  <FontAwesomeIcon
                    v-if="feature.pricingValues.find((pv) => pv.id === pricing.id)?.value === true"
                    class="text-[#269126]"
                    icon="fa-regular fa-circle-check"
                    size="lg"
                  />
                  <span v-else>{{
                    feature.pricingValues.find((pv) => pv.id === pricing.id)?.value
                  }}</span>
                </div>
              </div>
            </div>
            <div
              v-if="!props.bottomSection?.hideBottomPricingCTA"
              class="pricingSection_pricingBottom_mobile"
            >
              <CTAButton
                v-if="pricing.ctaButton"
                v-bind="pricing.ctaButton"
                :disabled="pricing.disabled"
                class="pricingSection_pricingBottom_ctaButton_mobile pricingSection_pricingCtaButton w-full mt-4"
                @click="handleClickPricing(pricing.id)"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { PricingSectionTableType, TablePricing } from '@/types/types'
import CTASection from './CTASection.vue'
import { computed, ref } from 'vue'
import { getBgColor, getTxtColor } from '@/utils/utils'
import CTAButton from '@/commons/CTAButton.vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
const props = withDefaults(defineProps<PricingSectionTableType>(), {
  topSection: undefined,
  bottomSection: undefined
})

const princingHoverId = ref()

const emits = defineEmits(['clickTopSectionCtaButton', 'clickPricing'])

/** COMUTED */
const hasCTASection = computed(
  () =>
    props.topSection &&
    (props.topSection.title || props.topSection.subtitle || props.topSection.ctaButtons)
)

const hasPricings = computed(
  () => props.bottomSection?.pricings && props.bottomSection?.pricings.length > 0
)

const hasFeatures = computed(
  () => props.bottomSection?.features && props.bottomSection?.features.length > 0
)

const styleTableColsNb = computed(() =>
  props.bottomSection?.pricings
    ? { gridTemplateColumns: `repeat(${props.bottomSection.pricings.length + 1},minmax(0,1fr)` }
    : {}
)
const styleTableRowsNb = computed(() =>
  props.bottomSection?.features
    ? { gridTemplateRows: `repeat(${props.bottomSection.features.length},minmax(0,1fr)` }
    : {}
)

const displayedFeaturesValues = computed(() =>
  props.bottomSection?.features?.map((feature) => ({
    ...feature,
    pricingValues: props.bottomSection.pricings?.map((pricing) => ({
      id: pricing.id,
      value: feature.pricingValues?.[pricing.id] ? feature.pricingValues[pricing.id] : '-'
    }))
  }))
)

const bottomStyle = computed(() => ({
  backgroundColor: getBgColor(props.bottomSection?.bgColor, props.bottomSection?.themeColor)
}))

/** METHODS */
const handleClickTopSectionCTAButton = (buttonName: string) =>
  emits('clickTopSectionCtaButton', buttonName)

const handleClickPricing = (pricingId: string | number) => {
  if (!isPricingDisabled(pricingId)) {
    emits('clickPricing', pricingId)
  }
}

const pricingStyle = (pricing: TablePricing) => {
  const color = getTxtColor(pricing.color, pricing.themeColor)
  return {
    color: color,
    backgroundColor: getBgColor(pricing.bgColor, pricing.themeColor)
  }
}

const getFeatureStyle = (idx: number) =>
  idx % 2 === 0
    ? {
        color: props.bottomSection.oddFeatureColor || '#000',
        backgroundColor: props.bottomSection.oddFeatureBgColor || '#f9fafb'
      }
    : {
        color: props.bottomSection.evenFeatureColor || '#000',
        backgroundColor: props.bottomSection.evenFeatureBgColor || '#fff'
      }

const getPricing = (amount: number, currency?: string, frequency?: string) => {
  return `${amount}${currency || '$'}${frequency ? '/' + frequency : ''}`
}

const isPricingDisabled = (id) => {
  return props.bottomSection.pricings?.find((pricing) => pricing.id === id)?.disabled
}
</script>
