<template>
  <div v-for="(item, i) in vimeoIdList" :key="i">
    <VimeoPlayer :id="item"></VimeoPlayer>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const vimeoIdList = ref(['807306477'])
// ['807306477', '807306201', '192191']
</script>
