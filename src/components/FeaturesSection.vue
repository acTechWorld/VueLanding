<template>
  <div class="featuresSection text-center gap-5 flex flex-col py-10" :style="sectionStyle">
    <div
      v-if="props.title"
      class="featuresSection_title text-3xl md:text-4xl font-semibold max-w-[800px] mx-auto"
    >
      {{ props.title }}
    </div>
    <div
      v-if="props.subtitle"
      class="featuresSection_subtitle max-w-[800px] mx-auto text-lg md:text-xl"
    >
      {{ props.subtitle }}
    </div>
    <div
      v-if="props.features && props.features.length > 0"
      class="featuresSection_features mt-10 flex flex-col gap-[100px]"
    >
      <div
        v-for="(feature, idx) in props.features"
        :key="`feature_${idx}`"
        class="featuresSection_feature flex flex-col items-center gap-10 lg:gap-5"
        :class="[idx % 2 === 0 ? 'lg:flex-row-reverse' : 'lg:flex-row']"
        :style="featureStyle(feature)"
      >
        <div
          :class="[feature.img || feature.video ? 'lg:w-1/2 text-left' : 'w-full']"
          class="featuresSection_feature_first lg:p-8 gap-4 md:gap-5 flex flex-col"
        >
          <div
            v-if="feature.label"
            class="featuresSection_feature_label text-2xl md:text-3xl font-semibold"
          >
            {{ feature.label }}
          </div>
          <div v-if="feature.description" class="featuresSection_feature_description md:text-lg">
            {{ feature.description }}
          </div>
          <div
            class="featuresSection_feature_points pl-5 flex flex-col gap-2 text-left"
            :class="{ 'mx-auto': !(feature.img || feature.video) }"
          >
            <div
              v-for="(point, idxPoint) in feature.featurePoints"
              :key="`feature_${idx}_point_${idxPoint}`"
              class="featuresSection_feature_point font-semibold"
            >
              <ScrollTransitionContainer>
                <FontAwesomeIcon icon="check" size="xl" class="mr-2" /> {{ point }}
              </ScrollTransitionContainer>
            </div>
          </div>
        </div>
        <ScrollTransitionContainer
          v-if="feature.img || feature.video"
          class="featuresSection_feature_second w-full lg:w-1/2"
        >
          <img
            v-if="feature.img"
            :src="feature.img"
            class="featuresSection_feature_img object-cover h-full"
          />
          <VideoComponent
            v-else-if="feature.video"
            class="featuresSection_feature_videoContainer"
            :video="feature.video"
          />
        </ScrollTransitionContainer>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ThemeColor } from '@/utils/types'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import VideoComponent from '@/commons/VideoComponent.vue'
import ScrollTransitionContainer from '@/commons/ScrollTransitionContainer.vue'
import { computed } from 'vue'
import { getBgColor, getTxtColor } from '@/utils/utils'

type FeatureType = {
  label?: string
  description?: string
  featurePoints?: string[]
  img?: string
  video?: string
  bgColor?: `#${string}`
  color?: `#${string}`
  themeColor?: ThemeColor
}
const props = withDefaults(
  defineProps<{
    title?: string
    subtitle?: string
    features?: FeatureType[]
    bgColor?: `#${string}`
    color?: `#${string}`
    themeColor?: ThemeColor
  }>(),
  {
    title: undefined,
    subtitle: undefined,
    features: () => [],
    bgColor: undefined,
    color: undefined,
    themeColor: undefined
  }
)

/** COMPUTED */
const sectionStyle = computed(() => ({
  color: getTxtColor(props.color, props.themeColor),
  backgroundColor: getBgColor(props.bgColor, props.themeColor)
}))

/** METHODS */
const featureStyle = (feature: FeatureType) => ({
  color: getTxtColor(feature.color, feature.themeColor),
  backgroundColor: getBgColor(feature.bgColor, feature.themeColor)
})
</script>
