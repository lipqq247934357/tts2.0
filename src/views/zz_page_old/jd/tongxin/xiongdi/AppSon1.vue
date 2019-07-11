<style lang="less">
</style>

<template>
  <div>
    <button @click="addNumber">+</button>
    <button @click="minusNumber">-</button>
  </div>
</template>

<script type="text/ecmascript-6">

  export default {
    data() {
      return {};
    },
    methods: {
      addNumber() {
        this.$bus.$emit('addNumber');
      },
      minusNumber() {
        this.$bus.$emit('minusNumber');
      }
    }
  };
</script>

