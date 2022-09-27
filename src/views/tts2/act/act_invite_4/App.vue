<style>
  body {
    background-color: #fff !important;
  }

  a {
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }

  .wrap {
    max-width: 750px;
  }

  .borRadius20 {
    border-radius: .2rem;
    -webkit-border-radius: .2rem;
    -moz-border-radius: .2rem;
    -o-border-radius: .2rem;
  }

  .borRadius5 {
    border-radius: .05rem;
    -webkit-border-radius: .05rem;
    -moz-border-radius: .05rem;
    -o-border-radius: .05rem;
  }

  .activityBanner img {
    width: 100%;
    margin: 0 auto;
  }

  .actCont1Bg {
    background: url("./img/bg.png") center no-repeat;
    height: 10.91rem;
    background-size: 100% auto;
  }

  .actCont2Bg {
    width: 7.09rem;
    height: 2.32rem;
    margin: .28rem auto 0;
    background: url("./img/bg2.png") center no-repeat;
    background-size: 100% auto;
  }

  .actCont1 {
    padding-top: .25rem;
  }

  .actCont1 a {
    width: 5.13rem;
    height: 1.16rem;
    line-height: 1.16rem;
    font-size: .34rem;
    color: #e23446;
    margin: 0 auto;
    margin-top: 1.1rem;
    font-weight: bold;
    border-radius: .58rem;
    -webkit-border-radius: .58rem;
    background: linear-gradient(90deg, rgb(255, 167, 47) 0%, rgb(255, 227, 130) 100%);
    background: -webkit-linear-gradient(90deg, rgb(255, 167, 47) 0%, rgb(255, 227, 130) 100%);
    background: -moz-linear-gradient(90deg, rgb(255, 167, 47) 0%, rgb(255, 227, 130) 100%);
    background: -ms-linear-gradient(90deg, rgb(255, 167, 47) 0%, rgb(255, 227, 130) 100%);
    box-shadow: 0px 9px 24px 0px rgb(188, 146, 94);
    -webkit-box-shadow: 0px 9px 24px 0px rgb(188, 146, 94);
  }

  .giftCont {
    width: 4.76rem;
    margin: 0 auto;
  }

  .giftCont h6 {
    width: 2.5rem;
    height: .69rem;
    font-weight: normal;
    line-height: .5rem;
    font-size: .25rem;
    color: #fff;
    margin: 0 auto;
    background: url("./img/titleBg1.png") no-repeat;
    background-size: 2.5rem .69rem;
  }

  .giftCont h6 span {
    margin-right: .05rem;
  }

  .giftCont p {
    color: #e4bb8d;
    font-size: .27rem;
    line-height: .42rem;
    margin-top: .2rem;
  }

  .giftCont p span {
    color: #f32f31;
    font-size: .35rem;
  }

  .giftCont1 img {
    width: 2.8rem;
    height: 1.35rem;
    margin: .3rem auto .5rem;
  }

  .giftCont p span {
    font-size: .27rem;
  }

  .giftCont dl {
    width: 50%;
  }

  .giftCont dl dt img {
    width: 2.22rem;
    height: 1.41rem;
  }

  .giftCont dl dd {
    font-size: .23rem;
    color: #e4bb8d;
    margin-top: .1rem;
  }

  .actCont2 h6 {
    font-size: .32rem;
    color: #806544;
    line-height: .5rem;
    margin-bottom: .2rem;
  }

  .actCont2 p {
    font-size: .25rem;
    line-height: .44rem;
    color: #b58e60;
    margin-left: .18rem;
  }

  .actCont3Bg {
    margin-top: .55rem;
    padding: .3rem 0 .74rem;
    background: #ebc295 url("./img/footerBg.png") top center no-repeat;
    background-size: 100% auto;
  }

  .actCont3 {
    padding: 0 6%;
  }

  .actCont3 h6 {
    color: #806544;
    font-size: .32rem;
    line-height: .8rem;
  }

  .actCont3 p {
    color: #806544;
    line-height: .44rem;
    font-size: .26rem;
  }

  .actCont3 p em {
    width: 5%;
  }

  .actCont3 p span {
    width: 95%;
  }

  .toast1 {
    width: 80%;
    margin: 0 auto;
    background: rgba(0, 0, 0, .5);
    padding: .2rem 4%;
    top: 40%;
    left: 50%;
    margin-left: -44%;
  }

  .toast1 p {
    font-size: .24rem;
    color: #fff;
    line-height: .4rem;
  }
</style>
<template>
  <div class="allbg wrap">
    <!-- 弹框提示 -->
    <div v-show="showPop" class="toast1 borRadius20 pf">
      <p class="tc">嗨，定期在出借金额满1万元或已获得收益（定期收益+活期收益）满200元及以上用户可参与哦</p>
    </div>
    <!-- 页面开始 -->
    <div class="activityBanner">
      <img class="db" src="./img/banner.png">
    </div>
    <div class="actCont1Bg ">
      <div class="actCont1">
        <div class="giftCont giftCont1">
          <h6 class="tc"><span>一重礼</span>出借礼</h6>
          <p class="tc">邀请好友注册并成功出借定期项目金额≥100元，即可获得<span>50元</span>出借礼</p>
          <img class="db" src="./img/redbag.png" alt="">
        </div>
        <div class="giftCont giftCont2">
          <h6 class="tc"><span>二重礼</span>分享礼</h6>
          <p class="tc">活动期间，邀请好友注册并成功出借定期项目，就能享受好友在30天内出借金额的<span>返现奖励</span></p>
          <div class="clearfix">
            <dl class="fl tc">
              <dt><img class="db" src="./img/1.png" alt=""></dt>
              <dd>出借10%项目</dd>
            </dl>
            <dl class="fr tc">
              <dt><img class="db" src="./img/2.png" alt=""></dt>
              <dd>出借11%及以上项目</dd>
            </dl>
          </div>
        </div>
        <a @click="toInvest" class="db tc" href="javascript:void(0);">即刻邀请，享受奖励</a>
      </div>
    </div>
    <div class="actCont2Bg">
      <div class="actCont2">
        <h6 class="tc">举个例子</h6>
        <p>好友出借：金额10万元，老虎直投11%项目</p>
        <p>您能获得的奖励：出借礼50元+分享礼10万元×0.2%=200元</p>
        <p>总计：250元</p>
      </div>
    </div>
    <div class="actCont3Bg">
      <div class="actCont3">
        <h6 class="tc">活动说明</h6>
        <p class="clearfix"><em class="db fl">1、</em><span class="db fl">活动时间：从2017年12月22日00:00:00开始；</span></p>
        <p class="clearfix"><em class="db fl">2、</em><span
          class="db fl">参与条件：定期在出借金额满1万元或已获得收益（定期收益+活期收益）满200元及以上用户；</span></p>
        <p class="clearfix"><em class="db fl">3、</em><span class="db fl">好友成功出借后，现金奖励即刻发送到您的个人账户【优惠券】中；</span></p>
        <p class="clearfix"><em class="db fl">4、</em><span
          class="db fl">如会员采用某些特殊技术手段，或是推荐的好友身份异常，一经核实，两只老虎保留拒绝支付奖励的权利；</span></p>
        <p class="clearfix"><em class="db fl">5、</em><span class="db fl">本活动最终解释权归两只老虎所有，如有疑问请咨询：400-990-3337</span></p>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import {lzlh} from '../../../assets/js/native';
  import mixin from '../../../components/common/mixin';

  export default {
    mixin: mixin,
    data: function () {
      return {
        code: 200,
        userStatus: false,
        inviteInfo: {},
        showPop: false
      };
    },
    created() {
      this.$http({
        method: 'post',
        url: '/api/w2/act_invite_4'
      }).then((response) => {
        if (response.data.code === 200) {
          this.userStatus = response.data.userStatus;
          this.inviteInfo = response.data.inviteInfo;
        }
        this.code = response.data.code;
      })
        .catch((error) => {
          console.log(error);
        });
    },
    methods: {
      toInvest() {
        if (this.code === 201) { // 去登陆
          lzlh.toLogin();
          return;
        }
        if (this.userStatus === false) {
          this.showPop = true;
          setTimeout(() => {
            this.showPop = false;
          }, 2000);
        } else {
          // TODO 新增对touch的兼容
          lzlh.toShare({
            'title': '两只老虎送您588元红包，实现梦想从这里开始',
            'content': this.inviteInfo.sContent,
            'url': this.inviteInfo.sUrl,
            'pic': this.inviteInfo.sPic,
            'channel': 'all'
          });
        }
      }
    }
  };
</script>

