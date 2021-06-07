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

export default {
  setup() {
    const displayName = ref('')
    const email = ref('')
    const password = ref('')

    const handleSubmit = () => {
      
    }

    return { displayName, email, password }
  }
}
</script>

<style>

</style>