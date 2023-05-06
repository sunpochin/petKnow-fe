<template>
  <div v-bind:id="divName">

  </div>
</template>

<script>
import Player from '@vimeo/player'
export default {
  data () {
    return {
      divName: 'divFrame'
    }
  },
  props: {
    id: {
      type: String
    }
  },
  created () {
    this.divName = this.divName + '_' + this.id
  },
  mounted () {
    // let vm=this
    const options = {
      id: this.id,
      // responsive: false,
      width: 640
    }
    // var player = new Player(this.divName, options)
    const player = new Player(this.divName, options)
    console.log(player)
  }

}
</script>

<style lang="scss" scoped></style>
