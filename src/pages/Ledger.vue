<template>
    <div>
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
      category: ''
    }
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
    }
  }
}
</script>
