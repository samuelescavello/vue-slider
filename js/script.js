import {slides} from './data.js';
const {createApp} = Vue;
createApp({
    data (){
        return{
            slides : slides,
            activeInd : 0,  
        }
    },
    methods: {
        nexts(){
           this.activeInd++;
        },
        prevs(){
            this.activeInd--;
        }
    },
}).mount('#app')