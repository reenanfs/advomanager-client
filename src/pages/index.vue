<template>
  <div>Home</div>
  <v-btn @click="callHealth">Test</v-btn>
</template>

<script lang="ts" setup>
  import api from '@/api/axios'

  const callHealth = async () => {
    const res = await api.post('api/v1/health', { oi: 'haha' })
    console.log(res)
  }
</script>
