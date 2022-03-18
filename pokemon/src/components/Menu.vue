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
    methods: {
        handleSelect: (key, keyPath) => {
            console.log(key, keyPath)
        }
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
    @select="handleSelect"
  >
    <el-menu-item index="1">Home</el-menu-item>
    <el-menu-item v-if="isConnected" index="2">Add</el-menu-item>
    <el-menu-item v-if="!isConnected" index="2" disabled>Add</el-menu-item>
    <el-menu-item v-if="isConnected" index="3">Logout</el-menu-item>
    <el-menu-item v-if="!isConnected" index="3">Login</el-menu-item>
  </el-menu>
</template>