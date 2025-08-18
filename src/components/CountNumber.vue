<template>
    <div class="container">
        this is a counter:
        <h1>{{ count}}</h1>
        <button @click="increaseCounter(1,$event)">Increase</button>
        <button v-on:click="decreaseCounter(1)">Decrease</button>


    </div>
    

</template>

<script>
export default{
    name:'AddComponet',
    data(){
        return{
            count:0,
            a:20
        }
    },
    methods:{
        increaseCounter(unit,event){
            this.count+=unit;
            console.log(event)
        },
        decreaseCounter(unit){
            
            if(this.count-unit>=0){
                this.count-=unit
            }
        }
    }
}

</script>


<style scoped>
.container{
    text-align: center;
    display:inline-block;
    background-color: grey;
    padding:20px;
    color:white;
}

</style>