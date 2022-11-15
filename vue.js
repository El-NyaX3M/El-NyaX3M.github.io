const {createApp} = Vue;

const app = createApp({
    data(){
        return{
            opcion: 1
        }
    },
    methods: {
        fcfs(){
            this.opcion = 1;
        },
        sjn(){
            this.opcion = 2;
        },
        pd(){
            this.opcion = 3;
        },
        pe(){
            this.opcion = 4;
        },
        srt(){
            this.opcion = 5;
        },
        rr(){
            this.opcion = 6;
        },
    },

}).mount("#contenedor")