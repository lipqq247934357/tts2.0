<style>
  /*翻翻乐*/
  .herocraftTwice {
    background: -ms-linear-gradient(270deg, rgb(233, 133, 73) 0%, rgb(245, 77, 84) 50%);
    background: -moz-linear-gradient(270deg, rgb(233, 133, 73) 0%, rgb(245, 77, 84) 50%);
    background: -webkit-linear-gradient(270deg, rgb(233, 133, 73) 0%, rgb(245, 77, 84) 50%);
  }

  .fflBanner img {
    width: 100%;
  }

  .turnBrandCont, .helpPartnerCont {
    width: 82%;
    margin: 0 auto;
    padding: .5rem 4% .75rem;
    background: #f25a52;
    box-shadow: 0 5.196px 10px 0px rgba(178, 59, 51, .5);
    -webkit-box-shadow: 0 5.196px 6px 0px rgba(178, 59, 51, .5);
  }

  .turnBrandCont p {
    line-height: 1rem;
    font-size: .5rem;
    color: #fff;
    font-weight: bold;
  }

  .turnBrandCont ul li {
    width: 2.5rem;
    height: 2rem;
    margin: .5rem 6% 0 0;
    text-align: center;
    color: #fff;
    font-size: .7rem;
    padding-top: 1.5rem;
    background: url(./img/jxBg.png) no-repeat;
    background-size: 100% auto;
    float: left;
  }

  .turnBrandCont ul li.mr0 {
    margin-right: 0;
  }

  @media (min-width: 376px) and (max-width: 412px) {
    .turnBrandCont ul li {
      margin: .5rem 4% 0 0;
    }
  }

  .turnBrandCont .turnBrandBtn {
    margin-top: .6rem;
  }

  .turnBrandCont .turnBrandBtn span {
    font-size: .4rem;
    color: #fff;
    line-height: .8rem;
  }

  .turnBrandCont .turnBrandBtn a {
    width: 2.7rem;
    height: .8rem;
    line-height: .8rem;
    background: #ffe22b;
    color: #f25a52;
    font-size: 0.43rem;
    margin-right: 1.5%;
    box-shadow: 0 3px 0 0px rgb(255, 198, 43);
    -webkit-box-shadow: 0 3px 0 0px rgb(255, 198, 43);
  }

  .turnBrandRule {
    width: 94%;
    margin: 0 auto;
    padding: 1rem 0;
  }

  .turnBrandRule h6 {
    color: #fff;
    font-size: .5rem;
    background: url(./img/ruleBg.png) center center no-repeat;
    background-size: 100% auto;
  }

  .turnBrandRule p {
    width: 90%;
    margin: 0.25rem auto 0;
  }

  .turnBrandRule p em {
    width: .5rem;
    height: .5rem;
    line-height: .5rem;
    background: #fff;
    color: #fd9500;
    font-size: .4rem;
  }

  .turnBrandRule p span {
    width: 93%;
    font-size: .4rem;
    color: #fff;
  }

  .turnBrandPrize {
    width: 94%;
    margin: .5rem auto 0;
    padding: .5rem 0.05rem;
    background: url(./img/prizeBg.png) top center no-repeat;
    background-size: 100% auto;
    overflow: hidden;
    position: relative;
    height: 1.7rem;
  }

  .turnBrandPrize ul li {
    text-align: center;
    color: #f6452a;
    line-height: 1rem;
    height: 1rem;
    font-size: .45rem;
  }

  .turnBrandPrize ul {
    position: absolute;
    margin-left: 1.8rem;
  }

  .xzPrize {
    animation: bgRoate 2s;
    -webkit-animation: bgRoate 2s;
  }

  .viewHistory {
    width: 78%;
    margin: .5rem auto 0;
    font-size: .45rem;
    color: #ffdc01;
    padding-right: .6rem;
    background: url(./img/rightArrow.png) no-repeat right center;
    background-size: .4rem .4rem;
  }

  .helpPartner a {
    font-size: .45rem;
    color: #fff;
    padding-right: .5rem;
    background: url(./img/moreBg.png) right center no-repeat;
    background-size: .4rem .4rem;
  }

  .helpPartner a.up {
    background: url(./img/upBg.png) right center no-repeat;
    background-size: .8rem .8rem;
  }

  /*邀请好友金币数据*/

  .goldLimitNum em {
    width: 33.3%;
    color: #fff;
    font-size: .45rem;
  }

  .getGoldNum {
    width: 100%;
  }

  .getGoldNum .progress {
    height: .4rem;
    width: 100%;
    margin: 1.5rem auto .25rem;
    background-color: #ff7f78;
    border: 1px solid #ff7f78;
    border-radius: .2rem;
    -webkit-border-radius: .2rem;
    -moz-border-radius: .2rem;
    -o-border-radius: .2rem;
  }

  .getGoldNum .progress .progress-bar {
    height: .4rem;
    border-radius: .2rem;
    -webkit-border-radius: .2rem;
    -moz-border-radius: .2rem;
    -o-border-radius: .2rem;
    background-image: linear-gradient(180deg, rgb(255, 226, 43) 0%, rgb(242, 90, 82) 100%);
    background-image: -webkit-linear-gradient(180deg, rgb(255, 226, 43) 0%, rgb(242, 90, 82) 100%);
  }

  .getGoldNum .progress .progress-bar span {
    width: 1rem;
    height: 1.15rem;
    line-height: 1rem;
    font-size: .35rem;
    color: #fff;
    top: -1.25rem;
    right: -.6rem;
    background: url(./img/pointerBg.png) no-repeat;
    background-size: 1rem 1.1rem;
  }

  @keyframes bgRoate {
    0% {
      transform: rotateY(180deg);
    }
    50% {
      transform: rotateY(-180deg);
    }
    75% {
      transform: rotateY(90deg);
    }
    100% {
      transform: rotateY(0deg);
    }
  }

  @-webkit-keyframes bgRoate {
    0% {
      -webkit-transform: rotateY(180deg);
    }
    50% {
      -webkit-transform: rotateY(-180deg);
    }
    75% {
      -webkit-transform: rotateY(90deg);
    }
    100% {
      -webkit-transform: rotateY(0deg);
    }
  }

  /*邀请好友助力*/
  .helpPartnerBg {
    padding-bottom: 1rem;
  }

  .helpPartnerCont {
    padding: 1rem 5%;
  }

  .helpPartnerCont p {
    color: #fff;
    font-size: .8rem;
    line-height: 2rem;
  }

  .helpPartner {
    width: 100%;
    margin: 0 auto;
  }

  .helpPartnerCont p {
    font-size: 1rem;
    font-weight: bold;
    margin-bottom: 1rem;
  }

  .helpPartner dl {
    margin-bottom: 1rem;
  }

  .helpPartner dl dt {
    width: 2rem;
    height: 2rem;
    border: 1px solid #fff;
    overflow: hidden;
    margin-right: 1rem;
  }

  .helpPartner dl dt img {
    width: 100%;
    vertical-align: middle;
  }

  .helpPartner dl dd {
    width: 82%;
    font-size: .8rem;
    line-height: 2rem;
    height: 2rem;
    color: #fff;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  .noHelpPartner img {
    width: 4rem;
    margin: 1rem auto .5rem;
  }

  .noHelpPartner p {
    font-size: .8rem;
  }

  .startBoost {
    margin-top: 1rem;
  }

  .startBoost a {
    width: 91%;
    height: 3rem;
    line-height: 3rem;
    font-size: 1rem;
    color: #f54d54;
    background: #ffe22b;
    margin: 0 auto;
    font-weight: bold;
    box-shadow: 0 5px 0 0px rgb(255, 198, 43);
    -webkit-box-shadow: 0 5px 0 0px rgb(255, 198, 43);
  }

  .startBoost p {
    color: #ffe22b;
    font-size: .8rem;
    margin: .8rem 0 1.2rem;
  }

  .inviteFriend {
    left: 6%;
    width: 94%;
    bottom: 1rem;
  }

  .inviteFriend dt {
    width: 2rem;
    height: 2rem;
    overflow: hidden;
    border: 1px solid #fff;
  }

  .inviteFriend dd {
    margin-top: .6rem;
    line-height: 1.2rem;
    color: #fff;
    font-size: .9rem;
    margin-left: .8rem;
    width: 80%;
  }

  /*今日累计加息*/
  .todayIncrease dl dt {
    width: 13rem;
    height: 9.5rem;
    margin: 0 auto;
    font-size: 4rem;
    padding-top: 7rem;
    color: #fff;
    background: url(./img/ljjx.png) no-repeat;
    background-size: 100% 100%;
  }

  .todayIncrease dl dd {
    color: #fff;
    font-size: .9rem;
    margin-top: .7rem;
  }

  .jxTopCont {
    background: url(./img/ljjxBg.png) no-repeat;
    background-size: 100% auto;
  }

  .jxTopCont p {
    font-size: 4rem;
    color: #fff;
  }

  .jxTopCont span {
    color: #fff;
    font-size: .9rem;
  }

  /*累计加息页面*/
  @font-face {
    font-family: 'Ikaros-Regular.otf';
    src: url('../../../assets/font/Ikaros-Regular.otf');
  }

  .raiseRateBanner {
    padding-top: 60.54%;
    width: 100%;
    background: url(./img/ljjxBg.png) no-repeat;
    background-size: 100% auto;
  }

  .raiseRateBanner > div {
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    -webkit-transform: translate(-50%, -50%);
  }

  .raiseRateBanner > div p:first-child {
    font-size: 3.2rem;
    color: white;
    border-bottom: .6rem;
    font-family: 'Ikaros-Regular.otf';
  }

  .raiseRateBanner > div p:last-child {
    color: #fed3d3;
    font-size: .8rem;
  }

  .eachDayTime {
    font-size: .8rem;
    padding: 0 4%;
    border-bottom: 1px solid #eee;
  }

  .eachDayTime span, .eachDayTime p {
    display: inline-block;
    line-height: 3.4rem;
  }

  .eachDayTime span.fl {
    color: #333;
  }

  .eachDayTime span.fr {
    color: #666;
    margin-right: .54rem;
  }

  .eachDayTime span.fr span {
    color: #f6452a;
    font-weight: bold;
  }

  .eachDayTime p.fr {
    width: .8rem;
    height: .552rem;
    margin-top: 1.424rem;
  }

  .eachDayTime p.btArrow {
    background: url(./img/btArrow.png);
    background-size: 100% auto;
  }

  .eachDayTime p.upArrow {
    background: url(./img/upArrow.png);
    background-size: 100% auto;
  }

  .ticketList {
    background: #f5f5f5;
    padding: 0 4%;
    display: none;
  }

  .ticketList li {
    overflow: hidden;
    font-size: .8rem;
  }

  .ticketList li span {
    line-height: 2.14rem;
  }

  .ticketList li span.fr {
    color: #f54d54;
    margin-right: 1.34rem;
  }

  .ticketList li span.fl {
    color: #999;
  }

  .inloading {
    font-size: .9rem;
    color: #999;
    line-height: 2.8rem;
  }

  .noEachDayRate {
    width: 8rem;
    margin: 3rem auto;
  }

  /*中间弹框*/
  .winningBox {
    width: 14rem;
    height: 21.5rem;
    position: fixed;
    left: 50%;
    margin-left: -7rem;
    top: 15%;
    background: url(./img/floatBg.png) no-repeat;
    z-index: 10;
    background-size: 100%;
  }

  .winningBox p {
    width: 18.2rem;
    height: 5.275rem;
    left: -2.1rem;
    top: 2.5rem;
    color: #fff;
    font-size: 1rem;
    line-height: 2.5rem;
    background: url(./img/bg.png) no-repeat;
    background-size: 100%;
  }

  .winningBox strong {
    color: #fff;
    font-size: 4rem;
    margin-top: 12.5rem;
    line-height: 4rem;
  }

  .winningBox a, .fflBox a.boxBtn {
    width: 8rem;
    height: 2.4rem;
    line-height: 2.4rem;
    color: #f25a52;
    font-size: .9rem;
    font-weight: bold;
    margin: 6.5rem auto 0;
    background: #ffe22b;
    box-shadow: 0 3px 0 0 rgb(255, 198, 43);
    -webkit-box-shadow: 0 3px 0 0 rgb(255, 198, 43);
  }

  .bonusBox img.light {
    width: 100%;
    left: 50%;
    margin-left: -50%;
    top: -10%;
    z-index: 6;
    -webkit-animation: scale 2s infinite linear;
    animation: scale 2s infinite linear;
  }

  .bonusBox img.adom {
    width: 100%;
    left: 50%;
    margin-left: -50%;
    top: 7%;
    z-index: 6;
  }

  @keyframes scale {
    0% {
      opacity: 0;
    }
    25% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
    75% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }

  @-webkit-keyframes scale {
    0% {
      opacity: 0;
    }
    25% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
    75% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }

  .fflBox {
    width: 19rem;
    position: fixed;
    left: 50%;
    margin-left: -9.5rem;
    top: 15%;
    z-index: 10;
  }

  .fflBox p {
    width: 19rem;
    height: 4rem;
    font-size: 1rem;
    line-height: 2.5rem;
    color: #fff;
    background: url(./img/topBg.png) no-repeat;
    background-size: 100%;
    padding-top: 2.7rem;
    z-index: 5;
  }

  .fflBoxCont {
    width: 13rem;
    background: #fff;
    left: 50%;
    margin-left: -7.5rem;
    top: 5.5rem;
    padding: 2rem 1rem;
  }

  .fflBox a.boxBtn {
    margin: 1.2rem auto 0;
    width: 13rem;
  }

  .fflBoxCont span {
    font-size: .9rem;
    color: #999;
    line-height: 1.6rem;
  }

  .fflBoxCont h6 {
    font-size: 1.2rem;
    color: #ff5237;
    font-weight: normal;
    margin-top: .5rem;
  }

  .fflBoxCont > div a {
    width: 5.5rem;
    height: 2.4rem;
    line-height: 2.4rem;
    font-size: .7rem;
    background: #ff5237;
    color: #fff;
  }

  .fflBoxCont > div a.cantClick {
    background: #e9e9e9;
    color: #fff;
  }

  .fflBoxCont > div input, .userPhoneNum input {
    background: none;
    border: none;
    appearance: none;
    -webkit-appearance: none;
  }

  .fflBoxCont > div input {
    background: #e9e9e9;
    height: 1.8rem;
    padding: .3rem 1rem;
    line-height: 1.8rem;
    color: #555;
    font-size: .9rem;
    border: 1px solid #e9e9e9;
    width: 11rem;
  }

  .fflBoxCont > div input::-webkit-input-placeholder,
  .userPhoneNum input::-webkit-input-placeholder {
    font-size: .8rem;
    color: #d7d7d7;
  }

  .fflBoxCont .smsCode input {
    width: 5rem;
  }

  .fflBoxCont > div em {
    color: #ff5237;
    font-size: .7rem;
    line-height: 1.8rem;
  }

  .fflBoxCont .imgCode img {
    width: 4rem;
    height: 1.8rem;
    right: .3rem;
    top: .3rem;
  }

</style>
<template>
  <!-- banner -->
  <section v-if="randomInfo !== null" class="herocraftTwice">
    <!-- 翻完以后弹框 -->
    <div id="succPop" style="display:none">
      <!-- banner -->
      <div class="mark"></div>
      <div class="bonusBox">
        <img class="db pf light" src="./img/light.png">
        <img class="db pf adom" src="./img/adom.png">
        <div class="winningBox">
          <p class="tc pa"></p>
          <strong class="db tc"></strong>
          <a class="db tc fillet04" href="./img/turnBrand">知道了</a>
        </div>
      </div>
    </div>
    <section class="fflBanner">
      <img src="./img/banner.png">
    </section>
    <!-- 已经翻3次展示数据 -->
    <section v-if="currCond === 'three'" class="todayIncrease" style="display:none">
      <dl>
        <dt class="tc">${totalYield}</dt>
        <dd class="tc">今日累计加息${totalYield}%</dd>
      </dl>
    </section>
    <!-- 翻了少于3次 -->
    <section v-else class="turnBrandCont fillet04">
      <p class="tc">邀请好友帮忙收集金币，翻更多福利</p>
      <ul class="clearfix">
        <li class="">{{randomInfo.yield1}}</li>
        <li>{{randomInfo.yield2}}</li>
        <li class="mr0">{{randomInfo.yield3}}</li>
        <li>{{randomInfo.yield4}}</li>
        <li>{{randomInfo.yield5}}</li>
        <li class="mr0">{{randomInfo.yield6}}</li>
      </ul>

      <div v-if="currCond === 'zero'" class="clearfix turnBrandBtn">
        <span class="fl">每天都有机会获得上面的奖励哦~</span>
        <a @click="turnBrand" class="fr tc db fillet02" href="javascript:;">翻牌子</a>
      </div>
      <div v-else-if="currCond === 'oneCant'" class="clearfix turnBrandBtn">
        <span class="fl">好友每集齐100个金币可再翻一次</span>
        <a @click="inviteFriend" class="fr tc db fillet02" href="javascript:;">邀请好友</a>
      </div>
      <div v-else-if="currCond === 'oneCan'" class="clearfix turnBrandBtn" style="display: none">
        <span class="fl">福利升级，快试试手气吧~</span>
        <a @click="turnBrand" class="fr tc db fillet02" href="javascript:;">翻牌子</a>
      </div>
      <div v-else-if="currCond === 'twoCant'" class="clearfix turnBrandBtn" style="display: none">
        <span class="fl">再收集${200-goldCount}个金币又能翻加息券啦~</span>
        <a @click="inviteFriend" class="fr tc db fillet02" href="javascript:;">邀请好友</a>
      </div>
      <div v-else="currCond === 'twoCan'" class="clearfix turnBrandBtn" style="display: none">
        <span class="fl">加息券额度又升啦~</span>
        <a @click="turnBrand" class="fr tc db fillet02" href="javascript:;">翻牌子</a>
      </div>
      <!-- 金币获取进度 -->
      <div v-if="currCond !== 'zero'" class="getGoldNum">
        <div class="progress">
          <div class="progress-bar pr " :style="progress">
            <span class="db pa tc">{{goldCount}}</span>
          </div>
        </div>
        <div class="goldLimitNum clearfix">
          <em class="tl db fl">0</em>
          <em class="tc db fl">100</em>
          <em class="tr db fr">200</em>
        </div>
      </div>
    </section>

    <!-- 滚动 -->
    <section class="turnBrandPrize" id="bonustable">
      <ul class="bd">
        <li v-for="item in turnOverList">{{item.name}}刚刚获得了{{item.awardValue}}</li>
      </ul>
    </section>
    <!-- 加息历史 -->
    <a @click="toList" class="tr db viewHistory" href="javascript:void(0);">查看加息历史</a>
    <!-- 活动规则 -->
    <footer class="turnBrandRule">
      <h6 class="tc">活动规则</h6>
      <p class="clearfix"><em class="db fl tc fillet50">1</em><span class="db fr">每日默认一次翻牌机会，加息利率仅为当日有效；</span></p>
      <p class="clearfix"><em class="db fl tc fillet50">2</em><span class="db fr">邀请好友参与助力，可额外获得翻牌机会，每日最高两次；</span>
      </p>
      <p class="clearfix"><em class="db fl tc fillet50">3</em><span class="db fr">{{rules}}</span></p>
    </footer>
  </section>
</template>

<script type="text/ecmascript-6">
  import '../../../assets/js/jquery.SuperSlide.2.1.2.js';

  export default {
    data: function () {
      return {
        currCond: '',
        goldCount: 0,
        randomInfo: null,
        rules: '',
        turnOverList: null
      };
    },
    computed: {
      progress() {
        return 'width: ' + (this.goldCount / 200) + '%';
      }
    },
    methods: {
      turnBrand() {
        this.$http({
          method: 'get',
          url: '/api/actX/ajaxTurnBrand'
        }).then((response) => {
          // 通过返回的值进行具体的处理
          if (response.data.code === 200) {
            alert(response.data.msg + '  ' + response.data.awardVal);
          } else if (response.data.code === 403) {
            // TODO 去登陆
          }
        }).catch(function (error) {
          console.log(error);
        });
      },
      inviteFriend() {
        alert('邀请好友');
      },
      toList() {
        alert('去加息历史');
      }
    },
    created() {
      this.$http({
        method: 'get',
        url: '/api/actX/turnBrand'
      }).then((response) => {
        // 通过返回的值进行具体的处理
        if (response.data.code === 200) { // 题目信息
          this.currCond = response.data.currCond;
          this.goldCount = response.data.goldCount;
          this.rules = response.data.rules;
          this.randomInfo = response.data.randomInfo;
          this.turnOverList = response.data.turnOverList;
          setTimeout(function () {
            $('#bonustable').slide({// 滚动
              mainCell: '.bd',
              autoPlay: true,
              effect: 'topMarquee',
              vis: 2,
              interTime: 100,
              trigger: 'click',
              mouseOverStop: false
            });
          }, 100);
        } else if (response.data.code === 403) {
          // TODO 去登陆
        }
      }).catch(function (error) {
        console.log(error);
      });
    }
  };
</script>
