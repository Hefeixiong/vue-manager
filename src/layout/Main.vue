<template>
  <router-view v-slot="{Component}">
    <transition mode="out-in">
      <keep-alive>
        <component :is="Component"/>
      </keep-alive>
    </transition>
  </router-view>
</template>

<script lang="ts" setup>

</script>

<style lang="scss" scoped>

</style>
