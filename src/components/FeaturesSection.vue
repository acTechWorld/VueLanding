<template>
  <div class="featuresSection text-center gap-5 flex flex-col py-10" :style="sectionStyle">
    <div
      v-if="props.title"
      class="featuresSection_title text-4xl lg:text-[44px] font-semibold max-w-[800px] mx-auto"
    >
      {{ props.title }}
    </div>
    <div
      v-if="props.subtitle"
      class="featuresSection_subtitle max-w-[800px] mx-auto text-lg lg:text-xl"
    >
      {{ props.subtitle }}
    </div>
    <div
      v-if="props.features && props.features.length > 0"
      class="featuresSection_features mt-[100px] flex flex-col"
    >
      <div
        v-for="(feature, idx) in props.features"
        :key="`feature_${idx}`"
        class="featuresSection_feature py-[50px]"
        :style="featureStyle(feature)"
      >
        <div
          class="featuresSection_feature_container flex flex-col items-center gap-10"
          :class="[
            idx % 2 === 0 ? 'lg:flex-row-reverse' : 'lg:flex-row',
            props.contentWidth ? `max-w-[${props.contentWidth}px] mx-auto` : ''
          ]"
        >
          <div
            :class="[feature.img || feature.video ? 'lg:w-1/2 text-left' : 'w-full']"
            class="featuresSection_feature_first lg:p-8 gap-5 flex flex-col"
          >
            <div
              v-if="feature.label"
              class="featuresSection_feature_label text-3xl lg:text-4xl font-semibold"
            >
              {{ feature.label }}
            </div>
            <div v-if="feature.description" class="featuresSection_feature_description lg:text-lg">
              {{ feature.description }}
            </div>
            <div
              v-if="feature.featurePoints && feature.featurePoints?.length > 0"
              class="featuresSection_feature_points pl-5 flex flex-col gap-2 text-left"
              :class="{ 'mx-auto': !(feature.img || feature.video) }"
            >
              <div
                v-for="(point, idxPoint) in feature.featurePoints"
                :key="`feature_${idx}_point_${idxPoint}`"
                class="featuresSection_feature_point font-semibold"
              >
                <ScrollTransitionContainer>
                  <FontAwesomeIcon icon="check" size="lg" class="mr-2" /> {{ point }}
                </ScrollTransitionContainer>
              </div>
            </div>
            <div
              v-if="feature.ctaButtons && feature.ctaButtons?.length > 0"
              class="featuresSection_feature_ctaButtons flex gap-4"
            >
              <ScrollTransitionContainer
                v-for="(ctaButton, idxCTA) in feature.ctaButtons"
                :key="`ctaButton_${idxCTA}`"
              >
                <CTAButton
                  v-bind="ctaButton"
                  class="featuresSection_feature_ctaButton"
                  @click="(buttonName: string) => handleClickCTA(buttonName, feature)"
                />
              </ScrollTransitionContainer>
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
  </div>
</template>

<script setup lang="ts">
import type { FeatureType, FeaturesSectionType } from '@/types/types'
import VideoComponent from '@/commons/VideoComponent.vue'
import CTAButton from '@/commons/CTAButton.vue'
import ScrollTransitionContainer from '@/commons/ScrollTransitionContainer.vue'
import { computed } from 'vue'
import { getBgColor, getTxtColor } from '@/utils/utils'

const emits = defineEmits(['clickCtaButton'])
const props = withDefaults(defineProps<FeaturesSectionType>(), {
  title: undefined,
  subtitle: undefined,
  features: () => [],
  bgColor: undefined,
  color: undefined,
  themeColor: undefined,
  contentWidth: undefined
})

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

const handleClickCTA = (buttonName: string, feature: FeatureType) =>
  emits('clickCtaButton', { buttonName: buttonName, feature: feature })
</script>
