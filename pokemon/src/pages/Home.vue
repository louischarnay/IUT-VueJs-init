<script>
import { ref } from 'vue'
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
        },
        methods: {
            filterTag(value, row) {
                return row.type === value
            }
        }
    } 
</script>

<template>
    <p>Total price of the collection : {{getFullPrice}} €</p>
    <el-table ref="tableRef" :data="this.pokemons" style="width: 100%">
        <el-table-column prop="image_path" label="Image" width="250">
            <template #default="scope">
                <a :href="'/' + scope.row.id"><img class="simpleCard" :src="scope.row.image_path"/></a>
            </template>
        </el-table-column>
        <el-table-column prop="name" label="Name" width="180" />
        <el-table-column prop="description" label="Description" width="300" />
        <el-table-column prop="price" label="Price (€)" width="180" sortable />
        <el-table-column 
            prop="type" 
            label="Type" 
            width="180" 
            :filters="[
                { text: 'Normal', value: 'Normal' },
                { text: 'Fire', value: 'Fire' },
                { text: 'Water', value: 'Water' },
                { text: 'Grass', value: 'Grass' },
                { text: 'Electric', value: 'Electric' },
                { text: 'Ice', value: 'Ice' },
                { text: 'Fighting', value: 'Fighting' },
                { text: 'Poison', value: 'Poison' },
                { text: 'Ground', value: 'Ground' },
                { text: 'Flying', value: 'Flying' },
                { text: 'Psychic', value: 'Psychic' },
                { text: 'Bug', value: 'Bug' },
                { text: 'Rock', value: 'Rock' },
                { text: 'Ghost', value: 'Ghost' },
                { text: 'Dark', value: 'Dark' },
                { text: 'Dragon', value: 'Dragon' },
                { text: 'Steel', value: 'Steel' },
                { text: 'Fairy', value: 'Fairy' },
            ]"
            :filter-method="filterTag"
            filter-placement="bottom-end"
        >
            <template #default="scope">
                <el-tag :type="scope.row.tag === 'Home' ? '' : 'success'" disable-transitions>{{ scope.row.type }}</el-tag>
            </template>
        </el-table-column>
        <el-table-column prop="updatedAt" label="Last update" width="200" sortable />
    </el-table>
</template>

<style>
    .simpleCard{
        width: 215px;
        height: 300px;
    }

    .cell{
        font-size: 15px;
        font-weight: bold;
    }
</style>