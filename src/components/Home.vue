<template>
    <div>
        <Header />
        <div class="title">
            <h2>
                سلام {{ name }} عزیز به سایت رستوران ما خوش آمدید.
            </h2>
        </div>
    </div>
</template>

<script setup>
import Header from './Header.vue'
import { ref } from 'vue'
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
components: {
    Header
}
const name = ref('')
onMounted(() => {
    let user = localStorage.getItem('user-info')
    name.value = JSON.parse(user).name;
    if (!user) {
        router.push({ name: 'SignUp' })
    }
})
</script>

<style scoped>
.title {
    text-align: center;
    direction: rtl;
}
</style>