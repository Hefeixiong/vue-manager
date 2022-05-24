<template>
  <el-table :data="filterTableData" style="width: 100%">
    <el-table-column label="Date" prop="date" />
    <el-table-column label="Name" prop="name" />
    <el-table-column label="Address" prop="address" />
    <el-table-column align="right">
      <template #header>
        <el-input v-model="search" size="small" placeholder="Type to search" />
      </template>
      <template #default="scope">
        <el-button size="small" @click="handleEdit(scope.$index, scope.row)"
        >Edit</el-button
        >
        <el-button
            size="small"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
        >Delete</el-button
        >
      </template>
    </el-table-column>
  </el-table></template>

<script lang="ts" setup>

import { computed, onMounted, ref } from 'vue'
import { mapState, useStore} from 'vuex';
import {UserState} from '../store/modules/user';


const store = useStore()
const arr = mapState({})
console.log(arr)
store.dispatch('getInfo')
//tableDate是Array
const tableData = [{
  name: store.state.user.name,
  date: store.state.user.date,
  address: store.state.user.address
}]

const search = ref('')

const filterTableData = computed(() =>
    tableData.filter(
        (data) =>
            !search.value ||
            data.name.toLowerCase().includes(search.value.toLowerCase())
    )
)



const handleEdit = (index: number, row: UserState) => {
  console.log(index, row)
}
const handleDelete = (index: number, row: UserState) => {
  console.log(index, row)
}

</script>

<style lang="scss" scoped>

</style>

function getInfo() {
  throw new Error('Function not implemented.');
}
