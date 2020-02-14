<style lang="less">
</style>

<template>
  <div>
    <button @click="updateAge">子组件更新age</button>
    <div>{{data1}}</div>
  </div>
</template>

<script type="text/ecmascript-6">

  export default {
    data() {
      return {
        data1: 'hehe'
      }
    },
    methods: {
      updateAge() {
        this.data1 += '1';
      }
    }
  }
</script>

