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
                replyMessage : '',
            }
        },
        methods : {
            addNewMessage(){
                if (this.inputMessage != ''){
                    this.messageList.push({message : this.inputMessage, status: 'sent' });
                    this.setReply()            
                }
                this.clearInputMessage();
            },
            clearInputMessage(){
                this.inputMessage = '';
            },
            setReply(){
                axios.get('https://flynn.boolean.careers/exercises/api/random/sentence')
                .then( (result) => {
                        this.replyMessage = result.data.response;
                        this.messageList.push({message : this.replyMessage, status : 'received'})
                })
            },
        },
        mounted(){
        }
}).mount('#app')