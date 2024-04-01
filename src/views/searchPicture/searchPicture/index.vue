<template>
  <div class="home">
    <SearchPictureCom :SearchSourceType="SearchSourceType" />
  </div>
</template>

<script>
// @ is an alias to /src
import SearchPictureCom from '@/components/SearchPictureCom/SearchPicture.vue'
import { SearchSourceType } from './constants';

export default {
  name: 'SearchPicture',
  components: {
    SearchPictureCom
  },
  data() {
    return {
      SearchSourceType
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
