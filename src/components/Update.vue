<template>
    <div>
        <Header/>
        <form class="Add">
            <input type="text" name="name" placeholder="نام رستوران را وارد کنید" v-model="restaurant.name" />
            <input type="text" name="address" placeholder="آدرس رستوران را وارد کنید" v-model="restaurant.address" />
            <input type="text" name="contact" placeholder="شماره رستوران را وارد کنید" v-model="restaurant.contact" />
            <button type="button" @click="updateRestaurant">ویرایش رستوران</button>
        </form>
    </div>
</template>

<script setup>
import Header from './Header.vue'
import axios from 'axios'
import { onMounted,ref } from 'vue'
import { useRouter,useRoute } from 'vue-router'
const router = useRouter()
const route = useRoute()
components:{
    Header
}
const restaurant = ref({
    name: "",
    address: "",
    contact: ""
})
const updateRestaurant = async () => {
    let result = await axios.put(`http://localhost:3000/restaurant/${route.params.id}`, {
        name: restaurant.value.name,
        address: restaurant.value.address,
        contact: restaurant.value.contact
    });
    if (result.status == 200) {
        router.push({ name: 'Home' })
    }
}
onMounted(async() => {
    let user=localStorage.getItem('user-info')
    if(!user){
        router.push({name:'SignUp'})
    }
    let result = await axios.get(`http://localhost:3000/restaurant/${route.params.id}`)
    restaurant.value = result.data
    console.log("===============",result);
})
</script>

<style scoped></style>