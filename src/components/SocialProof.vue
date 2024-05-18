<template>
  <SwiperComponent
    :animation-type="props.animationType"
    :infinite="props.infinite"
    data-test="socialProof"
  >
    <div
      v-for="(data, key) in props.datas"
      :key="`proof_${key}`"
      :style="style"
      class="px-20 py-5 text-center gap-8 flex flex-col"
      data-test="social-proof-item"
    >
      <div v-if="data.testimony" data-test="social-testimony" class="text-4xl font-semibold">
        {{ data.testimony }}
      </div>
      <div
        v-if="data.name || data.title || data.imgProfile || data.stars"
        class="items-center flex flex-col"
        data-test="bottom-infos"
      >
        <img
          v-if="data.imgProfile"
          :src="data.imgProfile"
          alt="Profile Image"
          class="w-16 h-16 rounded-full mb-2 object-cover"
          data-test="social-imgProfile"
        />
        <p v-if="data.name" class="text-lg font-semibold" data-test="social-name">
          {{ data.name }}
        </p>
        <p v-if="data.title" data-test="social-title">{{ data.title }}</p>
        <div v-if="data.stars" class="mt-2">
          <FontAwesomeIcon
            v-for="(icon, idx) in calculateStarsIcon(data.stars)"
            :key="`proof_${key}_star_${idx}`"
            :icon="icon"
            data-test="social-star"
          />
        </div>
      </div>
    </div>
  </SwiperComponent>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import SwiperComponent from '@/components/SwiperComponent.vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import type { AnimationType } from '@/utils/types'

type SocialProof = {
  testimony?: string
  name?: string
  title?: string
  imgProfile?: string
  stars?: number
}
const props = withDefaults(
  defineProps<{
    type?: string
    datas: SocialProof[]
    bgColor?: `#${string}`
    color?: `#${string}`
    animationType?: AnimationType
    infinite?: boolean
  }>(),
  {
    type: 'banner',
    datas: () => [],
    bgColor: '#4b5563',
    color: '#fff',
    animationType: 'appear',
    infinite: true
  }
)
/** COMPUTED */
const style = computed(() => ({
  color: props.color,
  backgroundColor: props.bgColor
}))
const calculateStarsIcon = (nbStars: number) => {
  const plainStars = nbStars <= 5 ? nbStars : 5
  let icons = []
  for (let i = 0; i < 5; i++) {
    if (i + 1 <= plainStars) {
      icons.push('fa-solid fa-star')
    } else {
      icons.push('fa-regular fa-star')
    }
  }
  return icons
}
</script>
