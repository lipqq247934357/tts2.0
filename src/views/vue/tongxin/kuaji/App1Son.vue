<style lang="less">
</style>

<template>
  <App v-bind="$attrs" v-on="$listeners"></App>
</template>

<script type="text/ecmascript-6">

  import App from './App1SonSon';

  export default {
    components: {App},
    props: ['name'],
    data() {
      return {};
    },
    methods: {},
    inheritAttrs: false
  };
</script>

