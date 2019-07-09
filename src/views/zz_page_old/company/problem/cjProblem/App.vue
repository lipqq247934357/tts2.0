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
        <span class="borderBottom db"><a class="db up" href="javascript:;">出借后什么时候开始计算利息？</a></span>
        <div class="ans fr">在您出借的次日平台就开始计算利息，您可以在“我的”里面看见“昨日收益”。</div>
      </li>
      <li class="clearfix">
        <span class="borderBottom db"><a class="db up" href="javascript:;">到期项目怎么还款？</a></span>
        <div class="ans fr">您所出借的项目到期后，资金会在还款日当天回款到您账户的可用余额中。</div>
      </li>
      <li class="clearfix">
        <span class="borderBottom db"><a class="db up" href="javascript:;">利息是怎么计算的？</a></span>
        <div class="ans fr">您出借项目的利息=（本金*历史年化*出借天数）/365天：例如您出借10万元 90天的项目，到期后您的利息为(100000*0.10*90)/365=2465元。</div>
      </li>
      <li class="clearfix">
        <span class="borderBottom db"><a class="db up" href="javascript:;">出借过程收费么？</a></span>
        <div class="ans fr">
          您在两只老虎的充值、出借全部免费，不同等级会员享有不同的免费提现次数，免费提现次数使用完毕按照1元/笔收取。
        </div>
      </li>
      <li class="clearfix">
        <span class="borderBottom db"><a class="db up" href="javascript:;">出借后钱到哪啦？</a></span>
        <div class="ans fr">
          出借金额的流转都是在江西银行系统进行，等待项目投满之后一起划拨给借款人。
        </div>
      </li>
      <li class="clearfix">
        <span class="borderBottom db"><a class="db up" href="javascript:;">出借失败了是什么原因？</a></span>
        <div class="ans fr">
          出借失败原因可能是<br/>
          （1）出借人账户内资金不够，需要充值<br/>
          （2）有别的出借人先于您出借从而使此出借项目的进度达到了100%。<br/>
          （3）此出借项目被取消<br/>
          如果多次失败可联系我们的客服帮您查询详细信息，客服电话：400-990-3337。

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

