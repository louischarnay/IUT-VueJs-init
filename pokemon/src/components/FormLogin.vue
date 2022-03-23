<script>
    import { reactive } from 'vue'
    export default {
        data: () => ({
            form: reactive ({
                email: "",
                password: ""
            })
        }),
        methods: {
            onSubmit() {
                console.log('submit!')
            }
        }
    }
</script>

<template>
  <el-form :model="form" :label-position="labelPosition" label-width="120px">
    <el-form-item label="Username" required>
      <el-input v-model="form.username" />
    </el-form-item>
    <el-form-item label="Password" required>
      <el-input v-model="form.password" />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">Connexion</el-button>
      <el-button>Annuler</el-button>
    </el-form-item>
  </el-form>
</template>