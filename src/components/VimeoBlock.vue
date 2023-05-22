<template>
  <div v-for="(item, i) in vimeoIdList" :key="i">
    <VimeoPlayer :id="item"></VimeoPlayer>
  </div>
</template>

<script>
import VimeoPlayer from './VimeoPlayer.vue'

export default {
  data () {
    return {
      videoId: '',
      // 3 initial demo videos of cat and dog.
      vimeoIdList: ['807306477', '807306201', '192191']
    }
  },
  mounted () {},

  methods: {},
  components: {
    VimeoPlayer
  }
}
</script>
