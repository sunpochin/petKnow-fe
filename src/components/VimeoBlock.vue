<template>
  <div>
    <VimeoPlayer :id="props.videoId"></VimeoPlayer>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  videoId: string
}>()
</script>
