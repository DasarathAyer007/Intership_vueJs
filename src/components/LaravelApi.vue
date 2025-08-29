<template>
    <table>
        <tr>
            <th>id</th>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
        </tr>
        <tr v-for="product in products" :key="product.id">
            <td>{{product.id}}</td>
            <td>{{product.name}}</td>
            <td>{{product.price}}</td>
            <td>{{product.quantity}}</td>
        </tr>
    </table>
  
</template>

<script>
import axios from 'axios';

export default {
    data(){
        return{
            products:[]

        }
    },
    mounted(){
        axios('http://127.0.0.1:8000/api/products')
        .then(response=>{
            this.products=response.data
            console.log(this.products)
        })
    }

}
</script>

<style scoped>
table {
    width: 100%;
    border-collapse: collapse;
    font-family: Arial, sans-serif;
    margin: 20px 0;
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}

th, td {
    padding: 12px 15px;
    text-align: left;
}

th {
    background-color: rgb(238, 98, 47); /* main header color */
    color: white;
    font-weight: bold;
}


td {
    border-bottom: 1px solid rgb(238, 98, 47); /* subtle row border */
}
</style>