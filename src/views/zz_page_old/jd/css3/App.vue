<style lang="less">
  * {
    margin: 0;
    padding: 0;
  }

  .title {
    color: red;
    font-size: 30px;
  }

  div.guodu {
    width: 200px;
    height: 200px;
    transition: width 1.5s;
    background-color: #6a67e2;
  }

  div.guodu:hover {
    width: 300px;
  }

  div.content2 {
    width: 100px;
    height: 100px;
    background-color: #e6a737;
  }

  div.content1 {
    width: 100px;
    height: 100px;
    background-color: #2c71ff;
    transform: translate(30px, 20px);
  }

  div.content3 {
    width: 100px;
    height: 100px;
    background-color: #2c71ff;
    transform: rotate(30deg);
  }

  div.content4 {
    width: 100px;
    height: 100px;
    background-color: #2c71ff;
    transform: scale(.8, .6);
  }

  div.content5 {
    width: 100px;
    height: 100px;
    background-color: #2c71ff;
    transform: skew(30deg, 20deg);
  }

  div.content6 {
    width: 100px;
    height: 100px;
    background-color: #2c71ff;
    transform: rotateX(60deg);
  }

</style>

<template>
  <div>
    <div class="title">过度</div>
    <div class="guodu"></div>
    <hr>
    <div class="title">2D转换</div>
    <div>1.translate</div>
    <div class="content1"></div>
    <div class="content2"></div>
    <hr>
    <div>2.rotate</div>
    <div class="content3"></div>
    <div class="content2"></div>
    <hr>
    <div>3.scale</div>
    <div class="content4"></div>
    <div class="content2"></div>
    <hr>
    <div>4.skew</div>
    <div class="content5"></div>
    <div class="content2"></div>
    <hr>
    <div>5.matrix</div>
    <div>matrix 方法有六个参数，包含旋转，缩放，移动（平移）和倾斜功能。</div>
    <div class="title">3D转换</div>
    <div>1.rotateX</div>
    <div class="content6">李鹏是个大帅哥李鹏是个大帅哥李鹏是个大帅哥</div>
    <div class="content2"></div>

  </div>
</template>

<script type="text/ecmascript-6">

  export default {
    components: {},
    data() {
      return {};
    },
    methods: {}
  };
</script>

