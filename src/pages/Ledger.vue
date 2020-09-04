<template>
    <div>
      <div class="detail-list">
        <div></div>
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

export default {
  name: 'Ledger',
  components: {Pop},
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
      category: '',
      datailList: {}
    }
  },
  mounted () {
    this.getDetail()
  },
  methods: {
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
    getDetail () {
      this.$http.get('/detail-list').then(res => {
        console.log(res.data)
        this.datailList = res.data
      }).catch(error => {
        console.log(error.message)
      })
    }
  }
}
</script>
