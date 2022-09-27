<style lang="less">

  body {
    background-color: #f5f5f9;
  }

  .investBanner img {
    width: 100%;
    display: block;
  }

  .myLevel {
    padding: 1rem 0 1rem 1rem;
  }

  .myLevel dl dt {
    width: 4rem;
    height: 4rem;
    background: #ff8e00;
    line-height: 4rem;
    color: #ffffff;
    border-radius: 2rem;
    -webkit-border-radius: 2rem;
    -moz-border-radius: 2rem;
    -o-border-radius: 2rem;
  }

  .inviteTitle img {
    width: 92%;
    margin: 0 auto;
    padding: 2rem 0;
  }

  .myLevel dl dd {
    font-size: 0.8rem;
    margin-left: 1rem;
  }

  .myLevel dl dd p {
    color: #666666;
  }

  .myLevel dl dd span {
    color: #999999;
  }

  .investList tbody tr td:nth-child(3), .investList tbody tr td:nth-child(2), .investList tbody tr td:nth-child(4) {
    text-align: center;
  }

  .earningsRecord dl {
    padding: 1rem 0;
  }

  .earningsRecord dl:nth-child(1) {
    border-right: 1px dashed #dfdfdf;
    box-sizing: border-box;
  }

  .darkGrey {
    color: #666666;
  }

  .mb3 {
    margin-bottom: 3.4rem;
  }

  .divBorTop, .divBorBottom {
    border-top: 1px solid #f2f0f0;
    border-bottom: 1px solid #f2f0f0;
  }

  .investCont .investInfo {
    border-bottom: none;
  }

  .inviteTitle2 {
    height: 3rem;
    line-height: 3rem;
    border-bottom: 1px solid #f2f0f0;
    font-size: 1rem;
    color: #bdbdbd;
  }

  .inviteTitle2 a {
    padding: 0.2rem 0.8rem;
    height: 1rem;
    line-height: 1rem;
    border: 1px solid #ff8e00;
    margin-left: 0.5rem;
    font-size: 0.8rem;
    color: #ff8e00;
    border-radius: 0.7rem
  }

  .toast1 {
    width: 80%;
    margin: 0 auto;
    background: rgba(0, 0, 0, .7);
    padding: .5rem 4%;
    top: 50%;
    left: 40%;
    margin-left: -34%;
  }

  .toast1 p {
    font-size: .8rem;
    color: #fff;
    line-height: 1.2rem;
  }

  .earningsRecord dl {
    width: 50%;
    float: left;
    padding: 2rem 0;
  }

  .projectInfoTab ul {
    height: 2rem;
    line-height: 2rem;
    width: 90%;
    margin: 0 auto;
    border: 1px solid #ff8200;
    margin-top: 15px;
  }

  .projectInfoTab ul li {
    float: left;
    width: 25%;
    text-align: center;
    border-right: 1px solid #ff8200;
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
  }

  .projectInfoTab ul li a {
    color: #ff8200;
    display: block;
    font-size: 1rem;
  }

  .projectInfoTab ul li:nth-child(4) {
    border-right: none;
  }

  .projectInfoTab ul li a.tabulous_active {
    background: #ff8200;
    color: #ffffff;
  }

  .goldExp ul li {
    width: 50%;
  }

  .goldExp ul li:nth-child(2) {
    border-right: none;
  }

  .investList th {
    line-height: 2rem;
    font-size: 0.875rem;
    font-weight: normal
  }

  .investList {
    width: 90%;
    margin: 0 auto;
  }

  .investList td {
    line-height: 2rem;
    font-size: 0.8rem;
    color: #9b9b9b;
  }

  /*投资列表*/
  .investCont .investInfo {
    padding: 1rem 5%;
  }

  .investCont .investInfo dl dt {
    font-size: 0.875rem;
  }

  .investCont .investInfo dl dd {
    font-size: 0.8rem;
    color: #9b9b9b;
    margin-top: 1rem;
  }

  .investList {
    width: 90%;
    margin: 0 auto;
  }

  .investList th {
    line-height: 2rem;
    font-size: 0.875rem;
    font-weight: normal
  }

  .investList td {
    line-height: 2rem;
    font-size: 0.8rem;
    color: #9b9b9b;
  }

  .immediateInvestment {
    position: fixed;
    bottom: 0;
  }

  .immediateInvestment a {
    width: 100%;
  }

</style>
<template>
  <div>
    <div class="investFriend2 pb2">
      <!-- 弹框提示 -->
      <div class="toast1 borRadius5 pf" style="display: none;">
        <p class="tc">嗨，定期在出借金额满1万元或已获得收益（定期收益+活期收益）满200元及以上用户可参与哦</p>
      </div>
      <section class="investFriends">
        <section class="investBanner">
          <a href="/act_invite_4.html"><img src="./img/banner3.png" alt=""></a>
        </section>
        <!-- 邀请好友4.0 -->
        <div class="whiteBg mb1 divBorBottom">
          <div class="inviteTitle"><img class="db" src="./img/title40.png" alt="">
          </div>
          <section class=" fontGrey tc whiteBg earningsRecord clearfix">
            <dl class="fl">
              <dt class="font0">昨日奖励（元）</dt>
              <dd class="fontOrange mt1 font12">{{inv4Data.yesAmt | formatNumber(2)}}</dd>
            </dl>
            <dl class="fr">
              <dt class="font0">累计奖励（元）</dt>
              <dd class="fontOrange mt1 font12">{{inv4Data.totalAmt | formatNumber(2)}}</dd>
            </dl>
          </section>
          <section class="projectInfoTab goldExp pb1 mt2">
            <ul class="borRadius clearfix">
              <li><a @click="awardInfo(4)" :class="inv4Data.show !== 'user'?'tabulous_active':''"
                     href="javascript:void(0);">奖励记录</a></li>
              <li><a @click="userInfo(4)" :class="inv4Data.show === 'user'?'tabulous_active':''"
                     href="javascript:void(0);">邀请记录</a></li>
            </ul>
          </section>
          <section class="investCont whiteBg" :class="inv4Data.show !== 'user'?'':'hide'">
            <table cellspacing="0" cellpadding="0" border="0" class="investList">
              <colgroup>
                <col width="25%">
                <col width="50%">
                <col width="25%">
              </colgroup>
              <thead>
              <tr>
                <th scope="col" class="tl">日期</th>
                <th scope="col" class="tc">一重奖励</th>
                <th scope="col" class="tc">二重奖励</th>
              </tr>
              </thead>
              <tbody>
              <tr v-for="(item,index) in inv4Data.award" v-if="index < inv4Data.awardItem">
                <td>{{item.ctime}}</td>
                <td>￥{{item.level1 | formatNumber(2)}}</td>
                <td>￥{{item.level2 | formatNumber(2)}}</td>
              </tr>
              </tbody>
            </table>
            <p @click="awardMoreData(4)"
               v-if="inv4Data.award.length > inv4Data.awardItem"
               class="db tc fontGrey font08 lineH3">点击加载更多</p>
            <p v-else class="db tc fontGrey font08 lineH3">已无更多数据</p>
          </section>
          <section class="investCont whiteBg inviteList" :class="inv4Data.show === 'user'?'':'hide'">
            <div class="investInfo clearfix">
              <p class="darkGrey font1">已邀请人数：{{inv4Data.inviteNum}}人</p>
            </div>
            <table cellspacing="0" cellpadding="0" border="0" class="investList">
              <colgroup>
                <col width="25%">
                <col width="30%">
                <col width="25%">
                <col width="25%">
              </colgroup>
              <thead>
              <tr>
                <th scope="col" class="tl">注册日期</th>
                <th scope="col" class="tc">邀请好友</th>
                <th scope="col" class="tc">是否出借</th>
                <th scope="col" class="tc">是否有效</th>
              </tr>
              </thead>
              <tbody>
              <tr v-for="(item,index) in inv4Data.user" v-if="index < inv4Data.userItem">
                <td>{{item.registTime | formatDate2}}</td>
                <td>{{item.markName}}</td>
                <td>{{item.sumAmount}}</td>
                <td>{{item.outTime}}</td>
              </tr>
              </tbody>
            </table>
            <p @click="userMoreData(4)" v-if="inv4Data.user.length > inv4Data.userItem"
               class="db tc fontGrey font08 lineH3">点击加载更多</p>
            <p v-else class="db tc fontGrey font08 lineH3">已无更多数据</p>
          </section>
        </div>
        <!-- 邀请好友3.0 -->
        <div v-if="show3 === 'true'" class="whiteBg mb1 divBorBottom">
          <div class="inviteTitle"><img class="db" src="./img/title.png" alt=""></div>
          <section class=" fontGrey tc whiteBg earningsRecord clearfix">
            <dl class="fl">
              <dt class="font0">昨日奖励（元）</dt>
              <dd class="fontOrange mt1 font12">{{inv3Data.yesAmt | formatNumber(2)}}</dd>
            </dl>
            <dl class="fr">
              <dt class="font0">累计奖励（元）</dt>
              <dd class="fontOrange mt1 font12">{{inv3Data.totalAmt | formatNumber(2)}}</dd>
            </dl>
          </section>
          <section class="projectInfoTab goldExp pb1 mt2">
            <ul class="borRadius clearfix">
              <li><a @click="awardInfo(3)" :class="inv3Data.show !== 'user'?'tabulous_active':''"
                     href="javascript:void(0);">奖励记录</a></li>
              <li><a @click="userInfo(3)" :class="inv3Data.show === 'user'?'tabulous_active':''"
                     href="javascript:void(0);">邀请记录</a></li>
            </ul>
          </section>
          <section class="investCont whiteBg" :class="inv3Data.show !== 'user'?'':'hide'">
            <table cellspacing="0" cellpadding="0" border="0" class="investList">
              <colgroup>
                <col width="25%">
                <col width="50%">
                <col width="25%">
              </colgroup>
              <thead>
              <tr>
                <th scope="col" class="tl">日期</th>
                <th scope="col" class="tc">一重奖励</th>
                <th scope="col" class="tc">二重奖励</th>
              </tr>
              </thead>
              <tbody>
              <tr v-for="(item,index) in inv3Data.award" v-if="index < inv3Data.awardItem">
                <td>{{item.ctime}}</td>
                <td>{{calcuAmt(item.level1,item.level14DJQ)}}</td>
                <td>￥{{item.level2 | formatNumber(2)}}</td>
              </tr>
              </tbody>
            </table>
            <p v-if="inv3Data.award.length > inv3Data.awardItem" @click="awardMoreData(3)"
               class="db tc fontGrey font08 lineH3">点击加载更多</p>
            <p v-else class="db tc fontGrey font08 lineH3">已无更多数据</p>
          </section>
          <section id="tab4Info" class="investCont whiteBg inviteList" :class="inv3Data.show === 'user'?'':'hide'">
            <div class="investInfo clearfix">
              <p class="darkGrey font1">已邀请人数：{{inv3Data.InviteNum}}人</p>
            </div>
            <table cellspacing="0" cellpadding="0" border="0" class="investList">
              <colgroup>
                <col width="25%">
                <col width="30%">
                <col width="25%">
                <col width="25%">
              </colgroup>
              <thead>
              <tr>
                <th scope="col" class="tl">注册日期</th>
                <th scope="col" class="tc">邀请好友</th>
                <th scope="col" class="tc">是否出借</th>
                <th scope="col" class="tc">是否有效</th>
              </tr>
              </thead>
              <tbody>
              <tr v-for="(item,index) in inv3Data.user" v-if="index < inv3Data.userItem">
                <td>{{item.registTime | formatDate2}}</td>
                <td>{{item.markName}}</td>
                <td>{{item.sumAmount > 0 ?'是':'否'}}</td>
                <td>{{item.outTime === 0 ?'否':'是'}}</td>
              </tr>
              </tbody>
            </table>
            <p @click="userMoreData(3)" v-if="inv3Data.user.length > inv3Data.userItem"
               class="db tc fontGrey font08 lineH3">
              点击加载更多</p>
            <p v-else class="db tc fontGrey font08 lineH3">已无更多数据</p>
          </section>
        </div>
        <!-- 邀请好友2.0 -->
        <div v-if="show2 === 'true'" class="whiteBg mb1 divBorBottom">
          <div class="inviteTitle2 tc"><span>邀请好友2.0</span></div>
          <section class="myLevel whiteBg">
            <dl class="clearfix">
              <dt class="fl tc">Lv{{inv2Data.config.level}}</dt>
              <dd class="fl">
                <p class="mt08">您当前奖励等级为<span class="fontOrange">Lv{{inv2Data.config.level}}</span>，奖励利率为<span
                  class="fontOrange">{{inv2Data.config.yield}}%</span></p>
                <span class="mt0 db">{{inv2Data.invNum}}位好友待收总额{{inv2Data.friendAmt | formatNumber(2)}}元</span>
              </dd>
            </dl>
          </section>
          <section class="fontGrey tc whiteBg earningsRecord clearfix mt1">
            <dl class="fl">
              <dt class="font0">昨日奖励（元）</dt>
              <dd class="fontOrange mt1 font12">{{inv2Data.yesInv !== null ?inv2Data.yesInv.interest :0 |
                formatNumber(2) }}
              </dd>
            </dl>
            <dl class="fr">
              <dt class="font0">累计奖励（元）</dt>
              <dd class="fontOrange mt1 font12">{{inv2Data.sumAmt | formatNumber(2)}}</dd>
            </dl>
          </section>
          <section class="projectInfoTab goldExp pb1 mt2">
            <ul class="borRadius clearfix">
              <li><a @click="awardInfo(2)" :class="inv2Data.show !== 'user'?'tabulous_active':''"
                     href="javascript:void(0);">奖励记录</a></li>
              <li><a @click="userInfo(2)" :class="inv2Data.show === 'user'?'tabulous_active':''"
                     href="javascript:void(0);">邀请记录</a></li>
            </ul>
          </section>
          <section id="tab1" class="investCont whiteBg divBorTop divBorBottom mb3"
                   :class="inv2Data.show !== 'user'?'':'hide'">
            <table cellspacing="0" cellpadding="0" border="0" class="investList">
              <colgroup>
                <col width="30%">
                <col width="35%">
                <col width="25%">
                <col width="20%">
              </colgroup>
              <thead>
              <tr>
                <th scope="col" class="tl">日期</th>
                <th scope="col" class="tl">好友待收总额</th>
                <th scope="col" class="tl">奖励利率</th>
                <th scope="col" class="tl">奖励</th>
              </tr>
              </thead>
              <tbody>
              <tr v-for="item in inv2Data.award.list">
                <td>{{item.date | formatDate3}}</td>
                <td>￥{{item.amount | formatNumber(2)}}</td>
                <td>{{item.yield | formatNumber(2)}}%</td>
                <td>￥{{item.interest | formatNumber(2)}}</td>
              </tr>
              </tbody>
            </table>
            <p class="tc lineH3 db font0 fontGrey">已无更多数据</p>
          </section>
          <section id="tab2" class="investCont whiteBg divBorTop divBorBottom mb3 inviteList"
                   :class="inv2Data.show === 'user'?'':'hide'">
            <div class="investInfo clearfix">
              <p class="darkGrey font1">已邀请人数：{{inv2Data.invNum}}人</p>
            </div>
            <table cellspacing="0" cellpadding="0" border="0" class="investList">
              <colgroup>
                <col width="30%">
                <col width="30%">
                <col width="30%">
              </colgroup>
              <thead>
              <tr>
                <th scope="col" class="tl">注册日期</th>
                <th scope="col" class="tc">邀请好友</th>
                <th scope="col" class="tc">是否出借</th>
              </tr>
              </thead>
              <tbody id="dataDiv2">
              <tr v-for="item in inv2Data.user.list">
                <td>{{item.registTime | formatDate2(2)}}</td>
                <td>{{item.markName}}</td>
                <td>{{item.sumAmount > 0 ? '是':'否'}}</td>
              </tr>
              </tbody>
            </table>
            <p class="tc lineH3 db font0 fontGrey">已无更多数据</p>
          </section>
        </div>
      </section>
      <footer class="immediateInvestment wrap">
        <a @click="share" class="db tc btn_orange" href="javascript:void(0);">立即邀请赚佣金</a>
      </footer>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import {lzlh} from '../../../assets/js/native';
  import {formatNumber, formatDate2, formatDate3} from '../../../assets/js/util';

  export default {
    data() {
      return {
        inviteInfo: {},
        show2: false,
        inv2Data: {
          invNum: 0,
          sumAmt: 0,
          yesInv: 0,
          friendAmt: 0
        },
        show3: false,
        inv3Data: {
          user: [], // 邀请用户
          award: [], // 邀请奖励
          awardItem: 5, // 邀请奖励展示数目
          userItem: 5, // 邀请用户展示数目
          yesAmt: 0, // 昨日收益
          totalAmt: 0, // 累计收益
          inviteNum: 0, // 邀请总人数,
          show: 'award' // 展示类型
        },
        inv4Data: {
          user: [], // 邀请用户
          award: [], // 邀请奖励
          awardItem: 5, // 邀请奖励展示数目
          userItem: 5, // 邀请用户展示数目
          yesAmt: 0, // 昨日收益
          totalAmt: 0, // 累计收益
          inviteNum: 0, // 邀请总人数,
          show: 'award' // 展示类型
        }
      };
    },
    methods: {
      awardInfo(par) {
        switch (par) {
          case 2: // 邀请好友2.0
            this.inv2Data.show = 'award';
            break;
          case 3: // 邀请好友3.0
            this.inv3Data.show = 'award';
            break;
          case 4: // 邀请好友4.0
            this.inv4Data.show = 'award';
            break;
        }
      },
      userInfo(par) {
        switch (par) {
          case 2: // 邀请好友2.0
            this.inv2Data.show = 'user';
            break;
          case 3: // 邀请好友3.0
            this.inv3Data.show = 'user';
            break;
          case 4: // 邀请好友4.0
            this.inv4Data.show = 'user';
            break;
        }
      },
      awardMoreData(par) {
        switch (par) {
          case 2: // 邀请好友2.0
            this.inv2Data.awardItem += 5;
            break;
          case 3: // 邀请好友3.0
            this.inv3Data.awardItem += 5;
            break;
          case 4: // 邀请好友4.0
            this.inv4Data.awardItem += 5;
            break;
        }
      },
      userMoreData(par) {
        switch (par) {
          case 2: // 邀请好友2.0
            this.inv2Data.userItem += 5;
            break;
          case 3: // 邀请好友3.0
            this.inv3Data.userItem += 5;
            break;
          case 4: // 邀请好友4.0
            this.inv4Data.userItem += 5;
            break;
        }
      },
      share() { // 分享按钮
        lzlh.toShare({
          'title': '两只老虎送您588元红包，实现梦想从这里开始',
          'content': this.inviteInfo.sContent,
          'url': this.inviteInfo.sUrl,
          'pic': this.inviteInfo.sPic,
          'channel': 'all'
        })
      },
      calcuAmt(level1, level4DJQ) {
        if (level1 > 0 && level4DJQ > 0) {
          return `￥ ${formatNumber(level1, 2)} + ${formatNumber(level4DJQ, 2)}代金券`;
        } else if (level1 > 0) {
          return `￥ ${formatNumber(level1, 2)}`;
        } else if (level4DJQ > 0) {
          return ` ${formatNumber(level4DJQ, 2)}代金券`;
        }else {
          return '￥0.00';
        }
      }
    },
    created() {
      this.$http({
        method: 'post',
        url: '/api/w2/toInvite4_1',
        headers: {'token': sessionStorage.getItem('token')}
      }).then((response) => {
        // 通过返回的值进行具体的处理
        if (response.data.code === 200) {
          response.data.inv4Data.awardItem = response.data.inv4Data.userItem = 5;
          response.data.inv4Data.show = 'award';
          this.inv4Data = response.data.inv4Data;
          this.show3 = response.data.show3;
          if (this.show3 === 'true') {
            response.data.inv3Data.awardItem = response.data.inv3Data.userItem = 5;
            response.data.inv3Data.show = 'award';
            this.inv3Data = response.data.inv3Data;
            console.log(JSON.stringify(response.data.inv3Data));
          }
          this.show2 = response.data.show2;
          if (this.show2 === 'true') {
            response.data.inv2Data.show = 'award';
            this.inv2Data = response.data.inv2Data;
          }
          this.inviteInfo = response.data.inviteInfo;
        } else if (response.data.code === 403) {
          lzlh.toLogin();
        } else {
          console.log(response.data);
        }
      }).catch(function (error) {
        console.log(error);
      });
    },
    filters: {
      formatNumber: formatNumber,
      formatDate2: formatDate2,
      formatDate3: formatDate3

    }
  };
</script>

