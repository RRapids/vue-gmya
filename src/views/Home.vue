<template>
  <div>
    <div id="nav">
      <router-link to="/home/card">卡片视图</router-link>|
      <router-link to="/Welcome">欢迎页面</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {}
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
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
