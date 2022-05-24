<template>
    <div class="login-wrapper">
        <el-form class="login-from" :model="form" label-width="auto">
            <el-form-item label="用户名">
                <el-input v-model="form.name" clearable/>
            </el-form-item>

            <el-form-item label="密码">
                <el-input v-model="form.password" show-password/>
            </el-form-item>
        
            <el-form-item>
                <el-button type="primary" @click="onLogin">Login</el-button>
                <el-button>Register</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'

const strore = useStore()
const router = useRouter()
// do not use same name with ref
const form = reactive({
  name: '',
  password: '',
})

const onLogin = () => {
    const username = form.name
    const password = form.password
    //什么用户都能能登陆
    strore.dispatch('loginUser', {username, password})
    console.log('login success!')
    router.push('./')
    
}
</script>

<style lang="scss">
    .login-wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        border: 1px solid red;
        height: 600px;

    
    }
</style>   
