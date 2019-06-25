<style scoped lang="less">

  .clearfix:after {
    content: ".";
    display: block;
    height: 0;
    overflow: hidden;
    clear: both;
  }

  .clearfix {
    zoom: 1;
  }

  .clearit {
    clear: both;
    height: 0;
    font-size: 0;
    overflow: hidden;
  }

  ul {
    margin: 0;
    padding: 0;
  }

  .privilegeTitle {
    width: 90%;
    margin: .44rem auto .94rem;
    height: 3.95rem;
    background: url("./title.png") no-repeat;
    -webkit-background-size: 100%;
    background-size: 100%;
    border-radius: .25rem;
    box-shadow: 0 0 .5rem #fef6ee;

    .left {
      float: left;
      font-size: .72rem;
      font-weight: bold;
      color: #ff7e3f;
      margin-top: 1rem;
      margin-left: .5rem;

      .left2 {
        font-size: .35rem;
        line-height: .5rem;
      }
    }

    img {
      margin-top: 1.5rem;
      float: right;
      width: 3.6rem;
      margin-right: .66rem;
    }
  }

  .privilegeCont1 {
    margin-left: 5%;
    line-height: .43rem;
    margin-bottom: .35rem;

    .left img {
      width: .53rem;
      float: left;
      margin-right: .5rem;
    }

    .right {
      float: left;
      width: 7.5rem;
      .desc {
        margin-top: .35rem;
        width: 7.7rem;
        color: #999999;
        font-size: .35rem;
      }
    }
    .rules {
      line-height: .52rem;
      width: 7.7rem;
      color: #999999;
      font-size: .35rem;
    }
  }
  .title {
    color: #666666;
    font-size: .43rem;
    font-weight: bold;
    margin-bottom: .4rem;
  }
</style>

<template>
  <div>
    <div class="privilegeTitle">
      <div class="left">
        <div>VIP客服</div>
        <div class="left2">VIP客服{{data.awardValue}}</div>
      </div>
      <img src="./kefu.png" alt="">
    </div>
    <div class="privilegeCont1 clearfix">
      <div class="left">
        <img src="./tab1.png" alt="">
      </div>
      <div class="right">
        <vip-form :list="data.list" :vcId="data.vcId" :awardName="data.awardName"></vip-form>
        <div class="desc">
          1、电话优先接听；
        </div>
        <div class="desc">2、微信专属客服；</div>
      </div>
    </div>
    <div class="privilegeCont1 clearfix" style="margin-bottom: .7rem;">
      <div class="left">
        <img src="./tab2.png" alt="">
      </div>
      <div class="right">
        <div class="title">规则说明</div>
        <div class="rules">
          适用于VIP5及以上会员，升级后即可尊享；
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import vipForm from '../../../../components/vipForm/vipForm';

  export default {
    data() {
      return {
        data: {}
      };
    },
    components: {
      vipForm
    },
    created() {
      let _this = this;
      this.getToken(() => {
        this.$http({
          method: 'get',
          url: '/api/w2/vipService'
        }).then(function (response) {
          // 通过返回的值进行具体的处理
          if (response.data.code === 200) {
            _this.data = response.data;
          } else if (response.data.code === 403) {
            _this.login();
          }
        })
          .catch(function (error) {
            alert(error);
          });
      });
    }
  };
</script>
