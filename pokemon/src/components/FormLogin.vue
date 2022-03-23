<script>
    import { reactive } from 'vue'
    import { connexion } from '../services/api.js'
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
      <el-button>Annuler</el-button>
    </el-form-item>
  </el-form>
</template>