<style lang="less">

</style>

<template>
  <div>
    <App>
      <template slot="header">
        <h1>Here might be a page title</h1>
      </template>

      <p>A paragraph for the main content.</p>
      <p>And another one.</p>
      <div>我的名字是：{{name}}</div>

      <template slot="footer">
        <p>Here's some contact info</p>
      </template>
    </App>
    <div style="margin-top:20px">{{name}}</div>
  </div>
</template>

<script type="text/ecmascript-6">

  import App from './son';

  export default {
    components: {App},
    data() {
      return {
        name: 'lipeng'
      };
    },
    methods: {},
    computed: {
    }
  }
  ;
</script>

