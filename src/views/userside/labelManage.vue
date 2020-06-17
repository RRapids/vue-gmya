<template>
  <div>
    <div class="top">
      <img class="icon lefticon" src="../../asset/left.png" @click="returnHome" />
      <p>倾诉留言卡</p>
    </div>
    <div class="container" v-for="(item, index) in userlabels" :key="index">
      <!-- 没有评论时 -->
      <div class="nonelabel" v-if="item.length === null">
        <p class="p1">暂时没有人评论</p>
        <button class="btn">邀请好友评论</button>
      </div>
      <!-- 有评论时 -->
      <div v-else class="detail">
        <img :src="item.useravatar" class="icon" @click="lookdetail(item)" />
        <img src="../../asset/delete.png" class="icon" @click="deletealert(index)" />
        <input
          id="label-input"
          class="label-input"
          type="text"
          readonly="readonly"
          :value="item.content"
        />
      </div>
    </div>
    <!-- 留言者详情框 -->
    <div class="userdetail" v-show="flag">
      <p class="p2">评论人</p>
      <div class="usercontent">
        <img :src="detail.useravatar" class="usericon" />
        <div class="name-time">
          <p>{{ detail.username }}</p>
          <p>{{ detail.gmtCreate }}</p>
        </div>
      </div>
      <button class="confirmbtn" @click="closealert">我知道了</button>
    </div>
    <!-- 删除警示框 -->
    <div class="userdetail" v-show="deleteflag">
      <p style="font-weight:600">警告</p>
      <p style="font-size:14px;color:#8E8E93;">删除评论无法恢复，确认删除吗？</p>
      <div class="selectarea">
        <button class="d-btn" @click="closealert">取消</button>
        <button class="d-btn" style="color:#FF2525" @click="deletelabel">确认</button>
      </div>
    </div>
    <!-- 客服icon -->
    <img src="../../asset/kefu.png" class="kefu" @click="chartRoom" />
  </div>
</template>

<script>
export default {
  name: 'labelManage',
  data() {
    return {
      userlabels: [
        // {
        //   id: '1',
        //   username: 'Tom',
        //   useravatar: require('../../asset/user2.png'),
        //   labelContent: '你真的超有正义感',
        //   createTime: '2020.06.06 11；14'
        // },
        // {
        //   id: '2',
        //   username: 'Keyreu',
        //   useravatar: require('../../asset/user2.png'),
        //   labelContent: '老实说你的脾气太暴躁',
        //   createTime: '2020.06.06 11；14'
        // }
      ],
      flag: false, //留言详情弹窗
      deleteflag: false, //删除警示框
      detail: [], //详情信息，数据传递
      deleteID: 0 //删除id
    }
  },
  components: {},
  created() {
    // 查询所有留言
    this.axios({
      url: this.GLOBAL.baseUrl + '/api/comment/selectComment'
    }).then((res) => {
      console.log(res.data.data)
      this.userlabels = res.data.data
    })
  },
  mounted() {},
  methods: {
    returnHome() {
      //返回上一个页面
      this.$router.go(-1)
    },
    // 留言详情
    lookdetail(item) {
      this.flag = true
      this.detail = item
    },
    // 删除警示框
    deletealert(e) {
      this.deleteflag = !this.deleteflag
      this.deleteID = e
    },
    // 关闭弹窗
    closealert() {
      ;(this.flag = false), (this.deleteflag = false)
    },
    // 删除留言
    deletelabel() {
      console.log(this.deleteID)
      this.axios({
        url: this.GLOBAL.baseUrl + '/api/tomment/delete'
      }).then((res) => {
        console.log(res)
      })
      ;(this.deleteflag = false), this.userlabels.splice(this.deleteID, 1)
    },
    // 聊天室
    chartRoom() {
      this.$router.push('/chartRoom')
    },
    // 处理时间的方法
    replaceTime(e) {
      let time = e.replace('T', '-')
      return time
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
  position: absolute;
  width: 50px;
  height: 50px;
  top: 600px;
  left: 270px;
  z-index: 1;
  border-radius: 50%;
}
.userdetail {
  position: absolute;
  width: 70%;
  height: 150px;
  z-index: 99;
  margin: 0 auto;
  top: 250px;
  left: 60px;
  background-color: #ffffff;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.19);
  border: 1px solid #eeeeee;
  border-radius: 5px;
}
.usercontent {
  display: flex;
  height: 60px;
  text-align: left;
  align-items: center;
  justify-content: center;
  margin: 1px 10px 1px 10px;
  border-bottom: 1.5px solid #eeeeee;
}
.usericon {
  width: 30px;
  height: 30px;
  margin-right: 10px;
  border-radius: 50%;
}
.name-time {
  margin-left: 1px;
  font-size: 10px;
}
.p2 {
  text-align: left;
  font-size: 12px;
  margin-left: 10px;
  font-weight: bold;
}
.confirmbtn {
  color: #ff2525;
  font-size: 18px;
  margin-top: 6px;
  border: none;
  outline: none;
  background-color: transparent;
}
.selectarea {
  margin-top: 20px;
  margin-bottom: 0px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 60px;
  border-top: 1px solid #eeeeee;
}
.d-btn {
  font-size: 16px;
  border: none;
  outline: none;
  background-color: transparent;
  font-weight: bold;
}
</style>
