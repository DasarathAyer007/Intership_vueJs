<template>
  <div>
    <div class="header">
      <slot name="header"> </slot>
    </div>
    <div class="main">
    <slot></slot>
    </div>
    <div class="footer">
        <slot name="footer"></slot>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>

div{
    margin:10px ;
    box-shadow: 10px;
    border: 5px black;
    padding:5px;
    background-color: gray;
    display:inline-block;
}
.header{
  background-color: red;
}

.main{
  background-color: black;
  color:white;

}

.footer{
  background-color:green;
  color:white;
}


</style>