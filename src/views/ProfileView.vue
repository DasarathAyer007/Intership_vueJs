<template>
  
    <div class="profile">
    <h2>This is profile: {{ name }}</h2>

    <router-link :to="`/profile/${name}/stats`" class="stats-link">
      Show Stats
    </router-link>

    <router-view></router-view>
  </div>
</template>

<script>
import { useRoute } from 'vue-router';
export default {

    data(){
        return{
            name:''
        }
    },
    mounted(){
        this.name=useRoute().params.name
    }

}
</script>

<style scoped>
.profile {
  max-width: 500px;
  margin: 20px auto;
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 10px;
  background: #f9f9f9;
  text-align: center;
}

.profile h2 {
  margin-bottom: 10px;
  color: #333;
}

.stats-link {
  display: inline-block;
  margin: 10px 0;
  padding: 8px 14px;
  background: #4f46e5;
  color: white;
  text-decoration: none;
  border-radius: 6px;
  transition: background 0.2s;
}

</style>