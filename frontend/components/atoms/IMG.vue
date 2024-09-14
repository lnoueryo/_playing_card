<template>
  <v-img
    alt="Avatar"
    :src="props.src"
    :width="props.width"
  />
</template>

<script setup lang="ts">
const props = defineProps({
  src: {
    type: String,
    default: '',
  },
  width: {
    type: String,
    default: '',
  },
})
</script>

<style scoped>

</style>