<style lang="less">
  .rechargeDec {
    border: 1px solid #e5e5e5;
  }

  .rechargeDec thead tr th, .rechargeDec tbody tr td {
    text-align: center;
    border-bottom: 1px solid #e5e5e5;
    border-right: 1px solid #e5e5e5;
    font-weight: normal;
    color: #212121;
    line-height: 1.4rem;
    padding: 0.5rem 0;
  }

  .rechargeDec thead {
    background: #fff2e5;
  }

  .presentDec {
    width: 90%;
    padding: 0.5rem 5%;
  }

</style>
<template>
  <section class="presentDec lineH2 font0">
    <p>1、充值金额1元起，全程免手续费；</p>
    <p>2、为了保障用户的资金安全，电子账户交易依然采用同卡进出设置，一个账户仅限绑定一张银行卡；</p>
    <table cellspacing="0" cellpadding="0" border="0" class="rechargeDec mt0 mb1">
      <colgroup>
        <col width="25%">
        <col width="25%">
        <col width="25%">
        <col width="40%">
      </colgroup>
      <thead>
      <tr>
        <th scope="col">银行</th>
        <th scope="col">单笔限额</th>
        <th scope="col">每日限额</th>
        <th scope="col">无卡支付</th>
      </tr>
      </thead>
      <tbody>

      <tr v-for="item in data.bank">
        <td>{{ item.name }}</td>
        <td>{{ item.orderLimit }}万</td>
        <td>{{ item.dayLimit }}万</td>
        <td v-if=" item.isNoCardPay === 0">不需要</td>
        <td v-else style="color:red;">需要</td>
      </tr>
      </tbody>
    </table>
    <p style="word-break: break-all; word-wrap: break-word;">
      备注：<br/>
      1、部分银行需要开通无卡支付业务，请先用电脑登录https://www.95516.com/static/union/pages/card/openFirst.html?entry=openPay开通，否则将出现支付失败的情况
    </p>
    <p>2、有任何疑问请联系客服：400-990-3337</p>
  </section>
</template>

<script type="text/ecmascript-6">
  import '../../../../../assets/css/style_touch.css';

  export default {
    data() {
      return {
        data: {}
      };
    },
    created() {
      this.$http({
        method: 'get',
        url: '/api/w2/rechargeDesc',
      }).then((response) => {
        // 通过返回的值进行具体的处理
        if (response.data.code === 200) {
          this.data = response.data;
        }
      }).catch(function (error) {
        console.log(error);
      });
    }
  }
</script>

