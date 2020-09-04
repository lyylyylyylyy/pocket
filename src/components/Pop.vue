<template>
    <div>
        <cube-popup type="my-popup" ref="myPopup" :mask="false">
          <div class="close" @click="hide('myPopup')"></div>
          <div class="submit" @click="submit()"></div>
          <div class="text" v-show="category=='1'">支出</div>
          <div class="text" v-show="category=='0'">收入</div>
          <div class="data-container">
            <div class="data-header">
              <img class="icon" :src="tagPay[index].icon_activate" v-if="category=='1'"/>
              <div class="desc" v-if="category=='1'">{{tagPay[index].desc}}</div>
              <img class="icon" :src="tagIncome[index].icon_activate" v-if="category=='0'"/>
              <div class="desc" v-if="category=='0'">{{tagIncome[index].desc}}</div>
              <input class="input" v-model="money"/>
            </div>
          </div>
          <div class="tag-container" v-show="category == '1'">
            <div class="tag-list" v-for="(item, idx) in tagPay" :key="idx" @click="activatePay(idx)">
              <img :src="[idx===index ? item.icon_activate : item.icon]"/>
              <div class="tag-desc">{{item.desc}}</div>
            </div>
          </div>
          <div class="tag-box" v-show="category == '0'">
            <div class="tag-list" v-for="(item, idx) in tagIncome" :key="idx" @click="activateIncome(idx)">
              <img :src="[idx===index ? item.icon_activate : item.icon]"/>
              <div class="tag-desc">{{item.desc}}</div>
            </div>
          </div>
          <cube-button @click="showUpdatePropsPicker" class="time">选择日期</cube-button>
          <div class="remark">
            <p>备注</p>
            <input v-model="remark"/>
          </div>
        </cube-popup>
    </div>
</template>
<script>
const qs = require('qs')

export default {
  name: 'pop',
  props: {
    category: {
      type: String
    }
  },
  data () {
    return {
      tagPay: [
        {
          icon: require('../assets/vegetable.png'),
          icon_activate: require('../assets/vegetable_activate.png'),
          desc: '买菜'
        },
        {
          icon: require('../assets/child.png'),
          icon_activate: require('../assets/child_activate.png'),
          desc: '孩子'
        },
        {
          icon: require('../assets/eat.png'),
          icon_activate: require('../assets/eat_activate.png'),
          desc: '吃喝'
        },
        {
          icon: require('../assets/pet.png'),
          icon_activate: require('../assets/pet_activate.png'),
          desc: '宠物'
        },
        {
          icon: require('../assets/rent.png'),
          icon_activate: require('../assets/rent_activate.png'),
          desc: '租房'
        },
        {
          icon: require('../assets/clothes.png'),
          icon_activate: require('../assets/clothes_activate.png'),
          desc: '服饰'
        },
        {
          icon: require('../assets/charity.png'),
          icon_activate: require('../assets/charity_activate.png'),
          desc: '公益'
        },
        {
          icon: require('../assets/makeup.png'),
          icon_activate: require('../assets/makeup_activate.png'),
          desc: '化妆品'
        },
        {
          icon: require('../assets/phone.png'),
          icon_activate: require('../assets/phone_activate.png'),
          desc: '话费'
        },
        {
          icon: require('../assets/traffic.png'),
          icon_activate: require('../assets/traffic_activate.png'),
          desc: '交通'
        },
        {
          icon: require('../assets/study.png'),
          icon_activate: require('../assets/study_activate.png'),
          desc: '学习'
        },
        {
          icon: require('../assets/medical.png'),
          icon_activate: require('../assets/medical_activate.png'),
          desc: '医疗'
        },
        {
          icon: require('../assets/joy.png'),
          icon_activate: require('../assets/joy_activate.png'),
          desc: '娱乐'
        },
        {
          icon: require('../assets/necessary.png'),
          icon_activate: require('../assets/necessary_activate.png'),
          desc: '日用品'
        }
      ],
      index: 0,
      tagIncome: [
        {
          icon: require('../assets/writeoff.png'),
          icon_activate: require('../assets/writeoff_activate.png'),
          desc: '报销'
        },
        {
          icon: require('../assets/salary.png'),
          icon_activate: require('../assets/salary_activate.png'),
          desc: '工资'
        },
        {
          icon: require('../assets/red.png'),
          icon_activate: require('../assets/red_activate.png'),
          desc: '红包'
        },
        {
          icon: require('../assets/invest.png'),
          icon_activate: require('../assets/invest_activate.png'),
          desc: '投资'
        },
        {
          icon: require('../assets/parttime.png'),
          icon_activate: require('../assets/parttime_activate.png'),
          desc: '兼职'
        },
        {
          icon: require('../assets/bonus.png'),
          icon_activate: require('../assets/bonus_activate.png'),
          desc: '奖金'
        }
      ],
      time: '',
      tag: '',
      money: '',
      remark: '',
      type: ''
    }
  },
  watch: {
    category (val) {
      this.type = val
    }
  },
  mounted () {
    // console.log(this.val)
  },
  methods: {
    showPopup (refId) {
      const component = this.$refs[refId]
      component.show()
    },
    hide (refId) {
      this.$refs[refId].hide()
    },
    activatePay (idx) {
      this.index = idx
      this.tag = this.tagPay[idx].desc
    },
    activateIncome (idx) {
      this.index = idx
      this.tag = this.tagIncome[idx].desc
    },
    showUpdatePropsPicker () {
      if (!this.updatePropsPicker) {
        this.updatePropsPicker = this.$createDatePicker({
          title: '',
          min: new Date(2008, 7, 8),
          max: new Date(2020, 9, 20),
          value: new Date(),
          onSelect: this.selectHandle,
          onCancel: this.cancelHandle
        })
      }

      this.updatePropsPicker.show()
      setTimeout(() => {
        this.updatePropsPicker.$updateProps({
          title: '',
          value: new Date(2010, 9, 1)
        })
      }, 1000)
    },
    selectHandle (date, selectedVal, selectedText) {
      this.time = date.getTime()
    },
    cancelHandle () {
      console.log('ppp')
    },
    submit () {
      this.$http.post('/detail', qs.stringify({
        time: this.time,
        tag: this.tag,
        category: this.type,
        money: this.money,
        remark: this.remark
      })).then(res => {
        console.log(res)
        this.hide('myPopup')
      }).catch(error => {
        console.log(error.message)
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.close {
  position: absolute;
  width: 20px;
  height: 20px;
  background-image: url('../assets/close.png');
  background-repeat: no-repeat;
  background-size: contain;
  margin-left: 10px;
}
.submit {
  position: absolute;
  width: 20px;
  height: 20px;
  background-image: url('../assets/check.png');
  background-repeat: no-repeat;
  background-size: contain;
  right: 5%;
}
.data-container {
  width: 100%;
  margin: 0 20px;
  .data-header {
    display: flex;
  }
}
.text {
  margin-top: 40px;
  margin-bottom: 10px;
}
.icon {
    width: 22px;
    height: 22px;
}
.desc {
    color: blue;
}
.input {
  width: 220px;
}
.tag-container {
  display: flex;
  flex-wrap: wrap;
  margin: 30px 20px 0 20px;
  .tag-list {
    flex: 1;
    width: 33%;
    min-width: 33%;
    max-width: 33%;
    margin-bottom: 10px;
  }
  img {
    width: 30px;
    height: 30px;
    margin-bottom: 5px;
  }
}
.tag-box {
  display: flex;
  flex-wrap: wrap;
  margin: 30px 20px 0 20px;
  .tag-list {
    flex: 1;
    width: 25%;
    min-width: 25%;
    max-width: 25%;
    margin-bottom: 10px;
  }
  img {
    width: 30px;
    height: 30px;
    margin-bottom: 5px;
  }
}
.time {
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  width: 50%;
  margin-top: 40px;
}
</style>

<style lang="scss">
.cube-popup-content {
  min-height: 100%;
  background: white;
  padding-top: 10px;
}
</style>
