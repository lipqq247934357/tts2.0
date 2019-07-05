<style lang="less">


</style>

<template>
  <div>
    <img :src="src" alt="">
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data() {
      return {
        src: []
      }
    },
    created() {
      this.src = require('../img/img2.jpg');
      // 在加载完成之后将文件放入static目录下
    }
  };
</script>

