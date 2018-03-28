<style lang="less">
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

  .borBottom {
    border-bottom: 1px solid #dfdfdf;
  }

  .loginBtn {
    a.btn_orange {
      height: 1.2rem;
      line-height: 1.2rem;
      font-size: .6rem;
      width: 90%;
      margin: 1rem auto 0;
    }
  }

  .loginCont {
    margin-top: 1rem;
    height: 1.4rem;
    line-height: 1.4rem;
    div.borBottom {
      width: 90%;
      margin: 0 auto;
      color: #212121;
      p {
        font-size: .5rem;
      }
      input {
        border: none;
        height: 1.4rem;
        line-height: 1.4rem;
        font-size: 0.5rem;
        width: 60%;
      }
    }
  }
</style>
<template>
  <section class="loginCont">
    <toast :content="content"></toast>
    <input v-model="rurl" type="hidden" placeholder="请输入手机号码">
    <div class="borBottom clearfix mt20">
      <p class="fl">账户名称</p>
      <input v-model="username" class="fl pl2" type="text" placeholder="请输入手机号码">
    </div>
    <div class="borBottom clearfix">
      <p class="fl">登录密码</p>
      <input v-model="password" class="fl pl2" type="text" placeholder="请输入验证码">
    </div>
    <div class="loginBtn">
      <a v-on:click="toLogin" class="db tc btn_login borRadius btn_orange" href="javascript:void(0);">登录</a>
      <p class="or"></p>
    </div>
  </section>
</template>

<script type="text/ecmascript-6">
  import '../../../../assets/css/style_touch.css';
  import toast from '../pop/toast/toast1';

  export default {
    data: function () {
      return {
        rurl: '',
        username: '18201048003',
        password: 'twotiger',
        content: ''
      };
    },
    methods: {
      toLogin() {
        var _this = this;
        this.$http.get('/api/user/ajaxLogin', {
          params: {
            rurl: this.rurl,
            username: this.username,
            password: this.password
          }
        })
          .then(function (response) {
            window.userStatus = 'login';
            let value = sessionStorage.getItem('rurl');
            if (value === null) {
              _this.content = response.data.msg;
              _this.clearCont(_this);
            } else {
              window.location.href = value;
            };
          })
          .catch(function (error) {
            console.log(error);
            _this.content = error.data.msg;
            _this.clearCont(_this);
          });
      },
      clearCont(_this) {
        setTimeout(function () {
          _this.content = '';
        }, 1500);
      }
    },
    components: {
      'toast': toast
    }
  };
</script>

