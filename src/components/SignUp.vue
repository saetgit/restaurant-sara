<template>
    <div class="signup">
        <img src="../assets/logo.jpg" class="logo" />
        <h1>ثبت نام</h1>
        <div class="register">
            <input type="text" v-model="user.name" placeholder="لطفا نام خود را وارد کنید" />
            <input type="text" v-model="user.email" placeholder="لطفا ایمیل خود را وارد کنید" />
            <input type="password" v-model="user.password" placeholder="لطفا رمزعبور خود را وارد کنید" />
            <button @click="signUp">ثبت نام</button><br>
            <router-link to="/login">ورود</router-link>
        </div>
    </div>
</template>

<script setup>
import { reactive,onMounted } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'
const router = useRouter()

const user = reactive({
    name: "",
    email: "",
    password: ""
});


const signUp = async () => {
    let result = await axios.post("http://localhost:3000/users", {
        email: user.email,
        password: user.password,
        name: user.name
    })
    if(result.status==201){
        localStorage.setItem("user-info",JSON.stringify(result.data))
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

<style scoped>

</style>