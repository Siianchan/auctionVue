<template>
  <div id="app">
    <TopMenu />
    <!-- <img src="./assets/logo.png" /> -->
    <router-view />
  </div>
</template>

<script>
import TopMenu from "@/components/TopMenu";
export default {
  name: "App",
  components: {
    TopMenu,
  },
};
</script>

<style>
#app {
  font-family: Microsoft YaHei;
  margin: 0;
  padding: 0;
}
body {
  margin: 0;
  padding: 0;
}
</style>
