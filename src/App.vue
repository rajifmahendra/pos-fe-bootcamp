<template>
  <div id="app">
    <NavbarMain />
  </div>
  <RouterView /> 
</template>

<script>
import NavbarMain from "./components/NavbarMain.vue";
import {RouterView} from "vue-router";
export default {
  name: 'App',
  components: {
    NavbarMain,
    RouterView
  }
}
</script>