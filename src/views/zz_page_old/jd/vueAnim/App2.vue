<style lang="less">
  * {
    margin: 0;
    padding: 0;
  }

  .v-enter-active, .v-leave-active {
    transform-origin: left center;
    animation-name: shark;
    animation-duration: .5s;
  }

  @keyframes shark {
    0% {
      transform: scale(0);
    }
    50% {
      transform: scale(1.6);
    }
    100% {
      transform: scale(1);
    }
  }

</style>

<template>
  <div>
    <transition >
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

