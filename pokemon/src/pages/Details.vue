<script>
    import { connexion, deletePokemon, getPokemon } from "../services/api";

    export default{
        name: "Detail",
        data: () =>({
            id: 0,
            error: "",
            pokemon: {
                name: "ze",
                type: "eeee ",
                price: "ze",
                description: "ze",
                path: "ze"
            },
            isConnected: false
        }),
        mounted() {
            this.id = this.$route.params.id
            getPokemon(this.id).then( pokemon => this.pokemon = pokemon),
            this.getConnexion()         
        },
        methods: ({
            async deletePoke(){
                let res = await deletePokemon(localStorage.getItem("username"), localStorage.getItem("password"), this.id)
                if(res == 1){
                    this.$router.push("/")
                }
                this.error = "Suppress failed"

            },
            getConnexion(){
                connexion(localStorage.getItem("username"), localStorage.getItem("password"))
                    .then(result => this.isConnected = result)
            },
            
        })
}
</script>

<template>
    <p>{{"Name : " + pokemon.name}}</p>
    <p>{{"Type : " + pokemon.type}}</p>
    <p>{{"Price : " + pokemon.price}}</p>
    <p>{{"Description : " + pokemon.description}}</p>
    <img :src="pokemon.image_path" :alt="pokemon.name">
    <div v-if="isConnected">
        <el-button-group>
            <el-button type="primary">Edit</el-button>
            <el-button type="primary" @click="deletePoke">Delete</el-button>
        </el-button-group>
        <p>{{error}}</p>
    </div>
    
</template>