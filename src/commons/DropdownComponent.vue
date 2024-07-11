<template>
  <div
    class="cursor-pointer group h-full"
    @mouseenter="isHover = true"
    @mouseleave="isHover = false"
  >
    <div class="h-full flex items-center"><slot name="header" /></div>
    <div
      :style="styleDropdownList"
      class="hidden group-hover:block group-hover:translate-y-0 transition-all duration-300 absolute rounded-lg -translate-x-1/2 overflow-hidden border"
    >
      <slot name="content" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
const isHover = ref(false)

const styleDropdownList = computed(() => {
  return isHover.value
    ? {
        transform:
          'translate3d(0px, 0rem, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
        opacity: 1,
        boxShadow: '0 20px 24px -4px rgba(16,24,40,.08),0 0 8px -4px rgba(16,24,40,.06)'
      }
    : {
        transform:
          'translate3d(0px, 0.75rem, 0px) scale3d(0.95, 0.95, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
        opacity: 0
      }
})
</script>
