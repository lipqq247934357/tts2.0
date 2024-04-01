<template>
  <!--todo: 获取router，然后生成树结构，展示需要展示的内容-->
  <div class="cotent-margin-adsdfgh">
    <!--  生成菜单  -->
    <routerParse />
    <!-- 浏览地址1： http://localhost:3002/?keyword=121212121212121212&tab=baidu#/searchPicture -->
    <!-- 浏览地址2： http://localhost:3002/#/searchPicture/img2img?img=https%3A%2F%2F2f.zol-img.com.cn%2Fproduct%2F126_500x2000%2F735%2FceYIC4rD8GBkQ.jpg -->
    <router-link to="/searchPicture">AIGC项目</router-link><br />
    <router-link to="/utils/weightEvargeCount">每日减重计算</router-link><br />
  </div>
</template>
<script>
import routerParse from "@/components/routeParse/routeParse.vue";
  /**
   * 获取vue-router中的内容，然后遍历内容，然后生成对应的页面
   */
export default {
  components: {
    routerParse
  }
}
</script>
<style lang="scss" module></style>
