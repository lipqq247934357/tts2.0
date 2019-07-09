<style lang="less">
  body {
    font-family: 'sans-serif', "Microsoft YaHei", "微软雅黑", "Tahoma", "Helvetica";
  }

  .vipLevel {
    width: 9.34rem;
    height: 4.93rem;
    margin: 1rem auto 0;
    padding: .3rem;
    a {
      color: #fff;
      font-size: .4rem;
      margin: .3rem;
      display: inline-block;
    }
    .anCrown img {
      width: 1.65rem;
      top: 0;
      margin: 0 auto;
    }
    h6 {
      color: #fff3c1;
      font-size: .66rem;
      margin: 0 auto .4rem;
      height: .66rem;
      em {
        border: 1px solid rgba(217, 191, 143, 0.7);
        color: #fee3b2;
        width: 1.42rem;
        height: .44rem;
        line-height: .46rem;
        border-radius: .2rem;
        -webkit-border-radius: .2rem;
        font-size: .34rem;
        font-weight: normal;
        margin: .3rem 0 0 .2rem;
        font-style: normal;
      }
    }
    p {
      color: #fff3c1;
      font-size: .36rem;
      line-height: .56rem;
    }
  }

  .vipLevelInfo {
    width: 8.84rem;
    margin: .55rem auto 0;
  }

  .vipLevelInfo img {
    width: .52rem;
    height: .04rem;
    margin: .2rem -.11rem 0 -.11rem
  }

  .myRightTitle {
    margin: .6rem auto .3rem;
    text-align: center;
    font-size: .5rem;
  }

  .myRightTitle > span {
    padding-top: .06rem;
    position: absolute;
    right: 4%;
    display: inline-block;
    font-size: .44rem;
    color: #999999;
  }

  .myRightTitle > span > span {
    color: #ff7e3f;
  }

  .right > ul {
    border-top: 1px solid #fafafa;
  }

  .right > ul > li {
    float: left;
    height: 2.8rem;
    width: 33.3%;
    border-right: 1px solid #fafafa;
    border-bottom: 1px solid #fafafa;
    box-sizing: border-box;
    text-align: center;
    padding: .35rem 0;
    &:nth-child(3n) {
      border-right: none;
    }
  }

  .right > ul > li > img {
    height: .55rem;
    margin-bottom: .25rem;
  }

  .right > ul > li > img.last {
    height: .16rem;
    margin: .16rem auto;
  }

  /*
  图片变灰
   */
  .right > ul > li > img.gray {
    opacity: 0.4;
  }

  .right > ul > li > span.white {
    color: #999999;
  }

  .right > ul > li > span {
    font-size: .4rem;
    display: block;
  }

  .right > ul > li > span.redColor {
    color: #ff7e3f;
    padding-top: .08rem;
  }

  .vipLevel0 {
    background: url("img/vip0.png") no-repeat;
    background-size: 100% 100%;
  }

  .vipLevel1 {
    background: url("img/vip1.png") no-repeat;
    background-size: 100% 100%;
  }

  .vipLevel2 {
    background: url("img/vip2.png") no-repeat;
    background-size: 100% 100%;
  }

  .vipLevel3 {
    background: url("img/vip3.png") no-repeat;
    background-size: 100% 100%;
  }

  .vipLevel4 {
    background: url("img/vip4.png") no-repeat;
    background-size: 100% 100%;
  }

  .vipLevel5 {
    background: url("img/vip5.png") no-repeat;
    background-size: 100% 100%;
  }

  .vipLevel6 {
    background: url("img/vip6.png") no-repeat;
    background-size: 100% 100%;
  }

  .vipLevel7 {
    background: url("img/vip7.png") no-repeat;
    background-size: 100% 100%;
  }

  /*.vipLevelInfo{width:18.3rem;height:2.2rem;position:absolute;bottom:3%;left:50%;margin-left: -9.15rem;}*/
  .vipLevelInfo dl {
    width: .84rem;
    text-align: center;
  }

  .vipLevelInfo dl dt {
    width: .56rem;
    height: .56rem;
    margin: 0 auto;
  }

  .vipLevelInfo dl dt.vip0 {
    background: url("img/V0.png") no-repeat;
    background-size: .56rem;
  }

  .vipLevelInfo dl dt.vip1 {
    background: url("img/V1.png") no-repeat;
    background-size: .56rem;
  }

  .vipLevelInfo dl dt.vip2 {
    background: url("img/V2.png") no-repeat;
    background-size: .56rem;
  }

  .vipLevelInfo dl dt.vip3 {
    background: url("img/V3.png") no-repeat;
    background-size: .56rem;
  }

  .vipLevelInfo dl dt.vip4 {
    background: url("img/V4.png") no-repeat;
    background-size: .56rem;
  }

  .vipLevelInfo dl dt.vip5 {
    background: url("img/V5.png") no-repeat;
    background-size: .56rem;
  }

  .vipLevelInfo dl dt.vip6 {
    background: url("img/V6.png") no-repeat;
    background-size: .56rem;
  }

  .vipLevelInfo dl dt.vip7 {
    background: url("img/V7.png") no-repeat;
    background-size: .56rem;
  }

  .vipLevelInfo dl.curVip dt.vip0 {
    background: url("img/V0_1.png") no-repeat;
    background-size: .56rem;
  }

  .vipLevelInfo dl.curVip dt.vip1 {
    background: url("img/V1_1.png") no-repeat;
    background-size: .56rem;
  }

  .vipLevelInfo dl.curVip dt.vip2 {
    background: url("img/V2_1.png") no-repeat;
    background-size: .56rem;
  }

  .vipLevelInfo dl.curVip dt.vip3 {
    background: url("img/V3_1.png") no-repeat;
    background-size: .56rem;
  }

  .vipLevelInfo dl.curVip dt.vip4 {
    background: url("img/V4_1.png") no-repeat;
    background-size: .56rem;
  }

  .vipLevelInfo dl.curVip dt.vip5 {
    background: url("img/V5_1.png") no-repeat;
    background-size: .56rem;
  }

  .vipLevelInfo dl.curVip dt.vip6 {
    background: url("img/V6_1.png") no-repeat;
    background-size: .56rem;
  }

  .vipLevelInfo dl.curVip dt.vip7 {
    background: url("img/V7_1.png") no-repeat;
    background-size: .56rem;
  }

  .vipLevelInfo dl dd {
    font-size: .16rem;
    color: #fff3c1;
    margin-top: .1rem;
    margin-left: -.15rem;
  }

  .vipLevelInfo dl.curVip dd {
    color: #fff;
  }

  .vipLevelInfo1 img {
    width: .7rem;
    margin: .2rem -.11rem 0 -.11rem
  }

  .vipLevelInfo2 img {
    width: .97rem;
    margin: .2rem -.11rem 0 -.11rem
  }

  .vipLevelInfo3 img {
    width: 1.38rem;
    margin: .2rem -.11rem 0 -.11rem
  }

  .vipLevelInfo4 img {
    width: 2rem;
    margin: .2rem -.11rem 0 -.11rem;
  }

  .vipLevelInfo5 img {
    width: 3.3rem;
    margin: .2rem -.11rem 0 -.11rem;
  }

  .vipLevelInfo6 img {
    width: 2.5rem;
    margin: .2rem -.11rem 0 -.11rem
  }

  .vipLevelInfo6 {
    width: 4rem;
  }

</style>
<template>
  <div v-if="data.vName !== undefined" id="app">
    <section v-bind:class="curVipLevel" class="vipLevel pr">
      <div class="pr">
        <div class="clearfix anCrown">
          <img class="db pa" src="./img/anCrown.png" alt=""/>
          <a v-if="data.isVip7" class="toUp tr" href="">去炫耀</a>
          <a v-else v-on:click="toPro" class="toUp fr db" href="">去升级</a>
        </div>

        <!-- vip7 去升级改为  “去炫耀” -->
        <h6 class="tc">{{data.vName}}会员 <em class="fillet02 pa" v-if="data.isLow === 'false'">降级中</em></h6>
        <!-- vip7文案 -->
        <div v-if="!data.isVip7" class="vipRate">
          <p class="tc">您打败了{{data.proportion}}%的用户</p>
          <p class="tc">距{{data.nextName}}需新增{{data.distance}}</p>
        </div>
        <div v-else class="vipRate">
          <p class="tc">您已经是最高级</p>
        </div>
      </div>
      <!-- vip0 -->
      <div v-if="data.vName == 'VIP0'" class="vipLevelInfo clearfix">
        <dl class="fl curVip">
          <dt class="vip0"></dt>
          <dd>0元</dd>
        </dl>
        <img class="fl db" src="./img/line.png">
        <dl class="fl">
          <dt class="vip1"></dt>
          <dd>100元</dd>
        </dl>
        <img class="fl db" src="./img/line.png">
        <dl class="fl">
          <dt class="vip2"></dt>
          <dd>1W</dd>
        </dl>
        <img class="fl db" src="./img/line.png">
        <dl class="fl">
          <dt class="vip3"></dt>
          <dd>5W</dd>
        </dl>
        <img class="fl db" src="./img/line.png">
        <dl class="fl">
          <dt class="vip4"></dt>
          <dd>20W</dd>
        </dl>
        <img class="fl db" src="./img/line.png">
        <dl class="fl">
          <dt class="vip5"></dt>
          <dd>50W</dd>
        </dl>
        <img class="fl db" src="./img/line.png">
        <dl class="fl">
          <dt class="vip6"></dt>
          <dd>200W</dd>
        </dl>
        <img class="fl db" src="./img/line.png">
        <dl class="fl">
          <dt class="vip7"></dt>
          <dd>500W</dd>
        </dl>
      </div>
      <!-- vip1 -->
      <div v-else-if="data.vName == 'VIP1'" class="vipLevelInfo clearfix vipLevelInfo1">
        <dl class="fl">
          <dt class="vip1"></dt>
          <dd>100元</dd>
        </dl>
        <img class="fl db" src="./img/line.png">
        <dl class="fl">
          <dt class="vip2"></dt>
          <dd>1W</dd>
        </dl>
        <img class="fl db" src="./img/line.png">
        <dl class="fl">
          <dt class="vip3"></dt>
          <dd>5W</dd>
        </dl>
        <img class="fl db" src="./img/line.png">
        <dl class="fl">
          <dt class="vip4"></dt>
          <dd>20W</dd>
        </dl>
        <img class="fl db" src="./img/line.png">
        <dl class="fl">
          <dt class="vip5"></dt>
          <dd>50W</dd>
        </dl>
        <img class="fl db" src="./img/line.png">
        <dl class="fl">
          <dt class="vip6"></dt>
          <dd>200W</dd>
        </dl>
        <img class="fl db" src="./img/line.png">
        <dl class="fl">
          <dt class="vip7"></dt>
          <dd>500W</dd>
        </dl>
      </div>
      <!-- vip2 -->
      <div v-else-if="data.vName == 'VIP2'" class="vipLevelInfo clearfix vipLevelInfo2">
        <dl class="fl">
          <dt class="vip2"></dt>
          <dd>1W</dd>
        </dl>
        <img class="fl db" src="./img/line.png">
        <dl class="fl">
          <dt class="vip3"></dt>
          <dd>5W</dd>
        </dl>
        <img class="fl db" src="./img/line.png">
        <dl class="fl">
          <dt class="vip4"></dt>
          <dd>20W</dd>
        </dl>
        <img class="fl db" src="./img/line.png">
        <dl class="fl">
          <dt class="vip5"></dt>
          <dd>50W</dd>
        </dl>
        <img class="fl db" src="./img/line.png">
        <dl class="fl">
          <dt class="vip6"></dt>
          <dd>200W</dd>
        </dl>
        <img class="fl db" src="./img/line.png">
        <dl class="fl">
          <dt class="vip7"></dt>
          <dd>500W</dd>
        </dl>
      </div>
      <!-- vip3 -->
      <div v-else-if="data.vName == 'VIP3'" class="vipLevelInfo clearfix vipLevelInfo3">
        <dl class="fl">
          <dt class="vip3"></dt>
          <dd>5W</dd>
        </dl>
        <img class="fl db" src="./img/line.png">
        <dl class="fl">
          <dt class="vip4"></dt>
          <dd>20W</dd>
        </dl>
        <img class="fl db" src="./img/line.png">
        <dl class="fl">
          <dt class="vip5"></dt>
          <dd>50W</dd>
        </dl>
        <img class="fl db" src="./img/line.png">
        <dl class="fl">
          <dt class="vip6"></dt>
          <dd>200W</dd>
        </dl>
        <img class="fl db" src="./img/line.png">
        <dl class="fl">
          <dt class="vip7"></dt>
          <dd>500W</dd>
        </dl>
      </div>
      <!-- vip4 -->
      <div v-else-if="data.vName == 'VIP4'" class="vipLevelInfo clearfix vipLevelInfo4">
        <dl class="fl">
          <dt class="vip4"></dt>
          <dd>20W</dd>
        </dl>
        <img class="fl db" src="./img/line.png">
        <dl class="fl">
          <dt class="vip5"></dt>
          <dd>50W</dd>
        </dl>
        <img class="fl db" src="./img/line.png">
        <dl class="fl">
          <dt class="vip6"></dt>
          <dd>200W</dd>
        </dl>
        <img class="fl db" src="./img/line.png">
        <dl class="fl">
          <dt class="vip7"></dt>
          <dd>500W</dd>
        </dl>
      </div>
      <!-- vip5 -->
      <div v-else-if="data.vName == 'VIP5'" class="vipLevelInfo clearfix vipLevelInfo5">
        <dl class="fl">
          <dt class="vip5"></dt>
          <dd>50W</dd>
        </dl>
        <img class="fl db" src="./img/line.png">
        <dl class="fl">
          <dt class="vip6"></dt>
          <dd>200W</dd>
        </dl>
        <img class="fl db" src="./img/line.png">
        <dl class="fl">
          <dt class="vip7"></dt>
          <dd>500W</dd>
        </dl>
      </div>
      <!-- vip6 -->
      <div v-else-if="data.vName == 'VIP6'" class="vipLevelInfo clearfix vipLevelInfo6">
        <dl class="fl">
          <dt class="vip6"></dt>
          <dd>200W</dd>
        </dl>
        <img class="fl db" src="./img/line.png">
        <dl class="fl">
          <dt class="vip7"></dt>
          <dd>500W</dd>
        </dl>
      </div>
    </section>
    <div class="myRightTitle ">
      我的特权
      <span v-if="data.isVip7">
        累积持有天数<span>{{data.Num}}</span>天
        </span>
    </div>
    <div class="right ">
      <ul v-if="data.vip_cash_count !== undefined">
        <router-link to="/vip/cash" tag="li">
          <img src="./toCash.png" alt="">
          <span>{{data.vip_cash_count.name}}</span>
          <span class="redColor">{{data.vip_cash_count.value == -1?"无限制":data.vip_cash_count.value +'次'}}</span>
        </router-link>
        <router-link to="/vip/birthday" tag="li">
          <img src="./birthday.png" alt="">
          <span>{{data.vip_birthday.name}}</span>
          <span class="redColor">{{data.vip_birthday.value}}元</span>
        </router-link>
        <router-link to="/vip/xAmount" tag="li">
          <img src="./amountX.png" alt="">
          <span>{{data.vip_xAmount.name}}</span>
          <span class="redColor">{{data.vip_xAmount.value}}万</span>
        </router-link>
        <router-link to="/vip/upGift" tag="li">
          <img src="./gift.png" alt="">
          <span>{{data.vip_upGradeGift.name}}</span>
          <span class="redColor">{{data.vip_upGradeGift.value}}元</span>
        </router-link>
        <router-link to="/vip/signIn" tag="li">
          <img src="./signIn.png" alt="">
          <span>{{data.vip_signInAward.name}}</span>
          <span class="redColor">{{data.vip_signInAward.value}}元</span>
        </router-link>
        <router-link to="/vip/special" tag="li">
          <img v-bind:class="[data.vip_specialGift.value == 1 ? '' : 'gray']" src="./special.png" alt="">
          <span>{{data.vip_specialGift.name}}</span>
        </router-link>
        <router-link to="/vip/customerService" tag="li">
          <img v-bind:class="[data.vip_cutomerService.value == 1 ? '' : 'gray']" src="./kefu.png" alt="">
          <span>{{data.vip_cutomerService.name}}</span>
        </router-link>
        <li>
          <img class="last" src="./hope.png" alt="">
          <span class="white">更多福利<br>
                敬请期待</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data: function () {
      return {
        data: {},
        name: '',
        curVipLevel: ''
      };
    },
    created() {
      this.$http({
        method: 'get',
        url: '/api/w2/vipInfo',
        headers: {'token': sessionStorage.getItem('token')}
      }).then((response) => {
        let str = response.data.vName;
        let vipLevel = str.split('P')[1];
        this.curVipLevel = 'vipLevel' + vipLevel;
        // 通过返回的值进行具体的处理
        if (response.data.code === 200) {
          this.data = response.data;
        } else if (response.data.code === 403) {
          this.login();
        }
      })
        .catch(function (error) {
          alert(error);
        });
    },
    methods: {}
  };
</script>

