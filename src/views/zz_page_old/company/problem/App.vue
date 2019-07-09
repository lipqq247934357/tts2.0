<style lang="less">
  body {
    background: #f2f3f4;
  }

  .commonProblem ul {
    padding-left: 8%;
    li {
      padding-right: 3%;
      border-bottom: 1px solid #eeeeee;
      &:last-child {
        border-bottom: none
      }
      a {
        line-height: 2.6rem;
        font-size: 0.9rem;
        color: #333;
        background: url("./img/more.png") no-repeat center right;
        background-size: 0.4rem 0.74rem;
      }
    }
  }
</style>
<template>
  <section class="commonProblem">
    <ul class="whiteBg">
      <li><a class="db" href="/cjProblem.html">出借问题</a></li>
      <li><a class="db" href="/czProblem.html">充值问题</a></li>
      <li><a class="db" href="/txProblem.html">提现问题</a></li>
    </ul>
    <ul class="whiteBg mt0">
      <li><a class="db" href="/zhProblem.html">账号问题</a></li>
      <li><a class="db" href="/yhqProblem.html">优惠券问题</a></li>
    </ul>
  </section>
</template>

<script type="text/ecmascript-6">
  import '../../../assets/css/style_touch.css';

  export default {};
</script>

