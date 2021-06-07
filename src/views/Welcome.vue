<template>
  <div class="welcome container">
    <p>Welcome</p>
    <SignUpForm />
  </div>
</template>

<script>
import SignUpForm from '@/components/SignUpForm'
import LogInForm from '@/components/LogInForm'


export default {
  components: {
    SignUpForm,
    LogInForm
  }
}
</script>

<style>
.welcome {
  text-align: center;
  padding: 20px 0;
}
</style>