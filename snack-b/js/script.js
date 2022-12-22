/** Chiedere all'utente quanti elementi vuole includere nell'array.
Generare attraverso l'API (array/integers) un array contenente N numeri compresi tra 1 e 100.
Stampare a schermo la somma dei numeri generati.
https://flynn.boolean.careers/exercises/api/array/integers?min=n&max=n&items=n (ritorna un array di items numeri, contenuti nel range min-max)
*/

const { createApp } = Vue

    createApp({
        data() {
            return {
                userInputNumber : null,
                sum : 0,
            }
        },
        methods : {
            getSum(){
                axios.get(`https://flynn.boolean.careers/exercises/api/array/integers?min=1&max=100&items=${this.userInputNumber}`)
                .then( (result) => {
                    const numbers = result.data.response;
                    for (let index = 0; index < numbers.length; index++) {
                        this.sum += numbers[index];
                    }
                })
            },
        },
        mounted(){
        }
}).mount('#app')