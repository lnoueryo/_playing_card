<template>
  <v-list-item
    :title="props.title"
    :subtitle="props.subtitle"
    :prepend-icon="props.prependIcon"
    :prepend-avatar="props.prependAvatar"
    :to="props.to"
    :value="props.value"
  />
</template>

<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    default: ''
  },
  subtitle: {
    type: String,
    default: ''
  },
  prependAvatar: {
    type: String,
    default: ''
  },
  prependIcon: {
    type: String,
    default: 'two'
  },
  to: {
    type: String,
    default: ''
  },
  value: {
    type: String,
    default: 'compact'
  },
})
</script>

<style scoped>

</style>