<style lang="less">
</style>

<template>
  <div>
    <div>{{title}}</div>
    <input type="button" @click="$emit('updateTitle','我穿了参数')" value="子给父传参，带参数">
    <input type="button" @click="$emit('updateTitle')" value="子给父传参，不带参数">
  </div>
</template>

<script type="text/ecmascript-6">

  export default {
    props: ['title'],
    data() {
      return {};
    },
    methods: {
      addTitle() {
        this.title = 'xxx';
      }
    }
  };
</script>

