<template>
    <div class="nav">
    <router-link to="/" href="#">خانه</router-link>
    <router-link to="/Add" href="#">افزودن رستوران</router-link>
    <a href="#" @click="logOut">خروج</a>

    </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
const logOut = () => {
    localStorage.clear()
    router.push({name:'Login'})
}
</script>

<style  scoped>
.nav{
    background-color: #333;
    overflow: hidden;

}

.nav a{
    float: right;
    color: #f2f2f2;
    padding: 16px 16px;
    text-align: center;
    font-size: 17px;
    text-decoration: none;
    margin-right: 5px
}
.nav a:hover{
    background-color: #ddd;
    color: #333;
}
</style>