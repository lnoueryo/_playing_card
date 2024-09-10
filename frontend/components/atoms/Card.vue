<template>
  <v-card :width="props.width" :max-width="props.maxWidth">
    <slot />
  </v-card>
</template>

<script setup lang="ts">
const props = defineProps({
  maxWidth: {
    type: String,
    default: '400px'
  },
  width: {
    type: String,
    default: '100%'
  },
})
</script>

<style scoped>

</style>