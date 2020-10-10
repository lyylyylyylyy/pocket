<template>
    <div class="header">
        <div>
            <div class="list">
                <div class="desc" @click="addLedger">
                  <div>{{name}}</div>
                </div>
                <div class="symbol"></div>
            </div>
        </div>
        <div></div>
        <div></div>
    </div>
</template>
<script>

export default {
  name: 'Header',
  data () {
    return {
      pocketlist: [],
      name: ''
    }
  },
  mounted () {
    this.$http.get('/pocketlist').then(res => {
      console.log(res.data.data)
      this.pocketlist = res.data.data
      if (this.pocketlist.length) {
        this.name = this.pocketlist[0].name
      } else {
        this.name = '我的账本'
      }
    }).catch(error => {
      console.log(error.message)
    })
  },
  methods: {
    addLedger () {
      this.$router.push('./select')
    }
  }
}
</script>
<style lang="scss" scoped>
.header {
    width: 100%;
    height: 200px;
    background-image: url("https://img.tukuppt.com/bg_grid/00/03/77/qMaJ6zUerz.jpg!/fh/350");
    background-size: contain;
    background-repeat: no-repeat;
}
.list {
    position: relative;
    width: 30%;
    border: 2px solid grey;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 15px;
}
</style>
