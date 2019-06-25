<style lang="less">

  div.go {
    position: fixed;
    right: 30px;
    top: 30px;
    background: url('./images/00-go.png');
    width: 100px;
    height: 100px;
    border-radius: 50%;
    z-index: 1000;
  }

  div.more {
    position: fixed;
    right: 60px;
    bottom: 80px;
    background: url('./images/00-go.png');

  }

  .section {
    position: relative;
  }

  div.content {
    width: 900px;
    height: 600px;
    position: absolute;
    left: 50%;
    margin-left: -450px;
    bottom: 0;
    background: url("./images/01-bg.png");
  }

  .section1 {
    .goods {
      width: 200px;
      height: 200px;
      background: url("./images/01-goods.png");
      position: absolute;
      top: 230px;
    }

    .sofa {
      width: 134px;
      height: 147px;
      background: url("./images/01-sofa.png");
      position: absolute;
      left: 250px;
      top: 40px;
      animation-iteration-count: infinite;
      animation-duration: 1s;
      animation-direction: alternate;
      animation-timing-function: linear;
      animation-name: aaa;
    }

    @keyframes aaa {
      from {
        top: 40px
      }
      to {
        top: 60px;
      }
    }

    .fly {
      width: 470px;
      height: 50px;
      background: url("./images/01-fly.png");
      position: absolute;
      right: -40px;
      animation-iteration-count: infinite;
      animation-duration: .8s;
      animation-direction: alternate;
      animation-timing-function: linear;
      animation-name: bbb;
    }


    @keyframes bbb {
      from {
        top: 0px
      }
      to {
        top: 30px;
      }
    }

  }


</style>

<template>
  <div>
    <div class="go"></div>
    <div class="more"></div>
    <div class="container">
      <div class="section section1">
        <div class="content">
          <!--商品列表，沙发，横幅-->
          <div class="goods"></div>
          <div class="sofa"></div>
          <div class="fly"></div>
        </div>
      </div>
      <div class="section">2</div>
      <div class="section">3</div>
      <div class="section">4</div>
      <div class="section">5</div>
      <div class="section">6</div>
      <div class="section">7</div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import fullpage from 'fullpage';

  export default {
    components: {},
    data() {
      return {};
    },
    methods: {},
    mounted() {
      new fullpage('.container', {
        sectionsColor: ['#fadd67', '#84a2d4', '#ef674d', '#ffeedd', '#d04759', '#84d9ed', '#8ac060'],
        verticalCentered: false,
        navigation: true,
        licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE'
      });
    }
  };
</script>

