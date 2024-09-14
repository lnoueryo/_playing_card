<template>
    <div class="d-flex justify-end align-end">
      <div class="status-text mr-4 text-right">
        <p v-if="props.is_read">read</p>
        <p>{{ props.created_at }}</p>
      </div>
      <Message class="bg-primary" :text="props.text" />
    </div>
</template>

<script setup lang="ts">
import Message from '~/components/atoms/Message.vue'
const props = defineProps({
  text: {
    type: String,
    default: '',
  },
  is_read: {
    type: Boolean,
    default: false,
  },
  created_at: {
    type: String,
    default: '',
  },
})
</script>

<style scoped>
.status-text {
  font-size: 12px;
  white-space: nowrap;
}
</style>