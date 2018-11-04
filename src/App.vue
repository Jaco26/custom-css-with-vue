<template>
  <div id="app">
    <app-navbar></app-navbar>
    <div class="container">
      <div class="row">
        <div class="f1 ">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import appNavbar from './components/Navbar.vue'
export default {
  name: 'app',
  components: {
    appNavbar,
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

.container {
  display: block;
  padding: 60px;
}

.row {
  display: flex;
}

.wrap {
  flex-wrap: wrap;
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

 .main-content-adjust-enter-active {
    animation: main-content-adjust 0.5s ease-in-out normal;
  }

  .main-content-adjust-leave-active {
    animation: main-content-adjust 0.5s ease-in-out reverse;
  }

  @keyframes main-content-adjust {
    from {
      left: 0;
    }
    to {
      left: 200px;
    }
  }

</style>
