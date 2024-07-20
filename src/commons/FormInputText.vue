<template>
  <div class="formInput flex flex-col gap-2">
    <div v-if="props.title" class="formInput_title">
      {{ props.title }}
      <span v-if="props.required">*</span>
    </div>
    <textarea
      v-if="props.type === 'text'"
      v-model="value"
      :style="styleField"
      :placeholder="props.placeholder"
      rows="8"
      class="formInput_textarea border outline-0 rounded-lg py-2 px-3 w-full overflow-scroll"
      :class="{ 'border-[red]': status === 'error' }"
    ></textarea>
    <input
      v-else
      v-model="value"
      :style="styleField"
      :placeholder="props.placeholder"
      class="formInput_input outline-0 border rounded-lg py-2 px-3 w-full"
      :class="{ 'border-[red]': status === 'error' }"
    />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(
  defineProps<{
    name: string
    title?: string
    placeholder?: string
    required?: boolean
    type?: 'default' | 'text'
    status?: 'default' | 'error'
    bgColor?: `#${string}`
    color?: `#${string}`
  }>(),
  {
    title: undefined,
    placeholder: undefined,
    required: false,
    type: 'default',
    status: 'default',
    bgColor: undefined,
    color: undefined
  }
)

const value = defineModel<string>()

/** COMPUTED */

const styleField = computed(() => ({
  color: props.color ?? '#000',
  backgroundColor: props.bgColor ?? '#fff'
}))
</script>
