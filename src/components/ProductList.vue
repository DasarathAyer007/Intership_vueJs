<template>
  

<div class="container">
    <div v-for="product in products" :key="product.id" class="card">
    <router-link :to="`/product/${product.id}`">
      <img :src="product.image" alt="product" class="product-img" />
    </router-link>

      <div class="card-body">
        <h3 class="title">{{ product.title }}</h3>
        <div class="meta">
          <span class="price">💰 ${{ product.price }}</span>
          <span class="category">📦 {{ product.category }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
    data(){
        return{
            products:[]
        }
    },
    async created(){
      try{
        const resp= await axios.get('https://fakestoreapi.com/products')
        this.products=resp.data
      }catch(error){
        console.error(error)
      }
    },
    methods:{
        getProduct(){
           
        }
    }

}
</script>

<style scoped>
/* Container as grid */
.container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  padding: 20px;
}

/* Card styling */
.card {
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
  overflow: hidden;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  display: flex;
  flex-direction: column;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 15px rgba(0,0,0,0.15);
}

/* Product image */
.product-img {
  width: 100%;
  height: 200px;
  object-fit: contain;
  background: #f9f9f9;
  padding: 10px;
}

/* Card content */
.card-body {
  padding: 15px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

/* Title */
.title {
  font-size: 1.1rem;
  margin-bottom: 8px;
  color: #333;
}

/* Description */
.description {
  font-size: 0.9rem;
  color: #555;
  flex-grow: 1;
  margin-bottom: 12px;
  line-height: 1.4;
}

/* Meta info */
.meta {
  display: flex;
  justify-content: space-between;
  font-size: 0.9rem;
  font-weight: 500;
}

.price {
  color: #e63946;
}

.category {
  color: #457b9d;
}
</style>
