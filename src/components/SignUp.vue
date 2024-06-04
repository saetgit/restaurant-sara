<template>
    <div class="signup">
        <img src="../assets/logo.jpg" class="logo" />
        <h1>ثبت نام</h1>
        <div class="register">
            <input type="text" v-model="user.name" placeholder="لطفا نام خود را وارد کنید" />
            <input type="text" v-model="user.email" placeholder="لطفا ایمیل خود را وارد کنید" />
            <input type="password" v-model="user.password" placeholder="لطفا رمزعبور خود را وارد کنید" />
            <button @click="signUp">ثبت نام</button>
        </div>
    </div>
</template>

<script setup>
import { reactive } from 'vue'
import axios from 'axios'
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
        alert("signUp-done!");
        localStorage.setItem("user-info",JSON.stringify(result.data))
    }
}

</script>

<style scoped>
.signup {
    text-align: center;
}

.logo {
    width: 100px;
}

.register input {
    width: 300px;
    height: 40px;
    padding-left: 20px;
    display: block;
    margin-bottom: 30px;
    margin-left: auto;
    margin-right: auto;
    border: 1px solid skyblue;
    text-align: right;
}

.register button {
    width: 320px;
    height: 40px;
    border: 1px solid skyblue;
    background: skyblue;
    color: white;
    cursor: pointer;
}
</style>