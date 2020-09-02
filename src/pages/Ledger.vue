<template>
    <div>
        <div class="add-detail">
            <button>添加收入</button>
            <button>添加支出</button>
        </div>
        <pop></pop>
    </div>
</template>
<script>
import Pop from '../components/Pop'

export default {
  name: 'Ledger',
  components: {Pop}
}
</script>
