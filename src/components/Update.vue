<template>
    <div>
        <Header/>
        <p>Update</p>
    </div>
</template>

<script setup>
import Header from './Header.vue'

import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
components:{
    Header
}
onMounted(() => {
    let user=localStorage.getItem('user-info')
    if(!user){
        router.push({name:'SignUp'})
    }
})
</script>

<style scoped></style>