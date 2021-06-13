<template>

  <div class="container">
    <Navbar />
  </div>
  
</template>

<script>
import Navbar from '@/components/Navbar'
import getUser from '@/composables/getUser'
import { watch } from '@vue/runtime-core'
import { useRouter } from 'vue-router'

export default {
  components: {
    Navbar
  },
  setup() {
    const router = useRouter()
    const { user, error } = getUser() 

    watch(user, (user) => {
      if(!user) {
        router.push({ name: 'Welcome'})
      }
    })
  }
}
</script>

<style>
nav {
  padding: 20px;
  border-bottom: 1px solid #eee;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
nav p {
  margin: 2px auto;
  font-size: 16px;
  color: #444;
}
nav p.email {
  font-size: 14px;
  color: #999;
}
</style>