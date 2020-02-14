<style lang="less">
</style>

<template>
  <div>
    <div>xxx:{{value}}</div>
    <input type="text" @input="$emit('input',$event.target.value)" :value="value">
  </div>
</template>

<script type="text/ecmascript-6">

  export default {
    props: ['value'],
    data() {
      return {};
    },
    methods: {}
  };
</script>

