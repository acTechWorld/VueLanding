<template>
  <div>
    <div class="flex gap-2 items-center py-4 cursor-pointer group px-4" @click="handleToggle">
      <slot name="header"></slot>
      <FontAwesomeIcon
        :icon="props.icon"
        class="duration-300 ml-auto opacity-50 group-hover:opacity-100"
        :class="{ 'rotate-180': toggle }"
      />
    </div>
    <div
      ref="container"
      class="overflow-hidden transition-all ease-[ease] duration-500"
      :style="{ maxHeight: `${maxHeight}px` }"
    >
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, type Ref } from 'vue'
import type { IconName } from '@fortawesome/fontawesome-svg-core'
const props = withDefaults(
  defineProps<{
    icon?: IconName
  }>(),
  {
    icon: 'chevron-up'
  }
)
const toggle = ref(false)
const maxHeight = ref(0)
const container: Ref<HTMLDivElement | null> = ref(null)

const handleToggle = () => {
  toggle.value = !toggle.value
  if (toggle.value && container.value?.children && container.value?.children.length > 0) {
    maxHeight.value = container.value?.children[0].clientHeight
  } else {
    maxHeight.value = 0
  }
}
</script>
