<template>
  <v-row :no-gutters="props.noGutters" :align="props.align">
    <slot />
  </v-row>
</template>

<script setup lang="ts">
const props = defineProps({
  noGutters: {
    type: Boolean,
    default: true,
  },
  align: {
    type: String,
    default: 'center'
  }
})
</script>

<style scoped>

</style>