<template>
  <div class="container">
    <!-- 顶部条 -->
    <div class="t-top">
      <img class="topicon homeicon" src="../asset/home.png" />
      <p>你对{{ user.name }}有什么话要说？</p>
    </div>
    <!-- 第二部分 -->
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
    <!-- 中间头像 -->
    <div class="center-container">
      <img :src="user.avatar" class="avatar" />
    </div>
    <!-- 下部内容 -->
    <div class="under-content">
      <!-- 留言发送 -->
      <div class="label-send">
        <input
          class="label-input"
          type="text"
          placeholder="#说说我们之间的故事"
          :value="inputValue"
        />

        <button class="sendbtn">发送</button>
      </div>
      <!-- 留言标签 -->
      <div class="label-collection" v-for="item in labels" :key="item.id">
        <label class="title-xu" @click="click(item)">{{ item.message }}</label>
      </div>
    </div>
    <!-- 按钮 -->
    <button class="label-btn">留言管理</button>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      user: {
        name: 'Tom',
        avatar: require('../asset/bg_weidenglu.png')
      },
      title: '你好，倾诉者',
      isPlay: true,
      inputValue: '',
      labels: [
        { id: 1, message: '你真的超有正义感' },
        { id: 2, message: '老实说你的脾气太暴躁' },
        { id: 3, message: '晚上能早点睡觉么' },
        { id: 4, message: '我喜欢你' }
      ]
    }
  },
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
    },
    click(item) {
      console.log(item.id), console.log(item.message), (this.inputValue = item.message)
    }
  },
  computed: {},
  components: {},
  created() {},
  mounted() {}
}
</script>

<style scoped lang="scss">
.container {
  position: absolute;
  background-image: url('../asset/bg.jpeg');
  width: 100%;
  height: 100%;
  z-index: -1;
  background-size: 100% 100%;
}
.t-top {
  display: flex;
  height: 40px;
  background-color: #00c7ff;
  color: #ffffff;
  font-size: 14px;
  align-items: center;
}
.top {
  display: flex;
  justify-content: space-around;
  margin-top: 15px;
  color: #ffffff;
  font-size: 16px;
}
.homeicon {
  margin-left: 10%;
  margin-right: 7%;
}
.topicon {
  width: 25px;
  height: 25px;
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

.center-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30%;
}
.avatar {
  width: 100px;
  height: 100px;
  border-radius: 50%;
}

.under-content {
  display: flex;
  margin: 60% 1% 2% 10%;
  width: 90%;
  flex-wrap: wrap;
}

.label-input {
  border-bottom: 2px solid #bbbbbb;
  border-top: none;
  border-left: none;
  border-right: none;
  background-color: transparent;
  width: 250px;
  outline: none;
  font-size: 16px;
  color: #8ca2aa;
}
.sendbtn {
  background-color: #00c7ff;
  border: none;
  outline: none;
  height: 30px;
  width: 70px;
  margin-left: 10px;
  border-radius: 5px;
  color: #ffffff;
  font-size: 14px;
}
.label-collection {
  display: flex;
  flex-wrap: wrap;
  margin-top: 10px;
}
// 边框虚线
.title-xu {
  color: #ffffff;
  border: 2px dotted #ffffff;
  padding: 5px;
  border-radius: 5px;
  margin-left: 5px;
}
.label-btn {
  width: 78%;
  height: 40px;
  border-radius: 5px;
  background-color: transparent;
  border-color: #fff;
  outline: none;
  border: 1px solid #fff;
  color: #ffffff;
}
</style>
