<template>
  <div>
    <ul>
      <li v-for="item in todos" :key="item">{{ item }}</li>
    </ul>
  </div>
</template>
<script>
export default {
  props: ["todos"],
};
</script>
<style scoped lang="less"></style>
