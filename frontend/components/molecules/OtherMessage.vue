<template>
  <div class="d-flex justify-right">
    <Avatar class="mr-4" />
    <div class="d-flex align-end">
      <Message class="bg-grey mr-4" :text="props.text" />
      <div class="status-text">
        <p>{{ props.created_at }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Avatar from '~/components/atoms/Avatar.vue'
import Message from '~/components/atoms/Message.vue'
const props = defineProps({
  text: {
    type: String,
    default: '',
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