<style>
  .mark {
    background-color: #000;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    filter: alpha(opacity=50);
    opacity: 0.5;
    z-index: 11;
    position: fixed !important;
    position: absolute;
  }

  body {
    background: #fff;
  }

  .borRadius50 {
    border-radius: 0.55rem;
    -webkit-border-radius: 0.55rem;
    -moz-border-radius: 0.55rem;
    -o-border-radius: 0.55rem;
  }

  .borRadius26 {
    border-radius: 0.26rem;
    -webkit-border-radius: 0.26rem;
    -moz-border-radius: 0.26rem;
    -o-border-radius: 0.26rem;
  }

  .activityBanner {
    margin: 0 auto;
  }

  .activityBanner img {
    width: 100%;
  }

  .activityBg1 {
    background: url("./img/bg1.jpg") top center no-repeat;
    background-size: 100% auto;
    padding: 0.9rem 0 1rem 0;
  }

  .activityBg2 {
    background: url("./img/bg2.jpg") top center no-repeat;
    height: 5.42rem;
    background-size: 100% auto;
  }

  .activityBg3 {
    background: url("./img/bg3.jpg") top center no-repeat;
    height: 11.47rem;
    background-size: 100% auto;
  }

  .titleBg {
    margin: 0 auto;
    width: 5.07rem;
  }

  .activityCont1 p.pTitle {
    font-size: 0.32rem;
    color: #804a11;
    margin-top: 0.35rem;
  }

  .exchangeCont {
    width: 82%;
    margin: 0 auto;
  }

  .exchangeCont dl {
    width: 33.3333%;
    margin-top: 0.7rem;
  }

  .exchangeCont dl dt {
    width: 2.65rem;
    height: 4.2rem;
    background: url("./img/cardBg.png") no-repeat;
    background-size: 100%;
    margin: 0 auto;
  }

  .exchangeCont dl dt p {
    padding-top: 2.7rem;
    color: #fff;
    font-size: 0.4rem;
    line-height: 0.4rem;
  }

  .exchangeCont dl dt h6 {
    color: #fff;
    line-height: 0.65rem;
    margin-top: 0.3rem;
  }

  .exchangeCont dl dt span {
    color: #e01614;
    font-size: 0.26rem;
  }

  .exchangeCont dl dt span strong {
    color: #e01614;
    font-size: 0.55rem;
  }

  .exchangeCont dl dd {
    width: 2.38rem;
    height: 0.52rem;
    background: #e01614;
    margin: 0.45rem auto 0;
    line-height: 0.52rem;
    color: #fff;
    font-size: 0.3rem;
    cursor: pointer;
  }

  .receiveInfo {
    width: 84%;
    height: 2.6rem;
    border: 1px solid #b4b5b6;
    margin: 0.75rem auto 0;
  }

  .receiveInfo ul li {
    width: 50%;
    text-align: center;
    margin-top: 0.5rem;
  }

  .receiveInfo ul li:nth-child(1) {
    width: 49.5%;
    border-right: 1px solid #eaebec;
  }

  .receiveInfo ul li p {
    color: #e01614;
    font-size: 0.6rem;
  }

  .receiveInfo ul li span {
    color: #666;
    margin-top: 0.3rem;
    font-size: 0.28rem;
    line-height: 0.42rem;
  }

  .activityCont3 {
    width: 84%;
    margin: 0 auto;
  }

  .activityCont3 img.contImg {
    margin: 0.4rem auto 0;
    width: 100%;
  }

  .activityCont3 p {
    font-size: 0.32rem;
    line-height: 0.51rem;
    margin-top: 0.55rem;
    color: #804a11;
  }

  .activityCont3 p:nth-child(4) {
    font-size: 0.28rem;
    color: #666;
  }

  .activityCont3 p span {
    color: #e01614;
  }

  .activityCont3 a {
    width: 6.3rem;
    height: 1.1rem;
    line-height: 1.1rem;
    font-size: 0.5rem;
    color: #fff;
    margin: 0.4rem auto 0;
    background-image: -moz-linear-gradient(90deg, rgb(206, 169, 65) 0%, rgb(240, 221, 145) 100%);
    background-image: -webkit-linear-gradient(90deg, rgb(206, 169, 65) 0%, rgb(240, 221, 145) 100%);
    background-image: -ms-linear-gradient(90deg, rgb(206, 169, 65) 0%, rgb(240, 221, 145) 100%);
  }

  .activityFooter {
    height: 7.91rem;
    background: url("./img/bg4.png") no-repeat top center;
    background-size: 100% auto;
  }

  .actFooterCont {
    width: 88%;
    margin: 0 auto;
    padding-top: 0.5rem;
  }

  .actFooterCont h6 {
    font-size: 0.34rem;
    color: #666;
    margin: 0 0 0.25rem 0.1rem;
  }

  .actFooterCont p {
    font-size: 0.28rem;
    color: #666;
    line-height: 0.48rem;
  }

  .actBombBox {
    background: #fff;;
    width: 5.47rem;
    position: fixed;
    top: 50%;
    margin-top: -2.06rem;
    left: 50%;
    margin-left: -3.13rem;
    padding: 0.4rem 0.4rem 0.3rem;
    z-index: 20;
    background-image: -moz-linear-gradient(90deg, rgb(235, 192, 71) 0%, rgb(240, 221, 145) 100%);
    background-image: -webkit-linear-gradient(90deg, rgb(235, 192, 71) 0%, rgb(240, 221, 145) 100%);
    background-image: -ms-linear-gradient(90deg, rgb(235, 192, 71) 0%, rgb(240, 221, 145) 100%);
    box-shadow: 0px 0px 30px 0px rgb(255, 255, 255) inset;
  }

  .actBombBox .closeBtn {
    width: 0.28rem;
    height: 0.28rem;
    background: url("./img/closeIcon.png") no-repeat;
    background-size: 100%;
    right: 0.4rem;
    top: 0.4rem;
  }

  .actBombBox h6 {
    color: #804a11;
    font-size: 0.4rem;
    line-height: 0.5rem;
    margin-bottom: 0.5rem;
  }

  .actBombBox p {
    font-size: 0.3rem;
    color: #804a11;
    line-height: 0.5rem;
  }

  .actBombBox a.bombBtn {
    width: 2.34rem;
    height: 0.76rem;
    line-height: 0.76rem;
    margin: 0.6rem auto 0;
    background: #e01614;
    font-size: 0.28rem;
    color: #fff;
  }

  .toInvest {
    background: #d4b22f;
    margin-bottom: .3rem;
  }

</style>
<template>
  <div class="allbg wrap">
    <div id="pop" v-bind:class="{hide: pop.hide}">
      <div v-on:click="closePop" class="mark"></div>
      <div class="actBombBox borRadius26">
        <a v-on:click="closePop" class="closeBtn db pa" href="javascript:;"></a>
        <h6 class="tc">{{pop.title}}</h6>
        <p class="tc" id="succContent">{{pop.content}}</p>
        <p class="tc">{{pop.desc}}</p>
        <a v-on:click="popBtn" class="bombBtn db tc borRadius26" href="javascript:void(0);">{{pop.btn}}</a>
      </div>
    </div>
    <div class="activityBanner">
      <img class="db" src="./img/banner.jpg">
    </div>
    <div class="activityBg1">
      <div class="activityCont1">
        <img class="db titleBg" src="./img/title1.png">
        <p class="tc pTitle">集虎牌，兑换现金红包无上限</p>
        <div class="exchangeCont clearfix">
          <dl class="fl">
            <dt class="tc">
              <p>×1</p>
              <h6>可兑换<span><strong>10</strong>元</span></h6>
            </dt>
            <dd class="tc borRadius26" count="1" v-on:click="exchange">兑红包</dd>
          </dl>
          <dl class="fl">
            <dt class="tc">
              <p>×5</p>
              <h6>可兑换<span><strong>55</strong>元</span></h6>
            </dt>
            <dd class="tc borRadius26" count="5" v-on:click="exchange">兑红包</dd>
          </dl>
          <dl class="fl">
            <dt class="tc">
              <p>×10</p>
              <h6>可兑换<span><strong>120</strong>元</span></h6>
            </dt>
            <dd class="tc borRadius26" count="10" v-on:click="exchange">兑红包</dd>
          </dl>
          <dl class="fl">
            <dt class="tc">
              <p>×20</p>
              <h6>可兑换<span><strong>260</strong>元</span></h6>
            </dt>
            <dd class="tc borRadius26" count="20" v-on:click="exchange">兑红包</dd>
          </dl>
          <dl class="fl">
            <dt class="tc">
              <p>×50</p>
              <h6>可兑换<span><strong>750</strong>元</span></h6>
            </dt>
            <dd class="tc borRadius26" count="50" v-on:click="exchange">兑红包</dd>
          </dl>
          <dl class="fl">
            <dt class="tc">
              <p>×100</p>
              <h6>可兑换<span><strong>1600</strong>元</span></h6>
            </dt>
            <dd class="tc borRadius26" count="100" v-on:click="exchange">兑红包</dd>
          </dl>
        </div>
      </div>
    </div>
    <div class="activityBg2">
      <div class="activityCont2 clearfix">
        <img class="db titleBg" src="./img/title2.png">
        <div class="receiveInfo">
          <ul class="clearfix">
            <li class="fl"><p id="totalCount">{{totalCount}}</p><span class="db">我当前的虎牌个数</span></li>
            <li class="fr"><p id="useCount">{{useCount}}</p><span class="db">已经兑换的虎牌个数</span></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="activityBg3">
      <div class="activityCont3">
        <img class="db titleBg" src="./img/title3.png">
        <p class="tc">活动期间，选择<span>10%及以上利率</span>项目，按照<span>单笔出借金额≥1万元</span>即送1个虎牌的规则，出借多少万元，即送多少个虎牌。</p>
        <img class="db contImg" src="./img/cont.png">
        <p class="tc">例：虎宝投了25000元，其中2万元符合要求，可得到2个虎牌。</p>
        <a v-on:click="toPro" class="db tc borRadius50 toInvest" href="javascript:void(0);">即刻出借</a>
      </div>
    </div>
    <div class="activityFooter">
      <div class="actFooterCont tl">
        <h6>活动说明</h6>
        <p>1、活动时间：2017年11月11日00:00:00-2017年12月11日00:00:00；</p>
        <p>2、老虎活期、老虎直投10%以下利率项目以及转让项目不参与活动；</p>
        <p>3、“虎牌”有效期至2017年8月9日23:59:59，逾期不可兑换；</p>
        <p>4、使用“虎牌”成功兑换现金后，请到您的个人账户【优惠券】中查看，有效期：3天；</p>
        <p>5、刷奖、冒用他人身份证、银行卡者一经核实，取消活动资格，所得奖励不予承兑；</p>
        <p>6、本活动最终解释权归两只老虎所有，如有疑问请咨询：400-990-3337（工作时间：9:00-21:00）</p>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import '../../../assets/css/style_act.css';

  export default {
    data: function () {
      return {
        totalCount: 0,
        useCount: 0,
        pop: {
          hide: true,
          type: '',
          title: '',
          content: '',
          desc: '',
          btn: ''
        }
      };
    },
    methods: {
      exchange(event) {
        this.login() && this.$http({
          method: 'post',
          url: '/api/act/award_17_8_1',
          params: {
            count: event.target.attributes['count'].value
          }
        }).then((res) => {
          if (res.data.code === 200) {
            this.useCount = res.data.v;
            this.pop.hide = false;
            this.pop.title = '恭喜您';
            this.pop.content = '恭喜您已成功领取' + res.data.amount + '元返现红包，';
            this.pop.desc = '请到您的个人账户【优惠券】中查看！';
            this.pop.btn = '知道了';
            this.pop.type = 1;
          } else if (res.data.code === 303 || res.data.code === 304) { // 虎牌数目不够
            this.pop.hide = false;
            this.pop.title = '很抱歉';
            this.pop.content = '虎牌个数不够兑换哦，';
            this.pop.desc = '去出借收集虎牌吧。';
            this.pop.btn = '去出借';
            this.pop.type = 2;
          } else {
            alert(res.data.msg);
          }
        })
          .catch((error) => {
            console.log(error);
          });
      },
      closePop() {
        this.pop.hide = true;
      },
      popBtn() {
        this.pop.type === 1 ? this.closePop() : this.toPro();
      }
    },
    created() {
      this.$http({
        method: 'post',
        url: '/api/act/act_17_8_1',
        headers: {'token': sessionStorage.getItem('token')}
      }).then((response) => {
        // 通过返回的值进行具体的处理
        if (response.status === 200) {
          window.userStatus = response.data.userStatus;
          if (response.data.userStatus !== 'notLogin') {
            this.totalCount = response.data.info.k;
            this.useCount = response.data.info.v;
          }
        }
      })
        .catch((error) => {
          console.log(error);
        });
    }
  };
</script>

