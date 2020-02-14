<style lang="less">
  * {
    margin: 0;
    padding: 0;
  }

  .hide {
    display: none;
  }

  .mask {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1000;
    background-color: rgba(0, 0, 0, 0.7);
  }

  .mask-content {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 7rem;
    background-color: #fff;
    z-index: 1001;
    border-radius: .4rem;
    text-align: center;

    .title {
      margin-top: .6rem;
      text-align: center;
    }

    .content {
      width: 80%;
      margin: .6rem auto 0;
    }

    .close {
      margin-top: .4rem;
      margin-bottom: .5rem;
      text-align: center;

      span {
        display: inline-block;
        width: 2rem;
        background: linear-gradient(#2c71ff, #3fb3ff);
        border-radius: .15rem;
      }
    }
  }

</style>

<template>

  <!-- 设计一个弹框

    一：布局
    1.首先写一个div包裹幕布和弹框

    2.设计幕布
    二：写样式

    -->
  <div>
    <!--弹框-->
    <div id="pop1">
      <!--幕布-->
      <div class="mask close"></div>
      <!--具体内容-->
      <div class="mask-content">
        <div class="title">标题</div>
        <div class="content">内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容</div>
        <div class="close">
          <span class="close">关闭</span>
        </div>
      </div>
    </div>
    <div>aaaa</div>
    <div>dddddd</div>
    <div>aaaa</div>
    <div>dddddd</div>
    <div>aaaa</div>
    <div>dddddd</div>
    <div>aaaa</div>
    <div>dddddd</div>
    <div>aaaa</div>
    <div>dddddd</div>
    <div>aaaa</div>
    <div>dddddd</div>
    <div>aaaa</div>
    <div>dddddd</div>
    <div>aaaa</div>
    <div>dddddd</div>
    <div>aaaa</div>
    <div>dddddd</div>
    <div>aaaa</div>
    <div>dddddd</div>
    <div>aaaa</div>
    <div>dddddd</div>
    <div>aaaa</div>
    <div>dddddd</div>
    <div>aaaa</div>
    <div>dddddd</div>
    <div>aaaa</div>
    <div>dddddd</div>
    <div>aaaa</div>
    <div>dddddd</div>
    <div>aaaa</div>
    <div>dddddd</div>
    <div>aaaa</div>
    <div>dddddd</div>
    <div>aaaa</div>
    <div>dddddd</div>
    <div>aaaa</div>
    <div>dddddd</div>
    <div>aaaa</div>
    <div>dddddd</div>
  </div>

</template>

<script type="text/ecmascript-6">

  export default {
    components: {},
    data() {
      return {};
    },
    methods: {},
    mounted() {
      document.getElementById('pop1').addEventListener('click', function (event) {
        console.log();
        if (event.toElement.className.indexOf('close') !== -1) {
          document.getElementById('pop1').classList.add('hide');
        }
      })
    }
  };
</script>

