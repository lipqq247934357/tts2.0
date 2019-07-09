<style lang="less">

  .fade-enter {
    opacity: 0;
  }

  .fade-enter-active {
    transition: opacity .5s ease;
  }

  .fade-enter-to {
    opacity: 1;
  }

  .fade-leave {
    opacity: 0;
  }

  .fade-leave-active {
    opacity: 0;
  }

  .fade-leave-to {
    opacity: 0;
  }
</style>

<template>
  <div id="app">
    <transition name="fade">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {};
</script>
