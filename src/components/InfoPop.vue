<template>
  <div class="container">
    <h1>This is info</h1>
    <h3>{{ firstName }}  {{ lastName }}</h3>

    <p>{{ detail }}</p>


    <button @click="$emit('closeInfo')">close</button>
  </div>
</template>

<script>
export default {

    emit:['closeInfo'],
    data(){
        return{
            firstName:"Dasarath",
            lastName:"Ayer",
            detail:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. A magni aut deserunt dignissimos voluptas minus, repudiandae necessitatibus et aliquid corporis dolores accusantium sint laboriosam voluptatem reiciendis officiis ratione voluptate asperiores"
        }
    }

}
</script>

<style scoped>
.container {
  width: 800px;
  max-width: 90%;
  padding: 20px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%); /* centers horizontally & vertically */
  background: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
}

</style>