<template>
  <div class="newsletterSection md:flex" :style="sectionStyle">
    <div
      :class="{ 'md:w-1/2 md:gap-5 lg:gap-10 md:py-10 md:text-left': props.img }"
      class="newsletterSection_first flex flex-col gap-10 justify-center px-12 py-20 text-center w-full"
    >
      <div v-if="props.title" class="newsletterSection_title text-4xl font-semibold">
        {{ props.title }}
      </div>
      <div v-if="props.subtitle" class="newsletterSection_subtitle">{{ props.subtitle }}</div>
      <div class="newsletterSection_emailCtn gap-2" :class="{ 'md:flex md:flex-wrap': props.img }">
        <input
          v-model="email"
          :placeholder="props.placeholderInput"
          class="newsletterSection_emailCtn_input px-4 py-2 border rounded-lg w-full max-w-[400px] text-[#000]"
        />
        <CTAButton
          v-bind="props.ctaButton"
          class="newsletterSection_emailCtn_ctaButton mx-auto mt-5"
          :class="{ 'md:mx-0 md:mt-0': props.img }"
          @click="handleSubmit"
        />
      </div>
    </div>
    <div v-if="props.img" class="newsletterSection_second w-full md:w-1/2">
      <img :src="props.img" class="newsletterSection_img h-full object-cover" />
    </div>
  </div>
</template>

<script setup lang="ts">
import CTAButton from '@/commons/CTAButton.vue'
import type { ThemeColor, CTAButtonType } from '@/utils/types'
import { getBgColor, getTxtColor } from '@/utils/utils'
import { ref, computed } from 'vue'
const props = withDefaults(
  defineProps<{
    title?: string
    subtitle?: string
    img?: string
    placeholderInput?: string
    ctaButton?: CTAButtonType
    bgColor?: `#${string}`
    color?: `#${string}`
    themeColor?: ThemeColor
  }>(),
  {
    title: undefined,
    subtitle: undefined,
    img: undefined,
    placeholderInput: undefined,
    ctaButton: () => ({
      name: 'subscribe',
      label: 'Subscribe'
    }),
    bgColor: undefined,
    color: undefined,
    themeColor: undefined
  }
)

const email = ref()
const emits = defineEmits(["submit"])

/** COMPUTED */
const sectionStyle = computed(() => ({
  color: getTxtColor(props.color, props.themeColor),
  backgroundColor: getBgColor(props.bgColor, props.themeColor)
}))

/** METHODS */
const handleSubmit = () => emits('submit', email.value)
</script>
