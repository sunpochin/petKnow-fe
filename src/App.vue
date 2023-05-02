<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import { defineComponent } from "vue";
import { NButton } from "naive-ui";

import HeaderComponent from "@/components/HeaderComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";
</script>

<template>
    <HeaderComponent />
    <RouterView />
    <FooterComponent />
</template>

<style lang="scss"  scoped></style>
