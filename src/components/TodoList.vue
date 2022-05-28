<template>
  <el-card class="box-card">
    <template #header>
      <div class="card-header">
        <el-input v-model="newList" placeholder="请输入项目"/>
        <el-button class="button" text @click="addList">add todo</el-button>
      </div>
    </template>
    <div class="card-body" v-for="todo in todoList" :key="todo.id">
      <el-checkbox v-on:change="isDone"/>
      <el-card  class="text item" :body-style="{padding: '9px'}">{{todo.text }}</el-card>
      <el-button type="danger" :icon="Delete" @click="removeList(todo)" circle />
    </div>
  </el-card>
</template>

<script lang="ts" setup>
import { ref } from "@vue/reactivity"
import {
  Check,
  Delete,
  Edit,
  Message,
  Search,
  Star,
} from '@element-plus/icons-vue'
let id = 0
let isDone = false
const newList =  ref('')
const todoList = ref([
  {id: id++, text: '写代码'},
  {id: id++, text: '看文档'},
  {id: id++, text: '提交代码'},
  {id: id++, text: '我还能继续'},
])

function addList() {
  if (newList.value !== '') {
    todoList.value.push({id: id++, text: newList.value})
    newList.value = ''
  } else {
    ElMessage('请输入内容')
  }
}
//@ts-ignore
function removeList (todo) {
  console.log(todo)
  todoList.value = todoList.value.filter((t) => t !== todo)
}
</script>

<style lang="scss">
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;

  
}
.card-body {
  display: flex;
  justify-content: space-between;
  align-items: center;
  > el-radio {
    margin: 0;
  }
  > .text {
      font-size: 14px;
      margin-right: 2px;
      width: 300px;
  }

  > .item {
      margin-bottom: 4px;
    }
}



.box-card {
  width: 480px;
}
</style>

function addList() {
  throw new Error("Function not implemented.")
}
