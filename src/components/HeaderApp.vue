<template>
  <header class="navbar">
    <div>
       <router-link to="/" class="logo">Demo</router-link> 
    <!-- <h2 class="logo">Demo</h2> -->
     <router-link to="/about" class="logo">About</router-link>
     <router-link to="/add-product" class="logo">Add</router-link>
     <router-link to="/laravel-product" class="logo">LaravelProduct</router-link>
    </div>

    <div class="search-box">
      <label for="search">Search</label>
      <input type="text" id="search" placeholder="Search...">
    </div>
  </header>
</template>

<script>
export default {

}
</script>

<style scoped>
/* Main header styling */
.navbar {
  background-color: rgb(238, 98, 47);
  display: flex;
  justify-content: space-between; /* spread logo & search */
  align-items: center;
  padding: 10px 20px;
  color: white;
  box-shadow: 0 2px 6px rgba(0,0,0,0.2);
}

/* Logo */
.logo {
    color:white;
    text-decoration: none;
  margin: 0 10px;

  font-size: 1.5rem;
  font-weight: bold;
}
.logo:hover{
    color:gray;
}

/* Search box */
.search-box {
  display: flex;
  align-items: center;
  gap: 8px;
}

.search-box label {
  font-size: 0.9rem;
  font-weight: 500;
}

.search-box input {
  padding: 6px 10px;
  border-radius: 6px;
  border: none;
  outline: none;
  font-size: 0.9rem;
}
</style>
