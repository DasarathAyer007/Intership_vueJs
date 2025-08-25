import {createStore} from 'vuex'
import axios from 'axios';


export default createStore({
    state:{
        counter:0,
        colorCode:'black',
        backgroundColorCode:'white'
    },
    mutations:{
        increaseCounter(state){
            state.counter++
        },
        decreaseCounter(state){
            state.counter--
        },
        setNumber(state,number){
            state.counter=number
        },
        setColorCode(state,color){
            state.colorCode=color
        },
        setBackgroundColorCode(state,color){
            state.backgroundColorCode=color
        }

    },
    actions:{
        getNumber({commit}){
            axios.get('https://aisenseapi.com/services/v1/random_number')
            .then(response=>{
                console.log(response.data)
                commit('setNumber',response.data.random_number)
            })
        }

    },
    getters:{
        counterSqare(state){
            return state.counter*state.counter
        }
    },
    modules:{
        
    }
})