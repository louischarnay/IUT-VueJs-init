<script>
    import { connexion, deletePokemon, getPokemon, updatePokemon } from "../services/api";

    export default{
        name: "Detail",
        data: () =>({
            id: 0,
            error: "",
            pokemon: {},
            edited: {},
            isConnected: false,
            isEditing: false,
            types: [
            {
                label:"Normal",
                value:"normal"
            },
            {
                label:"Fire",
                value:"fire"
            },
            {
                label:"Water",
                value:"water"
            },
            {
                label:"Grass",
                value:"wrass"
            },
            {
                label:"Electric",
                value:"electric"
            },
            {
                label:"Ice",
                value:"ice"
            },
            {
                label:"Fighting",
                value:"fighting"
            },
            {
                label:"Poison",
                value:"poison"
            },
            {
                label:"Ground",
                value:"ground"
            },
            {
                label:"Flying",
                value:"flying"
            },
            {
                label:"Psychic",
                value:"psychic"
            },
            {
                label:"Bug",
                value:"bug"
            },
            {
                label:"Rock",
                value:"rock"
            },
            {
                label:"Ghost",
                value:"ghost"
            },
            {
                label:"Dark",
                value:"dark"
            },
            {
                label:"Dragon",
                value:"dragon"
            },
            {
                label:"Steel",
                value:"steel"
            },
            {
                label:"Fairy",
                value:"fairy"
            }
            ]
        }),
        mounted() {
            this.id = this.$route.params.id
            getPokemon(this.id).then( pokemon => {
                this.pokemon = pokemon
                this.edited = pokemon
                }),
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
            toggleEdit(){
                this.isEditing = !this.isEditing
            },
            onCancel(){
                this.isEditing = false
            },
            async onSubmit(){
                let result = await updatePokemon(
                    localStorage.getItem("username"), 
                    localStorage.getItem("password"), 
                    this.id,
                    this.edited.name,
                    this.edited.description,
                    this.edited.type,
                    this.edited.image_path,
                    this.edited.price)
                if(result[0] == 1){
                    this.error = "Edited successfully"
                    this.isEditing = false
                }
            }
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
            <el-button type="primary" @click="toggleEdit">Edit</el-button>
            <el-button type="primary" @click="deletePoke">Delete</el-button>
        </el-button-group>
        <p>{{error}}</p>
        <div v-if="isEditing">
            <el-form>
                <el-form-item label="Pokemon card name">
                    <el-input v-model="edited.name" />
                </el-form-item>
                <el-form-item label="Pokemon card type">
                    <el-select v-model="edited.type" placeholder="please select the type">
                        <el-option v-for="(item, index) in types" :label="item.label" :value="item.value" />
                    </el-select>
                </el-form-item>
                <el-form-item label="Pokemon card description">
                    <el-input v-model="edited.description" type="textarea" />
                </el-form-item>
                <el-form-item label="Pokemon card price">
                    <el-input v-model="edited.price" type="number" min="0.00" max="any" step="1.00" />
                </el-form-item>
                <el-form-item label="Pokemon card image">
                    <el-input v-model="edited.image_path" />
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="onSubmit">Edit</el-button>
                    <el-button @click="onCancel">Cancel</el-button>
                </el-form-item>
            </el-form>
    </div>
    </div>
    
</template>