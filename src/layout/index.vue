<template>
  <div class="layout">
    <SideBar class="sidebar" />
    <AppMain class="app_main" />
  </div>
</template>

<script>
import SideBar from "./sidebar";
import AppMain from "./appMain";
export default {
  components: { SideBar, AppMain }
};
</script>

<style lanng="scss" scoped>
.layout {
  display: flex;
  width: 100%;
  height: 100%;
}
.sidebar {
  width: 260px;
}
.app_main {
  width: calc(100%-260px);
  transition:all ease-in-out .5s;
}
</style>