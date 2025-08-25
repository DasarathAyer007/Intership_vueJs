<template>
<h1>State Mangement</h1>
<CounterNum/>

<form-validate/>


</template>

<script>
import CounterNum from './components/CounterNum.vue';
import FormValidate from './components/FormValidate.vue';

export default {
  name: "App",
  components:{
    CounterNum,FormValidate
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
