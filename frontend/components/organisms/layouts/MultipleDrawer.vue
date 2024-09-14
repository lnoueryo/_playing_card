<template>
  <Card max-width="400px">
    <v-layout class="display-height">
      <v-navigation-drawer
        theme="dark"
        permanent
        rail
      >
        <ListItem prepend-avatar="https://randomuser.me/api/portraits/women/75.jpg" />
        <v-divider></v-divider>

        <List>
          <ListItem v-for="nav in basicNavigation" :prepend-icon="nav.prependIcon" :value="nav.value" :to="nav.to" />
        </List>
      </v-navigation-drawer>

      <v-navigation-drawer permanent>
        <v-list>
          <component :is="currentComponent" />
        </v-list>
      </v-navigation-drawer>
    </v-layout>
  </Card>
</template>

<script setup lang="ts">
import FriendList from '~/components/organisms/FriendList.vue'
import MessageList from '~/components/organisms/MessageList.vue'
import Card from '~/components/atoms/Card.vue'
import List from '~/components/atoms/List.vue'
import ListItem from '~/components/atoms/ListItem.vue'

const componentsMap = {
  '/': FriendList,
  '/messages': MessageList
}
const route = useRoute()
const currentComponent = computed(() => componentsMap[route.path] || '')
const basicNavigation = [
  {
    prependIcon: 'mdi-home',
    to: '/',
    value: 'home',
  },
  {
    prependIcon: 'mdi-message',
    to: '/messages',
    value: 'messages',
  },
]
</script>

<style scoped>
.display-height {
  height: 100vh
}
</style>