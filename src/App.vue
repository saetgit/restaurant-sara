<script setup>
</script>

<template>
  <router-view />
</template>

<style>
body {
  margin: 0;
}

.signup,
.login, .Add {
  text-align: center;
  margin-top: 20px;
}

.logo {
  width: 100px;
}

.register input,
.login input,
.Add input {
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

.register button,
.login button,
.Add button {
  width: 320px;
  height: 40px;
  border: 1px solid skyblue;
  background: skyblue;
  color: white;
  cursor: pointer;
}
</style>
