<template>
  <div id="app">
    <app-navbar></app-navbar>
    <app-side-nav :show-if="showSideNav"></app-side-nav>
    <div ref="main">
      <button @click="showSideNav = !showSideNav">Toggle Sidenav</button>
    </div>
  </div>
</template>

<script>
import appSideNav from './components/SideNav.vue'
import appNavbar from './components/Navbar.vue'
export default {
  name: 'app',
  components: {
    appSideNav,
    appNavbar
  },
  data() {
    return {
      showSideNav: false,
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}

/* #main {
  transition: margin-left .5s;
  padding: 16px;
} */


</style>
