<style lang="less">

  div.xx {
    width: 200px;
    height: 200px;
    position: relative;
  }

  span.yy {
    position: absolute;
    right: 0;
    width: 100%;
  }

  div.zz {
    width: 100%;
    display: inline-block;

  }

</style>

<template>
  <div>
    <div class="xx">
      <span class="yy">222</span>
    </div>
    <div>
      <div class="zz">aaaaa</div>
    </div>
    <div>son1</div>
    <App1></App1>
    <div>son2</div>
    <App2></App2>
  </div>
</template>

<script type="text/ecmascript-6">
  import App1 from './AppSon1';
  import App2 from './AppSon2';

  export default {
    components: {App1, App2},
    data() {
      return {}
    },
    methods: {}
  };
</script>

