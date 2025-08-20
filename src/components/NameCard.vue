<template>
    <div class="name-card">
          
    <slot :firstName="firstName" :lastName="lastName">
    </slot>
    </div>
</template>

<script>
export default {
name:"NameCard",
data(){
    return{
        firstName:"Dasarath",
        lastName:"Ayer"
    }
}
}
</script>

<style scoped>
.name-card {
  width: 250px;
  padding: 6px;
  border: 2px solid #333;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 2px 2px 8px rgba(0,0,0,0.1);
  text-align: center;
  font-family: Arial, sans-serif;
}
.name-card:hover{
    background-color: gray;
    color:white;
    cursor: pointer;
}


</style>