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
                if (this.userInputNumber > 1 && this.userInputNumber <= 100) {
                    axios.get(`https://flynn.boolean.careers/exercises/api/array/integers?min=1&max=100&items=${this.userInputNumber}`)
                    .then( (result) => {
                        const numbers = result.data.response;
                        for (let index = 0; index < numbers.length; index++) {
                            this.sum += numbers[index];
                        }
                        console.log(numbers)
                    })
                } else {
                    alert('Inserisci un numero nel range richiesto!!')
                }
            },
            resetAll(){
                this.sum = 0;
                this.userInputNumber = null;
            }
        },
        mounted(){
        }
}).mount('#app')