<template>
    <div>
        <Header />
        <form class="Add">
            <input type="text" name="name" placeholder="نام رستوران را وارد کنید" v-model="restaurant.name" />
            <input type="text" name="address" placeholder="آدرس رستوران را وارد کنید" v-model="restaurant.address" />
            <input type="text" name="contact" placeholder="شماره رستوران را وارد کنید" v-model="restaurant.contact" />
            <button type="button" @click="addRestaurant">افزودن رستوران</button>
        </form>
    </div>
</template>

<script setup>
import Header from './Header.vue'
import { onMounted, reactive } from 'vue'
import { useRouter } from 'vue-router'
import axios from 'axios'
const router = useRouter()
const restaurant = reactive({
    name: '',
    address: '',
    contact: ''
})
components: {
    Header
}


const addRestaurant = async () => {
    let result = await axios.post("http://localhost:3000/restaurant", {
        name: restaurant.name,
        address: restaurant.address,
        contact: restaurant.contact
    });
    if (result.status == 201) {
        router.push({ name: 'Home' })
    }
}
onMounted(() => {
    let user = localStorage.getItem('user-info')
    if (!user) {
        router.push({ name: 'SignUp' })
    }
})

</script>

<style scoped></style>