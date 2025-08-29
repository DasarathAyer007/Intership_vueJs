<template>
    <div class="form-container">
        <h2 ref="headingref"></h2>
        <form @submit.prevent="addProduct">

            <!-- Title -->
            <div class="form-group">
                <label for="title">Title</label>
                <input type="text" id="title" v-model="product.title" placeholder="Enter product title" >
            </div>

            <!-- Price -->
            <div class="form-group">
                <label for="price">Price</label>
                <input type="number" id="price" v-model.number="product.price" placeholder="Enter price" step="0.01" ref="inputref"
                    >
            </div>

            <!-- Description -->
            <div class="form-group">
                <label for="description">Description</label>
                <textarea id="description" v-model="product.description" placeholder="Enter description"
                    ></textarea>
            </div>

            <!-- Category -->
            <div class="form-group">
                <label for="category">Category</label>
                <input type="text" id="category" v-model="product.category" placeholder="Enter category" >
            </div>

            <!-- Image URL -->
            <div class="form-group">
                <label for="image">Image URL</label>
                <input type="url" id="image" v-model="product.image" placeholder="Enter image URL" >
            </div>

            <!-- Submit Button -->
            <button type="submit">Submit</button>

        </form>

        <!-- Optional: Show JSON output -->
        <pre>{{ product }}</pre>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            product: {
                id: 0,
                title: "",
                price: 0.1,
                description: "string",
                category: "string",
                image: "http://example.com"

            }

        }
    },
    mounted(){
        this.$refs.inputref.focus()
        this.$refs.headingref.innerText="Createod Product"
    },
    methods:{
        addProduct(){
            axios.post('https://fakestoreapi.com/products',this.product)
            .then(resp=>{
                console.log(resp)
                alert("added sucessfully")
            })
            .catch(error=>{
                console.log(error)
                alert("there was an error")
            })

        }
    }

}
</script>

<style scoped>
.form-container {
    max-width: 500px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 8px;
}

.form-group {
    margin-bottom: 15px;
}

input,
textarea {
    width: 100%;
    padding: 8px;
    margin-top: 5px;
    box-sizing: border-box;
}

button {
    padding: 10px 15px;
    cursor: pointer;
}
</style>