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
        <span class="borderBottom db"><a class="db up" href="javascript:;">怎么提现？</a></span>
        <div class="ans fr">您需要先绑定提现银行卡，绑定后，输入提现金额和交易密码即可将金额转到提现银行卡上。注意：由于快捷支付的安全限制，如果您使用移动端快捷充值，将默认提现到充值的银行卡上。</div>
      </li>
      <li class="clearfix">
        <span class="borderBottom db"><a class="db up" href="javascript:;">提现类型及区别？</a></span>
        <div class="ans fr">目前有实时提现跟大额提现，实时提现走超网通道，5万/单笔，大额提现走人行通道，通道开放时间工作日9：30-16:30</div>
      </li>
      <li class="clearfix">
        <span class="borderBottom db"><a class="db up" href="javascript:;">提现过程收费吗？</a></span>
        <div class="ans fr">根据会员等级不同享有不同免费提现次数，免费提现次数使用完按照1元/笔收费</div>
      </li>
      <li class="clearfix">
        <span class="borderBottom db"><a class="db up" href="javascript:;">提现什么时候到账？</a></span>
        <div class="ans fr">
          最快1分钟，以实际到账时间为准
        </div>
      </li>
      <li class="clearfix">
        <span class="borderBottom db"><a class="db up" href="javascript:;">提现次数有限制么？</a></span>
        <div class="ans fr">
          每天共有10次的提现机会
        </div>
      </li>
      <li class="clearfix">
        <span class="borderBottom db"><a class="db up" href="javascript:;">什么是开户行行号？</a></span>
        <div class="ans fr">
          开户行行号是不同地区银行的唯一标识，在大额提现时需要用到，可直接查询自动填充
        </div>
      </li>
      <li class="clearfix">
        <span class="borderBottom db"><a class="db up" href="javascript:;">为什么有的钱不可提现？</a></span>
        <div class="ans fr">出借期限内的资金由于已经拨给借款人，所以您不能提现。</div>
        <div class="ans fr">使用网银充值进入两只老虎账户内的资金，在未出借时，出于安全考虑，也有1天的不可提现日期，1天后即可提现。</div>
      </li>
      <li class="clearfix">
          <span class="borderBottom db"><a class="db up" href="javascript:;">提现失败了是什么原因？</a>
            <div class="ans fr">提现失败的原因 可能有以下几点</div>
            <div class="ans fr">（1）提现后账户中的可用余额不够支付提现手续费。</div>
            <div class="ans fr">（2）提现银行卡不是您本人名下的卡。</div>
            <div class="ans fr">（3）如果您在app或微信内充值过，提现银行卡和快捷充值的银行卡不是同一张卡。</div>
          </span>
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

