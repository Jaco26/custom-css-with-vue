<template>
  <transition name="sidenav">
    <div v-if="showIf" id="sidenav">
      <router-link href="">Hello</router-link>
      <router-link href="">Hi</router-link>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    showIf: Boolean,
  }
}
</script>

<style scoped>

#sidenav {
  height: 100%;
  width: 200px;
  position: fixed;
  z-index: 1;
  background-color: #222;
  overflow-x: hidden;
  padding-top: 60px;
}

#sidenav router-link {
  padding: 8px 8px 8px 32px;
  text-decoration: none;
  font-size: 20px;
  color: #818181;
  display: block;
}

#sidenav router-link:hover {
  color: #f1f1f1;
  cursor: pointer;
}


.sidenav-enter-active {
  animation: sidenav-show .5s ease-in-out;
}

.sidenav-leave-active {
  animation: sidenav-show .5s reverse ease-in-out;
}

@keyframes sidenav-show {
  0% {
    left: -200px;
  }
  100% {
    left: 0px;
  }
}

</style>
