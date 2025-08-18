<template>
<CountNumber/>

<Form/>


<conditional/>

<List/>



</template>

<script>
import CountNumber from './components/CountNumber.vue'
import Form from './components/SimpleForm.vue'

export default {
  name: "App",
  components:{
    CountNumber,Form
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
