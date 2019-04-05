<template>
  <div id="app">
    <Navigation v-if="currentUser"></Navigation>
    <router-view/>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Navigation from './components/Navigation.vue'
  
export default {
  name: 'App',
  components: { Navigation },
  computed: {
    ...mapState(['currentUser'])
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
