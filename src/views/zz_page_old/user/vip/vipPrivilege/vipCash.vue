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

      .title {
        color: #666666;
        font-size: .43rem;
        font-weight: bold;
        margin-bottom: .4rem;
      }
      ul {
        font-size: .34rem;
        border: 1px solid #eee;
      }
      li:first-child {
        background: #ffcbb2;
        color: #333;
      }

      li {
        list-style: none outside none;
        color: #666;
        border-bottom: 1px solid #eee;
        line-height: .85rem;
        span:first-child {
          float: left;
          display: block;
          width: 30%;
          text-align: center;
          border-right: 1px solid #eee;
        }
        span:nth-child(2) {
          display: block;
          float: left;
          width: 68%;
          text-align: center;
        }
      }
    }
    .desc {
      margin-top: .35rem;
      width: 7.7rem;
      color: #999999;
      font-size: .35rem;
    }
    .rules {
      line-height: .52rem;
      width: 7.7rem;
      color: #999999;
      font-size: .35rem;
    }
  }
</style>

<template>
  <div>
    <div class="privilegeTitle">
      <div class="left">
        <div>免费提现</div>
        <div class="left2">免费提现5次</div>
      </div>
      <img src="./packet.png" alt="">
    </div>
    <div class="privilegeCont1 clearfix">
      <div class="left">
        <img src="./tab1.png" alt="">
      </div>
      <div class="right">
        <div class="title">特权说明</div>
        <ul>
          <li class="clearfix">
            <span>会员等级</span>
            <span>免费提现次数</span>
          </li>
          <li class="clearfix">
            <span>普通用户</span>
            <span>0次</span>
          </li>
          <li class="clearfix">
            <span>VIP1</span>
            <span>2次</span>
          </li>
          <li class="clearfix">
            <span>VIP2</span>
            <span>3次</span>
          </li>
          <li class="clearfix">
            <span>VIP3</span>
            <span>5次</span>
          </li>
          <li class="clearfix">
            <span>VIP4</span>
            <span>8次</span>
          </li>
          <li class="clearfix curUser">
            <span>VIP5</span>
            <span>无限制</span>
          </li>
          <li class="clearfix">
            <span>VIP6</span>
            <span>无限制</span>
          </li>
          <li class="clearfix">
            <span>VIP7</span>
            <span>无限制</span>
          </li>
        </ul>
        <div class="desc">
          生日礼包是两只老虎对会员生日的感恩回馈。凡是会员生日当天，两只老虎会送出一个生日红包。
        </div>
      </div>
    </div>
    <div class="privilegeCont1">
      <div class="left">
        <img src="./tab2.png" alt="">
      </div>
      <div class="right">
        <div class="title">规则说明</div>
        <div class="rules">
          1、适用于两只老虎所有的会员；
        </div>
        <div class="rules">
          2、会员等级越高，免费提现次数越多；
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import privilegeForm from '../../../../components/vipForm/vipForm';

  export default {
    components: {
      privilegeForm
    },
    created() {
      let _this = this;
      this.getToken(() => {
        this.$http({
          method: 'get',
          url: '/api/touch4/vip/vipCash'
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
