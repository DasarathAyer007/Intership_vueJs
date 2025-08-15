<template>
<header>
    <h1 v-bind:id="headingId" :class="[textUnderline,status]" >
        Name: {{ name }}
    </h1>
    <p v-html="email">
    </p>
    
</header>

<main>

<p>two way binding</p>
<input type="text" name="" id="" v-model="name">
</main>

</template>
<script>
export default{
    name:"AppHeader",
    data(){
        return{
            name:'Dasarath',
            email:'<i>Dasarath@gmail.com</i>',
            headingId:"hid",
            headingClass:'hclass',
            textUnderline:'underline',
            status:'sucess'
        }
    }
}
</script>

<style scoped>

header{
    background-color: grey;
    color:black;
      text-align: center;
}
.underline{
    text-decoration: underline dotted red;
}
.sucess{
    color: rgb(141, 223, 141);
}
main{
    text-align: left;
    display:inline-block;
    margin:0px;
}
p{
    margin:0px;
}

</style>