<template>
    <div class="counter">
    <h1>Counter</h1>
    <h3>{{ $store.state.counter }}</h3>
    <pre>{{ $store.state.counter }}<sup>2</sup>: {{ $store.getters.counterSqare }}</pre>
  </div>

<div class="button">
<button @click="$store.commit('increaseCounter')">+</button>
<button @click="$store.commit('decreaseCounter')">-</button>
<br>
<button @click="$store.dispatch('getNumber')">RandomNumber</button>
</div>


<div class="change-color">
  <label for="">Color</label>
  <input type="text" v-model="colorCode">
  <label for="">background:</label>
  <input type="text" v-model="backgroundColorCode">

</div>
</template>

<script>
export default {
  name: "CounterNum",

  computed:{
    colorCode:{
      get(){
        return this.$store.state.colorCode
      },
      set(color){
        this.$store.commit('setColorCode',color)

      }
    },
    backgroundColorCode:{
      get(){
        return this.$store.state.backgroundColorCode
      },
      set(color){
        this.$store.commit('setBackgroundColorCode',color)
      }
    }

  }
};
</script>

<style scoped>
.counter{
  color:v-bind(colorCode);
  background-color: v-bind(backgroundColorCode);
}
.counter {
  text-align: center;
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 20px;
  font-size: 1.2rem;
}
.button{
  display: flex;
  justify-content: center;
}
button {
  padding: 10px 20px;
  margin: 5px;
  font-size: 1rem;
  cursor: pointer;
  border-radius: 5px;
  border: 1px solid #ccc;
  transition: all 0.3s;
}

button:hover {
  background-color: #eee;
}

.change-color {
  text-align: center;
    margin-top: 20px;
}

input {
  margin: 0 10px 10px 0;
  padding: 5px;
  border-radius: 5px;
  border: 1px solid #ccc;
}

</style>