<style lang="less">
  * {
    margin: 0;
    padding: 0;
  }


</style>

<template>
  <div class="content">
    <comp2 v-model="name"></comp2> <!-- v-model -->
    <input type="button" value="获取name" @click="alertValue">
    <input type="button" value="name值+1" @click="addValue">
    <comp3 :show.sync="show"></comp3> <!-- v-model -->
    <input type="button" value="获取show" @click="alertShow">
  </div>
</template>

<script type="text/ecmascript-6">

  import comp2 from './component2';
  import comp3 from './component3';

  export default {
    components: {
      comp2,
      comp3
    },
    data() {
      return {name, show: ''};
    },
    methods: {
      alertValue() {
        console.log(this.name)
      },
      addValue() {
        this.name += '1';
      },
      alertShow() {
        console.log(this.show)
      }
    }
  }
  ;
</script>

