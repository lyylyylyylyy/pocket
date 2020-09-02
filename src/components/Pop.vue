<template>
    <div>
        <cube-popup type="my-popup" ref="myPopup">
            <div class="text">收入</div>
            <div class="data-header">
                <div class="icon"></div>
                <div class="desc">皮卡丘</div>
                <input class="input" />
            </div>
        </cube-popup>
        <cube-button @click="showPopup('myPopup')">
        Show Popup
        </cube-button>
    </div>
</template>
<script>
export default {
  name: 'pop',
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
        }
      ]
    }
  },
  mounted () {

  },
  methods: {
    showPopup (refId) {
      const component = this.$refs[refId]
      component.show()
    //   setTimeout(() => {
    //     component.hide()
    //   }, 1000)
    }
  }
}
</script>
<style scoped>
.data-header {
    width: 100%;
    background: white;
    display: flex;
}
.icon {
    width: 22px;
    height: 22px;
    background: url('data:image/png;base64,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');
    background-repeat: no-repeat;
    background-size: contain;
}
.desc {
    color: blue;
}
</style>
