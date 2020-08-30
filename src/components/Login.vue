<template>
  <div class="pocket-login-v1">
    <div class="logo"></div>
    <div>欢迎来到皮卡丘记账本</div>
    <div>
      <p>用户名：</p>
      <input type="text" placeholder="用户名" name="user" v-model="username" />
    </div>
    <div>
      <p>密码：</p>
      <input type="password" placeholder="密码" name="password" v-model="password" />
    </div>
    <button @click="login()">登录</button>
  </div>
</template>

<script>
const qs = require('qs')
const md5 = require('blueimp-md5')

export default {
  name: 'Login',
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    async login () {
      console.log('login')
      await this.$http.post('/login', qs.stringify({ 'username': this.username, 'password': md5(this.password) })).then(res => {
        console.log(res)
      }).catch(error => {
        console.log(error.message)
      })
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
