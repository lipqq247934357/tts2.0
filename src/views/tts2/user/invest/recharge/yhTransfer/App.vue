<style lang="less">
  .yhTransferTop {
    height: 3.8rem;
    padding-left: 8%;
    margin-right: 4%;
    border-bottom: 1px solid #6ab6f3;
    dl {
      dt {
        width: 7.5rem;
        height: 2.4rem;
        margin-top: 0.7rem;
        img {
          width: 100%;
        }
      }
      dd {
        margin: 0.8rem 0 0 2rem;
        p {
          font-size: 0.9rem;
        }
        span {
          font-size: 0.6rem;
        }
      }
    }
  }

  .yhTransferCen ul li {
    border-bottom: 1px solid #eee;
    padding: 0 4% 0 8%;
    height: 3.4rem;
    dl {
      margin-top: 0.8rem;
      width: 30%;
      dt {
        font-size: 0.75rem;
        color: #666;
        line-height: 1rem;
      }
      dd {
        font-size: 0.6rem;
        color: #666;
        line-height: 0.8rem;
      }
    }
    p {
      font-size: 0.85rem;
      color: #333;
      font-weight: bold;
      line-height: 3.4rem;
    }
    a {
      font-size: 0.75rem;
      color: #4d94ff;
      line-height: 3.4rem;
    }
  }

  .yhTransferFoot {
    padding: 2rem 0 0.8rem;
    height: 1.4rem;
    overflow: hidden;
    & > div {
      float: left;
      position: relative;
      left: 50%;
      p {
        float: left;
        position: relative;
        left: -50%;
        background: url("../img/jxLogo.png") left center no-repeat;
        padding-left: 1.4rem;
        background-size: 1rem 0.9rem;
        font-size: 0.8rem;
        color: #999;
      }
    }
  }

  .yhTransferCen1 p {
    margin-top: 1rem;
    font-size: 0.7rem;
    line-height: 1.2rem;
    color: #999;
    padding: 0 5% 0 8%;
    em {
      width: 5%;
      font-style: normal;
    }
    span {
      width: 95%
    }
  }

</style>
<template>
  <section class="mt05 whiteBg">
    <section class="yhTransferTop">
      <dl class="clearfix">
        <dt class="fl">
          <img src="../img/jx.png">
        </dt>
        <dd class="fl">
          <p>转账信息</p>
          <span class="db">Account Information</span>
        </dd>
      </dl>
    </section>
    <section class="yhTransferCen">
      <ul>
        <li class="clearfix">
          <dl class="fl">
            <dt>收款方户名</dt>
            <dd>Account Name</dd>
          </dl>
          <p class="fl">{{data.name}}</p>
        </li>
        <li class="clearfix">
          <dl class="fl">
            <dt>收款方账户</dt>
            <dd>Account Number</dd>
          </dl>
          <p class="fl">{{data.jxId}}</p>
          <a @click="copy" class="fr" href="javascript:;">复制</a>
        </li>
        <li class="clearfix">
          <dl class="fl">
            <dt>收款方银行</dt>
            <dd>Account Bank</dd>
          </dl>
          <p class="fl">江西银行</p>
        </li>
        <li class="clearfix">
          <dl class="fl">
            <dt>收款方开户分行</dt>
            <dd>Bank Of Deposit</dd>
          </dl>
          <p class="fl">江西银行股份有限公司或南昌银行</p>
        </li>
      </ul>
    </section>
    <section class="yhTransferCen1">
      <p class="clearfix"><em class="db fl">1、</em><span class="db fl">转账方式包括：银行柜台转账、网银转账、手机银行转
                账、ATM转账；</span></p>
      <p class="clearfix"><em class="db fl">2、</em><span class="db fl">在向电子银行转账时，必须为银行借记卡，平台暂不支持存折、信用卡转账；</span></p>
      <p class="clearfix"><em class="db fl">3、</em><span class="db fl">根据银行收费标准，在转账过程中可能会收取费用。平台目前不收取任何手续费；</span></p>
      <p class="clearfix"><em class="db fl">4、</em><span class="db fl">根据银行收费标准，在转账过程中可能会收取费用。平台目前不收取任何手续费；</span></p>
      <p class="clearfix"><em class="db fl">5、</em><span class="db fl">通过ATM机转账，要24小时候才能到账；</span></p>
      <p class="clearfix"><em class="db fl">6、</em><span class="db fl">一天内转账超过5万元，必须使用Key、密码器或者令牌；</span></p>
      <p class="clearfix"><em class="db fl">7、</em><span class="db fl">个人转账一天内超过30万，公司超过100万，会收到银行提醒，确认之后转账才能成功；</span>
      </p>
    </section>
    <footer class="yhTransferFoot whiteBg pr">
      <div>
        <p>账户资金由江西银行存管</p>
      </div>
    </footer>
  </section>
</template>

<script type="text/ecmascript-6">
  import '../../../../../assets/css/style_touch.css';
  import {nt} from '../../../../../assets/js/native';

  export default {
    data() {
      return {
        data: {}
      };
    },
    created() {
      this.$http({
        method: 'get',
        url: '/api/w2/bankRecharge',
        headers: {'token': sessionStorage.getItem('token')}
      }).then((response) => {
        // 通过返回的值进行具体的处理
        if (response.data.code === 200) {
          this.data = response.data;
        }
      })
        .catch(function (error) {
          console.log(error);
        });
    },
    methods: {
      copy() {
        nt.toCopy({'content': this.data.jxId});
      }
    }
  }
</script>

