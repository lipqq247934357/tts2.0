<style lang="less">
</style>

<template>
  <div>
    <div>{{number}}</div>
  </div>
</template>

<script type="text/ecmascript-6">

  export default {
    data() {
      return {number: 100};
    },
    methods: {},
    created() {
      this.$bus.$on('addNumber', () => {
        this.number++;
      });
      this.$bus.$on('minusNumber', () => {
        this.number--;
      });
    }
  }
  ;
</script>

