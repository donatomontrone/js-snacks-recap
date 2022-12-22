/***
Chiedere all'API 10 nomi da inserire in un array di invitati.
Una volta generata la lista chiedere all'utente di dire il proprio nome.
Se è uno degli invitati ritornare un messaggio di benvenuto, altrimenti di accesso negato.
*/

// https://flynn.boolean.careers/exercises/api/random/name (ritorna un nome)

const { createApp } = Vue

    createApp({
        data() {
            return {
                nameList : [],
                userName : '',
                isNameList : false,
            }
        },
        methods : {
            getRandomName(){
                for (let index = 0; index < 10; index++) {
                    axios.get('https://flynn.boolean.careers/exercises/api/random/name')
                    .then( (response) => {
                        this.nameList.push(response.data.response);
                    })
                }
            },
            isInList(name){
                this.isNameList = this.nameList.includes(name);
            }
        },
        mounted(){
            this.getRandomName()
            console.log(this.nameList)
        }
}).mount('#app')