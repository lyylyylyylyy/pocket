<template>
    <div class="ledger-page">
      <Header @identify="receive"></Header>
      <div class="detail-list">
        <div v-for="(item, idx) in detailList" :key="idx" class="day-list">
          <div class="day-bar">
            <div class="day-text">{{item[0]}}</div>
            <div class="day-money">收入：{{moneyList[idx][2]}} 支出：{{moneyList[idx][1]}}</div>
          </div>
          <div v-for="(detail, index) in item[1]" :key="index" class="day-detail">
            <img :src="tagList[detail.tag]" class="tag-img"/>
            <div class="tag-text">{{detail.tag}}</div>
            <div class="money-text">{{detail.money}}</div>
          </div>
        </div>
      </div>
      <div class="add-detail">
          <button @click="addPay()">添加支出</button>
          <button @click="addIncome()">添加收入</button>
      </div>
      <pop :category="category" ref="Pop"></pop>
    </div>
</template>
<script>
import Pop from '../components/Pop'
import Header from '../components/Header'

export default {
  name: 'Ledger',
  components: {Pop, Header},
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
      tagList: {
        '买菜': require('../assets/vegetable_activate.png'),
        '孩子': require('../assets/child_activate.png'),
        '吃喝': require('../assets/eat_activate.png'),
        '宠物': require('../assets/pet_activate.png'),
        '租房': require('../assets/rent_activate.png'),
        '服饰': require('../assets/clothes_activate.png'),
        '公益': require('../assets/charity_activate.png'),
        '化妆品': require('../assets/makeup_activate.png'),
        '话费': require('../assets/phone_activate.png'),
        '交通': require('../assets/traffic_activate.png'),
        '学习': require('../assets/study_activate.png'),
        '医疗': require('../assets/medical_activate.png'),
        '娱乐': require('../assets/joy_activate.png'),
        '日用品': require('../assets/necessary_activate.png'),
        '报销': require('../assets/writeoff_activate.png'),
        '工资': require('../assets/salary_activate.png'),
        '红包': require('../assets/red_activate.png'),
        '投资': require('../assets/invest_activate.png'),
        '兼职': require('../assets/parttime_activate.png'),
        '奖金': require('../assets/bonus_activate.png')
      },
      category: '',
      detailList: [],
      moneyList: [],
      updated: false,
      id: ''
    }
  },
  async created () {
    this.getDetail()
  },
  mounted () {
    this.receive()
  },
  // watch: {
  //   detailList (detailList) {
  //     this.detailList = detailList
  //   }
  // },
  methods: {
    receive (identify) {
      this.id = identify
    },
    addPay () {
      this.category = '1'
      console.log(this.category)
      this.$refs.Pop.showPopup('myPopup')
    },
    addIncome () {
      this.category = '0'
      console.log(this.category)
      this.$refs.Pop.showPopup('myPopup')
    },
    async getDetail () {
      await this.$http.get('/detail-list').then(res => {
        this.detailList = res.data.data
        // console.log(this.detailList)
        const list = this.detailList
        for (let i = 0; i < list.length; i++) {
          var record = []
          var pay = 0
          var income = 0
          record.push(list[i][0])
          for (let j = 0; j < list[i][1].length; j++) {
            if (list[i][1][j].category === '1') {
              pay = pay + parseInt(list[i][1][j].money)
            } else {
              income = income + parseInt(list[i][1][j].money)
            }
          }
          record.push(pay)
          record.push(income)
          this.moneyList.push(record)
        }
        // console.log(this.moneyList)
      }).catch(error => {
        console.log(error.message)
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.ledger-page {
  .detail-list {
    max-height: 460px;
    overflow-y: scroll;
    .day-list {
      .day-bar {
        display: flex;
        border-bottom: 1px solid rgba(231, 231, 231, 0.993);
        .day-text {
          min-width: 33%;
          max-width: 33%;
        }
        .day-money {
          min-width: 66%;
          max-width: 66%;
          text-align: right;
        }
      }
      .day-detail {
        display: flex;
        flex-wrap: wrap;
        border-bottom: 1px solid rgba(231, 231, 231, 0.993);
        padding: 0 20px;
        .tag-img {
          min-width: 10%;
          max-width: 10%;
          height: 30px;
        }
        .tag-text {
          min-width: 45%;
          max-width: 45%;
          text-align: right;
        }
        .money-text {
          min-width: 45%;
          max-width: 45%;
          text-align: right;
        }
      }
    }
  }
}
</style>
