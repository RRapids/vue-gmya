<template>
  <div>
    <h3>Welcome to this page</h3>
    <router-link to="/home">
      <h3>go to home page</h3>
    </router-link>
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
#home {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
