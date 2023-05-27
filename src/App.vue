<template>
  <n-notification-provider>
    <HeaderComponent v-if="route.path !== '/login'" />
    <RouterView />
    <FooterComponent v-if="route.path !== '/login'" />
  </n-notification-provider>
</template>
<script setup lang="ts">
import { RouterView, useRoute } from 'vue-router'
// import HeaderComponent from '@/components/HeaderComponent.vue'
// import FooterComponent from '@/components/FooterComponent.vue'

const route = useRoute()
</script>
<style lang="scss" scoped>
.fit {
  height: 100vh;
  width: 100vw;
}
</style>
