<template>
  <div
    class="heroSection lg:flex flex-col mx-auto"
    :class="{
      'lg:flex-row max-w-full': isHalfSized,
      'lg:pb-[100px]': props.type === 'vertical' && hasMediaContent
    }"
    :style="sectionStyle"
  >
    <div
      :class="{
        'lg:w-1/2 lg:gap-10 lg:py-10 lg:text-left lg:items-start': isHalfSized
      }"
      class="heroSection_first h-[100vh] flex flex-col gap-10 justify-center px-12 py-20 text-center items-center w-full"
    >
      <div
        v-if="props.title"
        class="heroSection_title text-4xl md:text-[44px] lg:text-5xl font-semibold max-w-[640px]"
      >
        {{ props.title }}
      </div>
      <div v-if="props.subtitle" class="heroSection_subtitle text-lg max-w-[640px]">
        {{ props.subtitle }}
      </div>
      <div
        v-if="props.ctaButtons && props.ctaButtons?.length > 0"
        class="heroSection_ctaButtons flex gap-4 justify-center max-w-[640px]"
        :class="{ 'lg:justify-start': isHalfSized }"
      >
        <CTAButton
          v-for="(ctaButton, idx) in props.ctaButtons"
          :key="`ctaButton_${idx}`"
          v-bind="ctaButton"
          class="heroSection_ctaButton"
          @click="handleClickCTA"
        />
      </div>
    </div>
    <div
      v-if="hasMediaContent"
      class="heroSection_second w-full mx-auto -mt-[20vh] relative"
      :class="[isDefaultType ? 'lg:w-1/2 lg:mt-0 lg:mx-0' : 'lg:w-4/5']"
    >
      <img
        v-if="props.img"
        :src="props.img"
        class="heroSection_img object-cover w-full"
        :class="{ 'lg:h-full': isHalfSized }"
      />
      <VideoComponent
        v-else-if="props.video"
        :class="{ 'lg:h-full lg:w-full': isHalfSized }"
        :video="props.video"
        :play-button="props.overlayVideoPlayer"
        class="heroSection_video"
        @click-play-button="handleClickPlayButton"
      />
    </div>
    <div
      v-if="displayPlayer"
      class="heroSection_videoPlayer fixed top-0 left-0 w-full h-full flex items-center justify-center bg-[rgba(0,0,0,.8)] p-10"
      @click="displayPlayer = false"
    >
      <FontAwesomeIcon
        class="absolute top-4 right-10 text-[#fff] cursor-pointer"
        icon="fa-regular fa-circle-xmark"
        size="2x"
      />
      <video
        class="heroSection_videoPlayer_video object-cover h-full"
        autoplay
        controls
        @click.stop
      >
        <source :src="props.video" type="video/mp4" />
      </video>
    </div>
  </div>
</template>

<script setup lang="ts">
import CTAButton from '@/commons/CTAButton.vue'
import VideoComponent from '@/commons/VideoComponent.vue'
import type { HeroSectionType } from '@/types/types'
import { getBgColor, getTxtColor } from '@/utils/utils'
import { computed, ref } from 'vue'

const props = withDefaults(defineProps<HeroSectionType>(), {
  type: 'default',
  title: undefined,
  subtitle: undefined,
  img: undefined,
  video: undefined,
  placeholderInput: undefined,
  ctaButtons: () => [],
  bgColor: undefined,
  color: undefined,
  themeColor: undefined,
  autoplayVideoOnScroll: true,
  overlayVideoPlayer: true
})

const displayPlayer = ref(false)
const emits = defineEmits(['clickCtaButton'])

/** COMPUTED */
const hasMediaContent = computed(() => props.img || props.video)

const isDefaultType = computed(() => props.type === 'default')

const isHalfSized = computed(() => hasMediaContent.value && isDefaultType.value)

const sectionStyle = computed(() => ({
  color: getTxtColor(props.color, props.themeColor),
  backgroundColor: getBgColor(props.bgColor, props.themeColor)
}))

/** METHODS */

const handleClickCTA = (buttonName: string) => emits('clickCtaButton', buttonName)
const handleClickPlayButton = () => {
  displayPlayer.value = true
}
</script>
