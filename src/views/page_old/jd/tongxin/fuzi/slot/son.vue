<style lang="less">
  .fl {
    float: left;
  }

  .fr {
    float: right;
  }

  #content {
    background-color: #3fb3ff;
    overflow: hidden;
  }
</style>

<template>
  <div>
    <header>
      <slot name="header"></slot>
    </header>
    <main>
      <slot></slot>
    </main>
    <footer>
      <slot name="footer"></slot>
    </footer>
    <div id="content">
      <div class="fl" style="height: 200px;">fjslakfjlasjf</div>
      <div class="fr">fjslakfjlasjf</div>
    </div>
    <div>
      hello world
    </div>
  </div>
</template>

<script type="text/ecmascript-6">

  export default {
    data() {
      return {};
    },
    methods: {}
  };
</script>

