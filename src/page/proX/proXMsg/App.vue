<style lang="less">
  /*老虎活期介绍*/

  .hqChangeintoFoot {
    width: 100%;
    height: 3rem;
    line-height: 3rem;
    background: #ff7e3f;
    bottom: 0
  }

  .hqChangeintoFoot a {
    color: #fff;
    font-size: 0.9rem;
  }

  .currentAccountInfo {
    width: 94%;
    margin: 0 auto;
    padding-top: 0.5rem;
  }

  .currentAccountCont1 {
    background: url(./img/bg1.png) no-repeat;
    background-size: 100% auto;
    padding: 3rem 0 2.1rem;
  }

  .currentAccountCont2 {
    background: url(./img/bg2.png) no-repeat;
    background-size: 100% auto;
    padding: 1rem 0 2.6rem;
  }

  .currentAccountCont3 {
    background: url(./img/bg3.png) no-repeat;
    background-size: 100% auto;
    padding: 1.7rem 0;
  }

  .currentAccountCont4 {
    background: url(./img/bg4.png) no-repeat;
    background-size: 100% auto;
    padding: 1.8rem 0 2.1rem;
  }

  .currentAccountCont5 {
    background: url(./img/bg5.png) no-repeat;
    background-size: 100% auto;
    padding: 0.8rem 0 2.8rem;
  }

  .currentAccountCont6 {
    background: url(./img/bg6.png) no-repeat;
    background-size: 100% auto;
    padding: 0.4rem 0 5.4rem;
  }

  .currentAccountCont1 img {
    width: 82%;
    margin-right: 4%;
  }

  .currentAccountCont2 img {
    width: 78%;
    margin-left: 8%;
  }

  .currentAccountCont3 dl {
    margin-left: 6%;
  }

  .currentAccountCont3 dl dt img {
    width: 4rem;
  }

  .currentAccountCont3 dl dd {
    width: 68%;
    margin-left: 3%;
  }

  .currentAccountCont3 dl dd h6, .currentAccountCont4 dl dd h6, .currentAccountCont5 h6, .currentAccountCont6 > div.fl h6 {
    color: #503620;
    font-size: 0.9rem;
    line-height: 1.6rem;
  }

  .currentAccountCont3 dl dd p {
    color: #4b3924;
    font-size: 0.8rem;
    line-height: 1.2rem;
    margin: 0.2rem 0;
  }

  .currentAccountCont3 dl dd span, .currentAccountCont4 dl dd span {
    color: #666;
    font-size: 0.7rem;
    line-height: 1.2rem;
  }

  .currentAccountCont4 dl dt {
    width: 41%;
  }

  .currentAccountCont4 dl dt img {
    width: 70%;
    margin: 1.8rem 0 0 5%;
  }

  .currentAccountCont4 dl dd {
    width: 49%;
    margin-left: 10%;
  }

  .currentAccountCont5 img {
    width: 2rem;
    margin: 1.8rem 6%;
  }

  .currentAccountCont5 > div {
    width: 75%;
    margin-right: 1%;
  }

  .currentAccountCont5 > div ul {
    border: 1px solid #a37a46;
    margin-top: 0.5rem;
  }

  .currentAccountCont5 > div ul li {
    border-bottom: 1px solid #a37a46;
  }

  .currentAccountCont5 > div ul li:first-child {
    color: #ff7e3f;
    line-height: 1.6rem;
    font-size: 0.6rem;
  }

  .currentAccountCont5 > div ul li:last-child {
    border: none;
    line-height: 2rem;
    color: #666;
    font-size: 0.6rem;
  }

  .currentAccountCont5 > div ul li p {
    float: left;
    width: 11%;
    border-right: 1px solid #a37a46;
    text-align: center;
    box-sizing: border-box;
    -moz-box-sizing: border-box;
  }

  .currentAccountCont5 > div ul li p:first-child {
    width: 23%;
  }

  .currentAccountCont5 > div ul li p:last-child {
    border: none;
  }

  .currentAccountCont5 > div span {
    color: #666;
    font-size: 0.8rem;
    margin-top: 0.5rem;
    line-height: 1.2rem;
  }

  .currentAccountCont6 > div.fl {
    width: 56%;
    margin-left: 10%;
  }

  .currentAccountCont6 dl dd {
    font-size: 0.8rem;
    color: #666;
    margin-top: 0.5rem;
  }

  .currentAccountCont6 dl dt img {
    width: 3.5rem;
    margin: 0.5rem auto 0;
  }

  .currentAccountCont6 img.fr {
    width: 20%;
    margin-top: 4rem;
  }
</style>

<template>
  <div>
    <section class="pb4 whiteBg mt05">
      <section class="currentAccountInfo">
        <section class="currentAccountCont1 clearfix">
          <img class="db fr" src="./img/1.png">
        </section>
        <section class="currentAccountCont2 clearfix">
          <img class="db" src="./img/2.png">
        </section>
        <section class="currentAccountCont3 clearfix">
          <dl class="clearfix">
            <dt class="fl"><img src="./img/three.png"></dt>
            <dd class="fl">
              <h6 class="tc">平台可转出余额更新时间</h6>
              <p class="tc">每日0:00、11:00、15:00、18:00</p>
              <span class="db">为了满足活期用户正常转出，同时避免平台产生流动性风险，所以平台设立活期可转出余额限制。</span>
              <span class="db">具体额度根据平台日常运营数据和风险管控机制计算得出。</span>
            </dd>
          </dl>
        </section>
        <section class="currentAccountCont4 clearfix">
          <dl class="clearfix">
            <dt class="fr"><img class="db" src="./img/four.png"></dt>
            <dd class="fl">
              <h6 class="tc">收益复投</h6>
              <span class="tl db">活期收益采用每日复利式结算，即当日的收益会加入本金重新获得新的收益。</span>
            </dd>
          </dl>
        </section>
        <section class="currentAccountCont5 clearfix">
          <img class="db fl" src="./img/five.png">
          <div class="fl">
            <h6 class="tc">会员活期持有额度</h6>
            <ul>
              <li class="clearfix">
                <p v-for=" item in list">{{item.name}}</p>
              </li>
              <li class="clearfix">
                <p v-for=" item in list">{{item.value}}</p>
              </li>
            </ul>
            <span class="db">为了满足不同用户需求，根据会员等级不同，老虎活期的持有额度不同，会员等级越高，持有额度越高。</span>
          </div>
        </section>
        <section class="currentAccountCont6 clearfix">
          <div class="fl">
            <h6 class="tc">转出到余额时间</h6>
            <dl>
              <dt><img class="db" src="./img/time.png"></dt>
              <dd>活期发起转让后，江西银行会进行债权转让处理，24小时内到可用余额。晚上21:00以后发起的转让，会在次日的6点半左右到账。</dd>
            </dl>
          </div>
          <img class="db fr" src="./img/six.png">
        </section>
      </section>
    </section>
    <footer v-if="!isApp && false" class="hqChangeintoFoot wrap pf tc" style="background:#ff7e3f;">
      <a @click="toIn" href="javascript:void(0);" calss="db">立即转入</a>
    </footer>
  </div>
</template>

<script type="text/ecmascript-6">
  import mixin from '../../../components/common/mixin';

  export default {
    mixins: [mixin],
    data() {
      return {
        list: []
      };
    },
    created() {
      this.$http({
        method: 'post',
        url: '/api/w2/proXMsg4JSON'
      }).then((response) => {
        this.list = response.data.vipPriConfList;
      })
        .catch((error) => {
          console.log(error);
        });
    },
    methods: {
      toIn() {
        // TODO 增加对touch的支持
      }
    }
  };
</script>

