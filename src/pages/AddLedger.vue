<template>
    <div>
        <div class="header">
            <div class="back" @click="back"></div>
            <div class="text">新建账本</div>
        </div>
    </div>
</template>
<script>
export default {
  name: 'AddLedger',
  methods: {
    back () {
      this.$router.go(-1)
    }
  }
}
</script>
<style lang="scss" scoped>
.header {
    display: flex;
    justify-content: center;
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
</style>
