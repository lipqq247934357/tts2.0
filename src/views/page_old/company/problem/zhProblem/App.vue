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
            <span class="borderBottom db"><a class="db up" href="javascript:;">为什么要开通存管账号？</a>
            <div class="ans fr">两只老虎为保证出借人的资金安全，所有的资金流动都在江西银行系统进行。按照法律规定，需要您在江西银行开通自己的存管账号。</div>
        </span></li>
      <li class="clearfix">
            <span class="borderBottom db"><a class="db up" href="javascript:;">为什么开通存管账号会失败？</a>
            <div class="ans fr">
		                在开通江西银行存管账号失败的原因，可能是：<br>
		                （1）您的身份证号码或者姓名输入有误<br>
		                （2）您近期变更过身份证信息<br>
		                （3）同一个身份只能在平台开通一个存管账户<br>
		                如有任何疑问，可与客服联系，客服将协助您解决问题，客服电话：400-990-3337
            </div>
        </span></li>
      <li class="clearfix">
            <span class="borderBottom db"><a class="db up" href="javascript:;">忘记交易密码怎么办？</a>
            <div class="ans fr">如果您忘记交易密码，可在账户-设置-安全管理中重新设置交易密码。</div>
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

