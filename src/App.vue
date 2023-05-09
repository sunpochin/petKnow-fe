<template>
  <HeaderComponent v-if="route.path !== '/login'" />
  <RouterView />
  <FooterComponent v-if="route.path !== '/login'" />
</template>
<script setup lang="ts">
// import { onMounted, watch } from 'vue'
import { RouterView, useRoute } from 'vue-router'

import HeaderComponent from '@/components/HeaderComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'

const route = useRoute()
// watch(
//   () => route.path,
//   () => {
//     console.log('route', route.path)
//   }
// )
</script>
<style lang="scss" scoped></style>
