<template>
  <form action="" @submit="submitForm" class="form-container">
    <h2>Sign Up</h2>

    
    <div class="form-group">
      <label for="">Name</label>
      <input type="text" v-model="formData.name" placeholder="Enter your full name">
    </div>

    <div class="form-group">
      <label for="">Username</label>
      <input type="text" v-model="formData.username" placeholder="Choose a username">
    </div>

    <div class="form-group">
      <label for="">Email</label>
      <input type="email" v-model="formData.email" placeholder="Enter your email">
    </div>

    <div class="form-group">
      <label for="">Password</label>
      <input type="password" v-model="formData.password" placeholder="Create a password">
    </div>

    <button type="submit" class="submit-btn">Sign Up</button>
  </form>

  <pre>
    {{ formData }}
  </pre>
</template>

<script>
import useVuelidate from '@vuelidate/core';
import { required,email } from '@vuelidate/validators';
export default {
    data(){
        return{
            v$:useVuelidate(),
            formData:{
                name:"",
                username:"",
                email:"",
                password:""
            },

        }
    },
    validations(){
        return{
            formData:{
                name : {required},
                username:{required},
                email:{required},
                password:{required,email},
        }
    }
    },

    methods:{
       async submitForm(event) {
      const isValid = await this.v$.$validate()
      if (!isValid) {
        alert("Please fix the errors")
      } else {
        alert("Form submitted successfully!")
      }
      event.preventDefault();

    }
    }
}
</script>

<style scoped>
.form-container {
  max-width: 400px;
  margin: 40px auto;
  padding: 25px;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  font-family: Arial, sans-serif;
}
.errors{
    color: red;
}

.form-container h2 {
  text-align: center;
  margin-bottom: 20px;
  color: #333;
}

.form-group {
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
}

.form-group label {
  margin-bottom: 6px;
  font-size: 14px;
  color: #555;
}

.form-group input {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 8px;
  outline: none;
  transition: border-color 0.2s ease;
}

.form-group input:focus {
  border-color: #4f46e5; 
}

.submit-btn {
  width: 100%;
  padding: 12px;
  background: #4f46e5;
  border: none;
  color: #fff;
  font-size: 16px;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.2s ease;
}

.submit-btn:hover {
  background: #4338ca;
}
</style>