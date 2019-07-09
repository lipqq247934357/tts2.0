<style lang="less">
</style>

<template>
  <div>
    <div>
      {{age}}
    </div>
    <button @click="updateAge">子组件更新age</button>
  </div>
</template>

<script type="text/ecmascript-6">

  export default {
    props: ['age'],
    data() {
      return {
        value: 10
      }
    },
    methods: {
      updateAge() {
        let item = this.age + 1;
        this.$emit('update:age', item)
      }
    }
  }
</script>

