<template>
    <div>
        <div class="header">
            <div class="back" @click="back"></div>
            <div class="text">新建账本</div>
        </div>
        <div class="tag-list">
          <div class="tag" v-for="tag in tagList" :key="tag.id" @click="selectTag(tag.desc, tag.id)">
            <img :src="tag.path" class="tag-img"/>
            <div class="tag-text">{{tag.desc}}</div>
          </div>
        </div>
        <div class="content">
            <input v-model="name" placeholder="请输入账本名称" />
        </div>
        <button class="button" @click="submit">确定</button>
    </div>
</template>
<script>
const qs = require('qs')

export default {
  name: 'AddLedger',
  data () {
    return {
      tag: '',
      name: '',
      index: 0,
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
  methods: {
    back () {
      this.$router.push('./select')
    },
    selectTag (tag, id) {
      this.tag = tag
      this.index = id
    },
    submit () {
      if (this.name && this.tag) {
        this.$http.post('/newledger', qs.stringify(
          {
            tag: this.tag,
            name: this.name,
            index: this.index
          }
        )).then(res => {
          console.log(res)
          this.$router.push('./select')
        })
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.header {
    display: flex;
    align-items: center;
    margin: 10px;
    .back {
        width: 30px;
        height: 30px;
        background-image: url("../assets/backpack.png");
        background-size: contain;
        background-repeat: no-repeat;
    }
    .text {
        flex: 1;
    }
}
.tag-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 20px 10px;
  .tag {
    margin-bottom: 15px;
    .tag-img {
      width: 80px;
      height: 80px;
      margin-bottom: 5px;
    }
  }
}
.tag-list:last-child {
  margin-right: 100px;
}
</style>
<style lang="scss">
.cube-drawer {
  background: white;
}
</style>
