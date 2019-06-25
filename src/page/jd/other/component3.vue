<style lang="less">
</style>
<template>
  <div>
    <input type="button" :value="show"/>
    <input type="button" @click="$emit('update:show','改变了model文案')" value="addShow">
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props: ['show'],
    data: function () {
      return {name2: ''};
    },
    created() {
    },
    methods: {
    }
  };
</script>

