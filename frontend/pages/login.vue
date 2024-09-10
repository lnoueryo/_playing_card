<template>
  <div class="page-container">
    <LoginForm />
  </div>
</template>

<script setup lang="ts">
import LoginForm from '~/components/organisms/LoginForm.vue'
definePageMeta({
  layout: 'login'
})

</script>

<style scoped lang="scss">
  .page-container {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>