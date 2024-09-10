<template>
  <Card class="pa-8" max-width="600px">
    <form @submit.prevent>
      <Row>
        <Col class="mb-4">
          <TextField v-model="email" label="Email" prepend-inner-icon="mdi-email-outline" :rules="[rules.required, rules.emailMatch]" />
        </Col>
        <Col class="mb-4">
          <PasswordTextField
            v-model="password"
            prepend-inner-icon="mdi-lock-outline"
            label="Password"
            hint="At least 8 characters"
            :rules="[rules.required, rules.min]"
            counter
          />
        </Col>
        <Col class="mb-8">
          <BTN
            block
            type="submit"
          >
            Log In
          </BTN>
        </Col>
        <Col class="text-center">
          <BTN
            to="/"
            variant="text"
            append-icon="mdi-chevron-right"
          >
            ホームに戻る
          </BTN>
        </Col>
      </Row>
    </form>
  </Card>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Card from '~/components/atoms/Card.vue'
import Row from '~/components/atoms/Row.vue'
import Col from '~/components/atoms/Col.vue'
import TextField from '~/components/atoms/TextField.vue'
import PasswordTextField from '~/components/atoms/PasswordTextField.vue'
import BTN from '~/components/atoms/BTN.vue'
const email = ref('')
const password = ref('')
</script>

<style scoped>

</style>