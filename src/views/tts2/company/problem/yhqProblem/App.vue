<style lang="less">
 body{background: #f2f3f4;}
 .queAndans ul li{
   .ans{font-size: 0.75rem;line-height: 1.4rem;padding:0.8rem 0 0.8rem 8%;border-bottom: 1px solid #eeeeee;width:80%;margin-right: 4%;display:none;}
   &.active{
     a{background: url("../img/upArrow.png") right center no-repeat;background-size:0.8rem 0.4rem;color:#ff7e3f;}
     div{display:block;}
   }
   span{border-bottom: 1px solid #eeeeee;margin-left: 8%;padding-right: 4%;
     a{font-size: 0.8rem;line-height: 2.8rem;color:#333;background: url("../img/downArrow.png") right center no-repeat;background-size:0.8rem 0.4rem;}
   }
 }
</style>
<template>
  <section class="queAndans whiteBg">
    <ul>
      <li class="clearfix active">
            <span class="borderBottom db"><a class="db up" href="javascript:;">优惠券的种类都是什么意思？</a>
            <div class="ans fr">
                红包：红包是给您现金形式的奖励，兑换之后可以出借和提现。<br>
                代金券：代金劵是在出借过程中使用的奖励，出借中可以代替现金使用。<br>
                加息券：加息券是您出借单笔资金时，额外给您的利率奖励，比如项目本来历史年化是15%，您使用了一张2%的加息券，那么您该笔出借将享受17%的历史年化。
            </div>
        </span></li>
    </ul>
  </section>
</template>

<script type="text/ecmascript-6">
  import '../../../../assets/css/style_touch.css';
  export default {
    mounted() {
      $(".queAndans ul li").click(function(){
        $(this).toggleClass("active").siblings().removeClass("active");
      });
    }
  }
</script>

