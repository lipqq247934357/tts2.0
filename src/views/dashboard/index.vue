<template>
  <!--todo: 获取router，然后生成树结构，展示需要展示的内容-->
  <div class="cotent-margin-adsdfgh">
    <!--  生成菜单  -->
    <routerParse />
    <router-link to="/utils/weightEvargeCount">每日减重计算</router-link>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import routerParse from "@/components/routeParse/routeParse.vue";

@Component({
  components: { routerParse },
})
export default class login extends Vue {
  /**
   * 获取vue-router中的内容，然后遍历内容，然后生成对应的页面
   */
}
</script>
<style lang="scss" module></style>
