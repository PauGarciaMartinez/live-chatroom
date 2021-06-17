<template>

  <div class="container">
    <Navbar />
    <ChatWindow />
    <NewChatForm />
  </div>
  
</template>

<script>
import NewChatForm from '@/components/NewChatForm'
import ChatWindow from '@/components/ChatWindow'
import Navbar from '@/components/Navbar'
import getUser from '@/composables/getUser'
import { watch } from '@vue/runtime-core'
import { useRouter } from 'vue-router'

export default {
  components: {
    Navbar,
    NewChatForm,
    ChatWindow
  },
  setup() {
    const router = useRouter()
    const { user, error } = getUser() 

    watch(user, () => {
      if(!user.value) {
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
  text-align: left;
  color: #444;
}
nav p.email {
  font-size: 14px;
  color: #999;
}

@media (max-width: 540px) {
  nav {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
  nav button {
    background-color: white;
    color: #699fd4;
    padding: 0;
  }
}
</style>