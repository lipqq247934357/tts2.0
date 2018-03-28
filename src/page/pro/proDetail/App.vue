<style lang="less">
  html, body {
    height: 100%;
  }

  .wrap {
    min-height: 100%;
  }

  .mt05 {
    margin-top: 0.5rem !important;
  }

  .pb4 {
    padding-bottom: 4rem !important;
  }

  .borderBottom {
    border-bottom: 1px solid #eeeeee;
  }

  .projectDetailsTab {
    padding: 0 5%;
    height: 2.8rem;
  }

  .projectDetailsTab ul li, .rechargeTab ul li {
    float: left;
    line-height: 2.9rem;
    width: 25%;
    text-align: center;
    font-size: 0.8rem;
    color: #333;
    tap-highlight-color: rgba(0, 0, 0, 0);
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }

  .projectDetailsTab ul li.active, .rechargeTab ul li.active, .couponTab ul li.active, .currentTab ul li.active {
    color: #ff7e3f;
    font-weight: bold;
    tap-highlight-color: rgba(0, 0, 0, 0);
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }

  .projectDetailsFoot {
    bottom: 0;
    height: 3rem;
    line-height: 3rem;
  }

  .projectDetailsFoot p {
    width: 57%;
    padding-left: 8%;
    font-size: 0.9rem;
    color: #333;
  }

  .projectDetailsFoot a {
    width: 35%;
    font-size: 1rem;
    background: #ff7e3f;
    color: #fff;
  }

  .projectInfo h6 {
    line-height: 2.9rem;
    font-size: 0.9rem;
    padding-left: 8%;
    font-weight: normal;
  }

  .projectInfo .infoCont {
    padding: 0.8rem 8% 0.5rem;
  }

  .projectInfo .infoCont p {
    line-height: 1.2rem;
    font-size: 0.8rem;
    color: #333;
    margin-bottom: 0.3rem;
  }

  .projectInfo .infoCont p em {
    width: 5%;
  }

  .projectInfo .infoCont p span {
    width: 95%
  }

  .overViewCont, .projectAuth {
    padding-left: 8%;
  }

  .overViewCont ul li {
    border-bottom: 1px solid #eee;
    line-height: 1.6rem;
    font-size: 0.8rem;
    padding: .6rem 1.5rem .6rem 0;
  }

  .projectAuth ul li img {
    width: 1rem;
    margin-right: 0.5rem;
    height: 1.1rem;
    margin-top: 0.85rem;
  }

  .overViewCont ul li p {
    color: #999;
    min-width: 18%;
    margin-right: 0.5rem;
  }

  .overViewCont ul li span {
    line-height: 1.6rem;
  }

  .overViewCont ul li a {
    margin-left: 1rem;
  }

  .projectAuth ul li a {
    width: 97%;
    height: 2.8rem;
  }

  .projectAuth ul li a p {
    color: #333;
  }

  .projectAuth ul li a, .commonProblem ul li a {
    background: url("./img/rightArrow.png") no-repeat center right;
    background-size: 0.4rem 0.74rem;
  }

  .projectAuth ul li {
    border-bottom: 1px solid #eee;
    line-height: 2.9rem;
    font-size: 0.8rem;
  }

  .projectAuth ul li:last-child {
    border-bottom: none;
  }

  .repaymentPlanCont ul.ulHead, .investRecordCont ul.ulHead {
    padding-left: 8%;
    line-height: 2.8rem;
  }

  .repaymentPlanCont ul.ulHead li, .investRecordCont ul.ulHead li {
    float: left;
    text-align: left;
    font-size: 0.8rem;
    color: #999;
  }

  .repaymentPlanCont ul.ulHead li:nth-child(1), .repaymentPlanCont ul.ulHead li:nth-child(2),
  .repaymentPlanList ul li span:nth-child(1), .repaymentPlanList ul li span:nth-child(2),
  .investRecordCont ul.ulHead li:nth-child(2), .investRecordCont ul.ulHead li:nth-child(3),
  .investRecordList ul li span:nth-child(2), .investRecordList ul li span:nth-child(3) {
    width: 35%;
    height: 2.8rem;
  }

  .investRecordCont ul.ulHead li:nth-child(1), .investRecordList ul li span:nth-child(1) {
    width: 30%;
  }

  .loanRecordList ul.ulHead li:nth-child(1), .loanRecordList ul.ulHead li:nth-child(2),
  .loanRecordInfo ul li span:nth-child(1), .loanRecordInfo ul li span:nth-child(2) {
    width: 15%;
    text-align: left;
  }

  .loanRecordList ul.ulHead li:nth-child(3), .loanRecordInfo ul li span:nth-child(3) {
    width: 40%;
    text-align: center;
  }

  .loanRecordList ul.ulHead li:nth-child(4), .loanRecordInfo ul li span:nth-child(4) {
    width: 30%;
    text-align: center;
  }

  .repaymentPlanList, .investRecordList {
    padding-left: 8%;
  }

  .repaymentPlanList ul li, .investRecordList ul li {
    border-bottom: 1px solid #eee;
    line-height: 2.8rem;
    font-size: 0.8rem;
    color: #333;
  }

  .investRecord ul li {
    padding: 0 2% 0 8%;
    font-size: 0.8rem;
    line-height: 2.8rem;
  }

  .investRecord ul li span em {
    color: #999;
    margin-left: 0.2rem;
  }

  .noRecord {
    padding: 10rem 0;
  }

  .noRecord img {
    width: 8rem;
    margin: 0 auto;
  }

  .noRecord p {
    font-size: 0.8rem;
    color: #999;
    margin-top: 1rem;
  }
</style>

<template>
  <div class="wrap greyBg">
    <nav class="projectDetailsTab whiteBg">
      <ul class="clearfix">
        <li v-bind:class="c.selected?'active':''"
            v-for="(c,index) in cells"
            v-on:click="choose(index)">{{c.key}}
        </li>
      </ul>
    </nav>
    <section v-if="cells[0].selected && this.list !== []" class="pb4 mt05">
      <section class="projectInfo whiteBg mt05" v-for="item in list.groups">
        <h6 class="borderBottom">{{item}}</h6>
        <div class="overViewCont">
          <ul>
            <li class="clearfix" v-for="t in list.fileds[item]" v-if="t.val !== null">
              <p class="fl">{{t.key}}</p><span class="db fl">{{t.val}}</span>
            </li>
          </ul>
        </div>
      </section>

      <section class="projectInfo whiteBg mt05">
        <h6 class="borderBottom">项目简介</h6>
        <div class="infoCont">
          <p>{{description}}</p>
        </div>
      </section>
      <section v-if="list.extendList !==undefined && list.extendList.length !== 0" class="projectInfo whiteBg mt05">
        <h6 class="borderBottom">认证信息</h6>
        <div class="projectAuth">
          <ul>
            <li v-for="item in list.extendList" class="clearfix baguetteBoxOne">
              <a v-for="item2 in item.certPicList" class="db" :href="item2.url">
                <img class="fl db" :src="item.icon  || item.pIcon" alt="">
                <p class="fl fontBlack">{{item.typeName}}</p>
              </a>
            </li>
          </ul>
        </div>
      </section>
    </section>

    <!--保障信息-->
    <section v-if="cells[1].selected" class="pb4 mt05">
      <section v-for="item in list2.riskGroups">
        <section class="projectInfo whiteBg" v-for="x in list2.riskFileds[item]">
          <h6 class="borderBottom">{{x.key}}</h6>
          <div class="infoCont">
            <p class="clearfix" v-html="x.val"></p>
          </div>
        </section>
      </section>
    </section>
    <!--还款计划-->
    <section v-if="cells[2].selected" class="mt05 pb4">
      <section v-if="list3.repaymentList.length === 0" class="whiteBg noRecord">
        <img class="db" src="./img/wujilu.png">
        <p class="tc">我的天，一个记录都没有？</p>
      </section>
      <section v-else class="whiteBg repaymentPlanCont">
        <ul class="borderBottom ulHead clearfix">
          <li>还款时间</li>
          <li>还款金额(元)</li>
          <li>还款状态</li>
        </ul>
        <div class="repaymentPlanList whiteBg">
          <ul>
            <li class="clearfix" v-for="item in list3.repaymentList">
              <template v-if="item.status==41||item.status==51||item.status==62">
                <span class="db fl tl">{{item.realTime|dateFormat}}</span>
                <span class="db fl tl">{{(item.realCapital+item.realInterest)|moneyFormat}}</span>
              </template>
              <template v-else>
                <span class="db fl tl">{{item.oughtedTime|dateFormat}}</span>
                <span class="db fl tl">{{(item.capital+item.interest)|moneyFormat}}</span>
              </template>

              <span class="db fl tl">{{item.statusName}}</span>
            </li>
          </ul>
        </div>
      </section>
    </section>
    <!--投资记录-->
    <section v-if="cells[3].selected" class="pb4 mt05">
      <template v-if="list4.investList.length==0">
        <section class="whiteBg noRecord">
          <img class="db" src="./img/wujilu.png">
          <p class="tc">我的天，一个记录都没有？</p>
        </section>
      </template>
      <template v-else>
        <div class="investRecord whiteBg">
          <ul>
            <li class="clearfix borderBottom"><p class="fl">参与人数</p><span class="db fr">{{list4.investCount}}<em>人</em></span>
            </li>
            <li class="clearfix borderBottom"><p class="fl">出借总额</p><span class="db fr">{{list4.investAmount|moneyFormat}}<em>元</em></span>
            </li>
          </ul>
        </div>
        <div class="investRecordCont whiteBg">
          <ul class="borderBottom ulHead clearfix">
            <li>出借人</li>
            <li>出借金额(元)</li>
            <li>出借时间</li>
          </ul>
          <div class="investRecordList ">
            <ul>
              <li class="clearfix" v-for="item in list4.investList">
                <span class="db fl tl">{{item.customerName}}</span>
                <span class="db fl tl">{{item.amount|moneyFormat}}</span>
                <span class="db fl tl">{{item.ctime|dateFormat}}</span>
              </li>
            </ul>
          </div>
        </div>
      </template>

    </section>
    <!-- <footer class="projectDetailsFoot clearfix pf wrap whiteBg">
     <p class="fl borderTop">剩余可投：29,186.78元</p>
     <a class="db fr tc">立即投资</a>
   </footer>-->
  </div>
</template>
<script type="text/ecmascript-6">
  import {urlParse} from '../../../assets/js/util';
  import '../../../assets/css/plugin/baguetteBox.css';
  import baguetteBox from 'baguettebox.js';
  import '../../../assets/css/style_touch.css';

  export default {
    data: function () {
      return {
        description: "",
        projectId: -1,
        proType: 'xmgk',
        list: [],
        list2: [],
        list3: [],
        list4: [],
        cells: [
          {num: '0', selected: true, key: "项目概况"},
          {num: '1', selected: false, key: "保障信息"},
          {num: '2', selected: false, key: "还款计划"},
          {num: '3', selected: false, key: "投资记录"}

        ]
      }
    },
    methods: {
      choose: function (index) {
        for (let i = 0, len = this.cells.length; i < len; i++) {
          this.cells[i].selected = false;
        }
        this.cells[index].selected = true;
      },
    },
    created: function () {
      let obj = urlParse();
      this.projectId = obj.projectId;
      this.proType = obj.proType;
      this.$http({
        method: 'post',
        url: `/api/w2/proDetailHtml?projectId=${this.projectId}&proType=xmgk&isAjax=true`
      }).then((response) => {
        this.list = response.data;
        this.description = response.data.description;
        setTimeout(() => {
          baguetteBox.run('.baguetteBoxOne');
        }, 100)
      }).catch((error) => {
        console.log(error);
      });
      this.$http({
        method: 'post',
        url: `/api/w2/proDetailHtml?projectId=${this.projectId}&proType=bxbz&isAjax=true`
      }).then((response) => {
        this.list2 = response.data;
      }).catch((error) => {
        console.log(error);
      });
      this.$http({
        method: 'post',
        url: `/api/w2/proDetailHtml?projectId=${this.projectId}&proType=hkjh&isAjax=true`
      }).then((response) => {
        this.list3 = response.data;
      }).catch((error) => {
        console.log(error);
      });
      this.$http({
        method: 'post',
        url: `/api/w2/proDetailHtml?projectId=${this.projectId}&proType=tzjl&isAjax=true`
      }).then((response) => {
        this.list4 = response.data;
      }).catch((error) => {
        console.log(error);
      });
    }
  }
</script>

