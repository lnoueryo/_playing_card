<template>
  <v-btn
    :color="props.color"
    :size="props.size"
    :block="props.block"
    :type="props.type"
    :variant="props.variant"
    :prepend-icon="props.prependIcon"
    :append-icon="props.appendIcon"
  >
    <slot />
  </v-btn>
</template>

<script setup lang="ts">
const props = defineProps({
  color: {
    type: String,
    default: 'primary'
  },
  size: {
    type: String,
    default: 'large',
  },
  type: {
    type: String,
    default: '',
  },
  variant: {
    type: String,
    default: 'elevated',
  },
  prependIcon: {
    type: String,
    default: ','
  },
  appendIcon: {
    type: String,
    default: ','
  },
  block: {
    type: Boolean,
    default: false,
  },
})
</script>

<style scoped>

</style>