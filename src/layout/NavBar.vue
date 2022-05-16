<template>
  <div class="navbar">
    <div class="logo">
      <span>LOGO</span>
    </div>

    <div class="el-avatar">
      <div class="photo">
        <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" shape="circle"/>
      </div>

      <div class="username">
        <el-dropdown @command="handleCommand">
           <span class="el-dropdown-link">
             贺飞雄
             <el-icon class="el-icon--right">
               <arrow-down/>
             </el-icon>
           </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item command="a">退出登陆</el-dropdown-item>
              <el-dropdown-item command="b" disabled>不能用</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {ElMessage} from 'element-plus';
import {ArrowDown} from '@element-plus/icons-vue';

const handleCommand = (command: string | number | object) => {
  ElMessage(`click on item ${command}`);
};
</script>

<style lang="scss">
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 48px;
  overflow: hidden;
  position: relative;
  background: #ffffff;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);;

  > .logo{
    height: 48px;
    width: 48px;
    margin-left: 4px;
  }
}

.el-avatar {
  display: flex;
  height: 40px;
  align-items: center;
  border-radius: 25px;
  background: #f1f2f7;
  > .photo {
    flex: 1;
    height: 40px;
    width: 40px;
    margin-right: 4px;
    text-align: center;

  }

  > .photo:not(:last-child) {
    border-right: 1px solid var(--el-border-color);
  }

  > .username {
    margin-right: 4px;
    > .example-showcase .el-dropdown-link {
      cursor: pointer;
      color: var(--el-color-primary);
      display: flex;
      background: white;
      align-items: center;
    }
  }
}

</style>
