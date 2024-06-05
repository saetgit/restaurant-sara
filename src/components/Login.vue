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
import { reactive } from 'vue'
const user = reactive({
    email: "",
    password: ""
});

</script>
