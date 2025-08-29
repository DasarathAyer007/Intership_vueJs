<template>

<div class="container">
    <div class="left">
      <h3 class="title">{{ product.title }}</h3>
      <img :src="product.image" alt="product" class="product-img" />
      <div class="meta">
        <span class="price">💰 ${{ product.price }}</span>
        <span class="category">📦 {{ product.category }}</span>
      </div>
    </div>

    <div class="right">
      <h4>Product Description</h4>
      <p class="description">{{ product.description }}</p>
    </div>
  </div>

</template>
      

<script>
import axios from 'axios';

export default {
    data(){
        return{
          id: this.$route.params.id, 
          product:{}
        }
    },

    mounted(){
        console.log(this.id)
        axios.get(`https://fakestoreapi.com/products/${this.id}`)
        .then(resp=>{
            console.log(resp)
            this.product=resp.data
            console.log(this.product)
        })
        .catch(error=>{
          console.error(error)
        })
    }

}
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 2rem;
  padding: 2rem;
  max-width: 1000px;
  margin: auto;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}

.left {
  flex: 2;
  text-align: center;
  border-right: 1px solid #eee;
  padding-right: 1.5rem;
}

.title {
  font-size: 1.6rem;
  font-weight: bold;
  margin-bottom: 1rem;
  color: #333;
}

.product-img {
  width: 250px;
  height: auto;
  object-fit: contain;
  margin-bottom: 1rem;
}

.meta {
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  font-size: 1.1rem;
}

.price {
  color: #27ae60;
  font-weight: bold;
}

.category {
  color: #2980b9;
  font-weight: 500;
}

.right {
  flex: 2;
  padding-left: 1.5rem;
}

.right h4 {
  font-size: 1.3rem;
  margin-bottom: 0.8rem;
  color: #444;
}

.description {
  font-size: 1rem;
  color: #555;
  line-height: 1.6;
}
</style>