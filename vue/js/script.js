


const { createApp } = Vue;

createApp({
    data() {
        return {
            emails: [],
            caricato: false
        };
    },
    created() {
        this.recuperaEmails();
    },
    methods: {
        recuperaEmails() {
            let richieste = [];
            for (let i = 0; i < 10; i++) {
                richieste.push(axios.get("https://flynn.boolean.careers/exercises/api/random/mail"));
            }
            axios.all(richieste).then(axios.spread((...risposte) => {
                this.emails = risposte.map(risposta => risposta.data.response);
                this.caricato = true;
            }));
        }
    }
        }).mount('#app');
