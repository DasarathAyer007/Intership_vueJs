<template>
    <div>
        <h2>Example of Watcher</h2>
        <h3>Value: {{ value }}</h3>
        <button @click="increase()">Increase</button>
        <button @click="decrease()">Decrease</button>


        <p>{{ message }}</p>

    </div>
    
</template>


<script>
export default{
    data(){
        return{
            value:100,
            message:"this is a messge"

        }
    },

    methods:{
        increase(){
            this.value++
        },
        decrease(){
            this.value--
        }

    },
    watch:{
        value(newValue,oldValue){
            this.message=`change value from ${oldValue}  to  ${newValue}` 
        }
    }

}

</script>

<style scoped>
div{
    margin: 20px 0px ;
    background-color: gray;
    color:white;
    text-align: center;
}
</style>