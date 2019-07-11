<style lang="less">
  * {
    margin: 0;
    padding: 0;
  }

  .v-enter {
    opacity: 0;
  }

  .v-enter-active, .v-leave-active {
    transition: opacity .3s;
  }

  .v-leave-to {
    opacity: 0;
  }
</style>

<template>
  <div>
    <transition>
      <div v-show="show">hello world</div>
    </transition>
    <button @click="updateShow">更新值</button>
  </div>
</template>

<script type="text/ecmascript-6">

  export default {
    data() {
      return {show: true};
    },
    methods: {
      updateShow() {
        this.show = !this.show;
      }
    },
    components: {}
  }
</script>

