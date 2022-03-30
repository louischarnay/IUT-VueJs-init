<script>
import { getAllPokemons } from "../services/api";

    export default {
        name: "Home",
        data: () => [{
            id: 0,
            name: "",
            description: "",
            type: "",
            image_path: "",
            price: 0
        }],
        async mounted() {
            this.data = await getAllPokemons()
        }
    } 
</script>

<template>
    <p>test</p>
    <img v-for="item in this.data" :url="item.image_path" :alt="item.name" />
</template>