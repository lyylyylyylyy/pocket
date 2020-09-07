<template>
  <div class="pocket-login-v1">
    <div class="logo"></div>
    <div>欢迎来到皮卡丘记账本</div>
    <div>{{message}}</div>
    <div>
      <p>用户名：</p>
      <input type="text" placeholder="用户名" name="user" v-model="username" />
    </div>
    <div>
      <p>头像：</p>
      <input type="url" placeholder="头像" name="header" v-model="header" />
    </div>
    <div>
      <p>密码：</p>
      <input type="password" placeholder="密码" name="password" v-model="password" />
    </div>
    <div>
      <p>确认密码：</p>
      <input type="password" placeholder="密码" name="password" v-model="repassword" />
    </div>
    <button @click="register()">注册</button>
    <button @click="toLogin()">已有账户</button>
  </div>
</template>

<script>
const qs = require('qs')
const md5 = require('blueimp-md5')

export default {
  name: 'Register',
  data () {
    return {
      username: '',
      password: '',
      repassword: '',
      message: '',
      header: ''
    }
  },
  methods: {
    async register () {
      await this.$http.post('/register', qs.stringify({ 'username': this.username, 'password': md5(this.password), 'repassword': md5(this.repassword), 'header': this.header })).then(res => {
        console.log(res)
        this.message = res.data.message
        this.$router.push({path: './login'})
      }).catch(error => {
        console.log(error.message)
      })
    },
    toLogin () {
      this.$router.push({path: './login'})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
