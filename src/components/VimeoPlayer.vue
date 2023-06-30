<template>
  <div :id="divName"></div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

import Player from '@vimeo/player'
const props = defineProps({
  id: {
    type: String
  }
})
const divName = ref('divFrame')

onMounted(() => {
  const options = {
    id: Number(props.id),
    responsive: true
    // width: 640
  }
  const player = new Player(divName.value, options)
  console.log('player', player)
})
</script>

<style lang="scss" scoped></style>
