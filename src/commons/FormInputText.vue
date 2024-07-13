<template>
  <div class="formInput flex flex-col gap-2">
    <div v-if="props.title" class="formInput_title">
      {{ props.title }}
      <span v-if="props.required">*</span>
    </div>
    <textarea
      v-if="props.type === 'text'"
      v-model="value"
      :placeholder="props.placeholder"
      rows="8"
      class="formInput_textarea border rounded-lg py-2 px-3 w-full overflow-scroll"
      :class="{ 'outline-[red] border-[red]': status === 'error' }"
    ></textarea>
    <input
      v-else
      v-model="value"
      :placeholder="props.placeholder"
      class="formInput_input border rounded-lg py-2 px-3 w-full"
      :class="{ 'outline-[red] border-[red]': status === 'error' }"
    />
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    name: string
    title?: string
    placeholder?: string
    required?: boolean
    type?: 'default' | 'text'
    status?: 'default' | 'error'
  }>(),
  {
    title: undefined,
    placeholder: undefined,
    required: false,
    type: 'default',
    status: 'default'
  }
)

const value = defineModel<string>()
</script>
