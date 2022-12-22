/**
Creare due div; uno conterrà numeri dispari di colore rosso e l'altro conterrà numeri pari in verde.
Ad ogni click di un bottone chiedere all'API un numero, se è dispari metterlo nel blocco dispari, e se è pari in quello pari.
*/

// https://flynn.boolean.careers/exercises/api/random/int (ritorna un numero da 1 a 9)

const { createApp } = Vue

    createApp({
        data() {
            return {
                randomNumber : null,
                oddNumber : [],
                evenNumber : [],
            }
        },
        methods : {
            getRandomNumber(){
                axios.get('https://flynn.boolean.careers/exercises/api/random/int')
                .then( (result) => {
                        this.randomNumber = result.data.response;
                    if (this.randomNumber % 2 === 0) {
                        this.evenNumber.push(this.randomNumber);
                    } else{
                        this.oddNumber.push(this.randomNumber);
                    }
                })
            },
        },
        
        created(){
        }
}).mount('#app')