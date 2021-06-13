<template>
  <nav>
    <div>
      <p>Hey there... display name here</p>
      <p class="email">Currently logged in as... email</p>
    </div>
    <button @click="handleClick">Log Out</button>
  </nav>
</template>

<script>
import useLogOut from '@/composables/useLogOut'

export default {
  setup() {
    const { logOut, error } = useLogOut()

    const handleClick = async () => {
      await logOut()
      if (!error.value) {
        console.log('User logged out')
      }
    }

    return { logOut, error, handleClick }
  }
}
</script>

<style>

</style>