<style lang="less">
  body,
  ul,
  ol,
  dl,
  dd,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  figure,
  form,
  fieldset,
  legend,
  input,
  textarea,
  button,
  p,
  blockquote,
  th,
  td,
  pre {
    margin: 0;
    padding: 0;
  }

  body,
  ::-webkit-input-placeholder {
    font-family: 'sans-serif', "Microsoft YaHei", "微软雅黑", "Tahoma", "Helvetica";
    font-size: 24px;
  }

  input:-moz-placeholder {
    font-family: 'sans-serif', "Microsoft YaHei", "微软雅黑", "Tahoma", "Helvetica";
    font-size: 24px;
  }

  li {
    list-style: none outside none;
  }

  a:link,
  a:hover {
    text-decoration: none;
  }

  a img {
    border: 0;
    vertical-align: bottom;
  }

  button {
    background-color: transparent;
  }

  table {
    border-collapse: collapse;
    width: 100%;
  }

  fieldset {
    border: none;
  }

  legend {
    display: none;
  }

  i {
    display: inline-block;
  }

  em {
    font-style: normal;
  }

  @media (min-width: 320px) and (max-width: 360px) {
    html,
    .wrap,
    body,
    input,
    h1,
    h2,
    h3,
    h4,
    select,
    ::-webkit-input-placeholder,
    textarea {
      font-size: 14px;
    }

    input:-moz-placeholder {
      font-size: 18px;
    }

    .projectInfo section dl {
      width: 3.8rem;
    }
  }

  @media (min-width: 360px) and (max-width: 480px) {
    html,
    .wrap,
    body,
    input,
    h1,
    h2,
    h3,
    h4,
    select,
    ::-webkit-input-placeholder,
    textarea {
      font-size: 16px;
    }

    input:-moz-placeholder {
      font-size: 18px;
    }
  }

  @media (min-width: 320px) and (max-width: 480px) {
    .projectList ul li.qiang {
      width: 18%;
      margin-top: -1rem;
    }
  }

  @media (min-width: 480px) and (max-width: 640px) {
    html,
    .wrap,
    body,
    input,
    h1,
    h2,
    h3,
    h4,
    select,
    ::-webkit-input-placeholder,
    textarea {
      font-size: 18px;
    }

    input:-moz-placeholder {
      font-size: 18px;
    }
  }

  @media (min-width: 380px) and (max-width: 420px) {
    html,
    .wrap,
    body,
    input,
    h1,
    h2,
    h3,
    h4,
    select,
    ::-webkit-input-placeholder,
    textarea {
      font-size: 18px;
    }

    input:-moz-placeholder {
      font-size: 18px;
    }
  }

  a {
    outline: none;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    tap-highlight-color: rgba(0, 0, 0, 0);
  }

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

  .wrap {
    width: 100%;
    min-width: 320px;
    max-width: 640px;
    margin: 0 auto;
  }

  .fl {
    float: left;
  }

  .fr {
    float: right;
  }

  .tr {
    text-align: right;
  }

  .tl {
    text-align: left;
  }

  .tc {
    text-align: center;
  }

  .pr {
    position: relative;
  }

  .pa {
    position: absolute;
  }

  .pf {
    position: fixed;
  }

  .hide {
    display: none;
  }

  .db {
    display: block;
  }

  .whiteBg {
    background: #fff !important;
  }

  .greyBg {
    background: #f2f3f4 !important;
  }

  .red {
    color: #e63c3c !important;
  }

  .orange {
    color: #ff7e3f !important;
  }

  .grey {
    color: #999 !important;
  }

  .bgnone {
    background: none;
    border: none;
  }

  .mt1 {
    margin-top: 1rem !important;
  }

  .mt05 {
    margin-top: 0.5rem !important;
  }

  .mt2 {
    margin-top: 2rem !important;
  }

  .pb4 {
    padding-bottom: 4rem !important;
  }

  .pb1 {
    padding-bottom: 1rem !important;
  }

  .ml05 {
    margin-left: 0.5rem !important;
  }

  .mr02 {
    margin-right: 0.2rem !important;
  }

  .borderBottom {
    border-bottom: 1px solid #eeeeee;
  }

  .borderTop {
    border-top: 1px solid #eeeeee;
  }

  .fillet02 {
    border-radius: 0.2rem;
    -webkit-border-radius: 0.2rem;
    -moz-border-radius: 0.2rem;
    -o-border-radius: 0.2rem;
  }

  .fillet04 {
    border-radius: 0.4rem;
    -webkit-border-radius: 0.4rem;
    -moz-border-radius: 0.4rem;
    -o-border-radius: 0.4rem;
  }

  .fillet1 {
    border-radius: 1rem;
    -webkit-border-radius: 1rem;
    -moz-border-radius: 1rem;
    -o-border-radius: 1rem;
  }

  .fillet50 {
    border-radius: 50%;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    -o-border-radius: 50%;
  }

  .mark {
    background-color: #000;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    filter: alpha(opacity=50);
    opacity: 0.5;
    z-index: 5;
    position: fixed !important;
  }

  .btnBg {
    background: -moz-linear-gradient(90deg, rgb(240, 130, 40) 0%, rgb(255, 145, 56) 100%);
    background: -webkit-linear-gradient(90deg, rgb(240, 130, 40) 0%, rgb(255, 145, 56) 100%);
    background: -ms-linear-gradient(90deg, rgb(240, 130, 40) 0%, rgb(255, 145, 56) 100%);
  }

  // setp2
  body {
    background: #212a49;
  }

  .platformData {
    overflow: hidden
  }

  .platformDataBanner img {
    width: 100%;
  }

  .platformDataCont {
    width: 90%;
    margin: 0 auto;
  }

  .platformDataCont_1 {
  }

  .contBg {
    background: #283253;
    box-shadow: 2px 2px 6px 2px #202846;
    padding: 0.5rem 8%;
  }

  .sjgn p.endData {
    font-size: 0.7rem;
    color: #3e508f;
    padding-top: 1rem;
  }

  .sjgn dl {
    margin: 1rem 0;
  }

  .sjgn dl dt img {
    width: 1.8rem;
    margin-right: 1.5rem;
    margin-top: 0.4rem;
  }

  .sjgn dl dd p {
    color: #c6d1fc;
    font-size: 0.7rem;
    line-height: 1.2rem;
  }

  .sjgn dl dd span {
    color: #fe6191;
    font-size: 1rem;
    line-height: 1.5rem;
  }

  .sjgn dl dd span em {
    color: #689dff;
    font-size: 0.6rem;
    margin-right: 0.2rem;
  }

  .platformDataCont_2 .platformTitle {
    width: 55%;
  }

  .platformTitle {
    width: 50%;
    margin: 2rem auto 1rem;
  }

  .platformTitle dl {
    display: inline-block;
    margin-top: -1.4rem;
    padding: 0 0.4rem;
  }

  .platformTitle dl dt {
    background: #212a49;
    color: #fff;
    font-size: 0.8rem;
    line-height: 1.4rem;
  }

  .platformTitle dl dd {
    color: #3e508f;
    font-size: 0.5rem;
    line-height: 1rem;
  }

  /*     .platformDataCont_2 .platformTitle dl dt, .platformDataCont_3 .platformTitle dl dt{background: #212a49;width:70%;margin:0 auto;} */
  .platformTitle p.line {
    width: 100%;
    height: 1px;
    background: #fe6191;
    margin-top: 1.4rem;
  }

  .tzrInfo {
    padding: 1rem 4%;
  }

  .tzrInfoCont {
    background: #212a49;
    padding: 1rem 4%;
  }

  .tzrInfoTop > div {
    width: 38%;
    background: #212a49;
    padding: 0.8rem 5% 0.8rem 5%;
  }

  .tzrInfoTop > div p {
    font-size: 0.7rem;
    color: #c6d1fc;
  }

  .tzrInfoTop > div span {
    font-size: 1.4rem;
    color: #fe6191;
    margin-top: 0.3rem;
  }

  .tzrInfoTop > div span em {
    color: #689dff;
    font-size: 0.7rem;
  }

  .tzrInfoCont p {
    color: #c6d1fc;
    font-size: 0.8rem;
    line-height: 1rem;
  }

  .sexProportion {
    padding: 0 14%;
  }

  .sexProportion dl {
    width: 36%;
    margin: 1.5rem 0;
  }

  .sexProportion dl dt img {
    margin: 0 auto;
    width: 80%;
  }

  .sexProportion dl dd {
    margin-top: 0.8rem;
    font-size: 1.6rem;
    text-align: center
  }

  .sexProportion dl.fl dd {
    color: #689dff;
  }

  .sexProportion dl.fr dd {
    color: #fe6191;
  }

  .ageCont {
    min-height: 12.5rem;
  }

  .ageColor {
    width: 12rem;
    right: -40%;
    top: -1rem;
  }

  .ageColor ul li {
    height: 1.2rem;
    font-size: 0.6rem;
    color: #689dff;
    width: 5rem;
    line-height: 1.2rem;
  }

  .ageColor ul li span {
    display: block;
    float: left;
    width: 0.3rem;
    height: 0.3rem;
    margin-right: 0.3rem;
    margin-top: 0.45rem;
  }

  .ageColor ul li:first-child span {
    background: #ffb966;
  }

  .ageColor ul li:nth-child(2) span {
    background: #5dea8b;
  }

  .ageColor ul li:nth-child(3) span {
    background: #538efc;
  }

  .ageColor ul li:nth-child(4) span {
    background: #bc6cfe;
  }

  .ageColor ul li:last-child span {
    background: #fb5c5c;
  }

  .ageList {
    width: 80%;
    border-bottom: 1px solid #5367ac;
    height: 8rem;
    top: 2rem;
    padding-right: 3rem;
  }

  .ageProgress {
    position: absolute;
    bottom: 0;
    width: 4rem;
  }

  .ageProgress p {
    position: absolute;
    width: 4rem;
    bottom: -2rem;
    color: #fe6191;
    text-align: center;
    left: 0.45rem;
  }

  .ageProgress .progress-bar {
    position: absolute;
    bottom: 0;
    left: 2rem;
  }

  .ageProgress .progress-bar span {
    position: absolute;
    color: #fff;
    width: 4rem;
    text-align: center;
    margin-left: -1.5rem;
    font-size: 0.8rem;
    top: -1.8rem;
  }

  .ageProgress:nth-child(1) {
    left: 0rem;
  }

  .ageProgress:nth-child(2) {
    left: 3rem;
  }

  .ageProgress:nth-child(3) {
    left: 6rem;
  }

  .ageProgress:nth-child(4) {
    left: 9rem;
  }

  .ageProgress:nth-child(5) {
    left: 12rem;
  }

  .platformDataCont_5 .contBg {
    padding: 1rem 0%;
  }

  .xmxxInfo .dlCont {
    background: #212a49;
    padding: 0.5rem 0;
  }

  .xmxxInfo {
    padding: 1.5rem 4%;
  }

  .xmxxInfo dl {
    width: 50%;
    margin-bottom: 1rem;
  }

  .xmxxInfo dl dt {
    margin: 0 auto;
    text-align: center;
  }

  .xmxxInfo dl dd {
    color: #fff;
    font-size: 0.8rem;
    text-align: center;
  }

  .ljtz {
    width: 80%;
    height: 2.6rem;
    background: #2c375d;
    line-height: 2.6rem;
    color: #fff;
    margin: 0 auto;
    font-size: 0.9rem;
    margin-bottom: 2rem;
  }

  .jyje {
    font-size: 0.7rem;
    color: #3e508f;
  }

  .jyje span {
    font-size: 0.8rem;
    color: #689dff;
  }

  .tzjefb ul {
    margin-top: 2rem;
  }

  .tzjefb ul li {
    line-height: 1.4rem;
    color: #689dff;
    font-size: 0.7rem;
  }

  .tzjefb ul li span {
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 50%;
    -webkit-border-radius: 50%;
    display: block;
    float: left;
    margin: 0.45rem 0.3rem 0 0;
  }

  .tzjeCont {
    width: 70%;
    margin-top: 1rem;
  }

  .areaCont {
    min-height: 4rem;
  }

  .areaCont ul {
    position: absolute;
    bottom: 1rem;
  }

  .areaCont ul li {
    font-size: 0.6rem;
    line-height: 1rem;
  }

  .mapCont {
    right: 4%;
    width: 75%;
  }

  .numbertitle {
    font-size: 0.8rem;
    color: #c6d1fc;
    padding-left: 5%;
  }

  .report {
    color: #666666 !important;
  }

  .picScroll .bd li a {
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0); /* 取消链接高亮 */
  }

  .picScroll .bd li img {
    background: url(./img/loading.gif) #fff center center no-repeat;
  }

  .picScroll .hd {
    height: 40px;
    line-height: 40px;
    overflow: hidden;
    text-align: center;
    position: absolute;
    left: 50%;
    transform: translate(-50%, 0%);
    -webkit-transform: translate(-50%, 0%);
  }

  .picScroll .hd ul {
    float: left;
    padding-top: 16px;
  }

  .picScroll .hd li {
    float: left;
    width: 8px;
    height: 8px;
    background: rgba(254, 97, 145, 0.5);
    margin: 0 3px;
    overflow: hidden;
    -webkit-border-radius: 8px;
    -moz-border-radius: 8px;
    border-radius: 8px;
  }

  .picScroll .hd .on {
    background: #fe6191;
  }

  .picScroll .prev, .picScroll .next {
    display: block;
    float: left;
    width: 18px;
    height: 18px;
    background: url(./img/pisScrollIcons2.png) -6px -7px no-repeat;
    overflow: hidden;
    margin: 11px 5px 0 5px;
  }

  .picScroll .next {
    background-position: -34px -7px;
  }

  .picScroll .prevStop {
    background-position: -6px -40px;
  }

  .picScroll .nextStop {
    background-position: -34px -40px;
  }

  .operationReport {
    width: 88%;
    padding: 1rem 0;
    margin: 0 auto;
  }

  .operationReport ul li {
    width: 32%;
    float: left;
  }

  .operationReport ul li.marRight {
    margin-right: 2%;
  }

  .operationReport ul li img {
    width: 100%;
  }

  .sydney {
    height: 10rem;
  }
</style>

<template>
  <div>
    <div class="wow slideInLeft animated" data-wow-animation-name="slideInLeft"
         style="visibility: visible; animation-name: slideInLeft;"></div>
    <div class="wow slideInRight animated" data-wow-animation-name="slideInRight"
         style="visibility: visible; animation-name: slideInRight;"></div>
    <section class="platformData ">
      <section class="platformDataBanner">
        <img class="db" src="./img/banner.png">
      </section>
      <section class="platformDataCont">
        <section class="platformDataCont_1 ">
          <div class="platformTitle tc">
            <p class="line"></p>
            <dl>
              <dt>数据概览</dt>
              <dd>DATA OVERVIEW</dd>
            </dl>
          </div>
          <div class="contBg sjgn">
            <p class="endData">{{yesDay}}</p>
            <dl class="clearfix">
              <dt class="fl"><img class="db" src="./img/1.png"></dt>
              <dd class="fl">
                <p>累计出借金额</p>
                <span v-html="sumAmount"></span>
              </dd>
            </dl>
            <dl class="clearfix">
              <dt class="fl"><img class="db" src="./img/2.png"></dt>
              <dd class="fl">
                <p>累计收益金额</p>
                <span v-html="sumInterest"></span>
              </dd>
            </dl>
            <dl class="clearfix">
              <dt class="fl"><img class="db" src="./img/3.png"></dt>
              <dd class="fl">
                <p>累计待收金额</p>
                <span v-html="collect"></span>
              </dd>
            </dl>
            <dl class="clearfix">
              <dt class="fl"><img class="db" src="./img/4.png"></dt>
              <dd class="fl">
                <p>安全运行天数</p>
                <span v-html="interval"></span>
              </dd>
            </dl>
          </div>
        </section>
        <section class="platformDataCont_2 " style="display:none">
          <div class="platformTitle tc">
            <p class="line"></p>
            <dl>
              <dt style="width:70%;margin: 0 auto">月度交易总额</dt>
              <dd>MONTHLY TRANSACTION VOLUME</dd>
            </dl>

          </div>
          <div class="contBg jyje" style="height:14rem">
            <!-- 添加图表内容 -->
            <p>交易金额(<span>亿元</span> )</p>
            <div class="sydney" id="monthAmt"
                 style="height: 16rem; top: -2.5rem; width: 22rem; left: -2rem; -webkit-tap-highlight-color: transparent; user-select: none; position: relative;"
                 _echarts_instance_="ec_1517462992900">
              <div
                style="position: relative; overflow: hidden; width: 352px; height: 256px; padding: 0px; margin: 0px; border-width: 0px;">
                <canvas width="704" height="512" data-zr-dom-id="zr_0"
                        style="position: absolute; left: 0px; top: 0px; width: 352px; height: 256px; user-select: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); padding: 0px; margin: 0px; border-width: 0px;"></canvas>
              </div>
              <div></div>
            </div>
          </div>
        </section>
        <section class="platformDataCont_3 ">
          <div class="platformTitle tc">
            <p class="line"></p>
            <dl>
              <dt>出借人信息</dt>
              <dd>INVESTOR INFORMATION</dd>
            </dl>
          </div>
          <div class="contBg tzrInfo">
            <div class="tzrInfoTop clearfix">
              <div class="fl">
                <p>出借人总数</p>
                <span class="db" v-html="registCount"></span>
              </div>
              <div class="fr">
                <p>人均出借金额</p>
                <span class="db" v-html="averageAmt"></span>
              </div>
            </div>
            <!-- 出借金额分布 -->
            <div class="tzrInfoCont mt1 tzjefb clearfix">
              <p>出借金额分布</p>
              <div class="fl tzjeCont">
                <div class="sydney" id="investAmount"
                     style="height: 8rem; -webkit-tap-highlight-color: transparent; user-select: none; background: transparent;"
                     _echarts_instance_="ec_1517462992898">
                  <div
                    style="position: relative; overflow: hidden; width: 200px; height: 128px; padding: 0px; margin: 0px; border-width: 0px;">
                    <canvas width="400" height="256" data-zr-dom-id="zr_0"
                            style="position: absolute; left: 0px; top: 0px; width: 200px; height: 128px; user-select: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); padding: 0px; margin: 0px; border-width: 0px;"></canvas>
                  </div>
                </div>
              </div>
              <ul class="fr">
                <li><span style="background: #5dea8b"></span>1w以下</li>
                <li><span style="background: #538efc"></span>1w~5w</li>
                <li><span style="background: #bc6cfe"></span>5w~20W</li>
                <li><span style="background: #ffb966"></span>20w~50w</li>
                <li><span style="background: #7972fd"></span>50w以上</li>
              </ul>
            </div>
            <!-- 出借金额分布 -->
            <div class="tzrInfoCont mt1">
              <p>年龄分布</p>
              <div class="ageCont pr">
                <div class="ageColor pa">
                  <ul class="clearfix">
                    <li><span></span>90后：33%</li>
                    <li><span></span>80后：48.2%</li>
                    <li><span></span>70后：7.1%</li>
                    <li><span></span>60后：1.1%</li>
                    <li><span></span>其他 ：10.6%</li>
                  </ul>
                </div>
                <div class="ageList pa">
                  <div class="fl ageProgress">
                    <p>90后</p>
                    <div class="progress" style="height:10rem;">
                      <div class="progress-bar" style="width:1rem;height:33%;background: #ffb966;">
                        <span>33%</span>
                      </div>
                    </div>
                  </div>
                  <div class="fl ageProgress">
                    <p>80后</p>
                    <div class="progress" style="height:10rem;">
                      <div class="progress-bar" style="width:1rem;height:48.2%;background: #5dea8b;">
                        <span>48.2%</span>
                      </div>
                    </div>
                  </div>
                  <div class="fl ageProgress">
                    <p>70后</p>
                    <div class="progress" style="height:10rem;">
                      <div class="progress-bar" style="width:1rem;height:7.1%;background: #538efc;">
                        <span>7.1%</span>
                      </div>
                    </div>
                  </div>
                  <div class="fl ageProgress">
                    <p>60后</p>
                    <div class="progress" style="height:10rem;">
                      <div class="progress-bar" style="width:1rem;height:1.1%;background: #bc6cfe;">
                        <span>1.1%</span>
                      </div>
                    </div>
                  </div>
                  <div class="fl ageProgress">
                    <p>其他</p>
                    <div class="progress" style="height:10rem;">
                      <div class="progress-bar" style="width:1rem;height:10.6%;background: #fb5c5c;">
                        <span>10.6%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- 地域分布 -->
            <div class="tzrInfoCont mt1 areaCont pr clearfix">
              <p>地域分布</p>
              <ul>
                <li style="color:#fe6191">1 北京 86.3%</li>
                <li style="color:#5dea8b">2 局域网 8.9%</li>
                <li style="color:#ffb966">3 本机地址 3.5%</li>
              </ul>
              <div class="sydney mapCont fr" id="investProvince" _echarts_instance_="ec_1517462992899"
                   style="-webkit-tap-highlight-color: transparent; user-select: none; position: relative; background: transparent;">
                <div
                  style="position: relative; overflow: hidden; width: 214px; height: 160px; padding: 0px; margin: 0px; border-width: 0px;">
                  <canvas width="428" height="320" data-zr-dom-id="zr_0"
                          style="position: absolute; left: 0px; top: 0px; width: 214px; height: 160px; user-select: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); padding: 0px; margin: 0px; border-width: 0px;"></canvas>
                </div>
                <div></div>
              </div>
            </div>
            <!-- 男女比例-->
            <div class="tzrInfoCont mt1">
              <p>男女比例</p>
              <div class="sexProportion clearfix">
                <dl class="fl">
                  <dt><img class="db" src="./img/man.png"></dt>
                  <dd>58.28%</dd>
                </dl>
                <dl class="fr">
                  <dt><img class="db" src="./img/woman.png"></dt>
                  <dd>41.72%</dd>
                </dl>
              </div>
            </div>
          </div>
        </section>
        <section class="platformDataCont_4 ">
          <div class="platformTitle tc">
            <p class="line"></p>
            <dl>
              <dt>项目信息</dt>
              <dd>ITEM INFORMATION</dd>
            </dl>
          </div>
          <div class="contBg xmxxInfo">
            <div class="dlCont clearfix">
              <dl class="fl">
                <dt>
                  <canvas style="margin:0 auto;" id="canvas" width="150" height="150"></canvas>
                </dt>
                <dd>历史年化8.5%项目</dd>
              </dl>
              <dl class="fl">
                <dt>
                  <canvas style="margin:0 auto;" id="canvas2" width="150" height="150"></canvas>
                </dt>
                <dd>历史年化10%项目</dd>
              </dl>
              <dl class="fl">
                <dt>
                  <canvas style="margin:0 auto" id="canvas3" width="150" height="150"></canvas>
                </dt>
                <dd>历史年化11%项目</dd>
              </dl>
              <dl class="fl">
                <dt>
                  <canvas style="margin:0 auto" id="canvas4" width="150" height="150"></canvas>
                </dt>
                <dd>历史年化12%项目</dd>
              </dl>
            </div>
          </div>
        </section>
      </section>
      <section class="yybg mt2">
        <p class="numbertitle">
          运营报告
        </p>
        <div id="picScroll" class="picScroll  operationReport ">
          <div class="tempWrap" style="overflow:hidden; position:relative;">
            <div class="bd slideimgwhiteBg"
                 style="width: 1320px; position: relative; overflow: hidden; padding: 0px; margin: 0px; transition-duration: 200ms; transform: translate(0px, 0px) translateZ(0px);">
              <ul class="clearfix" style="display: table-cell; vertical-align: top; width: 330px;">
                <li class="marRight borRadius">
                  <a href="https://www.twotiger.com/report?t=r_17_13&amp;share=yes"><img src="./img/r_17.png"
                                                                                         alt=""></a>
                </li>
                <li class="marRight borRadius">
                  <a href="https://www.twotiger.com/report?t=r_17_12&amp;share=yes"><img src="./img/17_12.png"
                                                                                         alt=""></a>
                </li>
                <li class=" borRadius">
                  <a href="https://www.twotiger.com/report?t=r_17_11&amp;share=yes"><img src="./img/17_11.png"
                                                                                         alt=""></a>
                </li>
              </ul>
              <ul class="clearfix" style="display: table-cell; vertical-align: top; width: 330px;">
                <li class="borRadius">
                  <a href="https://www.twotiger.com/report?t=r_17_10&amp;share=yes"><img src="./img/17_10.png"
                                                                                         alt=""></a>
                </li>
                <li class="marRight borRadius">
                  <a href="https://www.twotiger.com/report?t=r_17_9&amp;share=yes"><img src="./img/17_9.png"
                                                                                        alt=""></a>
                </li>
                <li class="borRadius">
                  <a href="https://www.twotiger.com/report?t=r_17_8&amp;share=yes"><img src="./img/17_8.png"
                                                                                        alt=""></a>
                </li>
              </ul>
              <ul class="clearfix" style="display: table-cell; vertical-align: top; width: 330px;">
                <li class="marRight borRadius">
                  <a href="https://www.twotiger.com/report?t=r_17_7&amp;share=yes"><img src="./img/17_7.png"
                                                                                        alt=""></a>
                </li>
                <li class="marRight borRadius">
                  <a href="https://www.twotiger.com/report/r_17_6?share=yes"><img src="./img/17_6.png"
                                                                                  alt=""></a>
                </li>
                <li class="borRadius">
                  <a href="https://www.twotiger.com/report/r_17_5?share=yes"><img src="./img/17_5.png"
                                                                                  alt=""></a>
                </li>
              </ul>
              <ul class="clearfix" style="display: table-cell; vertical-align: top; width: 330px;">
                <li class="marRight borRadius">
                  <a href="https://www.twotiger.com/report/r_17_4?share=yes"><img src="./img/17_4.png"
                                                                                  alt=""></a>
                </li>

                <li class="marRight borRadius">
                  <a href="https://www.twotiger.com/report/r_17_3?share=yes"><img src="./img/17_3.png"
                                                                                  alt=""></a>
                </li>
                <li class="borRadius">
                  <a href="https://www.twotiger.com/report/r_17_2?share=yes"><img src="./img/17_2.png"
                                                                                  alt=""></a>
                </li>
              </ul>
            </div>
          </div>
          <div class="hd">
            <a class="prev prevStop"></a>
            <ul>
              <li class="on">1</li>
              <li class="">2</li>
              <li class="">3</li>
              <li class="">4</li>
            </ul>
            <a class="next"></a>
          </div>
        </div>
      </section>
      <a class="db tc ljtz mt2" href="javascript:void(0);" @click="toProList">立即出借</a>
    </section>
  </div>
</template>

<script type="text/ecmascript-6">
  import {formatDate2, myMul} from '../../../assets/js/util';
  import {lzlh} from '../../../assets/js/native';

  export default {
    data() {
      return {
        interval: '',
        sumInterest: '',
        data: {},
        sexRate: '',
        yes: '',
        averageAmt: '',
        femalRate: '',
        registCount: '',
        customerPath: '',
        device: '',
        sumAmount: '',
        collect: '',
        info: {}
      };
    },
    computed: {
      yesDay: function () {
        return '（截止到' + formatDate2(this.yes) + '）';
      }
    },
    created() {
      this.$http({
        method: 'get',
        url: '/twotiger-dds/info/index4Json' // mock地址：/platInfo 注意：mock数据是response.data.data
      }).then((response) => {
        this.interval = response.data.interval;
        this.sumInterest = response.data.sumInterest;
        this.data = response.data.data;
        this.sexRate = response.data.sexRate;
        this.yes = response.data.yes;
        this.averageAmt = response.data.averageAmt;
        this.femalRate = response.data.femalRate;
        this.registCount = response.data.registCount;
        this.customerPath = response.data.customerPath;
        this.device = response.data.device;
        this.sumAmount = response.data.sumAmount;
        this.collect = response.data.collect;
        this.info = response.data.data;
        this.updateTable(this.info);
        this.cc(this.info);
      }).catch(function (error) {
        console.log(error);
      });
    },
    methods: {
      toProList() {
        lzlh.toProList();
      },
      updateTable(info) {
        // 投资人投资金额分布
        let investAmountColor = ['#5dea8b', '#538efc', '#bc6cfe', '#ffb966', '#7972fd'];
        let investAmountChart = echarts.init(document.getElementById('investAmount'));
        let investAmountTitle = function (data) {
          return new Array();
        };

        let investAmountData = function (data) {
          let res = [];
          for (let i = 0; i < data.length; i++) {
            res.push({
              value: data[i].amountCount,
              name: ((data[i].y) * 100).toFixed(2) + '%' + '',
              itemStyle: {normal: {color: investAmountColor[i]}}
            });
          }
          return res;
        };

        let investAmountOption = {
          legend: {
            orient: 'vertical',
            x: 'right',
            y: 'center',
            left: '10%',
            top: '10%',
            align: 'right',
            itemWidth: '15',
            selectedMode: false,
            data: investAmountTitle(info.investAmount)
          },
          series: [
            {
              type: 'pie',
              silent: true,
              hoverAnimation: false,
              legendHoverLink: false,
              center: ['50%', '50%'],
              radius: ['35%', '60%'],
              label: {
                normal: {
                  show: true,
                  formatter: '{d}%',
                  textStyle: {
                    fontSize: 12
                  }
                }
              },
              labelLine: {
                normal: {
                  show: true,
                  length: 8,
                  length2: 6
                }
              },
              data: investAmountData(info.investAmount)
            }
          ]
        };
        investAmountChart.setOption(investAmountOption);

//区域
        var investProvinceChart = echarts.init(document.getElementById('investProvince'));
        var investProvinceData = function (data) {
          var res = [];
          for (var i = 0; i < Math.min(data.length, 10); i++) {// 仅显示前10名数据
            res.push({value: data[i].y, name: data[i].province});
          }
          return res;
        };
        let investProvinceOption = {
          visualMap: {
            left: 'left',
            top: 'bottom',
            show: false,
            color: ['#57c5ff', '#5691f9']
          },
          tooltip: {
            trigger: 'item',
            formatter: function (params, ticket, callback) {
              var $value = params.value;
              var res = '';

              if (!isNaN($value)) {
                res = myMul(params.value, 100) + '%';
              }
              callback(ticket, res);
              return res;
            }
          },
          series: [
            {
              type: 'map',
              left: '15%',
              top: '10%',
              mapType: 'china',
              label: {
                normal: {
                  show: false
                }
              },
              itemStyle: {
                normal: {
                  areaColor: '#2e3960'
                },
                emphasis: {
                  color: '#57c500',
                  label: {
                    show: true,
                    textStyle: {
                      color: '#fff'
                    }
                  }
                }
              },
              data: investProvinceData(info.investProvince)
            }
          ],
        };
        investProvinceChart.setOption(investProvinceOption);

        //每月投资额
        var monthAmt = echarts.init(document.getElementById('monthAmt'));
        var monthInvestTitle = function (data) {
          var res = [];
          var l = data.length;
          var i = l > 5 ? l - 5 : 0;
          for (; i < l; i++) {
            res.push(data[i].date);
          }
          return res;
        };
        var monthInvest = function (data) {
          var res = [];
          var l = data.length;
          var i = l > 5 ? l - 5 : 0;
          for (; i < l; i++) {
            res.push(data[i].invest);
          }
          return res;
        };
        var monthAmtOption = {
          backgroundColor: 'rgba(40,50,83)',
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'cross'
            }
          },
          grid: {
            show: true,
            borderColor: '#283253',
            backgroundColor: '#283253',
            x: '15%'
          },
          xAxis: {
            offset: 5,
            borderWidth: 0,
            type: 'category',
            boundaryGap: false,
            data: monthInvestTitle(info.monthInvest),
            axisLine: {
              lineStyle: {
                color: '#3a487a'
              }
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              'show': true,
              'textStyle': {
                'color': '#fc6190'
              }
            }, boundaryGap: ['10%', '10%'],
          },
          yAxis: {
            offset: 5,
            type: 'value',
            axisLabel: {
              formatter: function (a) {
                return a / 100000000;
              }
            },
            axisPointer: {
              snap: true
            },
            axisLine: {
              show: false,
              lineStyle: {
                color: '#547bc9'
              }
            },
            axisTick: {
              show: false
            },
            splitLine: {
              lineStyle: {
                color: ['#42528c', '#42528c'],
                type: 'dotted'
              }
            },
          },
          series: [
            {
              type: 'line',
              smooth: true,
              label: {
                normal: {
                  show: true,
                  position: 'top',
                  formatter: function (params) {
                    return Math.round(parseFloat(params.value) / 100000) / 1000 + '亿';
                  },
                  textStyle: {
                    color: '#ccc'
                  }

                }
              },
              itemStyle: {
                normal: {
                  borderWidth: '1',
                  color: '#e07a02',
                  borderColor: '#fefbf6'
                }
              },
              lineStyle: {
                normal: {
                  width: '2',
                  color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 1,
                    y2: 0,
                    colorStops: [{
                      offset: 0, color: '#e17400' // 0% 处的颜色
                    }, {
                      offset: 1, color: '#ffe47a' // 100% 处的颜色
                    }],
                    globalCoord: false // 缺省为 false
                  },
                }
              },
              'symbolSize': function (value, params) {
                if (params.name == info.monthInvest[info.monthInvest.length - 1].date) {
                  return 6;
                } else {
                  return 0.0000000000000000000000000001;
                }
              },
              'symbol': 'circle',
              hoverAnimation: false,
              data: monthInvest(info.monthInvest)
            }
          ]
        };
        monthAmt.setOption(monthAmtOption);
      },
      cc(info) {
        var wow = new WOW({
          boxClass: 'wow',
          animateClass: 'animated',
          offset: 0,
          mobile: true
        });
        wow.init();

        window.onload = function () {
          function canvasComponent(id, color, centerCircle, percentage) {
            var canvas = document.getElementById(id),
              ctx = canvas.getContext('2d'),
              W = canvas.width,
              H = canvas.height,
              deg = 0,
              newDeg = 0,
              dif = 0,
              loop,
              text,
              textW;
            var obj = {
              init: function () {
                ctx.clearRect(0, 0, W, H)
                var numbers = deg > 360 ? 359 : deg
                var r = numbers * Math.PI / 180
                //中间圆
                ctx.beginPath();
                ctx.strokeStyle = centerCircle
                ctx.lineWidth = 4
                ctx.arc(W / 2, H / 2, 60, 0, 180)
                ctx.stroke();
                //外面圆
                ctx.beginPath()
                ctx.strokeStyle = color || '#4CDB9D'
                ctx.lineWidth = 8
                ctx.arc(W / 2, H / 2, 60, 0 - 90 * Math.PI / 180, r - 90 * Math.PI / 180, false)
                ctx.stroke()
                ctx.fillStyle = color || '#4CDB9D'
                ctx.font = 24 + 'px Microsoft YaHei'
                text = percentage + '%'
                textW = ctx.measureText(text).width
                ctx.fillText(text, W / 2 - textW / 2, H / 2 + 8)
              },
              draw: function () {
                newDeg = parseInt(percentage * 3.6 * 10) / 10;
                dif = newDeg - deg;
                if (newDeg < 1) {
                  loop = setInterval(obj.to, 100);
                } else {
                  loop = setInterval(obj.to, 1000 / dif);
                }
              },
              to: function to() {
                deg = parseInt(deg * 10) / 10;
                if (deg === newDeg) {
                  clearInterval(loop)
                }
                if (deg < newDeg) {
                  if (newDeg - deg > 1) {
                    deg++;
                  } else {
                    deg = deg + 0.1;
                  }
                } else {
                  if (deg - newDeg > 1) {
                    deg--;
                  } else {
                    deg = deg - 0.1;
                  }
                }
                obj.init()
              }
            }

            obj.draw();
          }

          canvasComponent('canvas', '#689dff', 'rgba(104,157,255,0.5)', parseInt(info.projectPeriod[0].y * 100 * 10) / 10);
          canvasComponent('canvas2', '#ffb966', 'rgba(255,185,102,0.5)', parseInt(info.projectPeriod[1].y * 100 * 10) / 10);
          canvasComponent('canvas3', '#fe6191', 'rgba(254,97,145,0.5)', parseInt(info.projectPeriod[2].y * 100 * 10) / 10);
          canvasComponent('canvas4', '#5dea8b', 'rgba(93,234,139,0.5)', parseInt(info.projectPeriod[3].y * 100 * 10) / 10);
        }
      }
    },
    mounted() {
      //  运营报告
      TouchSlide({
        slideCell: '#picScroll',
        titCell: '.hd ul', //  开启自动分页 autoPage:true ，此时设置 titCell 为导航元素包裹层
        autoPage: true, //  自动分页
        pnLoop: 'false', //  前后按钮不循环
        autoPlay: false
      });

    }
  };
</script>

