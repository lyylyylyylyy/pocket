<template>
    <div class="index">
        <div class="tab">
           <div v-for="(item,index) in navPicArray"
            :key="index"
            @click="changeImg(index)"
            class="tab-detail">
                <router-link :to="item.path" class="link">
                    <img  alt="" v-bind:src="item.icon" v-show="index!=num">
                    <img  alt="" v-bind:src="item.active" v-show="index==num">
                </router-link>
                <p class="text" v-show="index!==num">{{item.name}}</p>
                <p class="text-activate" v-show="index===num">{{item.name}}</p>
           </div>
        </div>
    </div>
</template>
<script>

export default {
  name: 'index',
  data () {
    return {
      num: 0,
      navPicArray: [
        {
          icon: require('../assets/icon_coinpurse_line.png'),
          active: require('../assets/icon_coinpurse_line_activate.png'),
          path: '/account',
          name: '账户'
        },
        {
          icon: require('../assets/book.png'),
          active: require('../assets/book_activate.png'),
          path: '/ledger',
          name: '账本'
        },
        {
          icon: require('../assets/icon_signal.png'),
          active: require('../assets/icon_signal_activate.png'),
          path: '/profile',
          name: '我的'
        }
      ]
    }
  },
  mounted () {

  },
  methods: {
    changeImg (index) {
      console.log('index改变之前' + index)

      this.num = index
      console.log('index改变之后' + index)
    }
  }

}
</script>
<style scoped>
.index {
    position: fixed;
    bottom: 0;
    width: 96%;
}
.tab {
    display: flex;
    justify-content: center;
}
.tab-detail{
  width: 33%;
}
.tab-detail img{
  width: 25px;
}
.text-activate {
    margin: 0;
    color: rgba(39, 171, 194, 0.995);
}
.text {
    margin: 0;
}
</style>
