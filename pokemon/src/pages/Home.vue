<script>
import { getAllPokemons } from "../services/api";

    export default {
        name: "Home",
        data: () => ({pokemons:[]}),
        mounted() {
            getAllPokemons().then( pokemons => this.pokemons = pokemons)
        },
    } 
</script>

<template>
    <p></p>
    <img v-for="item in pokemons" :src="item.image_path" :alt="item.name" />
</template>