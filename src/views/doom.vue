<template>
  <div id="doom">
    <p>dddd</p>
    <vue-baberrage :isShow="barrageIsShow" :barrageList="barrageList" :loop="barrageLoop">
    </vue-baberrage>
  </div>
</template>

<script>
import { MESSAGE_TYPE } from 'vue-baberrage'
export default {
  name: 'doom',
  data() {
    return {
      msg: 'Hello vue-baberrage',
      barrageIsShow: true,
      currentId: 0,
      barrageLoop: false,
      barrageList: []
    }
  },
  methods: {
    addToList() {
      this.barrageList.push({
        id: ++this.currentId,
        avatar: '../asset/bg_weidenglu.png',
        msg: this.msg,
        time: 5,
        type: MESSAGE_TYPE.NORMAL
      })
    }
  }
}
</script>

<style lang="scss" scoped></style>
