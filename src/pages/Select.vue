<template>
    <div class="select">
        <div class="header">
            <div class="add" @click="addLedger"></div>
            <div class="text">我的账本</div>
            <div class="edit"></div>
        </div>
        <div class="content">
          <div class="list" v-for="pocket in pocketlist" :key="pocket._id" @click="enter(pocket._id)">
            <img :src="tagList[pocket.index].path" class="icon"/>
            <div class="content-txt">
              <div class="name">{{pocket.name}}</div>
              <div class="desc">
                <div class="tag">{{pocket.tag}}</div>
                <div class="calculate">共有666666笔账单</div>
              </div>
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
      pocketlist: [],
      tagList: [
        {
          id: 0,
          desc: '日常',
          path: require('../assets/book1.png')
        },
        {
          id: 1,
          desc: '生意',
          path: require('../assets/book2.png')
        },
        {
          id: 2,
          desc: '家庭',
          path: require('../assets/book3.png')
        },
        {
          id: 3,
          desc: '旅行',
          path: require('../assets/book4.png')
        },
        {
          id: 4,
          desc: '装修',
          path: require('../assets/book5.png')
        },
        {
          id: 5,
          desc: '结婚',
          path: require('../assets/book6.png')
        },
        {
          id: 6,
          desc: '校园',
          path: require('../assets/book7.png')
        },
        {
          id: 7,
          desc: '班费',
          path: require('../assets/book8.png')
        },
        {
          id: 8,
          desc: '人情',
          path: require('../assets/book9.png')
        }
      ]
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
    },
    enter (id) {
      this.$router.push({path: './ledger', query: { id: id }})
    }
  }
}
</script>
<style lang="scss" scoped>
.select {
  overflow: auto;
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
    .list {
      display: flex;
      margin-bottom: 20px;
    }
    .icon {
      width: 60px;
      height: 60px;
    }
    .content-txt {
      flex: 1;
    }
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
