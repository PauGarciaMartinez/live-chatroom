<template>
  <div class="welcome container">
    <p>Welcome</p>
    <SignUpForm />
    <LogInForm />
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
.welcome form {
  width: 300px;
  margin: 20px auto;
}
.welcome label {
  display: block;
  margin: 20px 0 10px;
}
.welcome input {
  width: 100%;
  padding: 10px;
  border-radius: 20px;
  border: 1px solid #eee;
  outline: none;
  color: #999;
  margin: 10px auto;
}
</style>