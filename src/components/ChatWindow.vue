<template>
  
</template>

<script>
import getCollection from '@/composables/getCollection'

export default {
  setup() {
    const { documents, error } = getCollection('messages')

    return { documents, error }
  }
}
</script>

<style>

</style>