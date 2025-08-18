<template>
<form action="" @submit.prevent="formSubmit">
    <h1>Simple Form</h1>

    <div>
    <label for="name">Name :</label>
    <input type="text" name="name" id="" v-model.trim.lazy="formData.name">
    </div>

    <div>
    <label for="roll">Roll No:</label>
    <input type="number" name="roll" id="" v-model.number="formData.rollno">
    </div>

    <div>
    <label for="program">Program</label> <br>
    <input type="radio" name="program" class="program" v-model="formData.program" value="BCA">BCA
    <input type="radio" name="program" class="program"  v-model="formData.program" id="" value="BBA">BBA
    <input type="radio" name="program"  class="program"  v-model="formData.program" id="" value="BE">BE

    </div>

    <input type="submit" value="Submit">

    <div>
        <h3>Form Data</h3>
        {{ formData }}
    </div>
 

</form>



<div @click.self="alertmsg('button has been click')" class="parent">
    Parent

    <div class="child">
        Child
    </div>
</div>
</template>


<script>
export default {
    data(){
        return{
            formData:{
            name:'dsfkd',
            rollno:null ,
            program:'',
        }

        }


    },
    methods:{
        formSubmit(){
            // event.preventDefault()
        },
        alertmsg(msg){
            alert(msg)
        }
    }

}
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  gap: 15px;
  width: 320px;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background: #fafafa;
  font-family: Arial, sans-serif;
}

h1 {
  text-align: center;
  font-size: 1.5rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 5px;
}
.parent{
    padding: 10px;
    background-color: gray;
    color: #fff;
    display:inline-block
}
.parent:hover{
    padding: 12px;
    background-color: rgb(207, 207, 207);
    color: #000;
    
}
.child{
    background-color: #ddd;
    padding:20px;
}
</style>