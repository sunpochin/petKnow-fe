<template>
  <div :id="divName"></div>
</template>

<script setup lang="ts">
import { ref, watch, nextTick } from 'vue'

import Player from '@vimeo/player'
const props = defineProps({
  id: {
    type: String
  }
})
const divName = ref('divFrame')
watch(
  () => props.id,
  () => {
    nextTick(() => {
      const options = {
        id: Number(props.id),
        responsive: true,
        height: 450
      }
      const player = new Player(divName.value, options)
      player.loadVideo(options.id)
      console.log('player', options.id, player)
    })
  },
  {
    immediate: true
  }
)
</script>

<style lang="scss" scoped></style>
