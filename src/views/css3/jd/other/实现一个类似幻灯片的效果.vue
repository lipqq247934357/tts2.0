<style lang="scss">
  * {
    margin: 0;
    padding: 0;
  }

  .huanDengPic {
    width: 600px;
    height: 600px;
    margin: 50px auto 0;
    overflow: hidden;
    box-shadow:  0 0 5px rgba(0,0,0,1);   /*CSS3 box-shadow属性,里面的值的设置s可以去网上查*/
    background-size: cover;
    background-position: center;
    -webkit-animation-name: "loops"; /*检索或设置对象所应用的动画名称*/
    -webkit-animation-duration: 10s; /*检索或设置对象动画的持续时间*/
    -webkit-animation-iteration-count: infinite;  /*检索或设置对象动画的循环次数，此处的"infinite"为无限循环的意思*/
  }

  @-webkit-keyframes "loops" {  /*动画名称和上面设置的动画名称一样*/
    /*下面是动画过程*/
    0% {
      background: url(./img/img1.jpg) no-repeat;
    }

    50% {
      background: url(./img/img2.jpg) no-repeat;
    }

    100% {
      background: url(./img/img3.jpg) no-repeat;
    }
  }
</style>

<template>
  <div class="content">
    <div class="huanDengPic"></div>
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

