<template>
  <div id="app">
    <nav-bar/>
    <router-view/>
  </div>
</template>

<script>
import NavBar from '@/components/navbar/NavBar.vue'
export default({
  components: {NavBar},
  name: 'app'
})
</script>


<style>
 @import "assets/css/base.css"
</style>
