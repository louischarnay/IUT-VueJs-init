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
        computed: {
            getFullPrice(){
                let price = 0
                this.pokemons.forEach(element => {
                    price += element.price
                })
                return price
            }
        }
    } 
</script>

<template>
    <p>Total price of the collection : {{getFullPrice}} €</p>
    <a v-for="item in pokemons" :href="'/' + item.id" ><img :src="item.image_path" :alt="item.name" /></a>
</template>