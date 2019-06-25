<style lang="less">
</style>

<template>
<div>
  <div>{{age}}</div>
  <button @click="$listeners.changeName('lipengSuperBoy')">更新name</button>
  <button @click="$listeners.changeAge(11111)">更新age</button>
</div>
</template>

<script type="text/ecmascript-6">

  export default {
    props: ['age'],
    data() {
      return {};
    },
    methods: {}
  };
</script>

