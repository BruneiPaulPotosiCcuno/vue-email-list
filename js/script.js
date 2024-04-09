// Descrizione:
// Attraverso l'apposita API di Boolean
// https://flynn.boolean.careers/exercises/api/random/mail
// generare 10 indirizzi email e stamparli in pagina all'interno di una lista.

const { createApp } = Vue;
createApp({
    data() {
        return {
    //Creo array
            mails: [],
            
        };
    },
    // Genero con ciclo for
    methods: {
        get10Mails() {
            for(i = 0; i < 10; i++){
                this.getMailFromApi();
            }
        },
        // Chiedo al api la richiesta
        getMailFromApi(){
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((response) => {
                const serverMail = response.data;
                //push mail trovata in Api nell'array empty
                this.mails.push(serverMail.response);              
            });
        },
    },
    mounted() {
        this.get10Mails(); 
    },
}).mount('#app');