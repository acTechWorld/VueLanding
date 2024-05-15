<template>
  <div class="swiper" :class="{ 'overflow-hidden': props.offChildrenHidden }">
    <div class="slides flex [&>*]:mx-2 [&>*]:w-full" :style="slidesStyle">
      <slot></slot>
    </div>
    <button v-show="currentSlideIndex > 0" @click="prevSlide">Previous</button>
    <button v-show="currentSlideIndex < totalSlides - 1" @click="nextSlide">Next</button>
  </div>
</template>

<script setup lang="ts">
import type { AnimationType } from '@/utils/types'
import { ref, onMounted, onUnmounted, computed } from 'vue'

const currentSlideIndex = ref(0)
const slideWidth = ref(0)
const totalSlides = ref(0)

const props = withDefaults(
  defineProps<{
    animationType?: AnimationType
    offChildrenHidden?: boolean
    draggable?: boolean
  }>(),
  {
    offChildrenHidden: true,
    animationType: 'slide',
    draggable: true
  }
)

onMounted(() => {
  document.querySelectorAll('.slides > *')?.forEach((el) => el.classList.add('slide'))
  totalSlides.value = document.querySelectorAll('.swiper .slide').length
  handleResize()
  window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
})

/** Swipper style */
const slidesStyle = computed(() => {
  let animationStyle
  switch (props.animationType) {
    case 'slide':
      animationStyle = 'transform 0.5s ease'
      break

    default:
      animationStyle = 'none'
      break
  }
  return {
    transition: animationStyle,
    transform: `translateX(-${currentSlideIndex.value * slideWidth.value}px)`,
    width: `${totalSlides.value * slideWidth.value}px`
  }
})

/** Methods */
const handleResize = () => {
  slideWidth.value = document.querySelector('.swiper')
    ? document.querySelector('.swiper').offsetWidth
    : 0
}

const nextSlide = () => {
  if (currentSlideIndex.value < totalSlides.value - 1) {
    currentSlideIndex.value++
  }
}

const prevSlide = () => {
  if (currentSlideIndex.value > 0) {
    currentSlideIndex.value--
  }
}
</script>
