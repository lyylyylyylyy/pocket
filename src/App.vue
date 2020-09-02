<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
    <Index v-show="$route.name!=='Login' && $route.name!=='Register'"></Index>
  </div>
</template>

<script>
import Index from './components/Index'
export default {
  name: 'App',
  components: {Index},
  mounted () {
    console.log(this.$route.name)
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
  margin-top: 60px;
}
</style>
