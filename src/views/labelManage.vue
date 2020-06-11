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
        <img :src="item.useravatar" class=" icon" />
        <img src="../asset/delete.png" class="icon" />
        <input
          id="label-input"
          class="label-input"
          type="text"
          readonly="readonly"
          :value="item.labelContent"
        />
      </div>
    </div>
    <!-- 人员详情 -->
    <div class="userdetail" v-show="true">
      <p class="p2">评论人</p>
      <div class="usercontent">
        <img src="../asset/bg_weidenglu.png" class="usericon" />
        <div class="name-time">
          <p>腾飞</p>
          <p>2020.06.06 11:14</p>
        </div>
      </div>
    </div>
    <img src="../asset/kefu.png" class="kefu" />
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
.kefu {
  width: 50px;
  height: 50px;
  margin-top: 50%;
  margin-left: 70%;
  z-index: 1;
  border-radius: 50%;
}
.userdetail {
  width: 70%;
  height: 150px;
  z-index: 99;
  margin: 0 auto;
  margin-top: 20%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.19);
  border: 1px solid #eeeeee;
}
.usercontent {
  display: flex;
  height: 40px;
  background-color: #eeeeee;
  text-align: left;
  align-items: center;
  margin: 1px 10px 1px 10px;
}
.usericon {
  width: 30px;
  height: 30px;
  margin-right: 10px;
  border-radius: 50%;
}
.name-time {
  display: flex;
  height: 30px;
  flex-direction: column;
  justify-content: center;
  font-size: 10px;
}
.p2 {
  text-align: left;
  font-size: 12px;
  margin-left: 10px;
}
</style>
