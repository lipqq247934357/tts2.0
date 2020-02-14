<style lang="less">

</style>

<template>
  <div>
    <App>
      <template slot-scope="scope">
        <span>{{ scope.data.age}} </span>
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

