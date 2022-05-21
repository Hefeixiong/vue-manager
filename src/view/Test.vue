<template>
  <div>{{ message }}</div>
</template>

<script lang="ts" setup>
import axios from 'axios';

const message = axios.get('static/user.json').then(response => {
  let data = response.data
  return data
})



console.log(message)
</script>

<style lang="scss" scoped>

</style>
