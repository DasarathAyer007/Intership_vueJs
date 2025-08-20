<template>
<button @click="showPopUp=true">Show</button>
<PopUp v-show="showPopUp" v-on:closePopUp="closPopUp"/>

<MyCard>
  <template v-slot:header>
    <h1>Header</h1>
  </template>

  <template v-slot:default>
    <h3>This is Default</h3>

  </template>

  <template v-slot:footer>
      <h3>This is footer</h3>
  </template>

</MyCard>


</template>

<script>
import PopUp from './components/PopUp.vue';
import MyCard from './components/MyCard.vue';



export default {
  name: "App",
  components:{
    PopUp,MyCard
  },

  data(){
    return{
      showPopUp:false
    }
    
  },
  methods:{
    closPopUp(what){
      this.showPopUp=what
    }
  }
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
