<script>import { connexion } from "../services/api"

export default {
  name: "Menu",
  data: () => ({
    activeIndex: '1',
    isConnected: false
  }),
  methods: {
    logout(){
      localStorage.clear()
      this.isConnected = false
    }
  },
  async mounted() {
    if(await connexion(localStorage.getItem('username'), localStorage.getItem('password'))){
      this.isConnected = true
      console.log("connecte")
      return
    }
    console.log("loupé")
  }
}
</script>

<template>
  <el-menu 
    :default-active="activeIndex"
    class="el-menu"
    mode="horizontal"
    text-color="#fff"
    background-color="#545c64"
    active-text-color="#ffd04b"
  >
    <router-link :to="'/'"><el-menu-item index="1">Home</el-menu-item></router-link>

    <el-menu-item v-if="!isConnected" index="2" disabled>Add</el-menu-item>
    <router-link :to="'/add'"><el-menu-item v-if="isConnected" index="2">Add</el-menu-item></router-link>

    <router-link :to="'/'"><el-menu-item v-if="isConnected" index="3" @click="logout()">Logout</el-menu-item></router-link>
    <router-link :to="'/login'"><el-menu-item v-if="!isConnected" index="3">Login</el-menu-item></router-link>
  </el-menu>
</template>