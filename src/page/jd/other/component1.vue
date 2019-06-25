<style lang="less">
</style>
<template>
  <div>
    <input
      v-bind:value="name"
      v-on:input="$emit('input', $event.target.value)"
     type="text"  />
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props: ['name'],
    data: function () {
      return {};
    },
    created() {
    },
    methods: {}
  };
</script>

