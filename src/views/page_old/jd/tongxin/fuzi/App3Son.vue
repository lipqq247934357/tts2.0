<style lang="less">
</style>

<template>
  <div v-show="show">
    <div>
      <p>这是一个Model框</p>
      <button @click="$emit('close', false)">关闭model</button>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">

  export default {
    model: {
      prop: 'show',
      event: 'close'
    },
    props: ['show'],
    data() {
      return {
        value: 10
      }
    },
    methods: {}
  }
</script>

