<template>
  <nav v-if="user">
    <div>
      <p>Hey there {{ user.displayName }}</p>
      <p class="email">Currently logged in as {{ user.email }}</p>
    </div>
    <button @click="handleClick">Log Out</button>
  </nav>
</template>

<script>
import useLogOut from '@/composables/useLogOut'
import getUser from '@/composables/getUser'

export default {
  setup() {
    const { logOut, error } = useLogOut()
    const { user } = getUser()

    const handleClick = async () => {
      await logOut()
      if (!error.value) {
        console.log('User logged out')
      }
    }

    return { logOut, error, handleClick, user }
  }
}
</script>

<style>

</style>