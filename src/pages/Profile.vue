<template>
    <div>
      <div class="avatar" :style="{'background-image': 'url(' + header + ')'}"></div>
      <div @click="logout()">注销</div>
    </div>
</template>
<script>
export default {
  data () {
    return {
      header: ''
    }
  },
  mounted () {
    this.getHeader()
  },
  methods: {
    getHeader () {
      this.$http.get('/avatar').then(res => {
        console.log(res.data)
        this.header = res.data.data
      }).catch(error => {
        console.log(error.message)
      })
    },
    showBtn () {
      this.$createDialog({
        type: 'confirm',
        title: '确认要退出登录吗？',
        content: '再考虑一下下好不好？',
        confirmBtn: {
          text: '狠心退出',
          active: true,
          disabled: false,
          href: 'javascript:;'
        },
        cancelBtn: {
          text: '再考虑一下',
          active: false,
          disabled: false,
          href: 'javascript:;'
        },
        onConfirm: () => {
          this.$http.post('/logout').then(res => {
            this.$router.push('/login')
          })
        },
        onCancel: () => {
        }
      }).show()
    },
    logout () {
      this.showBtn()
    }
  }
}
</script>
<style lang="scss" scoped>
.avatar {
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 80px;
  background-repeat: no-repeat;
  background-size: 80px 80px;
  border: 2px solid grey;
  border-radius: 50%;
}
</style>
