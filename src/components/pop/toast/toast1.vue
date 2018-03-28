<style lang="less">
  .toast {
    z-index: 10;
    float: left;
    position: fixed;
    left: 50%;
    top: 50%;
  }

  .toast p {
    position: relative;
    left: -50%;
    margin-top: -0.5rem;
    background: rgba(0, 0, 0, 0.7);
    line-height: 1rem;
    padding: 0.4rem 1rem;
    font-size: .8rem;
    color: #fff;
    border-radius: 0.3rem;
  }
</style>

<template>
  <div v-show="content !== ''" id="toast" class="toast">
    <p class="tc">{{content}}</p>
  </div>
</template>

<script>
  export default {
    props: ['content']
  };
</script>
