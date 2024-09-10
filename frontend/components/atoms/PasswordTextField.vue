<template>
  <v-text-field
    v-model="value"
    :type="isShowedPassword ? 'text' : 'password'"
    :label="props.label"
    :color="props.color"
    :hint="props.hint"
    :prepend-inner-icon="props.prependInnerIcon"
    :append-inner-icon="isShowedPassword ? 'mdi-eye' : 'mdi-eye-off'"
    :clearable="props.clearable"
    :counter="props.counter"
    :rules="props.rules"
    @input="$emit('update:modelValue', $event.target.value)"
    @click:append-inner="isShowedPassword = !isShowedPassword"
  />
</template>

<script setup lang="ts">
const props = defineProps({
  modelValue: {
    type: String
  },
  label: {
    type: String,
    default: '',
  },
  hint: {
    type: String,
    default: '',
  },
  color: {
    type: String,
    default: 'primary',
  },
  prependInnerIcon: {
    type: String,
    default: '',
  },
  appendInnerIcon: {
    type: String,
    default: '',
  },
  clearable: {
    type: Boolean,
    default: true,
  },
  counter: {
    type: Boolean,
    default: false,
  },
  rules: {
    type: Array,
    default: () => [],
  }
})
const emits = defineEmits(['update:modelValue'])
const value = computed({
  get() {
    return props.modelValue
  },
  set(v) {
    emits('update:modelValue', v)
  }
})
const isShowedPassword = ref(false)
</script>

<style scoped>

</style>