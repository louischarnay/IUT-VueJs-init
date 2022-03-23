<script>
    import { reactive } from 'vue'
    import { connexion, createPokemon, getAllPokemons, getPokemon } from '../services/api.js'
    export default {
        data: () => ({
            form: reactive ({
                username: "",
                password: ""
            })
        }),
        methods: {
            async onSubmit() {
              let res = await connexion(this.form.username, this.form.password)
              if(res){
                localStorage.setItem("username", this.form.username)
                localStorage.setItem("password", this.form.password)
                this.$router.push("/")
              }
            },
            async onSubmit2(){
              let res = await createPokemon(localStorage.getItem('username'), localStorage.getItem('password'), 'name', 'description', 'type', 'image', 12)
              console.log(res);

            }
        }
    }
</script>

<template>
  <el-form :model="form" :label-position="labelPosition" label-width="120px">
    <el-form-item label="Username">
      <el-input v-model="form.username" />
    </el-form-item>
    <el-form-item label="Password">
      <el-input v-model="form.password"/>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">Connexion</el-button>
      <el-button @click="onSubmit2">Annuler</el-button>
    </el-form-item>
  </el-form>
</template>