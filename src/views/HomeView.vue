<template>


  <div class="switch-page">
    <button @click="activePage='PageOne'">PageOne</button>
    <button @click="activePage='PageTwo'">PageTwo</button>
  </div>


<keep-alive>
  <component :is="activePage"/>
</keep-alive>

</template>

<script>
import PageOne from '../components/PageOne.vue';
import PageTwo from '../components/PageTwo.vue';
import InfoPop from '../components/InfoPop.vue';

export default {
  name: "App",
  components:{
    PageOne,PageTwo,InfoPop
  },
  data(){
    return{
      activePage:'PageOne',
      infoPop:false
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
.switch-page{
  display:flex;
  justify-content: center;
  margin-top: 20px;


}
.switch-page  button{
    width: 100%;
    padding:10px;
}
</style>
