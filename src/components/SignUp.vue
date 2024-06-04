<template>
    <div class="signup">
        <img src="../assets/logo.jpg" class="logo" />
        <h1>ثبت نام</h1>
        <div class="register">
            <input type="text" placeholder="لطفا نام خود را وارد کنید" />
            <input type="text" placeholder="لطفا ایمیل خود را وارد کنید" />
            <input type="password" placeholder="لطفا رمزعبور خود را وارد کنید" />
            <button>ثبت نام</button>
        </div>
    </div>
</template>

<script>

</script>

<style scoped>
.signup{
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