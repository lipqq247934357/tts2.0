<style lang="less">

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

  .borderBottom {
    border-bottom: 1px solid #eeeeee;
  }

  .mt05 {
    margin-top: 0.5rem !important;
  }

  em {
    font-style: normal;
  }

  body {
    background: #f2f3f4;
  }

  .overViewCont, .projectAuth {
    padding-left: 8%;
  }

  .overViewCont ul li, .projectAuth ul li {
    border-bottom: 1px solid #eee;
    line-height: 2.8rem;
    font-size: 0.8rem;
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
  <div>
    <section class="pb4" name="intoList">
      <section class="currentTransferList">
        <div class="investRecord whiteBg mt05">
          <ul>
            <li class="clearfix borderBottom"><p class="fl">参与人数</p><span class="db fr">{{investCount}}<em>人</em></span>
            </li>
            <li class="clearfix borderBottom"><p class="fl">转入总额</p><span
              class="db fr">{{investAmount}}<em>元</em></span></li>
          </ul>
        </div>
        <div class="investRecordCont whiteBg mt05">
          <ul class="borderBottom ulHead clearfix">
            <li>出借人</li>
            <li>出借金额(元)</li>
            <li>出借时间</li>
          </ul>
          <div class="investRecordList ">
            <ul>
              <li v-for="item in list" class="clearfix">
                <span class="db fl tl">{{item.customerName}}</span>
                <span class="db fl tl">{{item.amount}}</span>
                <span class="db fl tl">{{item.ctime}}</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </section>
    <footer v-if="!isApp && false" class="hqChangeintoFoot wrap pf tc" style="background:#ff7e3f;">
      <a @click="toIn" href="javascript:void(0);" calss="db">立即转入</a>
    </footer>
  </div>
</template>

<script type="text/ecmascript-6">
  import {formatDate2, formatNumber} from '../../../assets/js/util';
  import mixin from '../../../components/common/mixin';

  export default {
    mixins: [mixin],
    data() {
      return {
        investCount: 0,
        investAmount: 0,
        list: []
      };
    },
    created() {
      this.$http({
        method: 'post',
        url: '/api/w2/proXRecord4JSON'
      }).then((response) => {
        response.data.investList.forEach(function (item, index) {
          response.data.investList[index].ctime = formatDate2(item.ctime);
          response.data.investList[index].amount = formatNumber(item.amount);
        });
        this.investCount = response.data.investCount;
        this.investAmount = formatNumber(response.data.investAmount);
        this.list = response.data.investList;
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
