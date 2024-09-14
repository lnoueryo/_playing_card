<template>
  <v-list :lines="props.lines" :nav="props.nav" :density="props.density">
    <slot />
  </v-list>
</template>

<script setup lang="ts">
const props = defineProps({
  lines: {
    type: String,
    default: 'two'
  },
  density: {
    type: String,
    default: 'compact'
  },
  nav: {
    type: Boolean,
    default: true
  }
})
</script>

<style scoped>

</style>