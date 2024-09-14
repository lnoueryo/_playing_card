<template>
  <p class="py-2 px-4 message">{{ props.text }}</p>
</template>

<script setup lang="ts">
const props = defineProps({
  text: {
    type: String,
    default: '',
  }
})
</script>

<style scoped lang="scss">
.message {
  display: inline-block;
  border-radius: 25px;
}
</style>