<template>
    <div class="select">
        <cube-popup type="select-popup" ref="selectPopup" :mask="false">
          <div class="header">
            <div class="add" @click="addLedger"></div>
            <div class="text">我的账本</div>
            <div class="edit"></div>
          </div>
        </cube-popup>
    </div>
</template>
<script>
// const qs = require('qs')

export default {
  name: 'select',
  methods: {
    showPopup (refId) {
      const component = this.$refs[refId]
      component.show()
    },
    addLedger () {
      this.$router.push('./add-ledger')
    }
  }
}
</script>
<style lang="scss" scoped>
.select {
  width: 500px;
  .header {
    width: 320px;
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
}
</style>
