<template>
  <v-avatar
    :size="props.size"
    :color="props.color"
  >
    <IMG
      alt="Avatar"
      :src="props.src"
      :width="props.size"
    ></IMG>
  </v-avatar>
</template>

<script setup lang="ts">
const props = defineProps({
  size: {
    type: String,
    default: '36px',
  },
  src: {
    type: String,
    default: 'https://avatars0.githubusercontent.com/u/9064066?v=4&s=460',
  },
  color: {
    type: String,
    default: 'surface-variant',
  },
})
</script>

<style scoped>

</style>