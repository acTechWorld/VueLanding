<template>
  <button
    type="button"
    class="font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
    :class="{
      'text-white bg-blue-700 hover:bg-blue-800': !outlined,
      ' border-gray-200 border  hover:bg-gray-100': outlined
    }"
  >
    <slot v-for="index in []"></slot>
  </button>
</template>

<script setup>
defineProps({
  outlined: Boolean
})
</script>
