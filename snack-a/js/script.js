/** Creare un input che permetta all'utente di inserire un messaggio e aggiungerlo ad una conversazione (tipo whatsapp).
Dopo averlo aggiunto chiedere all'API una frase random (attraverso random/sentence) aggiungendo anch'essa al thread,
differenziando i messaggi utente da quelli del computer. 
https://flynn.boolean.careers/exercises/api/random/sentence (ritorna una frase)
*/

const { createApp } = Vue

    createApp({
        data() {
            return {
                inputMessage : '',
                messageList : [],
            }
        },
        methods : {
            addNewMessage(){
                if (this.inputMessage != ''){
                    this.messageList.push(this.inputMessage);            
                }
                this.clearInputMessage();
            },
            clearInputMessage(){
                this.inputMessage = '';
            }
        },
        mounted(){
        }
}).mount('#app')