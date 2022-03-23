<script>
export default {
  name: "Menu",
  data: () => ({
    activeIndex: '1',
  }),
  computed:{
    isConnected(){
        return false
    }
  },
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
    <el-menu-item index="1"><router-link :to="'/'">Home</router-link></el-menu-item>
    <el-menu-item v-if="isConnected" index="2"><router-link :to="'/'">Home</router-link></el-menu-item>
    <el-menu-item v-if="!isConnected" index="2" disabled>Add</el-menu-item>
    <el-menu-item v-if="isConnected" index="3">Logout</el-menu-item>
    <el-menu-item v-if="!isConnected" index="3"><router-link :to="'/login'">Login</router-link></el-menu-item>
  </el-menu>
</template>