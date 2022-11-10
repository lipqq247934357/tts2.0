<template>
  <div>
    <canvas id="myCanvas" width="200" height="100" style="border:1px solid #c3c3c3;">
      您的浏览器不支持 HTML5 canvas 标签。
      sldkjflajdflskdjalfjfldsj
      撒大声地
      dfldksjfldskjfl
    </canvas>
  </div>
</template>

<script>
import { onMounted } from '@vue/composition-api'


export default {
  data() {
    return {}
  },
  setup() {
    onMounted(() => {
      let c = document.getElementById("myCanvas");
      let ctx = c.getContext("2d");
      ctx.fillStyle = "#FF0000";
      ctx.fillRect(0, 0, 150, 75);
    })
  }
}
</script>
<style lang="scss">
#div1 {
  width: 350px;
  height: 70px;
  padding: 10px;
  border: 1px solid #aaaaaa;
}
</style>
