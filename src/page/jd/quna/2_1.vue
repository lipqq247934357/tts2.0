<style lang="less">
  * {
    margin: 0;
    padding: 0;
  }

</style>

<template>
  <div>
    <ul>
      <slot v-for="item in list" :item="item"></slot>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">

  export default {
    props: {
      content: {
        type: String,
        validate(value) {
          return value.length > 5;
        }
      }
    },
    data() {
      return {
        list: [1, 2, 3, 4, 5, 6, 111]
      };
    },
    methods: {},
    components: {}
  }
</script>

