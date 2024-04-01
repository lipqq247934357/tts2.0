<template>
  <div>
    <List :data="data" :loadMore="loadMore" :busy="busy" :loading="loading"></List>
  </div>
</template>

<script>
import List from "./components/list/index.vue";

export default {
  name: 'InnerLib',
  props: {
    searchValue: {
      type: String,
      default: ''
    },
  },
  components: {
    List
  },
  data() {
    return {
      loading: false,
      busy: false,
      data: [],
      pageInfo: {
        pageNum: 1,
        pageSize: 30,
      }
    }
  },
  mounted() {
    if (this.searchValue) {
      this.getData(this.searchValue);
    }
  },
  methods: {
    async getData(value) {
      this.loading =true;
      const data = await this.$service.search.getList({
        pageNum: 1,
        pageSize: 30,
        keywords: value,
        fileTypes: ["image/png","image/gif","image/jpeg","image/svg+xml"]
      })
      const { list, current, pages } = data.data;
      this.data = list;
      this.pageInfo = {
        pageNum: current,
      }
      this.busy = current >= pages;
      console.log('data---------', data);
      this.loading =false;
    },
    async loadMore() {
      // 刚进入页面不加载
      if (!this.searchValue) {
        return;
      }
      if (this.busy) {
        return;
      }
      try {
        this.loading = true;
        // 加载更多
        this.busy = true;
        // 第一次获取
        const data = await this.$service.search.getList({
          pageNum: this.pageInfo.pageNum + 1,
          pageSize: 30,
          keywords: this.searchValue,
          fileTypes: ["image/png","image/gif","image/jpeg","image/svg+xml"]
        });
        const { list, current, pages } = data.data;
        this.data.push(...list);
        this.pageInfo = {
          pageNum: current,
        }
        this.busy = current >= pages;
        this.loading = false;
      } catch (error) {
        this.busy = false;
        this.loading = false;
      }
    }
  },
  watch: {
    searchValue(newVal, oldVal) {
      if (newVal !== oldVal && newVal !== '') {
        this.busy = false;
        this.data = [];
        this.getData(newVal);
      }
    }
  }
}
</script>