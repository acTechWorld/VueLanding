<template>
  <div
    class="heroSection md:flex flex-col mx-auto"
    :class="{
      'md:flex-row max-w-full': isHalfSized,
      'md:pb-[100px]': props.type === 'vertical' && hasMediaContent
    }"
    :style="sectionStyle"
  >
    <div
      :class="{
        'md:w-1/2 md:gap-10 md:py-10 md:text-left max-w-[1400px]': isHalfSized
      }"
      class="heroSection_first h-[100vh] flex flex-col gap-10 justify-center px-12 py-20 text-center w-full"
    >
      <div v-if="props.title" class="heroSection_title text-5xl font-semibold">
        {{ props.title }}
      </div>
      <div v-if="props.subtitle" class="heroSection_subTitle text-lg">{{ props.subtitle }}</div>
      <div
        v-if="props.ctaButtons && props.ctaButtons?.length > 0"
        class="heroSection_ctaButtons flex gap-4 justify-center"
        :class="{ 'md:justify-start': isHalfSized }"
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
      :class="[isDefaultType ? 'md:w-1/2 md:mt-0 md:mx-0' : 'md:w-4/5 max-w-[1400px]']"
    >
      <img
        v-if="props.img"
        :src="props.img"
        class="heroSection_img object-cover w-full"
        :class="{ 'md:h-full': isHalfSized }"
      />
      <VideoComponent
        v-else-if="props.video"
        :class="{ 'md:h-full': isHalfSized }"
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
import type { CTAButtonType, ThemeColor } from '@/utils/types'
import { getBgColor, getTxtColor } from '@/utils/utils'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { computed, onBeforeUnmount, onMounted, ref, type Ref } from 'vue'

const props = withDefaults(
  defineProps<{
    type?: 'default' | 'vertical'
    title?: string
    subtitle?: string
    img?: string
    video?: string
    placeholderInput?: string
    ctaButtons?: CTAButtonType[]
    bgColor?: `#${string}`
    color?: `#${string}`
    themeColor?: ThemeColor
    autoplayVideoOnScroll?: boolean
    overlayVideoPlayer?: boolean
  }>(),
  {
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
  }
)

const displayPlayer = ref(false)
const videoContainer: Ref<HTMLDivElement | null> = ref(null)
const videoElement: Ref<HTMLVideoElement | null> = ref(null)
let observer: IntersectionObserver
const emits = defineEmits(['clickCtaButton'])

onMounted(() => {
  if (props.autoplayVideoOnScroll) {
    initIntersectionObserver()
  }
})

onBeforeUnmount(() => {
  if (observer) {
    observer.disconnect()
  }
})

/** COMPUTED */
const hasMediaContent = computed(() => props.img || props.video)

const isDefaultType = computed(() => props.type === 'default')

const isHalfSized = computed(() => hasMediaContent.value && isDefaultType.value)

const sectionStyle = computed(() => ({
  color: getTxtColor(props.color, props.themeColor),
  backgroundColor: getBgColor(props.bgColor, props.themeColor)
}))

/** METHODS */
const initIntersectionObserver = () => {
  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5
  }
  if (!observer) {
    observer = new IntersectionObserver(handleIntersection, options)
    if (videoContainer.value) {
      observer.observe(videoContainer.value)
    }
  }
}

const handleIntersection = (entries: any) => {
  entries.forEach((entry: any) => {
    if (entry.isIntersecting) {
      videoElement.value?.play()
    } else {
      videoElement.value?.pause()
    }
  })
}

const handleClickCTA = (buttonName: string) => emits('clickCtaButton', buttonName)
const handleClickPlayButton = () => {
  videoElement.value?.load()
  displayPlayer.value = true
}
</script>
