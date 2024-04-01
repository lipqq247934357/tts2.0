<template>
  <div>
    <div v-show="!fullScreenState" class="Banner_banner">
      <div class="Banner_effect"
        style="background-image: linear-gradient(45deg, rgb(90, 54, 148) 0%, rgb(19, 189, 206) 33%, rgb(0, 148, 217) 66%, rgb(111, 199, 181) 100%); height: 100%;">
      </div>
      <div class="search">
        <h2>学科搜图网</h2>
        <span class="input-wrapper">
          <a-input-search v-model="inputValue" placeholder="请输入内容" size="large" @search="onSearch">
            <a-button slot="enterButton" type="primary" style="width: 80px">
              <svg width="22" height="22" viewBox="0 0 48 48" fill="none">
                <path
                  d="M21 38C30.3888 38 38 30.3888 38 21C38 11.6112 30.3888 4 21 4C11.6112 4 4 11.6112 4 21C4 30.3888 11.6112 38 21 38Z"
                  fill="none" stroke="#fff" stroke-width="3" stroke-linejoin="round"></path>
                <path d="M26.6568 14.3431C25.2091 12.8954 23.2091 12 21 12C18.7909 12 16.7909 12.8954 15.3431 14.3431"
                  stroke="#fff" stroke-width="3" stroke-linecap="butt" stroke-linejoin="round"></path>
                <path d="M33.2218 33.2218L41.7071 41.7071" stroke="#fff" stroke-width="3" stroke-linecap="butt"
                  stroke-linejoin="round"></path>
              </svg>
            </a-button>
          </a-input-search>
        </span>
        <!-- 选择不同的类型 -->
        <!-- <div class="search-type-tabs">
          <a-tabs default-active-key="1" tab-position="bottom" v-model="searchType">
            <a-tab-pane v-for="item in SearchSourceType" :key="item.label" :tab="item.value">
            </a-tab-pane>
          </a-tabs>
        </div> -->
      </div>
    </div>
    <div class="search-list-tabs">
      <a-tabs default-active-key="站内" :activeKey="searchType" @change="changeTab">
        <a-tab-pane key="inner" tab="站内">
        </a-tab-pane>
        <a-tab-pane key="baidu" tab="百度"></a-tab-pane>
        <a-tab-pane key="google" tab="谷歌"></a-tab-pane>
        <a-tab-pane key="bingo" tab="必应"></a-tab-pane>
        <!-- <a-tab-pane key="Veer" tab="Veer">
          <div>
            <iframe src="https://www.veer.com/search-image/water"></iframe>
            <a href="https://www.veer.com/search-image/water" target="_blank">搜索内容</a>
          </div>
        </a-tab-pane> -->
        <a-tab-pane key="Veer" tab="Veer"></a-tab-pane>
        <a-tab-pane key="Unsplash" tab="Unsplash"></a-tab-pane>
        <!-- <a-tab-pane key="Foter" tab="Foter"></a-tab-pane> -->
        <a-tab-pane key="pexels" tab="pexels"></a-tab-pane>
      </a-tabs>
      <a-icon class="fullScreen" type="fullscreen" @click="fullScreen" />
      <div v-show="searchType === 'inner'">
        <InnerLib :searchValue="searchValue" />
      </div>
      <!-- <div v-show="searchType === 'inner'">
        <iframe src="https://materials.aixuexi.com/design/search?q=a" />
      </div> -->
      <div v-if="searchValueObj.baidu" v-show="searchType === 'baidu'">
        <!-- 直接搜图 -->
        <!-- <iframe :src="`https://image.baidu.com/search/index?tn=baiduimage&ps=1&ct=201326592&lm=-1&cl=2&nc=1&ie=utf-8&dyTabStr=MCw0LDUsMSw2LDMsNyw4LDIsOQ%3D%3D&word=${searchValue}`"></iframe> -->
        <iframe
          :src="`https://image.baidu.com/search/index?tn=baiduimage&ps=1&ct=201326592&lm=-1&cl=2&nc=1&ie=utf-8&dyTabStr=MCw2LDMsNSwxLDQsMiw3LDgsOQ%3D%3D&word=${searchValueObj.baidu}`"></iframe>
        <!-- 搜网页 -->
        <!-- <iframe src="https://www.baidu.com/s?ie=UTF-8&wd=%E6%B0%B4%E7%94%B5%E8%B4%B9%E7%AC%AC%E4%B8%89"></iframe> -->
        <!-- <a href="https://www.baidu.com/s?ie=UTF-8&wd=%E6%B0%B4%E7%94%B5%E8%B4%B9%E7%AC%AC%E4%B8%89"
          target="_blank">搜索内容</a> -->
      </div>
      <div v-if="searchValueObj.google" v-show="searchType === 'google'">
        <!-- 直接搜索图片 -->
        <iframe
          :src="`https://www.google.com/search?sxsrf=APwXEdcvOn1PlwDvb18EtDKsJTJh_XP06Q:1686639835758&q=${searchValueObj.google}&tbm=isch&sa=X&ved=2ahUKEwjuzZiC17__AhXR1GEKHd6ADHoQ0pQJegQICRAB&biw=2560&bih=1304&dpr=1`"></iframe>
        <!-- 搜索网页 -->
        <!-- <iframe src="https://www.google.com/search?q=%E6%B0%B4%E7%94%B5%E8%B4%B9%E7%AC%AC%E4%B8%89"></iframe> -->
        <!-- <a href="https://www.google.com/search?q=%E6%B0%B4%E7%94%B5%E8%B4%B9%E7%AC%AC%E4%B8%89"
              target="_blank">搜索内容</a> -->
      </div>
      <div v-if="searchValueObj.bingo" v-show="searchType === 'bingo'">
        <!-- 搜索图片 -->
        <iframe :src="`https://cn.bing.com/images/search?q=${searchValueObj.bingo}&form=HDRSC2&first=1`"></iframe>
        <!-- 搜索网页 -->
        <!-- <iframe src="https://www.cn.bing.com/search?q=%E6%B0%B4%E7%94%B5%E8%B4%B9"></iframe> -->
      </div>
      <div v-if="searchValueObj.Veer" v-show="searchType === 'Veer'">
        <iframe :src="`https://www.veer.com/search-image/${searchValueObj.Veer}`"></iframe>
        <!-- <a href="https://foter.com/search/instant/?q=water" target="_blank">搜索内容</a> -->
      </div>
      <div v-if="searchValueObj.Unsplash" v-show="searchType === 'Unsplash'">
        <iframe :src="`https://unsplash.com/s/photos/${searchValueObj.Unsplash}`"></iframe>
        <!-- <a href="https://unsplash.com/s/photos/Water" target="_blank">搜索内容</a> -->
      </div>
      <!-- <div v-if="searchValueObj.Foter" v-show="searchType === 'Foter'">
        <iframe :src="`https://foter.com/search/instant/?q=${searchValueObj.Foter}`"></iframe>
        <a href="https://foter.com/search/instant/?q=water" target="_blank">搜索内容</a>
      </div> -->
      <div v-if="searchValueObj.pexels" v-show="searchType === 'pexels'">
        <iframe :src="`https://www.pexels.com/search/${searchValueObj.pexels}/`"></iframe>
        <!-- <a href="https://www.pexels.com/search/water/" target="_blank">搜索内容</a> -->
      </div>
    </div>
  </div>
</template>

<script>

const SearchTypeEnum = ['inner', 'baidu', 'google', 'bingo', 'Unsplash', 'Veer', 'pexels'];

import InnerLib from "./inner-lib/index.vue";
export default {
  name: 'HelloWorld',
  props: {
    SearchSourceType: {
      type: Array,
      default: () => { }
    }
  },
  data() {
    return {
      inputValue: '',
      searchValue: '',
      searchType: "inner",
      fullScreenState: false,
      searchValueObj: {
        baidu: '',
        google: '',
        bingo: '',
        Veer: '',
        Unsplash: '',
        // Foter: '',
        pexels: '',
      },
    }
  },
  components: {
    InnerLib
  },
  created() {
    // 获取url上的参数keyword和tab
    const url = new URL(window.location.href);
    const keyword = url.searchParams.get('keyword');
    const tab = url.searchParams.get('tab');
    if (tab) {
      this.searchType = SearchTypeEnum.includes(tab) ? tab : 'inner';
    }
    if (keyword) {
      this.inputValue = this.searchValue = keyword;
      this.searchType && (this.searchValueObj[this.searchType] = keyword);
    }
  },
  methods: {
    onSearch(value) {
      value = value.trim();
      if (!value) {
        return;
      }
      this.searchValue = value;
      if (this.searchType !== 'inner') {
        this.searchValueObj[this.searchType] = value;
      }
      this.updateUrlParams({ keyword: value });
    },
    changeTab(activeKey) { // 切换tab
      if (!this.searchValue) {
        this.$message.error('请输入搜索内容');
        return;
      }
      this.searchType = activeKey;
      this.searchType = activeKey;
      if (this.searchType !== 'inner' && this.searchValueObj[this.searchType] !== this.searchValue) {
        this.searchValueObj[this.searchType] = this.searchValue;
      }
      this.updateUrlParams({ tab: activeKey })
    },
    updateUrlParams(params) {
      const url = window.location.href;
      const urlObj = new URL(url);

      // 更新参数
      for (const key in params) {
        if (params.hasOwnProperty(key)) {
          urlObj.searchParams.set(key, params[key]);
        }
      }

      // 更新 URL
      const updatedUrl = urlObj.toString();
      window.history.replaceState({}, '', updatedUrl);
    },
    fullScreen() {
      if (document.fullscreenElement) {
        // 如果当前处于全屏状态，则退出全屏
        if (document.exitFullscreen) {
          document.exitFullscreen();
          this.fullScreenState = false;
        }
      } else {
        // 否则，进入全屏
        const element = document.documentElement;
        if (element.requestFullscreen) {
          element.requestFullscreen();
          this.fullScreenState = true;
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.Banner_banner {
  height: 150px;
  position: relative;
  overflow: hidden;
  background-color: #e5e5e5;
}

.Banner_effect {
  background-size: 400%;
  background-position: 0 100%;
  animation: 7.5s ease-in-out infinite;
  transform: translateZ(0);
}

.search {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
  text-align: center;
  width: 800px;

  >h2 {
    text-align: center;
    font-weight: 400;
    font-family: webfontx;
    color: #fff;
    font-size: 34px;
  }

  .input-wrapper {
    display: inline-block;
    width: 100%;
  }
}

.search-type-tabs {
  text-align: center;

  & /deep/ .ant-tabs-bottom .ant-tabs-bottom-bar {
    border-top: 0;
    margin-top: -1px;
  }

  /deep/ .ant-tabs-nav .ant-tabs-tab {
    margin: 0;
  }
}

.search-list-tabs {
  & /deep/ .ant-tabs-bar {
    margin: 0;
  }
}

.fullScreen {
  position: relative;
  float: right;
  top: -29px;
  right: 15px;
}

iframe {
  border: 0;
  width: 100%;
  min-height: calc(100vh - 60px);
}
</style>