<template>
  <div ref="videoContainer" class="group">
    <video ref="videoElement" class="video object-cover h-full" :muted="props.muted">
      <source :src="props.video" type="video/mp4" />
    </video>
    <div
      v-if="props.playButton"
      class="videoPlayBtn absolute cursor-pointer top-1/2 left-1/2 hidden group-hover:flex"
      @click="handleClickPlayButton"
    >
      <FontAwesomeIcon icon="fa-solid fa-play" size="4x" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { onBeforeUnmount, onMounted, ref, type Ref } from 'vue'

let observer: IntersectionObserver
const props = withDefaults(
  defineProps<{
    video: string
    muted?: boolean
    autoplayVideoOnScroll?: boolean
    playButton?: boolean
  }>(),
  {
    muted: true,
    autoplayVideoOnScroll: true,
    playButton: false
  }
)
const videoContainer: Ref<HTMLDivElement | null> = ref(null)
const videoElement: Ref<HTMLVideoElement | null> = ref(null)
const emits = defineEmits(['clickPlayButton'])

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

const handleClickPlayButton = () => {
  videoElement.value?.load()
  emits('clickPlayButton')
}
</script>
