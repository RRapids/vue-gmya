<template>
  <div>
    <div class="top">
      <p>微客服</p>
    </div>
    <div class="option-bar" id="nav">
      <router-link to="/kefuHome/connect">已接入({{ connectNum }})</router-link>
      <router-link to="/kefuHome/notConnect">未接入({{ noeConnectNum }})</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'connect',
  data() {
    return {
      connectNum: 2,
      noeConnectNum: 4
    }
  },
  components: {},
  created() {},
  mounted() {},
  methods: {},
  computed: {}
}
</script>

<style scoped lang="scss">
#nav {
  padding: 5px;
  a {
    color: #2c3e50;
    font-weight: bold;
    text-decoration: none;
    font-size: 14px;
    &.router-link-exact-active {
      color: #00c7ff;
    }
  }
}
.top {
  display: flex;
  height: 40px;
  background-color: #f8f8f8;
  font-size: 14px;
  align-items: center;
  justify-content: center;
}
.option-bar {
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-top: 1px solid #bbbbbb;
  border-bottom: 1px solid #bbbbbb;
}
</style>
