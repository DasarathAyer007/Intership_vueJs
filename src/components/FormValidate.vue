<template>
  <form action="" @submit="signUp" class="form-container">
    <h2>Sign Up</h2>



        <div v-if="errors.length" class="errors">
            List of errors
            <ul>
                <li v-for="error in errors" :key="error">{{ error }}</li>
            </ul>
        </div>
    
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
export default {
    data(){
        return{
            formData:{
                name:"",
                username:"",
                email:"",
                password:""
            },
            errors:[]
        }
    },

    methods:{
        signUp(event){
            this.errors=[]
            if(!this.formData.name ){
                this.errors.push("name is required")
            }else if(!(this.formData.name.length>2 && this.formData.name.length<=10) ){
                this.errors.push("name should be between 2 and 10 character")
            }

            if(!this.formData.username ){
                this.errors.push("usernamename is required")
            }else if(!(this.formData.username.length>2 && this.formData.username.length<=8)){
                this.errors.push(" username should be between 2 and 8 character")
            }

            if(!this.formData.email){
                this.errors.push("email is required")
            }else if(!this.validEmail(this.formData.email)){
                this.errors.push("invalid email")
            }

            event.preventDefault()
        },
        validEmail: function (email) {
            var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(email);
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