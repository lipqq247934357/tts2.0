<style>
</style>
<template>
  <risk-assess></risk-assess>
</template>

<script type="text/ecmascript-6">
  import RiskAssess from "./riskAssess";

  export default {
    components: {
      'risk-assess': RiskAssess
    },
    created() {
      window.close_riskAssess = true;
    }
  }

</script>

