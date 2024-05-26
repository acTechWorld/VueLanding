<template>
  <div>
    <div class="flex gap-2 items-center py-4 cursor-pointer group" @click="toggle = !toggle">
      <slot name="header"></slot>
      <FontAwesomeIcon
        :icon="props.icon"
        class="duration-300 ml-auto opacity-50 group-hover:opacity-100"
        :class="{ 'rotate-180': toggle }"
      />
    </div>
    <Transition
      enter-active-class="transition-opacity duration-300 ease"
      leave-active-class="transition-opacity duration-300 ease"
      enter-from-class="opacity-0"
      leave-to-class="opacity-0"
    >
      <div v-if="toggle">
        <slot name="content"></slot>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { IconName } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
const props = withDefaults(
  defineProps<{
    icon?: IconName
  }>(),
  {
    icon: 'chevron-up'
  }
)
const toggle = ref(false)
</script>
