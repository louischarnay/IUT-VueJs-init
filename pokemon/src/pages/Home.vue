<script>
import { getAllPokemons } from "../services/api";

    export default {
        name: "Home",
        data: () => ({
            pokemons:[]
            }),
        mounted() {
            getAllPokemons().then( pokemons => this.pokemons = pokemons)
        },
    } 
</script>

<template>
    <a v-for="item in pokemons" :href="'/' + item.id" ><img :src="item.image_path" :alt="item.name" /></a>
</template>