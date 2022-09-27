<template>
  <div>
    <slot :data="data"></slot>
  </div>
</template>

<script type="text/ecmascript-6">

  export default {
    data() {
      return {
        data: {
          name: 'lipeng',
          age: 23
        }
      };
    },
    methods: {}
  };
</script>

<style lang="less">
  .fl {
    float: left;
  }

  .fr {
    float: right;
  }

  #content {
    background-color: #3fb3ff;
    overflow: hidden;
  }
</style>
