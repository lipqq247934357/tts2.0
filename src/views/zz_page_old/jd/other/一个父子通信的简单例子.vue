<style lang="less">
  * {
    margin: 0;
    padding: 0;
  }
</style>

<template>
  <div>
    <infinite-scroll :on-infinite='loadData' ref='infinite'>
      <ul slot='list'>
        <li v-for='n in number'>{{n}}</li>
      </ul>
    </infinite-scroll>
  </div>
</template>

<script type="text/babel">
  import InfiniteScroll from './infinite-scroll';

  export default {
    components: {
      InfiniteScroll
    },
    data() {
      return {
        number: 30
      }
    },
    methods: {
      loadData() {
        setTimeout(() => {
          this.number = 100
          this.$refs.infinite.$emit('loadDone')
        }, 100)
      }
    }
  }
</script>
