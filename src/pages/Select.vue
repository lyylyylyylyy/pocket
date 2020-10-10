<template>
    <div class="select">
        <div class="header">
            <div class="add" @click="addLedger"></div>
            <div class="text">我的账本</div>
            <div class="edit"></div>
        </div>
        <div class="content">
          <div class="list" v-for="pocket in pocketlist" :key="pocket._id">
            <div class="name">{{pocket.name}}</div>
            <div class="desc">
              <div class="tag">{{pocket.tag}}</div>
              <div class="calculate">共有666666笔账单</div>
            </div>
          </div>
        </div>
    </div>
</template>
<script>
// const qs = require('qs')

export default {
  name: 'Select',
  data () {
    return {
      pocketlist: []
    }
  },
  mounted () {
    this.$http.get('/pocketlist').then(res => {
      console.log(res.data.data)
      this.pocketlist = res.data.data
    }).catch(error => {
      console.log(error.message)
    })
  },
  methods: {
    addLedger () {
      this.$router.push('./add-ledger')
    }
  }
}
</script>
<style lang="scss" scoped>
.select {
  .header {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin: 10px 20px 20px 20px;
    .add {
      width: 30px;
      height: 30px;
      background-image: url("../assets/add.png");
      background-size: contain;
      background-repeat: no-repeat;
    }
    .text {
      flex: 1;
    }
    .edit {
      width: 30px;
      height: 30px;
      background-image: url("../assets/edit.png");
      background-size: contain;
      background-repeat: no-repeat;
    }
  }
  .content {
    .name {
      text-align: left;
      margin: 10px 20px 5px 20px;
    }
    .desc {
      display: flex;
      align-content: center;
      margin: 5px 20px 5px 20px;
      border-bottom: solid 1px grey;
      .tag {
        font-size: 5px;
        flex: 1;
      }
      .calculate {
        font-size: 5px;
        text-align: right;
        flex: 5;
      }
    }
  }
}
</style>
