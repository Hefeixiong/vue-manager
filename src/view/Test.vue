<template>
  <div>{{tableData}}</div>
</template>

<script lang="ts" setup>
import { useStore } from "vuex";
import { get } from "../utils/localStorage";
const store = useStore()



const username = 'hfx'
const password = '123456'
store.dispatch('loginUser' , {username, password})
const tableData = get('user')
debugger
console.log(tableData)

</script>

<style lang="scss" scoped>

</style>
