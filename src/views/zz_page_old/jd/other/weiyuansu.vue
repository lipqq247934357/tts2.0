<style lang="less">


  a.name {

  }

  a#cc {
  }

  a::after {
    content:'';
    display: inline-block;
    margin-left: 10px;
    width: 20px;
    height: 20px;
    background: url('../img/img2.jpg');
  }

  a:link {
    color: #000;
  }

  a:hover {
    color: red;
  }

  a:visited {
    color: green;
  }

  a:active {
    color: blue;
  }


</style>

<template>
  <div>
    <a class="name" id="cc" href="https://www.baidu.com">百度一下</a>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {};
</script>

