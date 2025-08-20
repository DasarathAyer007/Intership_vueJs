<template>
  <div class="tab-content">
    <h3>Page One</h3>
    <p>This is Page One content for the dynamic component.</p>

    <label for="">PageOneData:</label>
    <input type="text" name="" id="" v-model="text">
  </div>
</template>

<script>
export default {
    name:"PageOne",
    data(){
        return{
            name:""
        }
    }

}
</script>

<style scoped>
.tab-content {
  border: 1px solid #ddd;
  padding: 12px;
  border-radius: 6px;
  background: #f9f9f9;
}

.tab-content h3 {
  margin: 0 0 8px;
  color: #333;
}

.tab-content p {
  margin: 0;
  font-size: 14px;
  color: #555;
}
</style>