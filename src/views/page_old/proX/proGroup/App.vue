<style lang="less">

  body {
    background: #f2f3f4;
  }

  .targetCont_top {
    background-image: -webkit-linear-gradient(156deg, rgb(241, 104, 12) 0%, rgb(255, 140, 27) 100%);
  }

  .targetCont_top dl {
    padding: 2.5rem 0;
  }

  .targetCont_top dl dt {
    font-size: 2.8rem;
    color: #fff;
  }

  .targetCont_top dl dd {
    font-size: 0.8rem;
    color: #f9bf9b;
  }

  .targetCont_top p {
    font-size: 0.8rem;
    color: #fff;
    background: rgba(255, 255, 255, 0.2);
    padding: 1rem 6%;
    line-height: 1.2rem;
    text-indent: 1.8rem;
  }

  .targetCont_bottom ul {
    margin: 1rem auto 0;
    width: 92%;
  }

  .targetCont_bottom ul li {
    border-bottom: 1px solid #eee;
    font-size: 0.8rem;
    color: #333;
    line-height: 3rem;
  }

  .targetCont_bottom ul li p {
    text-align: left;
  }

  .targetCont_bottom ul li p:first-child, .targetCont_bottom ul li p:nth-child(2) {
    width: 39%;
    margin-left: 1%;
  }

  .targetCont_footer a {
    color: #999;
    font-size: 1rem;
    margin: 4rem 0 2rem;
  }

</style>

<template>
  <div>
    <section class="targetCont_top">
      <dl class="tc">
        <dt>{{bongCount}}</dt>
        <dd>当前待匹配标的(个)</dd>
      </dl>
      <p>您转入成功后，系统自动将您的活期资产匹配到以下项目,到期或者您主动退出时，系统为您发起转让。如您匹配的项目跟下面项目有出入以实际匹配为准。</p>
    </section>

    <section class="targetCont_bottom">
      <ul id="dataDiv">
        <li v-for="item in list" class="clearfix">
          <p class="fl">{{item.name}}</p>
          <p class="fl">{{item.amount}}元</p>
          <p class="fl">期限{{item.dif}}天</p>
        </li>
      </ul>
    </section>
    <footer v-if="pageNumber < totalPage" class="targetCont_footer">
      <a id="moreBtn" class="tc db" href="javascript:void(0);">加载更多</a>
    </footer>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data() {
      return {
        bongCount: '',
        list: [],
        pageNumber: 1,
        pageSize: 10,
        totalPage: 1
      };
    },
    created() {
      this.loadData();
      window.onscroll = () => {
        let btn = document.getElementById('moreBtn');
        if (btn && window.pageYOffset + window.innerHeight >= btn.offsetTop) {
          clearTimeout(window.tId);
          window.tId = setTimeout(() => {
            this.loadData();
          }, 100);
        }
      };
    },
    methods: {
      loadData() {
        this.$http({
          method: 'post',
          url: '/api/w2/proGroup4JSON',
          params: {
            pno: this.pageNumber,
            psize: this.pageSize
          }
        }).then((response) => {
          this.list = this.list.concat(response.data.data.list);
          this.bongCount = response.data.bongCount;
          this.pageSize = response.data.data.pageSize;
          this.totalPage = response.data.data.totalPage;
          this.pageNumber++;
        })
          .catch((error) => {
            console.log(error);
          });
      }
    }
  };
</script>

