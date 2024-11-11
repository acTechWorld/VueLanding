<template>
  <SwiperComponent
    :animation-type="props.animationType"
    :infinite="props.infinite"
    class="socialProof pt-12"
  >
    <div
      v-for="(data, key) in props.datas"
      :key="`proof_${key}`"
      :style="style"
      class="socialProof_item px-5 md:px-10 lg:px-20 py-5 text-center gap-8 flex flex-col rounded-lg"
    >
      <div
        v-if="data.testimony"
        class="socialProof_testimony lg:text-4xl md:text-3xl text-2xl font-semibold"
      >
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
        <p v-if="data.name" class="md:text-lg font-semibold socialProof_name">
          {{ data.name }}
        </p>
        <p v-if="data.title" class="socialProof_title md:text-base text-sm">{{ data.title }}</p>
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
import type { SocialProofSectionType } from '@/types/types'
import { getTxtColor, getBgColor } from '@/utils/utils'

const props = withDefaults(defineProps<SocialProofSectionType>(), {
  datas: () => [],
  bgColor: undefined,
  color: undefined,
  themeColor: undefined,
  animationType: 'appear',
  infinite: true
})
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
