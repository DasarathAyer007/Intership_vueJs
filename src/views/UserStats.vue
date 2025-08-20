<template>
  <div class="usestats">
    <h3>📊 User Stats for {{ $route.params.name }}</h3>
    <ul>
      <li>Quizzes Taken: 12</li>
      <li>Highest Score: 95%</li>
      <li>Average Score: 82%</li>
    </ul>
  </div>
</template>

<script>
export default {

    data(){
        return{
            name:''
        }
    }
}
</script>

<style scoped>
.usestats {
  background: #f9fafb;          /* light background */
  border: 1px solid #ddd;       /* subtle border */
  border-radius: 12px;          /* rounded corners */
  padding: 20px;                /* spacing inside */
  margin-top: 15px;             /* space above */
  box-shadow: 0 2px 6px rgba(0,0,0,0.08); /* soft shadow */
  max-width: 400px;
}

.usestats h3 {
  margin-bottom: 12px;
  font-size: 18px;
  color: #333;
}

.usestats ul {
  list-style: none;
  padding: 0;
}

.usestats li {
  margin: 6px 0;
  padding: 6px 10px;
  background: #fff;
  border-radius: 8px;
  border: 1px solid #eee;
}

</style>