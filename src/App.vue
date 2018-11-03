<template>
  <div id="app">
    <app-navbar></app-navbar>
    <app-side-nav :show-if="showSideNav"></app-side-nav>
    <transition name="main">
      <div ref="main" class="row tc">
        <div class="f1">
          <button @click="showSideNav = !showSideNav">Toggle Sidenav</button>
          <router-view></router-view>
        </div>
        
      </div>
    </transition>
    
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
      showSideNav: true,
    }
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.active-link {
  color: #efefef;
}

.tc {
  text-align: center;
}

.ts {
  text-align: start;
}

.te {
  text-align: end;
}

.row {
  display: flex;
}

.f1 {
  flex: 1;
}

.f2 {
  flex: 2;
}

.f3 {
  flex: 3;
}

.f4 {
  flex: 4;
}

.f5 {
  flex: 5;
}

</style>
