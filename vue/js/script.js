



const {createApp} = Vue;

createApp ({
    data() {
        return {

        }
    },
    created() {

        axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
        .then((response) => {
            console.log("response");
        })

    }
}).mount("#app");

