<template>
  <div class="flex">
    <textarea
      ref="textarea"
      v-model="textareaValue"
      :placeholder="props.placeholder"
      class="rounded pl-4 pr-10 py-2 focus:outline-[var(--chat-box-input-border-color)] w-full overflow-y-auto"
      :style="chatStyle"
    ></textarea>
    <FontAwesomeIcon
      :icon="props.submitButtonIcon"
      :style="sendButtonStyle"
      class="-ml-[30px] cursor-pointer self-end mb-2"
      @click="sendMessage"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, computed, type Ref } from 'vue'
import { hexToRgb } from '@/utils/utils'
import type { IconName } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
const props = withDefaults(
  defineProps<{
    placeholder?: string
    submitButtonIcon?: IconName
    bgColor?: `#${string}`
    color?: `#${string}`
  }>(),
  {
    placeholder: undefined,
    bgColor: '#4b5563',
    color: '#fff',
    submitButtonIcon: 'paper-plane'
  }
)

const textarea: Ref<null | HTMLTextAreaElement> = ref(null)
const textareaValue = ref('')
const emits = defineEmits(['sendMessage'])

const chatStyle = computed(() => {
  const rgbBgColor = hexToRgb(props.bgColor)
  return {
    color: props.color,
    backgroundColor: props.bgColor,
    '--chat-box-input-border-color': rgbBgColor ? `rgba(${rgbBgColor}, .5)` : 'none',
    height: `${textarea.value && textareaValue.value ? textarea.value.scrollHeight : 40}px`
  }
})
const sendButtonStyle = computed(() => ({
  color: props.color
}))

const sendMessage = () => emits('sendMessage', textareaValue.value)
</script>
