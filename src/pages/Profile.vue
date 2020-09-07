<template>
    <div>
      <div class="avatar" :style="{'background-image': 'url(' + header + ')'}"></div>
      <div>注销</div>
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
