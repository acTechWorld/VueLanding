<template>
  <div
    class="fixed bottom-4 top-1/4 transform -top-x-1/2 p-4 h-fit shadow-lg text-white flex items-center space-x-4 text-[#fff] transition-all duration-300 rounded-md"
    :class="[typeClass, isVisible ? 'translate-x-[10%]' : '-translate-x-[110%]']"
  >
    <span>{{ message }}</span>
    <FontAwesomeIcon icon="fa-solid fa-xmark" class="text-white font-bold mt-[2px]" @click="hide" />
  </div>
</template>

<script lang="ts" setup>
import { ToastComponentType } from '@/types/types'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { ref, watch, onUnmounted, computed } from 'vue'

const props = defineProps<ToastComponentType>()

const isVisible = ref(false)
const timeoutId = ref<number | null>(null)

const show = () => {
  isVisible.value = true
  if (props.duration) {
    timeoutId.value = setTimeout(() => {
      isVisible.value = false
    }, props.duration)
  }
}

const hide = () => {
  if (timeoutId.value !== null) {
    clearTimeout(timeoutId.value)
    timeoutId.value = null
  }
  isVisible.value = false
}

watch(
  () => props.message,
  () => {
    show()
  }
)

defineExpose({
  show
})
onUnmounted(() => {
  if (timeoutId.value !== null) {
    clearTimeout(timeoutId.value)
  }
})

const typeClass = computed(() => {
  switch (props.type) {
    case 'success':
      return 'bg-[#48BB78]'
    case 'error':
      return 'bg-[#F56565]'
    case 'info':
      return 'bg-[#4299E1]'
    case 'warning':
      return 'bg-[#ECC94B]'
    default:
      return 'bg-[#2D3748]'
  }
})
</script>
