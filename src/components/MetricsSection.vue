<template>
  <div>
    <div
      v-if="props.topSection?.title || props.topSection?.subTitle"
      class="px-10 py-5 sm:py-10 text-center gap-5 flex flex-col mb-5"
      :style="topSectionStyle"
    >
      <div
        v-if="props.topSection?.title"
        class="text-4xl font-semibold"
        data-test="cTASection-title"
      >
        {{ props.topSection.title }}
      </div>
      <div v-if="props.topSection?.subTitle" data-test="cTASection-subTitle">
        {{ props.topSection.subTitle }}
      </div>
    </div>
    <div
      v-if="props.bottomSection?.metrics && props.bottomSection.metrics.length > 0"
      class="flex justify-center sm:justify-around gap-10 sm:gap-5 max-w-[1000px] mx-auto p-10 rounded-lg flex-col sm:flex-row flex-wrap"
      :style="bottomSectionStyle"
    >
      <div
        v-for="(metric, idx) in props.bottomSection.metrics"
        :key="`metric_${idx}`"
        class="flex flex-col gap-3 sm:border-l-2 pl-4 items-center sm:items-start"
      >
        <div v-if="metric.value" class="text-4xl font-semibold">{{ metric.value }}</div>
        <div v-if="metric.object">{{ metric.object }}</div>
        <CTAButton
          v-if="metric.ctaButton?.name && metric.ctaButton.label"
          v-bind="metric.ctaButton"
          icon="arrow-right"
          type="transparent"
          class="font-semibold"
          @click="handleClickMetric"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import CTAButton from '@/commons/CTAButton.vue'
import type { ThemeColor } from '@/utils/types'
import { getBgColor, getTxtColor } from '@/utils/utils'
import { computed } from 'vue'

const props = withDefaults(
  defineProps<{
    topSection?: {
      title?: string
      subTitle?: string
      bgColor?: `#${string}`
      color?: `#${string}`
      themeColor?: ThemeColor
    }
    bottomSection?: {
      bgColor?: `#${string}`
      color?: `#${string}`
      themeColor?: ThemeColor
      metrics?: {
        value?: string
        object?: string
        ctaButton?: { name: string; label: string; color?: `#${string}` }
      }[]
    }
  }>(),
  {
    topSection: undefined,
    bottomSection: undefined
  }
)

const emits = defineEmits(['clickMetric'])

/** COMPUTED */
const bottomSectionStyle = computed(() => ({
  color: getTxtColor(props.bottomSection?.color, props.bottomSection?.themeColor),
  backgroundColor: getBgColor(props.bottomSection?.bgColor, props.bottomSection?.themeColor)
}))
const topSectionStyle = computed(() => ({
  color: getTxtColor(props.topSection?.color, props.topSection?.themeColor),
  backgroundColor: getBgColor(props.topSection?.bgColor, props.topSection?.themeColor)
}))

/** METHODS */
const handleClickMetric = (name: string) => emits('clickMetric', name)
</script>
