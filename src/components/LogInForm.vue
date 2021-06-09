<template>

  <form @submit.prevent="handleSubmit">
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
    <button>Log In</button>
  </form>

</template>

<script>
import { ref } from 'vue'
import useLogIn from '@/composables/useLogIn'

export default {
  setup() {
    const email = ref('')
    const password = ref('')

    const { error, logIn } = useLogIn()

    const handleSubmit = async () => {
      await logIn(email.value, password.value)
      if (!error.value) {
        console.log('User logged in')
      }
    }

    return { email, password, handleSubmit }
  }
}
</script>

<style>

</style>