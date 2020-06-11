<template>
  <div class="container">
    <div class="content">
      <form action="../views/Login.vue">
        <!-- 账号 -->
        <input type="text" placeholder="账号" />

        <!-- 密码 -->
        <input type="password" placeholder="密码" />

        <!-- 提交 -->
        <input type="submit" value="登录" class="btn" />
        <!-- <button type="submit" class="btn">登录</button> -->
      </form>
      <div class="otherLogin">
        <button class="other-btn">其他登录</button>
        <button class="other-btn">智慧校园登录</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.container {
  position: absolute;
  background-image: url('../asset/beijing.jpeg');
  width: 100%;
  height: 100%;
  z-index: -1;
  background-size: 100% 100%;
}
.content {
  display: flex;
  flex-direction: column;
  margin-top: 400px;
}
form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
input {
  background-color: transparent;
  border-radius: 7px;
  border-color: #16a085;
  outline: none;
  border: 1px solid #16a085;
  padding: 7px;
  margin-bottom: 20px;
  color: #ffffff;
  width: 200px;
}
.btn {
  background-color: #16a085;
  width: 210px;
}
.otherLogin {
  display: flex;
  justify-content: space-evenly;
}
.other-btn {
  background-color: transparent;
  border: none;
  outline: none;
  color: #16a085;
}
</style>
