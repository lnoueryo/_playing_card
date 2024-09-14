<template>
  <div class="mb-4" v-for="message in messages" :key="message.id">
    <component :is="getMessageComponent(message)" v-bind="message" />
  </div>
</template>

<script setup lang="ts">
import MyMessage from '~/components/molecules/MyMessage.vue'
import OtherMessage from '~/components/molecules/OtherMessage.vue'
const userId = 1
const messages = ref([
  {
    id: 1,
    user_id: 1,
    text: 'If you wanna finish this then you should go after work',
    is_read: true,
    created_at: '2024-09-14 13:33:34.318091'
  },
  {
    id: 2,
    user_id: 1,
    text: `or try to ask them to come Mizonokuchi`,
    is_read: true,
    created_at: '2024-09-14 13:36:34.318091'
  },
  {
    id: 3,
    user_id: 2,
    text: `Since it's not mandatory and I don't have spare time, I rather not to go, but if you suggest meeting them I will then`,
    is_read: true,
    created_at: '2024-09-14 13:39:34.318091'
  },
  {
    id: 4,
    user_id: 1,
    text: `Since it's not mandatory and I don't have spare time, I rather not to go, but if you suggest meeting them I will then`,
    is_read: true,
    created_at: '2024-09-14 13:42:34.318091'
  },
  {
    id: 5,
    user_id: 2,
    text: `or try to ask them to come Mizonokuchi`,
    is_read: true,
    created_at: '2024-09-14 13:45:34.318091'
  },
])
const getMessageComponent = (message: { user_id: number }) => {
  return message.user_id === userId ? MyMessage : OtherMessage
}
</script>

<style scoped>

</style>