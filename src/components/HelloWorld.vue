<template>
  <div class="hello">
    <button @click="showMsg = !showMsg">Click Me</button>
    <transition name="fade">
      <h1 v-if="showMsg" style="font-size: 70px;">{{msg}}</h1>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      showMsg: false,
    }
  },
  computed: {
    msg() {
      return this.showMsg ? 'Hello Caroline' : 'Bye bye Caroline';
    },
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.fade-enter-active {
  transition: all 0.3s ease-in-out;
}

.fade-leave-active {
  transition: all 1s cubic-bezier(0.075, 0.82, 0.165, 1);
}

.fade-enter, .fade-leave-to {
  transform: translateX(30px);
  opacity: 0;
}


</style>
