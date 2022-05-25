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

import { computed, ref } from 'vue'
import { useStore} from 'vuex';
import {UserState} from '../store/modules/user';


const store = useStore()
//tableDate是Array
const tableData = store.getters.getUsers || []

const search = ref('')

const filterTableData = computed(() =>
    tableData.filter(
        //@ts-ignore
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
