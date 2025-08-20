<template>

    <div>
        <h3>This  is popUp</h3>

        <button v-on:click="$emit('closePopUp',false)">
            close
        </button>
       <button @click="closePoUp()">
            close(method)
        </button>
    </div>
    
</template>

<script>
export default {
    emit:["closePopUp"],
    methods:{
        closePoUp(){
            this.$emit('closePopUp',false)
        }
    }


    }
</script>

<style scoped>
div{
    background-color: aqua;
    padding:20px;
    display:inline-block;
}
</style>