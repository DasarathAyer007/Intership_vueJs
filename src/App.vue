<template>


<computedProperty   firstName="Dasarath" lastName="Ayer"/>
<watcherExample/>


</template>

<script>
import computedProperty from './components/computedProperty.vue';
import watcherExample from './components/watcherExample.vue';

export default {
  name: "App",
  components:{
    computedProperty,watcherExample
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
