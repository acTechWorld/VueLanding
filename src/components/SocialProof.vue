<template>
  <SwiperComponent>
    <div
      v-for="(data, key) in props.datas"
      :key="key"
      :style="style"
      class="px-10 py-5 text-center"
    >
      <p>{{ data.testimony }}</p>
    </div>
  </SwiperComponent>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import SwiperComponent from '@/components/SwiperComponent.vue'
const props = withDefaults(
  defineProps<{
    type?: string
    datas: { testimony: string; name: string; title: string; imgProfile: string; stars: number }[]
    bgColor?: `#${string}`
    color?: `#${string}`
  }>(),
  {
    type: 'banner',
    datas: () => [],
    bgColor: '#4b5563',
    color: '#fff'
  }
)
/** COMPUTED */
const style = computed(() => ({
  color: props.color,
  backgroundColor: props.bgColor
}))
</script>
