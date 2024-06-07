<template>
  <div class="text-center gap-5 flex flex-col">
    <div v-if="props.title" class="text-4xl font-semibold max-w-[800px] mx-auto">
      {{ props.title }}
    </div>
    <div v-if="props.subtitle" class="max-w-[800px] mx-auto text-xl">{{ props.subtitle }}</div>
    <div v-if="props.features && props.features.length > 0" class="mt-10 flex flex-col gap-[100px]">
      <div
        v-for="(feature, idx) in props.features"
        :key="`feature_${idx}`"
        class="flex flex-col items-center gap-5"
        :class="[idx % 2 === 0 ? 'lg:flex-row-reverse' : 'lg:flex-row']"
      >
        <div
          :class="[feature.img || feature.video ? 'lg:w-1/2 text-left' : 'w-full']"
          class="p-8 gap-5 flex flex-col"
        >
          <div v-if="feature.label" class="text-3xl font-semibold">{{ feature.label }}</div>
          <div v-if="feature.description" class="text-lg">{{ feature.description }}</div>
          <div
            class="pl-5 flex flex-col gap-2 text-left"
            :class="{ 'mx-auto': !(feature.img || feature.video) }"
          >
            <div
              v-for="(point, idxPoint) in feature.featurePoints"
              :key="`feature_${idx}_point_${idxPoint}`"
              class="font-semibold"
            >
              <FontAwesomeIcon icon="check" size="xl" class="mr-2" /> {{ point }}
            </div>
          </div>
        </div>
        <div v-if="feature.img || feature.video" class="lg:w-1/2">
          <img v-if="feature.img" :src="feature.img" class="object-cover h-full" />
          <VideoComponent v-else-if="feature.video" :video="feature.video" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ThemeColor } from '@/utils/types'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import VideoComponent from '@/commons/VideoComponent.vue'

const props = withDefaults(
  defineProps<{
    title?: string
    subtitle?: string
    features?: {
      label?: string
      description?: string
      featurePoints?: string[]
      img?: string
      video?: string
      bgColor?: `#${string}`
      color?: `#${string}`
      themeColor?: ThemeColor
    }[]
    bgColor?: `#${string}`
    color?: `#${string}`
    themeColor?: ThemeColor
  }>(),
  {
    title: undefined,
    subtitle: undefined,
    features: () => [],
    bgColor: undefined,
    color: undefined,
    themeColor: undefined
  }
)
</script>
