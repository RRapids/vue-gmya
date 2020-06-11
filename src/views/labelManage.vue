<template>
  <div>
    <div class="top">
      <img class="icon lefticon" src="../asset/left.png" @click="returnHome" />
      <p>倾诉留言卡</p>
    </div>
    <div class="container" v-for="item in userlabels" :key="item.id">
      <!-- 没有评论时 -->
      <div class="nonelabel" v-if="(item.length = null)">
        <p class="p1">暂时没有人评论</p>
        <button class="btn">邀请好友评论</button>
      </div>
      <!-- 有评论时 -->
      <div v-else class="detail">
        <img :src="item.useravatar" class=" icon usericon" />
        <img src="../asset/delete.png" class="icon deleteicon" />
        <input
          id="label-input"
          class="label-input"
          type="text"
          readonly="readonly"
          :value="item.labelContent"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'labelManage',
  data() {
    return {
      userlabels: [
        {
          id: '1',
          username: 'Tom',
          useravatar: require('../asset/user2.png'),
          labelContent: '你真的超有正义感',
          createTime: '2020.06.06 11；14'
        },
        {
          id: '2',
          username: 'Tom',
          useravatar: require('../asset/user2.png'),
          labelContent: '你真的超有正义感',
          createTime: '2020.06.06 11；14'
        }
      ]
    }
  },
  components: {},
  created() {},
  mounted() {},
  methods: {
    returnHome() {
      //返回上一个页面
      this.$router.go(-1)
    }
  },
  computed: {}
}
</script>

<style scoped lang="scss">
.container {
  display: flex;
  justify-content: center;
}
.top {
  display: flex;
  height: 40px;
  background-color: #00c7ff;
  color: #ffffff;
  font-size: 14px;
  align-items: center;
}
.icon {
  width: 25px;
  height: 25px;
}
.lefticon {
  margin-left: 7%;
  margin-right: 27%;
}

.nonelabel {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 50%;
}
.p1 {
  font-size: 16px;
  color: #757575;
}
.btn {
  border: none;
  outline: none;
  background-color: #00c7ff;
  width: 200px;
  height: 40px;
  border-radius: 60px;
  color: #ffffff;
  font-size: 14px;
}
.detail {
  display: flex;
  height: 40px;
  width: 90vw;
  align-items: center;
  justify-content: space-evenly;
  margin: 10px 1px 0 1px;
}
.label-input {
  border-bottom: 1px solid #bbbbbb;
  border-top: none;
  border-left: none;
  border-right: none;
  background-color: transparent;
  width: 200px;
  outline: none;
  vertical-align: middle; //表单控件上下居中对齐,解决输入文字时，下边框微微移动问题
}
</style>
