<template>
  <div class="container">
    <div class="content">
      <form :model="validateForm">
        <!-- 账号 -->
        <input type="text" placeholder="账号" v-model="validateForm.account" ref="account" />

        <!-- 密码 -->
        <input type="password" placeholder="密码" v-model="validateForm.password" ref="password" />

        <div class="btn">
          <!-- 提交 -->
          <button type="submit" @click="submit">登录</button>
          <button @click="clear">重置</button>
        </div>
      </form>
      <div class="otherLogin">
        <button class="other-btn">手机验证码登录</button>
        <button class="other-btn">智慧校园登录</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      // 账号填写规则
      accountRules: [{ validate: (val) => !val, message: '必须填写账号' }],
      // 密码填写规则
      passwordRules: [
        { validate: (val) => !val, message: '必须填写密码' },
        { validate: (val) => val.length >= 3 && val.length <= 10, message: '密码长度大于3小于10' }
      ],
      // 验证表单
      validateForm: {
        account: '111',
        password: '123456'
      },
      vailiable: true
    }
  },
  methods: {
    submit() {
      this.axios({
        method: 'post',
        url: this.GLOBAL.baseUrl + '/api/login',
        data: {
          account: this.validateForm.account,
          password: this.validateForm.password
        }
      }).then((res) => {
        if (res.data.code === 1) {
          // 存token
          localStorage.setItem('token', res.data.data.token)
          let user = {
            id: res.data.data.userDto.userId,
            name: res.data.data.userDto.userName,
            role: res.data.data.userDto.roleId,
            avatar: res.data.data.userDto.avatar
          }
          // 存user信息
          localStorage.setItem('user', JSON.stringify(user))
          if (user.role === '1') {
            console.log('用户:' + user.name)
            this.$router.push('/')
          } else if (user.role === '2') {
            console.log('客服:' + user.name)
            this.$router.push('/kefuHome')
          }
        } else {
          //登录失败
          alert(res.data.msg)
          //清空
          this.clear()
        }
      })
    },
    clear() {
      this.validateForm = {
        account: '',
        password: ''
      }
    }
  },
  mounted() {
    console.log(this.$refs.loginForm)
  }
}
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
  display: flex;
  justify-content: space-around;
  width: 210px;
  margin-bottom: 20px;
  button {
    background: #eaf8fb;
    border: none;
    outline: none;
    padding: 5px;
    width: 100px;
    border-radius: 20px;
  }
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
