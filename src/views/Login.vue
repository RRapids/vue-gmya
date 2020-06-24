<template>
  <div class="container">
    <div class="logo">
      <img src="../asset/logo.png" />
    </div>
    <!-- 登录 -->
    <div class="content" v-show="login">
      <form :model="validateForm">
        <!-- 账号 -->
        <input type="text" placeholder="账号" v-model="validateForm.account" />

        <!-- 密码 -->
        <input type="password" placeholder="密码" v-model="validateForm.password" />

        <div class="btn">
          <!-- 提交 -->
          <button type="submit" @click="submit">登录</button>
          <button @click="clear">重置</button>
        </div>
      </form>
      <div class="otherLogin">
        <button class="other-btn" @click="goRegister">注册</button>
      </div>
    </div>
    <!-- 注册 -->
    <div class="content" style="margin-top:300px" v-show="register">
      <form :v-model="validateForm">
        <!-- 用户名 -->
        <input type="text" placeholder="用户名" v-model="validateForm.userName" />
        <!-- 账号 -->
        <input type="text" placeholder="账号" v-model="validateForm.account" />
        <!-- 密码 -->
        <input type="password" placeholder="密码" v-model="validateForm.password" />
        <!-- 确认密码 -->
        <input type="password" placeholder="确认密码" v-model="validateForm.againPassword" />

        <div class="btn">
          <!-- 提交 -->
          <button type="submit" style="width:220px" @click="registers">注册</button>
        </div>
        <div class="otherLogin">
          <button class="other-btn" @click="goRegister">返回登录</button>
        </div>
      </form>
    </div>
    <!-- 遮罩层 -->
    <div class="mask" v-if="show">
      <div class="dialog">
        <h4>账号或密码错误</h4>
        <button class="center" @click="show = !show">确定</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      // 验证表单
      validateForm: {
        account: '',
        password: '',
        userName: '',
        againPassword: ''
      },
      show: false,
      login: true,
      register: false
    }
  },
  methods: {
    submit() {
      if ((this.validateForm.account === '') & (this.validateForm.password === '')) {
        this.show = true
        return false
      }
      // 清空缓存
      localStorage.clear()
      this.axios({
        method: 'post',
        url: this.GLOBAL.baseUrl + '/api/login',
        data: {
          account: this.validateForm.account,
          password: this.validateForm.password
        }
      }).then((res) => {
        // 请求成功判断
        if (res.data.code === 1) {
          // 用户不存在
          if (res.data.data.message != null) {
            console.log(res.data.data.message)
            this.show = true
          }
          //用户存在
          else if (typeof res.data.data.message == 'undefined') {
            // 存token
            localStorage.setItem('token', res.data.data.token)
            this.$store.commit('setToken', res.data.data.token)
            let user = {
              id: res.data.data.userDto.userId,
              name: res.data.data.userDto.userName,
              role: res.data.data.userDto.roleId,
              avatar: res.data.data.userDto.avatar,
              userPath: res.data.data.userDto.userPath
            }
            // 存user信息
            localStorage.setItem('user', JSON.stringify(user))
            this.$store.commit('setUser', JSON.stringify(user))

            if (user.role === '1') {
              console.log('用户:' + user.name)
              this.$router.push('/')
            } else if (user.role === '2') {
              console.log('客服:' + user.name)
              this.$router.push('/kefuHome')
            } else {
              console.log('未找到此用户')
            }
            window.location.reload()
          }
        } else {
          //登录失败
          alert(res.data.msg)
          //清空
          this.clear()
        }
      })
    },
    registers() {
      // 表单验证
      if (this.validateForm.userName === '') {
        alert('请设置用户名')
        return false
      } else if (this.validateForm.account === '') {
        alert('请设置账号')
        return false
      } else if (this.validateForm.password === '') {
        alert('请设置密码')
        return false
      } else if (this.validateForm.password != this.validateForm.againPassword) {
        alert('两次密码输入不同')
        return false
      }
      // 注册接口
      this.axios({
        method: 'post',
        url: this.GLOBAL.baseUrl + '/api/user/addUser',
        data: {
          avatar:
            'https://upload.jianshu.io/users/upload_avatars/14261279/e625c28b-efac-4822-90c3-7011042192b3?imageMogr2/auto-orient/strip|imageView2/1/w/240/h/240',
          userName: this.validateForm.userName,
          account: this.validateForm.account,
          password: this.validateForm.password
        }
      }).then((res) => {
        console.log(res)
        alert('注册成功')
        ;(this.login = !this.login), (this.register = !this.register)
      })
    },
    clear() {
      this.validateForm = {
        account: '',
        password: ''
      }
    },
    goRegister() {
      ;(this.login = !this.login), (this.register = !this.register)
    }
  },
  mounted() {}
}
</script>

<style lang="scss" scoped>
.container {
  position: absolute;
  background-image: url('../asset/bg1.jpg');
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
.logo {
  width: 100%;
  height: 50px;
  img {
    width: 100px;
    height: 100px;
    margin-top: 120px;
    border-radius: 50%;
    box-shadow: 0px 0px 4px 3px rgba(92, 225, 230, 0.5), 3px 6px 10px 3px rgba(92, 225, 230, 0.2);
  }
}
form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
input {
  background-color: transparent;
  border-radius: 5px;
  border-color: #16a085;
  outline: none;
  border: 1px solid #16a085;
  padding: 7px;
  margin-bottom: 20px;
  color: #ffffff;
  width: 200px;
}
input::-webkit-input-placeholder {
  color: #999999;
}
.btn {
  display: flex;
  justify-content: space-around;
  width: 230px;
  margin-bottom: 20px;
  button {
    background: #465c8d;
    color: #ffffff;
    border: none;
    outline: none;
    padding: 5px;
    width: 100px;
    border-radius: 5px;
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
.mask {
  z-index: 900;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  .dialog {
    z-index: 1000;
    width: 200px;
    background-color: #fff;
    line-height: 30px;
    border-radius: 10px;
    text-align: center;
    .center {
      width: 100px;
      border: none;
      border-bottom: 10px;
      font-size: 16px;
    }
  }
}
</style>
