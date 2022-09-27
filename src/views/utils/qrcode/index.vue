<template>
    <div>
        <input type="text" v-model="inputData">
        <canvas class="qrcode" id="msg">
        </canvas>
    </div>
</template>
<script>
import QRCode from 'qrcode';

export default {
  components: {
  },
  props: {
    historyData: {
      type: Array,
      default: () => []
    }
  },
  watch: {
    inputData(val) {
        let msg = document.getElementById('msg')
        if (msg) {
            // 将获取到的数据（val）画到msg（canvas）上
            QRCode.toCanvas(msg, val, function (error) {
                if (error) console.error(error)
                console.log('success!');
            })

        }
    }
  },
  data() {
    return {
        inputData: 'http://baidu.com'
    }
  },
  created() {
    console.log('111')
  }
}
</script>
<style lang="scss" scoped>
    .qrcode {
        width: 200px;
        height: 200px;
    }
</style>
