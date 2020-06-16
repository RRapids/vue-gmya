<template>
  <div class="container">
    <!-- 顶部条 -->
    <div class="t-top">
      <img class="topicon homeicon" src="../../asset/home.png" @click="goLogin" />
      <p>你对{{ user.name }}有什么话要说？</p>
    </div>
    <!-- 第二部分 -->
    <div class="top">
      <img :class="{ play: isPlay, topicon: true }" src="../../asset/yingyue.png" @click="stop" />
      <audio
        id="bgaudio"
        src="../../asset/audio/MySoul.mp3"
        autoplay="autoplay"
        controls="controls"
        loop="loop"
        hidden="hidden"
      ></audio>
      <div>
        {{ title }}
      </div>
      <img class="topicon" src="../../asset/fengxiang.png" />
    </div>
    <!-- 中间头像 -->
    <div class="center-container">
      <img :src="user.avatar" class="avatar" />
    </div>
    <!-- 弹幕 -->
    <div class="block" :hidden="flag">
      <input class="danmu-input" type="text" :value="danmu" />
    </div>
    <!-- 下部内容 -->
    <div class="under-content">
      <!-- 留言发送 -->
      <div class="label-send">
        <input
          id="label-input"
          class="label-input"
          type="text"
          placeholder="#说说我们之间的故事"
          :value="inputValue"
          @keyup.enter="send"
        />

        <button class="sendbtn" @click="send">发送</button>
      </div>
      <!-- 留言标签 -->
      <div class="label-content">
        <div
          class="label-collection"
          v-for="item in labels.slice(labelStart, labelEnd)"
          :key="item.id"
        >
          <label class="title-xu" @click="click(item)">{{ item.labelContent }}</label>
        </div>
      </div>
      <button class="change-btn" @click="changeLabel()">换一批</button>
    </div>
    <!-- 按钮 -->
    <button class="label-btn" @click="gomanage">留言管理</button>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      user: {
        name: 'Tom',
        avatar: require('../../asset/bg_weidenglu.png')
      },
      title: '你好，倾诉者',
      isPlay: true, //音乐播放
      inputValue: '', //输入框文字
      labels: [],
      labelStart: 0, //留言标签开始位置
      labelEnd: 4, //留言标签最后一个
      danmu: [], //弹幕
      flag: true //弹幕隐藏
    }
  },
  methods: {
    // 音乐暂停
    stop() {
      this.isPlay = !this.isPlay
      var bgaudio = document.getElementById('bgaudio')
      if (this.isPlay) {
        //当为true时，播放
        bgaudio.play()
      } else {
        bgaudio.pause()
        // bgaudio.currentTime = 0
      }
    },
    //点击标签
    click(item) {
      console.log(item.id), console.log(item.labelContent), (this.inputValue = item.labelContent)
    },
    //发送弹幕
    send() {
      // 弹幕不隐藏
      this.flag = false
      //获取输入文字
      this.inputValue = document.getElementById('label-input').value
      //弹幕
      this.danmu = this.inputValue
      //清空输入框
      this.inputValue = ''
    },
    // 换一批
    changeLabel() {
      console.log('s' + this.labelStart + 'e' + this.labelEnd),
        (this.labelStart += 4),
        (this.labelEnd += 3)
      if (this.labelStart >= this.labels.length) {
        ;(this.labelStart = 0), (this.labelEnd = 4)
      }
    },
    goLogin() {
      this.$router.push('/login')
    },
    gomanage() {
      this.$router.push('/manage')
    }
  },
  computed: {},
  components: {},
  created() {
    // 留言标签
    this.axios({
      url: this.GLOBAL.baseUrl + '/tLabel/selectLabel'
    }).then((res) => {
      console.log(res.data.data)
      this.labels = res.data.data
    })
  },
  mounted() {}
}
</script>

<style scoped lang="scss">
// 弹幕
.block {
  margin-top: 10px;
  position: absolute;
  animation: barrage 5s linear infinite;
}

@keyframes barrage {
  from {
    left: 100%;
    transform: translate3d(0, 0, 0);
  }
  to {
    left: 0;
    transform: translate3d(-100%, 0, 0);
  }
}
.container {
  position: absolute;
  background-image: url('../../asset/bg.jpeg');
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
  margin: 50% 1% 2% 10%;
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
  vertical-align: middle; //表单控件上下居中对齐,解决输入文字时，下边框微微移动问题
  color: #757575;
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
  height: 20px;
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
.danmu-input {
  display: flex;
  padding: 5px;
  border: none;
  background-color: #00c7ff;
  outline: none;
  color: #ffffff;
  border-radius: 30px;
  text-align: center;
  z-index: 1;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.change-btn {
  position: absolute;
  background-color: transparent;
  border: none;
  outline: none;
  height: 20px;
  color: #ffffff;
  font-size: 13px;
  margin-top: 100px;
  margin-left: 270px;
}
.label-content {
  display: flex;
  flex-wrap: wrap;
  height: 90px;
}
</style>
