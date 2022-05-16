<template>
  <div class="layout">
    <nav-bar class="navbar-wrapper"></nav-bar>

    <div class="content">
      <menu-bar class="menu-wrapper"></menu-bar>
      <main-app class="main-wrapper"/>
    </div>
  </div>
</template>

<script lang="ts" setup>
import MenuBar from "./Menu.vue"
import NavBar from "./NavBar.vue"
import MainApp from "./Main.vue"

</script>

<style lang="scss" scoped>
.layout {
  height: 100vh;
  display: flex;
  flex-direction: column;

  > .navbar-wrapper {
    flex-shrink: 0;
    z-index: 10;
  }
  > .content {
    flex-grow: 1;
  }
}

.content {
  display: flex;

  > .menu-wrapper {
    flex-shrink: 0;
  }

  > .main-wrapper {
    flex-grow: 1;
    overflow: auto;
  }
}
</style>
