<template>
  <SwiperComponent
    :animation-type="props.animationType"
    :infinite="props.infinite"
    class="socialProof"
  >
    <div
      v-for="(data, key) in props.datas"
      :key="`proof_${key}`"
      :style="style"
      class="socialProof_item px-20 py-5 text-center gap-8 flex flex-col rounded-lg"
    >
      <div v-if="data.testimony" class="socialProof_testimony text-4xl font-semibold">
        {{ data.testimony }}
      </div>
      <div
        v-if="data.name || data.title || data.imgProfile || data.stars"
        class="socialProof_bottom items-center flex flex-col"
      >
        <img
          v-if="data.imgProfile"
          :src="data.imgProfile"
          alt="Profile Image"
          class="socialProof_imgProfile w-16 h-16 rounded-full mb-2 object-cover"
        />
        <p v-if="data.name" class="text-lg font-semibold socialProof_name">
          {{ data.name }}
        </p>
        <p v-if="data.title" class="socialProof_title">{{ data.title }}</p>
        <div v-if="data.stars" class="socialProof_stars mt-2">
          <FontAwesomeIcon
            v-for="(icon, idx) in calculateStarsIcon(data.stars)"
            :key="`proof_${key}_star_${idx}`"
            :icon="icon"
            class="socialProof_star"
          />
        </div>
      </div>
    </div>
  </SwiperComponent>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import SwiperComponent from '@/commons/SwiperComponent.vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import type { AnimationType, ThemeColor } from '@/utils/types'
import { getTxtColor, getBgColor } from '@/utils/utils'

type SocialProof = {
  testimony?: string
  name?: string
  title?: string
  imgProfile?: string
  stars?: number
}
const props = withDefaults(
  defineProps<{
    datas: SocialProof[]
    bgColor?: `#${string}`
    color?: `#${string}`
    themeColor?: ThemeColor
    animationType?: AnimationType
    infinite?: boolean
  }>(),
  {
    datas: () => [],
    bgColor: undefined,
    color: undefined,
    themeColor: undefined,
    animationType: 'appear',
    infinite: true
  }
)
/** COMPUTED */
const style = computed(() => ({
  color: getTxtColor(props.color, props.themeColor),
  backgroundColor: getBgColor(props.bgColor, props.themeColor)
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
