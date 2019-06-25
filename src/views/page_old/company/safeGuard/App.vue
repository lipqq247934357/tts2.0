<style lang="less">
  body, html, .content {
    width: 100%;
    height: 100%;
    max-width: 640px;
    margin: 0 auto;
    background: url("./img/bg.png") repeat !important;
  }

  .swiper-container {
    height: 100%;
  }

  .swiper-slide {
    background: url("./img/bg2.png") no-repeat;
    background-size: 100% auto;
  }

  .banner {
    width: 100%;
  }

  .swiper-slide1 img.cont {
    width: 80%;
    margin: -11% auto 0;
  }

  .swiper-slide2 img.cont {
    width: 85%;
    margin: 0 auto;
  }

  .swiper-slide1 p {
    color: #fff;
    width: 77%;
    margin: 1rem auto 0;
    font-size: .85rem;
    text-indent: 2rem;
    line-height: 1.4rem;
  }

  .swiper-slide2 p {
    color: #fff;
    margin: -2rem auto 1rem;
    font-size: 1rem;
  }

  .swiper-slide3 h6 {
    color: #fff;
    margin: -32% auto 3rem;
    font-size: 1.2rem;
  }

  .swiper-slide3 dl {
    background: #fff;
    width: 84%;
    margin: .5rem auto 0;
    padding: .5rem 3%;
  }

  .swiper-slide3 dl dd {
    font-size: .85rem;
    color: #666;
    margin-top: .2rem;
  }

  .swiper-slide3 dl dt {
    font-size: .85rem;
    color: #333;
    line-height: 1.2rem;
  }

  .swiper-slide3 dl dt span {
    font-size: 1rem;
    color: #ff7e3f;
    margin-right: .5rem;
  }

  .swiper-slide4 dl {
    margin: 0 0 1.5rem 8%;
  }

  .swiper-slide4 dl dt img {
    width: 2rem;
    height: 2.1rem;
  }

  .swiper-slide4 dl dd {
    line-height: 2.1rem;
    font-size: .85rem;
    color: #fff;
    margin-left: .8rem;
  }

  .swiper-slide5 p {
    line-height: 3rem;
    font-size: .9rem;
    color: #fff;
  }

  .swiper-slide5 section {
    margin-top: -28%;
  }

  .swiper-slide5 ul, .swiper-slide6 ul {
    margin: 0 auto;
    width: 92%;
  }

  .swiper-slide5 ul.ul1 li {
    float: left;
    margin: 0 1.1%;
    width: 31%;
  }

  .swiper-slide5 ul.ul2 li, .swiper-slide6 ul li {
    width: 48%;
  }

  .swiper-slide5 ul li img, .swiper-slide6 ul li img {
    width: 100%;
  }

  .swiper-slide6 section {
    top: 20%;
  }

  .swiper-slide6 ul li {
    margin-bottom: .5rem;
  }

  .swiper-slide6 a {
    width: 90%;
    margin: 0 auto;
    background: #fff;
    left: 5%;
    bottom: 2rem;
    height: 2.4rem;
    line-height: 2.4rem;
    color: #e05c4d;
    font-size: .9rem;
  }

  .nextBtn {
    width: 1.5rem;
    bottom: 1rem;
    margin: 0 auto 1rem;
    z-index: 1000;
    left: 50%;
    margin-left: -1rem;
  }

  .nextBtn img {
    width: 1.5rem;
    animation: btnDown 3s linear infinite;
    -webkit-animation: btnDown 3s linear infinite;
  }

  @keyframes btnDown {
    0% {
      transform: translate(0, 0);
      opacity: 0;
    }
    50% {
      transform: translate(0, 10px);
      opacity: 1;
    }
    100% {
      transform: translate(0, 0);
      opacity: 0;
    }
  }

  @-webkit-keyframes btnDown {
    0% {
      -webkit-transform: translate(0, 0);
      opacity: 0;
    }
    50% {
      -webkit-transform: translate(0, 10px);
      opacity: 1;
    }
    100% {
      -webkit-transform: translate(0, 0);
      opacity: 0;
    }
  }
</style>

<template>
  <div class="content">
    <div class="swiper-container wrap">
      <div class="swiper-wrapper">
        <div class="swiper-slide swiper-slide1">
          <img class="db banner" src="./img/banner1.png" alt="">
          <img class="db cont" src="./img/page1Cont.png" alt="">
          <p>银行存管上线后，资金交易环节均在银行系统中进行，资金交易均由用户授权银行操作执行，确保每一笔交易的真实性。</p>
        </div>
        <div class="swiper-slide swiper-slide2">
          <img class="db banner" src="./img/banner2.png" alt="">
          <p class="tc">360度风控流程保障项目真实可靠</p>
          <img class="db cont" src="./img/page2Cont.png" alt="">
        </div>
        <div class="swiper-slide swiper-slide3">
          <img class="db banner" src="./img/banner3.png" alt="">
          <h6 class="tc">三重项目保障</h6>
          <div class="pa">
            <dl>
              <dt><span>01</span>项目百里挑一</dt>
              <dd>严谨的行业选择标准体系，风控部门按照银行级风控标准对项目进行层层审核，覆盖所有风险点。</dd>
            </dl>
            <dl>
              <dt><span>02</span>合作机构逾期回购</dt>
              <dd>两只老虎与资管或担保公司合作，当出借人参与的项目发生逾期或者违约时，合作机构将进行回购。</dd>
            </dl>
            <dl>
              <dt><span>03</span>小额分散</dt>
              <dd>小额分散的消费类金融资产集合，单笔借款期限短、金额小 。</dd>
            </dl>
          </div>
        </div>
        <div class="swiper-slide swiper-slide4">
          <img class="db banner" src="./img/banner4.png" alt="">
          <dl class="clearfix">
            <dt class="fl"><img src="./img/icon1.png" alt=""></dt>
            <dd class="fl">携手阿里云保障用户所有交易数据安全</dd>
          </dl>
          <dl class="clearfix">
            <dt class="fl"><img src="./img/icon2.png" alt=""></dt>
            <dd class="fl">采用业界领先的阿里云盾，防止黑客攻击</dd>
          </dl>
          <dl class="clearfix">
            <dt class="fl"><img src="./img/icon3.png" alt=""></dt>
            <dd class="fl">采用ssl传输加密，保障用户账户信息安全</dd>
          </dl>
        </div>
        <div class="swiper-slide swiper-slide5">
          <img class="db banner" src="./img/banner5.png" alt="">
          <section class="pa">
            <ul class="clearfix ul1 baguetteBoxOne">
              <li><a href="../../../../static/img/safeGuard/1.jpg"><img class="db" src="./img/img1.png" alt=""></a></li>
              <li><a href="../../../../static/img/safeGuard/2.jpg"><img class="db" src="./img/img2.png" alt=""></a></li>
              <li><a href="../../../../static/img/safeGuard/3.jpg"><img class="db" src="./img/img3.png" alt=""></a></li>
            </ul>
            <p class="tc">硕果累累荣誉满墙</p>
            <ul class="clearfix ul2 baguetteBoxOne">
              <li class="fl"><a href="../../../../static/img/safeGuard/4.jpg"><img class="db" src="./img/img4.png"
                                                                                   alt=""></a></li>
              <li class="fr"><a href="../../../../static/img/safeGuard/5.jpg"><img class="db" src="./img/img5.png"
                                                                                   alt=""></a></li>
            </ul>
          </section>
        </div>
        <div class="swiper-slide swiper-slide6">
          <img class="db banner" src="./img/banner6.png" alt="">
          <section class="pa">
            <ul class="clearfix ul2 baguetteBoxOne">
              <li class="fl"><a href="/static/img/safeGuard/6.jpg"><img class="db" src="./img/img6.png" alt=""></a></li>
              <li class="fr"><a href="/static/img/safeGuard/7.jpg"><img class="db" src="./img/img7.png" alt=""></a></li>
              <li class="fl"><a href="/static/img/safeGuard/8.jpg"><img class="db" src="./img/img8.png" alt=""></a></li>
              <li class="fr"><a href="/static/img/safeGuard/9.jpg"><img class="db" src="./img/img9.png" alt=""></a></li>
              <li class="fl"><a href="/static/img/safeGuard/10.jpg"><img class="db" src="./img/img10.png" alt=""></a>
              </li>
            </ul>
          </section>
          <a v-if="isApp" @click="tjhy" class="db tc shareFriend pa" href="javascript:void(0);">推荐给我的好友</a>
        </div>
      </div>
    </div>
    <div class="nextBtn pf" id="nextBtn"><img class="db" src="./img/arrow.png"></div>
  </div>
</template>

<script type="text/ecmascript-6">
  import '../../../assets/css/plugin/swiper.min.css';
  import '../../../assets/css/plugin/baguetteBox.css';
  import Swiper from 'swiper';
  import baguetteBox from 'baguettebox.js';
  import {nt} from '../../../assets/js/native';
  import mixin from '../../../components/common/mixin';

  export default {
    mixins: [mixin],
    mounted() {
      window.mySwiper = new Swiper('.swiper-container', {
        setWrapperSize: true,
        direction: 'vertical',
        speed: 800,
        longSwipesRatio: 0.3,
        grabCursor: true,
        nextButton: '#nextBtn',
        mousewheelControl: true,
        lazyLoading: true,
        lazyLoadingInPrevNext: true,
        lazyLoadingOnTransitionStart: true,
        onSlideChangeEnd: function (swiper) {
          if (swiper.activeIndex === 5) {
            $('#nextBtn').hide();
          } else {
            $('#nextBtn').show();
          }
        }
      });
      baguetteBox.run('.baguetteBoxOne');
    },
    methods: {
      tjhy() {
        let title = '两只老虎安全有保障 ';
        let content = '我在两只老虎，安全有保障';
        let url = window.location.href;
        let pic = '/static/img/share.png';
        nt.toShare({
          'title': title,
          'content': content,
          'url': url,
          'pic': pic,
          'channel': 'weixin'
        });
      }
    }
  };
</script>

