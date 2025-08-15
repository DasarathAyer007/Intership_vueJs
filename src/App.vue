<template>
<Header/>


<conditional/>

<List/>



</template>

<script>
import Header from './components/AppHeader.vue'
import Conditional from './components/ConditonalRender.vue'
import List from './components/ListRendring.vue'

export default {
  name: "App",
  components:{
    Header,
    Conditional,
    List
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: #2c3e50;

}
</style>
