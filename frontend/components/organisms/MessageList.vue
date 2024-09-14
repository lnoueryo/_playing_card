<template>
  <List>
    <ListItem v-for="friend in friends" :title="friend.name" :subtitle="friend.lastMessage" :prepend-avatar="friend.image" />
  </List>
</template>

<script setup lang="ts">
import List from '~/components/atoms/List.vue'
import ListItem from '~/components/atoms/ListItem.vue'
const friends = ref([
  {
    name: 'Inoue Ryo',
    lastMessage: 'Hello~',
    image: 'https://randomuser.me/api/portraits/women/75.jpg'
  }
])
</script>

<style scoped>

</style>