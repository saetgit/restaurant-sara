<template>
    <div class="text-center">
        <Header />
        <div class="title">
            <h2>
                سلام {{ name }} عزیز به سایت رستوران ما خوش آمدید.
            </h2>
            <table border="1">
                <tr>
                    <td>نام رستوران</td>
                    <td>شماره رستوران</td>
                    <td>آدرس رستوران</td>
                    <td>عملیات</td>
                </tr>
                <tr v-for="item in restaurant" :key="item.key">
                    <td>{{ item.name }}</td>
                    <td>{{ item.contact }}</td>
                    <td>{{ item.address }}</td>
                    <td><router-link :to="'/Update/'+id">ویرایش</router-link></td>
                </tr>
            </table>
        </div>

    </div>
</template>

<script setup>
import Header from './Header.vue'
import axios from 'axios'
import { ref } from 'vue'
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
components: {
    Header
}
const name = ref('')
const restaurant = ref([])
onMounted(async () => {
    let user = localStorage.getItem('user-info')
    name.value = JSON.parse(user).name;
    if (!user) {
        router.push({ name: 'SignUp' })
    }
    let result = await axios.get("http://localhost:3000/restaurant")
    restaurant.value = result.data
})
</script>

<style scoped>
.title {
    text-align: center;
    direction: rtl;
}

table {
    text-align: right;
    margin-right: 10px;
}

td {
    width: 160px;
    height: 40px;
}
</style>