<template>
  <div id="navbar" class="sticky">
    <router-link :to="'/'">Home</router-link>
    <router-link :to="'/other'">Other</router-link>
  </div>
</template>

<style>
#navbar {
  overflow: hidden;
  background-color: #aff0d2;
  padding: 0 14px ;
}

#navbar a {
  float: left;
  
  display: block;
  color: #555;
  text-align: center;
  padding: 14px;
  text-decoration: none;
}

#navbar a:hover {
  color: black;
  cursor: pointer;
}

.sticky {
  position: fixed;
  top: 0;
  width: 100%;
}

</style>
