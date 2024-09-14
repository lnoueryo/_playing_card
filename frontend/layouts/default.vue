<template>
  <div id="wrapper">
    <div class="drawer">
      <MultipleDrawer />
    </div>
    <main class="px-4">
      <NuxtPage />
    </main>
  </div>
</template>

<script setup lang="ts">
import MultipleDrawer from '~/components/organisms/layouts/MultipleDrawer.vue'
</script>

<style scoped lang="scss">
  #wrapper {
    margin: 0;
    padding: 0;
    display: flex;
    min-height: 100vh;
    .drawer {
      max-width: 310px;
      width: 100%;
    }
    main {
      flex: 1;
      background-color: #f7f7f5;
    }
  }
</style>