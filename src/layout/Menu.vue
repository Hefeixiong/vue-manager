<template>
  <!--    <el-radio-group v-model="isCollapse" style="margin-bottom: 20px">-->
  <!--      <el-radio-button :label="false">expand</el-radio-button>-->
  <!--      <el-radio-button :label="true">collapse</el-radio-button>-->
  <!--    </el-radio-group>-->
  <div class="menu">
    <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        :collapse="isCollapse"
        @open="handleOpen"
        @close="handleClose"
    >
      <el-menu-item index="1">
        <el-icon>
          <HomeFilled/>
        </el-icon>
        <template #title>首页</template>
      </el-menu-item>

      <router-link to="/user">
        <el-menu-item index="2">
          <el-icon>
            <User/>
          </el-icon>
          <span>用户管理</span>
        </el-menu-item>
      </router-link>

      <el-sub-menu index="3">
        <template #title>
          <el-icon>
            <Menu/>
          </el-icon>
          <span>组件</span>
        </template>
        <el-menu-item-group>
          <template #title><span>Group One</span></template>
          <el-menu-item index="3-1">item one</el-menu-item>
          <el-menu-item index="3-2">item two</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="Group Two">
          <el-menu-item index="3-3">item three</el-menu-item>
        </el-menu-item-group>
        <el-sub-menu index="3-4">
          <template #title><span>item four</span></template>
          <el-menu-item index="3-4-1">item one</el-menu-item>
        </el-sub-menu>
      </el-sub-menu>

      <el-menu-item index="4" disabled>
        <el-icon>
          <document/>
        </el-icon>
        <template #title>禁用</template>
      </el-menu-item>

      <el-menu-item index="5">
        <el-icon>
          <setting/>
        </el-icon>
        <template #title>设置</template>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script lang="ts" setup>
import {ref} from 'vue';
import {
  Document,
  HomeFilled,
  User,
  Menu,
  Setting,
} from '@element-plus/icons-vue';

const isCollapse = ref(false);
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
</script>

<style lang="scss" scoped>

.menu {

  > .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }

}


</style>
