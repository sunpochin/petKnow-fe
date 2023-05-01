<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import { defineComponent } from "vue";
import { NButton } from "naive-ui";

import HeaderComponent from "@/components/HeaderComponent.vue";
</script>

<template>
  <HeaderComponent />

  <RouterView />
</template>

<style scoped>

</style>
