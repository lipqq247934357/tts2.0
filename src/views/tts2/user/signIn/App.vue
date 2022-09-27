<style>

  body.greyBg {
    background: #fff !important;
  }

  em {
    font-style: normal;
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

  /* 签到 */
  .signTop {
    padding-top: 2rem;
    background: url("./img/topBg.png") center 3rem no-repeat;
    background-size: 100% auto;
  }

  .signTop p {
    color: #999;
    font-size: .8rem;
  }

  .signTop p span {
    color: #ff8106;
  }

  .signCont, .hasSignedCont {
    width: 8rem;
    height: 7rem;
    margin: 0 auto;
    padding-top: 1rem;
    background: url("./img/signBg.png") no-repeat;
    background-size: 100% auto;
  }

  .signCont a {
    margin: 0 auto;
    font-size: 1.4rem;
    line-height: 5rem;
    font-weight: bold;
    color: #ff8106;
  }

  .mt05 {
    margin-top: 0.5rem !important;
  }

  .fillet50 {
    border-radius: 50%;
    -webkit-border-radius: 50%;
  }

  .signInfo {
    padding: 0 15% 1rem;
  }

  .signInfo dl dt {
    color: #ff8106;
    font-size: 2rem;
  }

  .signInfo dl dt span {
    font-size: .8rem;
  }

  .signInfo dl dd {
    font-size: .8rem;
    color: #fbc997;
  }

  .hasSignedCont {
    padding-top: 2rem;
    height: 6rem;
  }

  .hasSignedCont p {
    color: #ff8106;
    font-size: 2rem;
  }

  .hasSignedCont p em {
    font-size: .9rem;
  }

  .hasSignedCont p.jryq {
    font-size: .9rem;
    margin-top: .2rem
  }

  /*日历*/
  .scratchCalendar {
    width: 90%;
    height: 18rem;
    margin: 1.5rem auto 0;
    box-shadow: 0 0 25px 0 rgb(255, 239, 224);
    -webkit-box-shadow: 0 0 25px 0 rgb(255, 239, 224);
  }

  .calendarTop {
    padding: .6rem 30%;
    font-weight: bold;
  }

  .calendarTop span {
    width: 75%;
    margin: 0 auto;
    font-size: 1rem;
  }

  .calendarTop {
    color: #ff7e3f;
    height: 2.4rem;
    line-height: 2.4rem;
    font-size: 0.9rem;
  }

  .calendarTop a {
    width: 1rem;
    height: 1rem;
    margin-top: 0.6rem;
  }

  .calendarTop a.left {
    background: url("./img/leftArrow.png") center center no-repeat;
    background-size: .8rem .8rem;
  }

  .calendarTop a.leftNoclick {
    background: url("./img/leftArrow1.png") center center no-repeat;
    background-size: .8rem .8rem;
  }

  .calendarTop a.right {
    background: url("./img/rightArrow.png") center center no-repeat;
    background-size: .8rem .8rem;
  }

  .calendarTop a.rightNoclick {
    background: url("./img/rightArrow1.png") center center no-repeat;
    background-size: .8rem .8rem;
  }

  .calendarCont {
    width: 98%;
    margin-left: 2%;
  }

  .calendarCont thead tr th {
    width: 11%;
    margin: 0 1.4%;
    font-weight: normal;
    line-height: 1.8rem;
    font-size: .9rem;
    display: inline-block;
    color: #fbc997;
  }

  .calendarCont tbody tr td {
    color: #fe9901;
    width: 11%;
    height: 2rem;
    text-align: center;
    display: inline-block;
    margin: 0 1.2%;
    position: relative;
  }

  .calendarCont tbody tr td p {
    width: 1.8rem;
    height: 1.8rem;
    line-height: 1.8rem;
    font-size: .9rem;
  }

  .calendarCont tbody tr td span {
    line-height: 1rem;
    font-size: 0.6rem;
  }

  .calendarCont tbody tr td p.curDay {
    background: #fe9901;
    color: #fff;
  }

  .calendarCont tbody tr td img {
    display: none;
  }

  .calendarCont tbody tr td.hasSigned img {
    width: 1.2rem;
    bottom: .2rem;
    left: 50%;
    margin-left: -.7rem;
    display: block;
  }

  .signBombBox {
    width: 76%;
    position: fixed;
    left: 50%;
    margin-left: -41%;
    z-index: 20;
    top: 25%;
    padding: 1rem 3% .5rem;
  }

  .signBombBox p.signTips {
    color: #333;
    font-size: .9rem;
    line-height: 4rem;
  }

  .signBombBox a {
    height: 4.5rem;
    line-height: 4.5rem;
    color: #fff;
    font-size: 1rem;
    background: url("./img/btnBg.png") no-repeat;
    background-size: 100% auto;
  }

  .signBombBox p.signReward {
    color: #ff8106;
    font-size: 1rem;
    margin: .5rem 0;
  }

  .signBombBox p.signReward span {
    font-size: 3.5rem;
  }

  .signBombBox h6 {
    font-size: 1rem;
    color: #666;
  }

  .fillet1 {
    border-radius: 1rem;
    -webkit-border-radius: 1rem;
    -moz-border-radius: 1rem;
    -o-border-radius: 1rem;
  }

</style>
<template>
  <div v-if="code === 200">
    <div v-show="showLimitPop">
      <div class="mark"></div>
      <div class="signBombBox whiteBg fillet1">
        <p class="tc signTips">只有会员才能签到哦～</p>
        <a @click="toInvest" class="tc db toInvest" href="javascript:void(0);">去升级</a>
      </div>
    </div>
    <!-- 签到成功-->
    <div v-if="showSuccPop">
      <div class="mark"></div>
      <div class="signBombBox whiteBg fillet1">
        <h6 class="tc">签到成功</h6>
        <p class="tc signReward"><em>+</em><span>{{awardAmt}}</span>元</p>
        <a @click="closePop" class="tc db" href="">知道了</a>
      </div>
    </div>
    <section class="signTop">
      <!-- 未签到 -->
      <div v-if="status === '0'" id="notSign" class="signCont">
        <a v-if="awardAmt > 0" @click="signIn" class="tc db" href="javascript:void(0);">点我签到</a>
        <a v-else @click="limitPop" class="tc db" href="javascript:void(0);">点我签到</a>
      </div>
      <!-- 已签到 -->
      <div v-else class="hasSignedCont">
        <p class="tc"><span id="addAmt"><em>+</em>{{awardAmt}}</span>元</p>
        <p class="tc jryq">今日已签</p>
      </div>
      <div class="signInfo clearfix">
        <dl class="fl tc">
          <dt id="lastDay">{{lastDays}}<span>天</span></dt>
          <dd>连续签到</dd>
        </dl>
        <dl class="fr tc">
          <dt id="totalAmt">{{totalAmt}}<span>元</span></dt>
          <dd>累计获得</dd>
        </dl>
      </div>
      <p v-if="show" class="tc mt05">签到奖励满1元将自动进入到账户余额</p>
    </section>
    <section class="pb1">
      <section class="scratchCalendar fillet04 whiteBg">
        <div class="clearfix calendarTop">
          <a @click="getData('before')" class="fl db left leftclick" href="javascript:void(0);"></a>
          <span class="tc db fl">{{DateObj.curYearMonth4ZS}}</span>
          <a @click="getData('after')" class="fr db right" href="javascript:void(0);"></a>
        </div>
        <table class="calendarCont">
          <thead>
          <tr>
            <th>日</th>
            <th>一</th>
            <th>二</th>
            <th>三</th>
            <th>四</th>
            <th>五</th>
            <th>六</th>
          </tr>
          </thead>
          <tbody id="content" class="tc" v-html="content">
          </tbody>
        </table>
      </section>
    </section>
  </div>
</template>

<script type="text/ecmascript-6">
  import {lzlh} from '../../../assets/js/native';

  export default {
    data: function () {
      return {
        code: 201,
        status: '0',
        awardAmt: 0,
        lastDays: 0,
        totalAmt: 0,
        show: false,
        list: [],
        currDate: {},
        DateObj: {},
        content: {},
        showLimitPop: false,
        showSuccPop: false
      };
    },
    methods: {
      signIn() { // 去签到
        this.$http({
          method: 'post',
          url: '/api/w2/ajaxSignIn',
        }).then((response) => {
          if (response.data.code === 200) { // succ
            this.awardAmt = response.data.awardAmt;
            this.showSuccPop = true;
          } else if (response.data.code === 403) { // 未登录
            lzlh.toLogin();
          } else { // 参数异常
            alert(response.data.msg);
          }
        })
          .catch(function (error) {
            console.log(error);
          });
      },
      limitPop() { // 金额限制
        this.showLimitPop = true;
      },
      closePop() {
        window.location.reload();
      },
      toInvest() {
        lzlh.toProList();
      },
      getData(par) {
        let date = new Date(this.DateObj.curYear, this.DateObj.curMonth + (par === 'before' ? -1 : 1), 1);
        this.$http({
          method: 'post',
          url: '/api/w2/ajaxSignInRecord',
          params: {
            year: date.getFullYear(),
            month: date.getMonth()
          }
        }).then((response) => {
          if (response.data.code === 200) { // succ
            response.data.list.forEach(function (item, index) {
              response.data.list[index] = item.handleDate;
            });
            this.list = response.data.list;
            // 初始化当前日期 和 日历
            this.updateDate(date);
            this.content = window.monthFactory.init(this.DateObj.curYear, this.DateObj.curMonth)(this.appendCont);
          } else if (response.data.code === 301) { // 参数异常
            alert('参数异常');
          } else if (response.data.code === 403) { // 未登录
            lzlh.toLogin();
          }
        })
          .catch(function (error) {
            console.log(error);
          });
      },
      appendCont(i, startWeek) {// 执行特别的逻辑，将数据填充到页面
        let name = i - startWeek + 1 < 10 ? '0' + (i - startWeek + 1) : i - startWeek + 1;
        let cls = '';
        if (this.currDate.day === i - startWeek + 1 && this.currDate.yearMonth === this.DateObj.curYearMonth) {
          cls = 'class="curDay fillet50"';
        }
        let img = '';
        for (let i = 0; i < this.list.length; i++) {
          if (Number.parseInt((this.list[i] + '').substr(6, 2)) === Number.parseInt(name)) {
            img = '<img class="db pa" src="/static/img/signIn/signed.png">';
            break;
          }
        }
        return '<td date="' + name + '" class="hasSigned"><p ' + (cls || "") + '>' + (i - startWeek + 1) + '</p>' + img + '</td>';
      },
      updateDate(curDate) {
        this.DateObj.curYear = curDate.getFullYear();
        this.DateObj.curMonth = curDate.getMonth();
        this.DateObj.curYearMonth = curDate.getFullYear() + "" + (curDate.getMonth() >= 10 ? curDate.getMonth() : "0" + curDate.getMonth());
        let currM = curDate.getMonth() + 1;
        this.DateObj.curYearMonth4ZS = curDate.getFullYear() + "年" + (currM >= 10 ? currM : "0" + currM) + "月";
      },
      initFactory() {
        window.monthFactory = {
          init: function (year, month) {
            this.monthInfo(year, month);
            return this.fillData;
          }
          ,
          monthInfo: function MonthInfo(year, month) {
            let MONTH_DAYS = [31, 0, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
            this.totalDay = 1 === month ? 0 !== year % 4 || 0 === year % 100 && 0 !== year % 400 ? 28 : 29 : MONTH_DAYS[month];
            this.startWeek = new Date(year, month, 1).getDay();
            this.totalRow = Math.ceil((this.totalDay + this.startWeek) / 7) * 7;
          }
          ,
          fillData: function (append) {
            let html = "";
            let totalDay = monthFactory.totalDay;
            let startWeek = monthFactory.startWeek;
            let totalRow = monthFactory.totalRow;
            for (let i = 0; i < totalRow; i++) {
              if (i % 7 === 0) {
                html += "<tr>";
              }
              if (i < startWeek) {
                html += '<td><p></p></td>';
              } else if (i < startWeek + totalDay) {
                html += append(i, startWeek);
              } else {
                html += '<td><p></p></td>';
              }
              if (i % 7 === 6) {
                html += "</tr>";
              }
            }
            return html;
          }
        };
      }
    },
    created() {
      // 初始化日历
      this.initFactory();
      // 发起ajax请求获取数据
      this.$http({
        method: 'post',
        url: '/api/w2/signIn4JSON',
      }).then((response) => {
        if (response.data.code === 200) { // succ
          this.code = 200;
          this.status = response.data.status;
          this.awardAmt = response.data.awardAmt;
          this.show = response.data.show;
          this.lastDays = response.data.lastDays;
          this.totalAmt = response.data.totalAmt;
          response.data.list.forEach(function (item, index) {
            response.data.list[index] = item.handleDate;
          });
          this.list = response.data.list;
          // 初始化当前日期 和 日历
          let date = new Date();
          this.currDate.day = date.getDate();
          this.currDate.yearMonth = new Date().getFullYear() + "" + (date.getMonth() >= 10 ? date.getMonth() : "0" + date.getMonth());
          this.updateDate(date);
          this.content = window.monthFactory.init(this.DateObj.curYear, this.DateObj.curMonth)(this.appendCont);
        } else if (response.data.code === 403) { // 未登录
          lzlh.toLogin();
        }
      })
        .catch(function (error) {
          console.log(error);
        });
    }
  };
</script>

