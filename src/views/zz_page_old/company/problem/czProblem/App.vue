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
        <span class="borderBottom db"><a class="db up" href="javascript:;">怎么充值？</a></span>
        <div class="ans fr">充值需要绑定您本人名下的储蓄卡，开通快捷支付后，通过手机验证码支付，完成充值。由于手机快捷支付的限额限制，推荐使用线下转账。</div>
      </li>
      <li class="clearfix">
        <span class="borderBottom db"><a class="db up" href="javascript:;">充值收费吗？</a></span>
        <div class="ans fr">充值免费，充值过程中的费用由两只老虎平台替用户承担。</div>
      </li>
      <li class="clearfix">
        <span class="borderBottom db"><a class="db up" href="javascript:;">平台支持哪些银行卡？</a></span>
        <div class="ans fr">目前支持11家银行的储蓄卡，包括工商银行、农业银行、建设银行、兴业银行、光大银行、中信银行、平安银行、民生银行、广发银行、浦发银行、交通银行。</div>
      </li>
      <li class="clearfix">
        <span class="borderBottom db"><a class="db up" href="javascript:;">充值失败了是什么原因？</a></span>
        <div class="ans fr">
          充值失败的原因可能是<br/>
          1.  充值使用的手机验证码不是银行预留手机号发送的，必须使用绑定银行卡银行预留手机号；<br/>
          2.  充值金额大于银行单笔最高限额。<br/>
          各大银行单笔限额如下<br/>
          如果多次充值失败，请联系客服帮您解决，客服电话：400-990-3337。
        </div>
      </li>
      <li class="clearfix">
        <span class="borderBottom db"><a class="db up" href="javascript:;">充值后钱到哪了？</a></span>
        <div class="ans fr">
          您充值成功后，资金将划拨到再江西银行的电子账户中，您可在我的账户页面中，查看到可用余额和总资产的变化，充值后偶尔会出现半分钟左右的信息延迟，在“我的”页面下拉即可刷新。
        </div>
      </li>
      <li class="clearfix">
        <span class="borderBottom db"><a class="db up" href="javascript:;">大额充值怎么办？</a></span>
        <div class="ans fr">
          如果您充值金额超过银行快捷支付限额，可以选择线下转账或者将您的充值额分成限制内的小额多次充值。
        </div>
      </li>
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

