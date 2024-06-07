<template>
  <div ref="container">
    <div
      class="transition-all duration-1000 ease-[ease]"
      :class="[show ? 'visible opacity-100 translate-y-0' : 'invisible opacity-0 translate-y-5']"
    >
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref, type Ref } from 'vue'

let observer: IntersectionObserver
const show = ref(false)
const container: Ref<HTMLDivElement | null> = ref(null)
onMounted(() => {
  initIntersectionObserver()
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
    threshold: 0.1
  }
  if (!observer) {
    observer = new IntersectionObserver(handleIntersection, options)
    if (container.value) {
      observer.observe(container.value)
    }
  }
}

const handleIntersection = (entries: any) => {
  entries.forEach((entry: any) => {
    if (entry.isIntersecting) {
      show.value = true
    }
  })
}
</script>
