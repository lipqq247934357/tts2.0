<style lang="less">
</style>
<template>
  <div>
    <input @input = "$emit('input',$event.target.value)"  type="text"/>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props: ['name'],
    data: function () {
      return {name2: ''};
    },
    created() {
    },
    methods: {}
  };
</script>

