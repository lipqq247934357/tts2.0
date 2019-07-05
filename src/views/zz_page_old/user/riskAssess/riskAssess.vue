<style>

  body {
    background: #f5f5f9;
  }

  /*风险测评*/
  .riskAssessment {
    width: 92%;
    margin: 0 auto;
  }

  .riskAssessment ul li {
    padding: 0.8rem 4%;
    border-bottom: 1px solid #f2f0f0;
    font-size: 0.8rem;
    color: #999;
    line-height: 1.2rem;
    margin-top: -1px
  }

  .riskAssessment ul li.liQuestion {
    font-size: 0.9rem;
    color: #181818;
    line-height: 1.4rem;
  }

  .riskAssessment ul li.checkAns {
    background: #fff4eb;
    border-bottom: 1px solid #fff4eb;
    color: #fe953c;
  }

  .riskAssessment a.submitTest {
    width: 100%;
    height: 2.6rem;
    line-height: 2.6rem;
    font-size: 1rem;
    color: #fff;
    background: -webkit-linear-gradient(top, #f08228, #ff9138);
  }

  .riskAssessment .changeTopic a {
    line-height: 2.4rem;
    font-size: 0.8rem;
    color: #fe953c;
  }

  .ansProgress {
    width: 92%;
    height: 0.2rem;
    background-color: #f1e2d6;
    margin: 2rem auto 1.6rem;
  }

  .ansProgress .progress-bar {
    float: left;
    width: 0;
    height: 0.2rem;
    background-color: #f4ddc6;
  }

  .ansProgress .progress-bar-success {
    background-color: #ff8200
  }

  .ansProgress .progress-bar-success .progress-point {
    width: 0.6rem;
    height: 0.6rem;
    background: #fe953c;
    right: -0.5rem;
    top: -0.25rem;
  }

  .questionNum {
    top: -1rem;
    color: #999;
    font-size: 0.7rem;
    right: 0
  }

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

</style>
<template>
  <div v-if="list !== null">
    <!-- 进度条-->
    <div class="ansProgress">
      <div class="progress-bar progress-bar-success pr" :style="wid">
        <div class="pa progress-point borRadius0">
          <p class="pa questionNum">{{pos + 1}}/{{list.length}}</p>
        </div>
      </div>
    </div>
    <!-- 问题-->
    <section class="riskAssessment">
      <ul v-for="(item,idx) in list" class="whiteBg borRadius5 question" v-if="idx === pos">
        <li class="liQuestion">{{item.content}}</li>
        <li @click="page(index,$event)" v-for="(opts,index) in item.options"
            :class="{checkAns:opts.score === array2[idx]}">{{opts.content}}
        </li>
      </ul>
      <div class="clearfix changeTopic">
        <a @click="page('prev')" class="fl prev" href="javascript:void(0);"
           :class="{hide: !prevShow}">上一题</a>
        <a @click="page('next')" class="fr next" href="javascript:void(0);"
           :class="{hide: !nextShow}">下一题</a>
      </div>
      <!-- 默认是“下一题”，最后一题的时候变成“提交测试”-->
      <a @click="submit" class="submitTest db tc borRadius5 submit" href="javascript:void(0);"
         v-show="submitShow">提交测试</a>
    </section>
    <div class="to-top">
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import {lzlh} from '../../../assets/js/native';

  export default {
    data: function () {
      return {
        array: [],
        array2: [],
        pos: 0,
        list: null
      };
    },
    computed: {
      wid() {
        return 'width:' + ((this.pos + 1) / this.list.length * 100) + '%';
      },
      prevShow() {
        return this.pos > 0;
      },
      nextShow() {
        return this.pos < this.list.length - 1 && this.array[this.pos] !== undefined;
      },
      submitShow() {
        return this.pos === this.list.length - 1 && this.array.length === this.list.length;
      }
    },
    methods: {
      page(par, event) {
        if (event !== undefined) {
          let score = this.list[this.pos].options[par].score;
          this.$set(this.array2, this.pos, score);
          setTimeout(() => {
            // 赋值
            this.$set(this.array, this.pos, score);
            this.pos !== this.list.length - 1 && (this.pos = this.pos + 1);
          }, 230);
        } else if (par === 'prev') {
          this.pos = this.pos - 1;
        } else {
          this.pos = this.pos + 1;
        }
      },
      submit() {
        let sum = 0;
        for (let i = 0; i < this.array.length; i++) {
          sum += this.array[i];
        }
        this.$http({
          method: 'post',
          url: '/api/w2/ajaxCalRiskAssess4JSON',
          params: {sum}
        }).then((response) => {
          // 通过返回的值进行具体的处理
          if (response.data.code === 200) { // 题目信息
            this.$router.push({path: 'result'});
          } else if (response.data.code === 301) { // 参数异常
            window.reload();
          } else if (response.data.code === 403) {
            lzlh.toLogin();
          }
        })
          .catch(function (error) {
            console.log(error);
          });
      }
    },
    created() {
      let retest = window.retest;
      window.retest = null;
      this.$http({
        method: 'post',
        url: '/api/w2/riskAssess4JSON',
        params: {
          retest: retest
        }
      }).then((response) => {
        // 通过返回的值进行具体的处理
        if (response.data.code === 200) { // 题目信息
          this.list = response.data.topics;
        } else if (response.data.code === 201) { // 测试过并且没有重新测试的标识
          this.$router.push({path: 'result'});
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

