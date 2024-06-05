<template>
    <div class="login">
        <img src="../assets/logo.jpg" class="logo" />
        <h1> ورود به سیستم</h1>
        <div class="login">
            <input type="text" v-model="user.email" placeholder="لطفا ایمیل خود را وارد کنید" />
            <input type="password" v-model="user.password" placeholder="لطفا رمزعبور خود را وارد کنید" />
            <button @click="login">ورود</button><br>
            <router-link to="/sign-up">ثبت نام</router-link>

        </div>
    </div>
</template>
<script setup>
import { reactive,onMounted } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'
const router = useRouter()
const user = reactive({
    email: "",
    password: ""
});

const login = async () => {
    let result = await axios.get(
        `http://localhost:3000/users?email=${user.email}&password=${user.password}`)
    if(result.status==200 && result.data.length > 0 ){
        localStorage.setItem("user-info",JSON.stringify(result.data[0]))
        router.push({name:'Home'})
    }
}
onMounted(() => {
    let user=localStorage.getItem('user-info')
    if(user){
        router.push({name:'Home'})
    }
})
</script>
