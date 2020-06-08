<template>
  <div class="container">
    <div class="top">
      <img :class="{ play: isPlay, topicon: true }" src="../asset/yingyue.png" @click="stop" />
      <audio
        id="bgaudio"
        src="../asset/audio/MySoul.mp3"
        autoplay="autoplay"
        loop="loop"
        hidden
      ></audio>
      <div>
        {{ title }}
      </div>
      <img class="topicon" src="../asset/fengxiang.png" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      title: ' [ 你好，倾诉者 ]',
      isPlay: true
    }
  },
  components: {},
  created() {},
  mounted() {},
  methods: {
    stop() {
      this.isPlay = !this.isPlay
      var bgaudio = document.getElementById('bgaudio')
      if (this.isPlay) {
        //当为true时，播放
        bgaudio.play()
      } else {
        bgaudio.pause()
        bgaudio.currentTime = 0
      }
    }
  },
  computed: {}
}
</script>

<style scoped lang="scss">
.container {
  position: absolute;
  background-image: url('../asset/beijing.jpeg');
  width: 100%;
  height: 100%;
  z-index: -1;
  background-size: 100% 100%;
}
.top {
  display: flex;
  justify-content: space-around;
  margin-top: 15px;
  color: #ffffff;
  font-size: 20px;
}
.topicon {
  width: 28px;
  height: 28px;
  border-radius: 50%;
}
.play {
  animation: musicStart 5s linear infinite;
}
@keyframes musicStart {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

::-webkit-scrollbar {
  width: 0;
  height: 0;
  color: transparent;
}
</style>
