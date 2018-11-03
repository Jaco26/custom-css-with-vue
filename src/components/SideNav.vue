<template>
  <div :style="`width: ${navWidth}px;`" ref="sidenav" id="sidenav">
    <router-link to="/" >Hello</router-link>
    <router-link to="/other">Hi</router-link>
  </div>
</template>

<script>
export default {
  props: {
    showIf: Boolean,
  },
  data() {
    return {
      navWidth: 0,
      mainMarginLeft: '0px',
      tTime: 0.5,
    };
  },
  watch: {
    showIf: {
      handler(val) {
        if (val) {
          this.navWidth = 200;
          this.mainMarginLeft = '200px';
        } else {
          this.navWidth = 0;
          this.mainMarginLeft = '0px';
        }
        this.applyStyleToMain();
      }
    }
  },
  methods: {
    applyStyleToMain() {
      const main = this.$parent.$refs.main;
      main.style.marginLeft = this.mainMarginLeft;
    },
    handleResize(e) {
      if (e.target.innerWidth > 762) {
        this.navWidth = 200;
      } else {
        this.navWidth = 0;
      }
    }
  },
  computed: {
    show() {
      return window.innerWidth > 762;
    },
    
  },
  mounted() {    
    const main = this.$parent.$refs.main;
    const sidenav = this.$refs.sidenav;

    this.navWidth = window.innerWidth > 762 ? 200 : 0;
    this.mainMarginLeft = window.innerWidth > 762 ? '200px': '0px'
    window.addEventListener('resize', this.handleResize);

    main.style.transition = `margin-left ${this.tTime}s`
    main.style.padding = '20px';
    sidenav.style.transition = `${this.tTime}s`;
  }
}
</script>

<style scoped>

#sidenav {
  height: 100%; /* 100% Full-height */
  position: fixed; /* Stay in place */
  z-index: 1; /* Stay on top */
  top: 0;
  left: 0;
  background-color: #111; /* Black*/
  overflow-x: hidden; /* Disable horizontal scroll */
  padding-top: 60px; /* Place content 60px from the top */
  transition: 0.5s; /* 0.5 second transition effect to slide in the sidenav */
}

#sidenav a {
  padding: 8px 8px 8px 32px;
  text-decoration: none;
  font-size: 20px;
  color: #818181;
  display: block;
}

#sidenav a:hover {
  color: #f1f1f1;
  cursor: pointer;
}


</style>
