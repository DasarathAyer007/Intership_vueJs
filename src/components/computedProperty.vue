<template>

    <h1>Example of Computed Property</h1>

    <h3>Computed Full Name : {{fullname}}</h3>

    <form action="" v-on:submit="FormChangefullName">
        <input type="text" name="" id="" v-model="formValue.newname" placeholder="Enter new Name">
        <input type="submit" value="change Name">

    </form>

    <br>
    <button v-on:click="ChangefullName('new Name')">click here to change Name</button>

</template>

<script>
export default {
    data(){
        return {
          
            formValue:{
                newname:''
            }
        }
    },
    props:{
        firstName:String,
        lastName:String
    },
    methods:{
        FormChangefullName(event){
            event.preventDefault()
            this.fullname=this.formValue.newname
        },
        ChangefullName(value){
            this.fullname=value
        }
    },
    computed:{
        fullname:{

            get(){
                return `${this.firstName}  ${this.lastName}`
            },
            set(value){
                [this.firstName,this.lastName]=value.split(' ')
            }
        }
    }

    
}
</script>