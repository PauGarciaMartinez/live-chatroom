<template>

  <form @submit.prevent="handleSubmit">
    <input 
      type="text" 
      required 
      placeholder="Display name" 
      v-model="displayName">
    <input 
      type="email" 
      required 
      placeholder="Email" 
      v-model="email">
    <input 
      type="password" 
      required 
      placeholder="Password" 
      v-model="password">
    <button>Sign Up</button>
  </form>

</template>

<script>
import { ref } from 'vue'
import useSignUp from '@/composables/useSignUp'

export default {
  setup() {
    const { error, signUp } = useSignUp()

    const displayName = ref('')
    const email = ref('')
    const password = ref('')

    const handleSubmit = () => {
      await signUp(email.value, password.value, displayName.value)
    }

    return { displayName, email, password, handleSubmit }
  }
}
</script>

<style>

</style>