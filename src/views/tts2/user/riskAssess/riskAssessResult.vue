<style>
  .testResultCont {
    box-shadow: 0px 0px 20px 0px rgb(207, 207, 207);
  }

  .testResultTop {
    background: -webkit-linear-gradient(top, rgba(248, 174, 47, 0.5), rgba(253, 152, 58, 0.5));
    height: 9rem;
    border-radius: 5px 5px 0 0;
    -webkit-border-radius: 5px 5px 0 0;
    -moz-border-radius: 5px 5px 0 0;
    -o-border-radius: 5px 5px 0 0;
  }

  .testResult {
    width: 92%;
    margin: 0 auto;
  }

  .resultLeft {
    width: 42%;
    padding-left: 8%;
    height: 9rem;
    background: url("./img/left.png") 40% 70% no-repeat;
    background-size: 60%
  }

  .resultLeft p {
    font-size: 1rem;
    color: #fff;
    margin-top: 3rem;
  }

  .resultLeft h6 {
    font-size: 2rem;
    color: #fff;
  }

  .resultRight {
    width: 47%;
    height: 9rem;
  }

  .resultRight img {
    width: 10rem;
    bottom: 0;
    right: 3%
  }

  .testResultBot {
    padding: 1.5rem;
    font-size: 0.9rem;
    line-height: 1.6rem;
  }

  .testResult p.testAgree {
    font-size: 0.8rem;
    color: #999;
    text-indent: 2rem;
    line-height: 1.4rem;
  }

  .testResult p.testAgree a {
    color: #fe953c
  }

  .testResultFoot {
    bottom: 0
  }

  .testResultFoot img {
    width: 100%;
  }

  .testGoInvest {
    width: 100%;
    height: 2.6rem;
    line-height: 2.6rem;
    font-size: 1rem;
    color: #fff;
    background: -webkit-linear-gradient(top, #f08228, #ff9138);
  }

</style>
<template>
  <div v-if="title !== ''" class="testResult">
    <section class="whiteBg testResultCont mt2 borRadius5">
      <div class="testResultTop">
        <div class="resultLeft fl">
          <p>您的出借风格：</p>
          <h6>{{title}}</h6>
        </div>
        <div class="resultRight fr pr">
          <img class="db pa" src="./img/wjx.png">
        </div>
      </div>
      <div class="testResultBot">
        <p>{{content}}</p>
      </div>
    </section>
    <a v-if="isClose" @click="closeWindow" class="testGoInvest db tc borRadius5 mt2" href="javascript:void(0);">完成</a>
    <a v-else @click="toInvest" class="testGoInvest db tc borRadius5 mt2" href="javascript:void(0);">去出借</a>
    <p class="testAgree mt15">建议您至少每年或者当您的状况有任何重大转变时，对您的风险承受能力重新测试，以确保您的出借决定与您对风险所持的态度一致。
      <a @click="reset" href="javascript:void(0);">重新测试 &gt;&gt;</a></p>
  </div>
</template>

<script type="text/ecmascript-6">
  import {nt, lzlh} from '../../../assets/js/native';

  export default {
    data() {
      return {
        title: '',
        content: '',
        isClose: false
      };
    },
    methods: {
      toInvest() {
        lzlh.toProList();
      },
      reset() {
        window.retest = true;
        this.$router.push({path: '/'});
      },
      closeWindow() {
        nt.toCloseWindow();
      }
    },
    created() {
      this.$http({
        method: 'post',
        url: '/api/w2/riskAssessResult4JSON'
      }).then((response) => {
        // 通过返回的值进行具体的处理
        if (response.data.code === 200) { // 题目信息
          this.title = response.data.AEtitle;
          this.content = response.data.content;
        } else if (response.data.code === 201) { // 测试过并且没有重新测试的标识
          this.$router.push({path: ''});
        } else if (response.data.code === 403) { // 未登录
          lzlh.toLogin();
        }
      })
        .catch(function (error) {
          console.log(error);
        });
      this.isClose = window.close_riskAssess;
    },
  };
</script>

