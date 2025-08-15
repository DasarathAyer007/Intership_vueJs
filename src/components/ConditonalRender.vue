<template>
    <br> <br>

    <label for="">Age: </label><br>
    <input type="text" name="" id="" v-model="Age">

    <template v-if="Age >= 100">
        <h1>You Still Alive</h1>
    </template>
    <template v-else-if="Age >= 80">
        <h1>Heave i waiting for you</h1>
    </template>
    <template v-else-if="Age>=18">
        <h1>You are a 18+</h1>
    </template>
    <template v-else>
        <h1>You are a kid</h1>
    </template>
    <div class="v-show">
        <button v-on:click="display=!display">v-show</button>
        <div v-show="display">
            this is v Show same as v-if but it is render in the html 
        </div>
    </div>
   

</template>

<script>
export default {
    name: "conditionalRender",
    data() {
        return {
            Age: 2,
            isAdult: true,
            display:false
        }

    }

}
</script>

<style>
.v-show{

    float:left;
}
</style>