<template>
<br>
    <h4>This is List ListRendring</h4>
    <ul>
        <li v-for="(name, index) in superheros" :key="name">{{ index }}-> {{ name }}</li>
    </ul>

</template>

<script>

export default{
    name:'ListRendring',
    data(){
        return{
            superheros:['batman','ironman','superman','antman','aquaman']
        }
    }
}

</script>

<style>

</style>