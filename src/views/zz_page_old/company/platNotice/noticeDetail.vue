<style lang="less">

  body {
    background-color: #f5f5f9;
  }

  .borBotDashed {
    border-bottom: none;
  }

  .allCont {
    width: 90%;
    padding: 0 5%;
  }

  .affiche .c_tit {
    line-height: 2rem;
    font-size: 1.1rem;
    margin: 10px 0 0 10px;
    color: #000000;
  }

  .affiche .c_time2 {
    color: #929292;
    text-align: left;
    font-size: 0.8rem;
    margin-left: 10px;
  }

  .affiche .c_time2 span {
    color: #607fa6;
    margin-left: 10px;
  }

  .affiche_area {
    width: 95%;
    margin: 20px auto
  }

  .affiche_area p {
    font-size: 0.875rem;
    line-height: 1.5rem
  }

  .affiche img, .notice_header img {
    width: 100%;
  }
</style>

<template>
  <section v-if="article !== null" class="pb1 whiteBg mt1 noticeArticleInfo">
    <div class="noticeHead borBotDashed tc pt1 pb0">
      <p>{{article.title}}</p>
      <span class="db mt0 fontGrey">{{article.ctime}}</span>
    </div>
    <article id="content" class="allCont noticeArticle" v-html="article.content">
    </article>
  </section>
</template>

<script type="text/ecmascript-6">
  export default {
    data() {
      return {
        article: null
      };
    },
    created() {
      document.title = '公告详情';
      this.$http({
        method: 'get',
        url: '/api/w2/platNoticeDetail?id=' + this.$route.params.id
      }).then((response) => {
        // 通过返回的值进行具体的处理
        response.data.article.ctime = (response.data.article.ctime + '').replace(/^(\d{4})(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})\d{3}$/, '$1-$2-$3 $4:$5:$6');
        this.article = response.data.article;
      })
        .catch(function (error) {
          alert(error);
        });
    }
  };
</script>

