<template>
  <div>
    <VimeoPlayer :id="props.videoId"></VimeoPlayer>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  videoId: string
}>()
// ['807306477', '807306201', '192191']
</script>
