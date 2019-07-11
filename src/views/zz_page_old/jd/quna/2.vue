<style lang="less">
  * {
    margin: 0;
    padding: 0;
  }

</style>

<template>
  <div>
    <son :content="number" name="lipeng" @click.native="alertPar">
      <template slot-scope='props'>
      <li>{{props.item}}</li>
      </template>
    </son>
  </div>
</template>

<script type="text/ecmascript-6">


  import son from './2_1';

  export default {
    data() {
      return {
        number: '53333333'
      };
    },
    methods: {
      alertPar() {
        alert('parent alert');
      }
    },
    components: {son}
  }
</script>

