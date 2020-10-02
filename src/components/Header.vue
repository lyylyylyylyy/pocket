<template>
    <div class="header">
        <div>
            <div class="list">
                <div class="desc" @click="addLedger">我的账本</div>
                <div class="symbol"></div>
            </div>
        </div>
        <div></div>
        <div></div>
        <Select ref="Select"></Select>
    </div>
</template>
<script>
import Select from '../components/Select'

export default {
  name: 'header',
  components: {Select},
  methods: {
    addLedger () {
      this.$refs.Select.showPopup('selectPopup')
    }
  }
}
</script>
<style lang="scss" scoped>
.header {
    width: 100%;
    height: 200px;
    background-image: url("https://img.tukuppt.com/bg_grid/00/03/77/qMaJ6zUerz.jpg!/fh/350");
    background-size: contain;
    background-repeat: no-repeat;
}
.list {
    position: relative;
    width: 30%;
    border: 2px solid grey;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 15px;
}
</style>
