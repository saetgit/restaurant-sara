<template>
    <div>
        home
    </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
onMounted(() => {
    let user=localStorage.getItem('user-info')
    if(!user){
        router.push({name:'SignUp'})
    }
})
</script>

<style scoped></style>