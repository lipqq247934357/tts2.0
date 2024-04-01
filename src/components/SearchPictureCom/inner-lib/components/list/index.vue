<template>
  <div>
    <div class="infiniteContainer" v-infinite-scroll="loadMore" :infinite-scroll-disabled="busy"
      :infinite-scroll-distance="10">
      <a-list :dataSource="data" :grid="{ gutter: 18, xxl: 6, xl: 4, column: 3 }">
        <a-list-item slot="renderItem" slot-scope="item">
          <Card :data="item" />
        </a-list-item>
        <div v-show="loading" class="loadingContainer">
          <a-spin />
        </div>
        <div v-show="busy && !loading" class="noMore">
          <div>没有更多了</div>
        </div>
      </a-list>
    </div>
  </div>
</template>

<script>
import Card from "../card/index.vue";

export default {
  name: 'List',
  components: {
    Card
  },
  props: {
    data: {
      type: Array,
      default: () => []
    },
    busy: {
      type: Boolean,
      default: false
    },
    loadMore: {
      type: Function,
      default: () => { }
    },
    loading: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>
.infiniteContainer {
  height: calc(100vh - 60px);
  overflow-y: auto;
}

.loadingContainer {
  position: absolute;
  bottom: 40px;
  width: 100%;
  text-align: center;
}

.item {
  /* width: 244px; */

  /* height: 139px; */
}

.noMore {
  height: 50px;
  margin-top: 10px;
  text-align: center;
}

.selectAll {
  margin-bottom: 10px;
}
</style>