<script>
import { ref } from 'vue'
import { getAllPokemons } from "../services/api";

    export default {
        name: "Home",
        data: () => ({pokemons:[]}),
        mounted() {
            getAllPokemons().then( pokemons => this.pokemons = pokemons)
        },
        methods() {
            filterTag = (value, row) => {
                return row.type === value
            }
        }
    } 
</script>

<template>
    <el-table ref="tableRef" :data="this.pokemons" style="width: 100%">
        <el-table-column prop="image_path" label="Image" width="250">
            <template #default="scope">
                <img class="simpleCard" :src="scope.row.image_path"/>
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
                { text: 'Home', value: 'Home' },
                { text: 'Office', value: 'Office' },
            ]"
            :filter-method="this.filterTag"
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