<style lang="less">

  * {
    margin: 0;
    padding: 0;
  }

  #blo {
    height: 300px;
    background-color: #3fb3ff;
    position: relative;
    div {
      position: absolute;
      height: 200px;
      width: 200px;
      background-color: #000000;
      top:50%;
      left:50%;
      transform: translate(-50%,-50%);
    }
  }
    .container {
      height: 200px;
      background-color: #2c71ff;
      text-align: center;
      line-height: 200px;
    }
</style>

<template>
  <!--
   1.行内元素
      水平居中 text-align:center;
      垂直居中 line-height:height
   2.块级元素
      1.绝对定位，transform：

   -->
  <div>
    <div id="blo">
      <div></div>
    </div>
    <div class="container">
      aaaa
    </div>

  </div>
</template>

<script type="text/ecmascript-6">
  export default {};
</script>

