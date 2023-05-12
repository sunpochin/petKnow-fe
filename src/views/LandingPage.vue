<script setup>
import { storeToRefs } from 'pinia'
import { useAuthStore } from '@/stores'

const authStore = useAuthStore()
const { user } = storeToRefs(authStore)
</script>

<template>
    <div class="wrapper">
        <div class="container">
            <div class="content">
                <h1>開始學習，{{ user.name }} ！</h1>
                <h3>this is the landingpage</h3>

            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.wrapper {
    width: 100%;
    height: 100%;
}
.container {
    max-width: 1328px;
    height: 100%;
    margin: 0 auto;
    padding: 0 1rem;
}
</style>
