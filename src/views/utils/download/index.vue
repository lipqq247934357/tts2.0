<template>
    <div>
        <!-- 第一种 -->
        <h1>第一种</h1>
        <el-button @click="open">window.open下载</el-button>
        <el-button @click="href">window.href下载</el-button>
        <!-- 第二种 -->
        <h1>第二种</h1>
        <!-- https://h-test.aixuexi.com/B:1008:K/1663171200/3a62696602cd4e188ceaa34dfd68d7ff.pdf
          https://h-test.aixuexi.com/B:1008:K/1663171200/e9861939f6ee4a989217b4a5a480f20f.zip
          https://h-test.aixuexi.com/B:1008:K/1663171200/7cbe708d433c40c7b4abfc8d38d14d7c.png -->

          <h3>非跨域文件：</h3>
          <a href="@/assets/img/IMG_1949.pdf" download="11.pdf">pdf  </a>  
          <a href="@/assets/img/IMG_1949.zip" download="11.zip">zip  </a>  
          <a href="@/assets/img/IMG_1949.jpeg" download="11.jpeg">png  </a>  
          <h3>跨域文件：可以直接打开的文件是无法下载的,无法直接打开的文件可以下载，但是无法修改文件名</h3>
          <a href="https://h-test.aixuexi.com/B:1008:K/1663171200/3a62696602cd4e188ceaa34dfd68d7ff.pdf" download>pdf  </a>  
          <a href="https://h-test.aixuexi.com/B:1008:K/1663171200/e9861939f6ee4a989217b4a5a480f20f.zip" download="11.zip">zip  </a>  
          <a href="https://h-test.aixuexi.com/B:1008:K/1663171200/7cbe708d433c40c7b4abfc8d38d14d7c.png" download>png  </a>  
        <h1>第三种</h1>
        <el-button @click="downloadBlob">window.open下载</el-button>
        <h1>第四种</h1>
        <!-- 参考链接：https://developer.qiniu.com/kodo/1659/download-setting -->
        <span><a href='http://baidu.com/a.pdf?attname=a.pdf'>下载</a></span>
    </div>
</template>
<script>
export default {
  data() {
    return {
      activeKey: '1',
      url: ''
    }
  },
  methods: {
    open() {
        // 仅支持 不可以直接打开的文件类型，如果可以直接查看的文件类型，打开的话会直接显示
        // window.open('https://h-test.aixuexi.com/B:1008:K/1663171200/3a62696602cd4e188ceaa34dfd68d7ff.pdf')
        window.open('https://h-test.aixuexi.com/B:1008:K/1663171200/e9861939f6ee4a989217b4a5a480f20f.zip')
    },
    href() {
        // 仅支持 不可以直接打开的文件类型，如果可以直接查看的文件类型，打开的话会直接在当前页显示
        // window.location.href = 'https://h-test.aixuexi.com/B:1008:K/1663171200/3a62696602cd4e188ceaa34dfd68d7ff.pdf'
        window.location.href = 'https://h-test.aixuexi.com/B:1008:K/1663171200/e9861939f6ee4a989217b4a5a480f20f.zip'
    },
    downloadBlob (path, name) {
        const xhr = new XMLHttpRequest();
        xhr.open('get', path);
        xhr.responseType = 'blob';
        xhr.send();
        xhr.onload = function () {
            if (this.status === 200 || this.status === 304) {
                // 如果是IE10及以上，不支持download属性，采用msSaveOrOpenBlob方法，但是IE10以下也不支持msSaveOrOpenBlob
                if ('msSaveOrOpenBlob' in navigator) {
                    navigator.msSaveOrOpenBlob(this.response, name);
                    return;
                }
                // const blob = new Blob([this.response], { type: xhr.getResponseHeader('Content-Type') });
                // const url = URL.createObjectURL(blob);
                const url = URL.createObjectURL(this.response);
                const a = document.createElement('a');
                a.style.display = 'none';
                a.href = url;
                a.download = name;
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);
                URL.revokeObjectURL(url);
            }
        };
        xhr.onprogress = throttle(({ loaded, total }) => {
            console.log(loaded, total);
      }, 200)
    }
  }
}
</script>
<style lang="scss" module>
    .qrcode {
        width: 200px;
        height: 200px;
    }
</style>
