<template>
  <div class="flex justify-center items-center">
    <div
      class="w-10 flex justify-center cursor-pointer group items-center self-stretch"
      @click="prevSlide"
    >
      <FontAwesomeIcon
        v-if="displayLeftArrow"
        icon="arrow-left"
        class="text-[#98a2b3] group-hover:text-[#4b5563] group-hover:-translate-x-5 transition-all duration-300"
      />
    </div>
    <div class="swiper w-full overflow-hidden">
      <div
        class="slides flex [&>*]:mx-2 [&>*]:w-full overflow-y-hidden pb-[2rem] select-none"
        :style="slidesStyle"
        :class="[slidesClass]"
      >
        <slot></slot>
      </div>
      <div class="flex gap-2 w-full justify-center mt-5">
        <div
          v-for="i in totalSlides"
          :key="i"
          class="rounded-full w-3 h-3 border border-[#4b5563] cursor-pointer transition-colors duration-200"
          :class="[i === currentSlideIndex + 1 ? 'bg-[#4b5563]' : 'bg-[#F2F4F7]']"
          @click="selectSlide(i - 1)"
        ></div>
      </div>
    </div>
    <div
      class="w-10 flex justify-center cursor-pointer group items-center self-stretch"
      @click="nextSlide"
    >
      <FontAwesomeIcon
        v-if="displayRightArrow"
        icon="arrow-right"
        class="text-[#98a2b3] group-hover:text-[#4b5563] group-hover:translate-x-5 transition-all duration-300"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { AnimationType } from '@/utils/types'
import { ref, onMounted, onUnmounted, computed, watch } from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

const currentSlideIndex = ref(0)
const slideWidth = ref(0)
const totalSlides = ref(0)

const props = withDefaults(
  defineProps<{
    animationType?: AnimationType
    infinite?: boolean
  }>(),
  {
    animationType: 'slide',
    infinite: true
  }
)

onMounted(() => {
  document.querySelectorAll('.slides > *')?.forEach((el, idx) => {
    el.classList.add('slide')
    if (idx === 0) el.classList.add('active')
  })
  totalSlides.value = document.querySelectorAll('.swiper .slide').length
  handleResize()
  window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
})

/** Swipper style */
const slidesStyle = computed(() => {
  let transition
  let transitionDelay
  switch (props.animationType) {
    case 'slide':
      transition = 'transform 0.5s ease'
      transitionDelay = 'unset'
      break
    case 'appear':
      transition = 'unset'
      transitionDelay = '0.25s'
      break
    default:
      transition = 'unset'
      transitionDelay = 'unset'
      break
  }
  return {
    transition: transition,
    transform: `translateX(-${currentSlideIndex.value * slideWidth.value}px)`,
    transitionDelay: transitionDelay,
    width: `${totalSlides.value * slideWidth.value}px`
  }
})

const slidesClass = computed(() => {
  switch (props.animationType) {
    case 'appear':
      return '[&>.active]:animate-[translateTopSlideAppear_0.5s] [&>.active]:[animation-delay:0.25s]  [&>*]:animate-[translateBottomSlideDisappear_0.25s]'
    default:
      return ''
  }
})
const displayRightArrow = computed(
  () => props.infinite || currentSlideIndex.value < totalSlides.value - 1
)
const displayLeftArrow = computed(() => props.infinite || currentSlideIndex.value > 0)

/** METHODS */
const handleResize = () => {
  slideWidth.value = document.querySelector('.swiper')
    ? (document.querySelector('.swiper') as HTMLElement).offsetWidth
    : 0
}

const selectSlide = (index: number) => {
  currentSlideIndex.value = index
}

const nextSlide = () => {
  if (currentSlideIndex.value < totalSlides.value - 1) {
    currentSlideIndex.value++
  } else if (props.infinite) {
    currentSlideIndex.value = 0
  }
}

const prevSlide = () => {
  if (currentSlideIndex.value > 0) {
    currentSlideIndex.value--
  } else if (props.infinite) {
    currentSlideIndex.value = totalSlides.value - 1
  }
}

/** WATCH */
watch(currentSlideIndex, (index) => {
  document.querySelectorAll('.slides > *')?.forEach((el, idx) => {
    if (idx === index) {
      el.classList.add('active')
    } else {
      el.classList.remove('active')
    }
  })
})
</script>
