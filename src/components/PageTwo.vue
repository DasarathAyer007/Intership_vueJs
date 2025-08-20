<template>
  <div class="tab-content">
    <h3>Page Two</h3>
    <p>This is Page Two content for the dynamic component.</p>

     <label for="">PageTwoData:</label>
    <input type="text" name="" id="" v-model="text">
  </div>
</template>

<script>
export default {
    name:"PageTwo",
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
  background: #918c8c;
  color: #f1f1f1;
}

.tab-content h3 {
  margin: 0 0 8px;
  color: #e2e2e2;
}

.tab-content p {
  margin: 0;
  font-size: 14px;
  
}
</style>