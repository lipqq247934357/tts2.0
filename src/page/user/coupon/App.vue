<style lang="less">

  body {
    background: #f2f3f4 !important;
  }

  /*优惠券*/
  .boxShadow {
    background: -moz-linear-gradient(90deg, rgb(238, 238, 238) 0%, rgb(249, 249, 249) 100%);
    background: -webkit-linear-gradient(90deg, rgb(238, 238, 238) 0%, rgb(249, 249, 249) 100%);
    background: -ms-linear-gradient(90deg, rgb(238, 238, 238) 0%, rgb(249, 249, 249) 100%);
  }

  .couponTab {
    padding: 0 10%;
  }

  .couponTab ul li {
    width: 33.3%;
    float: left;
    height: 2.8rem;
    line-height: 2.8rem;
    font-size: 0.8rem;
    color: #333;
    tap-highlight-color: rgba(0, 0, 0, 0);
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }

  .unUseBalance {
    border: 1px solid #eee;
    height: 2.8rem;
    line-height: 2.8rem;
    width: 88%;
    margin: 0 auto;
    padding-left: 4%;
    font-size: 0.8rem;
  }

  .couponCont {
    width: 92%;
    margin: 0 auto;
  }

  .couponContTop {
    padding-bottom: 0.5rem;
  }

  .couponContTop dl {
    margin-left: 6%;
    width: 35%;
    margin-top: 1rem;
  }

  .couponContTop dl dt {
    font-size: 0.9rem;
  }

  .couponContTop dl dd {
    font-size: 1.4rem;
    line-height: 1.4rem;
    font-weight: bold;
    margin-top: 0.6rem;
  }

  .couponContTop dl dd span {
    font-size: 0.9rem;
    font-weight: normal;
  }

  .couponContTop dl dd em {
    font-size: 1rem;
    font-weight: normal;
  }

  .couponContTop p {
    font-size: 0.7rem;
    color: #333;
    line-height: 1.2rem;
    padding-top: 1rem;
    width: 54%;
    word-wrap: break-word;
  }

  .couponContTop a {
    width: 2.4rem;
    height: 1.4rem;
    line-height: 1.4rem;
    font-size: 0.7rem;
    color: #ff7e3f;
    border: 1px solid #ff7e3f;
    right: 1rem;
    top: 1.8rem;
  }

  .couponContBot {
    height: 2.8rem;
    padding-top: 0.2rem;
    background: url("./img/line.png") top center no-repeat;
    background-size: 100% 0.7rem;
    overflow: hidden;
  }

  .couponContBot p {
    line-height: 3.2rem;
    font-size: 0.8rem;
    color: #999;
  }

  .couponContBot p:nth-child(1) {
    width: 35%;
    margin-left: 6%;
  }

  .couponContBot a {
    line-height: 3.2rem;
    font-size: 0.85rem;
    color: #ff7e3f;
  }

  .alreadyUse .couponContTop dl, .alreadyUse .couponContTop p, .alreadyUse .couponContBot a {
    color: #999;
  }

  .loadMore {
    line-height: 3rem;
    width: 100%;
    color: #999;
    font-size: 0.8rem;
  }

  .couponTab ul li.active {
    color: #ff7e3f;
    font-weight: bold;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }

  .orange {
    color: #ff7e3f !important;
  }

  .ml05 {
    margin-left: 0.5rem !important;
  }

  .mr02 {
    margin-right: 0.2rem !important;
  }

  .grey {
    color: #999 !important;
  }

  .mt1 {
    margin-top: 1rem !important;
  }

  em {
    font-style: normal;
  }

  .fillet04 {
    border-radius: 0.4rem;
    -webkit-border-radius: 0.4rem;
    -moz-border-radius: 0.4rem;
    -o-border-radius: 0.4rem;
  }

  /*弹框提示*/
  .promptFloatCont {
    width: 80%;
    background: #fff;
    position: fixed;
    z-index: 11;
    left: 50%;
    margin-left: -40%;
    top: 8rem;
    border-radius: 0.8rem;
    -webkit-border-radius: 0.8rem;
    padding-top: 1rem;
  }

  .promptFloatCont p {
    font-size: 1rem;
    color: #181818;
    line-height: 2.4rem;
    background: url("./img/line.png") center center no-repeat;
    background-size: 110% auto;
  }

  .promptFloatInfo {
    padding: 1.5rem 4% 1.5rem;
  }

  .promptFloatInfo span {
    color: #999;
    font-size: 0.8rem;
    line-height: 1.4rem;
  }

  .promptFloatInfo .allBtn a {
    width: 46%;
    height: 2.4rem;
    line-height: 2.4rem;
    font-size: 1rem;
    margin-top: 2rem;
  }

  .promptFloatInfo .allBtn a.fl {
    background: #fff;
    border: 1px solid #ff7e3f;
    color: #ff7e3f;
  }

  .promptFloatInfo .allBtn a.fr {
    border: 1px solid #fe953c;
    color: #fff;
  }

  .promptFloatInfo .allBtn a.ok {
    color: #fff;
    width: 100%;
  }

  .mark {
    background-color: #000;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    filter: alpha(opacity=50);
    opacity: 0.5;
    z-index: 5;
    position: fixed !important;
  }

  .btnBg {
    background: -webkit-linear-gradient(90deg, rgb(240, 130, 40) 0%, rgb(255, 145, 56) 100%);
  }

  .fillet02 {
    -webkit-border-radius: 0.2rem;
  }
</style>
<template>
  <div>
    <toast :content="content"></toast>
    <!-- 兑换成功弹框 -->
    <div v-if="showSucc">
      <div class="mark" onclick="javascript:location.reload();"></div>
      <div class="promptFloatCont borRadius">
        <p class="tc borBottom">兑换成功</p>
        <div class="tc promptFloatInfo">
          <span class="db">已进入可用余额</span>
          <div class="allBtn">
            <a class="db fillet02 tc ok btnBg" onclick="javascript:location.reload();">我知道了</a>
          </div>
        </div>
      </div>
    </div>

    <nav class="couponTab whiteBg">
      <ul class="clearfix">
        <li id="tab-1" :class="type === 'unUse'?'active':''" class="tl" @click="turn('unUse')">未使用</li>
        <li id="tab-2" :class="type === 'used'?'active':''" class="tc" @click="turn('used')">已使用</li>
        <li id="tab-3" :class="type === 'expired'?'active':''" class="tr" @click="turn('expired')">已过期</li>
      </ul>
    </nav>
    <section class="mt1 unUseBalance whiteBg fillet04 boxShadow">
      <p v-if="type === 'unUse'"><font>未使用金额</font><span
        class="ml05 orange mr02">{{noUseValue | formatNumber}}</span><em
        class="grey">元</em></p>
      <p v-else-if="type === 'used'"><font>已使用金额</font><span
        class="ml05 orange mr02">{{usedValue | formatNumber}}</span><em
        class="grey">元</em></p>
      <p v-else><font>已过期金额</font><span class="ml05 orange mr02">{{expiredValue | formatNumber}}</span><em
        class="grey">元</em></p>
    </section>
    <section class="couponCont pb1">
      <div v-if="type === 'unUse'">
        <div v-for="item in list" class="boxShadow fillet04 whiteBg">
          <div class="couponContTop mt1 clearfix pr">
            <dl class="fl">
              <dt>{{item.awardTypeName}}</dt>
              <dd class="orange"><em v-if="item.awardType === 1 || item.awardType === 6">+</em>{{item.awardValue}}<span>{{item.awardValueSuffix}}</span>
              </dd>
            </dl>
            <p class="fl" v-html="item.useConditionDesc"></p>
            <a v-if="item.awardType === 5 || item.awardType === 0" class="tc db fr pa fillet04"
               @click="exchange(item.id)">兑换</a>
          </div>
          <div class="couponContBot clearfix">
            <p class="fl">{{item.name}}</p>
            <p class="fl">有效期至{{item.invalidTime}}</p>
          </div>
        </div>
      </div>
      <div v-else>
        <div v-for="item in list" class="boxShadow fillet04 whiteBg alreadyUse">
          <div class="couponContTop mt1 clearfix">
            <dl class="fl">
              <dt>{{item.awardTypeName}}</dt>
              <dd><em v-if="item.awardType === 1 || item.awardType === 6">+</em>{{item.awardValue}}<span>{{item.awardValueSuffix}}</span>
              </dd>
            </dl>
            <p class="fl" v-html="item.useConditionDesc"></p>
          </div>
          <div class="couponContBot clearfix">
            <p class="fl">{{item.name}}</p>
            <p class="fl">有效期至{{item.invalidTime}}</p>
          </div>
        </div>
      </div>
      <p v-if="pageNumber < totalPage" id="moreBtn" class="tc loadMore">加载更多</p>
      <p v-else class="tc loadMore">已无更多数据</p>
    </section>
  </div>
</template>

<script type="text/ecmascript-6">
  import {lzlh} from '../../../assets/js/native';
  import {urlParse, formatDate2, formatNumber} from '../../../assets/js/util';
  import toast from '../../../components/pop/toast/toast1';

  export default {
    data() {
      return {
        type: 'unUse',
        expiredValue: 0,
        noUseValue: 0,
        usedValue: 0,
        pageNumber: 0,
        totalPage: 0,
        list: [],
        showSucc: false,
        showError: false,
        content: ''
      };
    },
    methods: {
      turn(type) { // 通过不同的type获取不同的值
        this.list = [];
        this.type = type;
        this.pageNumber = 0;
        this.totalPage = 0;
        this.loadData();
      },
      loadData() { // 加载数据
        this.$http({
          method: 'post',
          url: `/api/w2/activity?type=${this.type}&pno=${++this.pageNumber}&psize=10&ajax=yes`,
          headers: {'token': sessionStorage.getItem('token')}
        }).then((response) => {
          // 通过返回的值进行具体的处理
          if (response.data.code === 200) {
            this.expiredValue = response.data.expiredValue;
            this.noUseValue = response.data.noUseValue;
            this.usedValue = response.data.usedValue;
            this.totalPage = response.data.data.totalPage;
            response.data.data.list.forEach(function (item, index) {
              response.data.data.list[index].invalidTime = formatDate2(item.invalidTime);
            });
            this.list = this.list.concat(response.data.data.list);
          } else if (response.data.code === 403) {
            lzlh.toLogin();
          }
        }).catch(function (error) {
          console.log(error);
        });
      },
      exchange(item) { // 兑换红包
        this.$http({
          method: 'post',
          url: `/api/w2/exchange?caId=${item}`,
          headers: {'token': sessionStorage.getItem('token')}
        }).then((response) => {
          // 通过返回的值进行具体的处理
          if (response.data.code === 200) {
            this.content = response.data.msg;
            this.showSucc = true;
            setTimeout(() => {
              this.content = '';
            }, 2000);
          } else if (response.data.code === 403) {
            lzlh.toLogin();
          } else {
            this.content = response.data.msg;
            setTimeout(() => {
              this.content = '';
            }, 2000);
          }
        }).catch(function (error) {
          console.log(error);
        });
      }
    },
    created() {
      let obj = urlParse();
      this.type = obj.type || 'unUse';
      this.loadData();
      window.onscroll = () => {
        let btn = document.getElementById('moreBtn');
        if (btn && window.pageYOffset + window.innerHeight >= btn.offsetTop) {
          clearTimeout(window.tId);
          window.tId = setTimeout(() => {
            this.loadData();
          }, 100);
        }
      };
    },
    components: {
      'toast': toast
    },
    filters: {
      formatNumber: formatNumber
    }
  };
</script>

