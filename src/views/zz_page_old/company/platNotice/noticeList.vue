<style lang="less">
  /* 返回顶部 */
  .go-top {
    z-index: 999999;
    position: fixed;
    bottom: 3.5rem;
    right: 3%;
    margin-left: 40px;
    border: 1px solid #FFFFFF;
    width: 38px;
    height: 38px;
    background-color: #E7E7E7;
    border-radius: 3px;
  }

  .go-top .arrow {
    position: absolute;
    left: 10px;
    top: -1px;
    width: 0;
    height: 0;
    border: 9px solid transparent;
    border-bottom-color: #ff8200;
  }

  .go-top .stick {
    position: absolute;
    left: 15px;
    top: 15px;
    width: 8px;
    height: 14px;
    display: block;
    background-color: #ff8200;
    -webkit-border-radius: 1px;
    -moz-border-radius: 1px;
    border-radius: 1px;
  }

  /*平台公告*/
  body {
    background-color: #f5f5f9;
  }

  .allCont {
    width: 90%;
    padding: 0 5%;
  }

  .noticeList, .noticeArticleInfo {
    border-top: 1px solid #f2f0f0;
    border-bottom: 1px solid #f2f0f0;
  }

  .noticeList dl dd a {
    margin-top: 0.9rem;
    width: 16px;
    height: 16px;
    background: url(./img/icon_back.png) no-repeat;
    background-size: 100% 100%;
  }

  .noticeList dl dt {
    width: 92%;
  }

  .noticeList dl dt p {
    font-size: 0.875rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 100%;
    display: block;
  }

  .noticeList dl dt span {
    font-size: 0.8rem;
    color: #9b9b9b;
    margin-top: 0.5rem;
  }

  .noticeArticle p {
    line-height: 2rem;
    font-size: 0.875rem;
  }

  .noticeHead p {
    font-size: 1rem;
  }

  .noticeHead span {
    font-size: 0.8rem;
  }
</style>

<template>
  <div>
    <section class="pb1">
      <div id="dataDiv">
        <div v-for="item in list" @click="detailMsg(item.id)" class="whiteBg mt1 noticeList allCont pb1 pt1">
          <dl class="clearfix">
            <dt class="fl"><p>{{item.title}}</p><span class="db">{{item.ctime}}</span></dt>
            <dd class="fr"><a class="fr db" href="javascript:void(0)"></a></dd>
          </dl>
        </div>
      </div>
      <p v-if="pageNumber < totalPage" id="moreBtn" class="tc lineH3 db font0 fontGrey">加载更多</p>
    </section>
    <div v-show="showTop" @click="scrollTop" class="go-top">
      <div class="arrow"></div>
      <div class="stick"></div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import {formatDate} from '../../../assets/js/util';

  export default {
    data() {
      return {
        list: [],
        pageNumber: 0,
        totalPage: 0,
        showTop: false
      };
    },
    created() {
      document.title = '平台公告';
      this.loadData();
      window.onscroll = () => {
        let btn = document.getElementById('moreBtn');
        if (btn && window.pageYOffset + window.innerHeight >= btn.offsetTop) {
          clearTimeout(window.tId);
          window.tId = setTimeout(() => {
            this.loadData();
          }, 100);
        }
        clearTimeout(window.tLd);
        window.tLd = setTimeout(() => {
          this.showTop = window.pageYOffset > window.innerHeight;
        }, 100);
      };
    },
    methods: {
      detailMsg(id) {
        this.$router.push({path: 'detail/' + id});
      },
      scrollTop() {
        window.scroll(0, 0);
      },
      loadData() {
        this.$http({
          method: 'post',
          url: '/api/w2/platNotice',
          params: {
            pno: ++this.pageNumber,
            psize: 10
          }
        }).then((response) => {
          response.data.data.list.forEach(function (item, index) {
            response.data.data.list[index].ctime = formatDate(item.ctime);
          });
          this.list = this.list.concat(response.data.data.list);
          this.totalPage = response.data.data.totalPage;
        })
          .catch(function (error) {
            alert(error);
          });
      }
    }
  };
</script>

