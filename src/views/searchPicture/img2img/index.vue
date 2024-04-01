<template>
  <div>
    <div class="banner">
      <h2>图片生成</h2>
    </div>
    <div class="container-wrapper">
      <div>
        <div class="operate-container">
          <div class="origin-container">
            <div class="imgOrigin">
              <img v-if="sourceSrc" :src="sourceSrc" alt="" id="showIMG"
                style="width:100%;height:100%;object-fit: contain;" />
              <span v-if="sourceSrc">原图</span>
            </div>
            <div class="custom">
              <span style="margin-bottom: 20px">
                <span>相似度调节</span>
                <a-slider v-model="data.similar" :tip-formatter="formatter" :range="false" />
              </span>
              <span style="display:flex;justify-content: space-between;">
                <span>
                  <span>长度：</span>
                  <a-input-number v-model="data.height" :min="0" :max="10000" />
                </span>
                <span>
                  <span>宽度：</span>
                  <a-input-number v-model="data.width" :min="0" :max="10000" />
                </span>
              </span>
            </div>
          </div>
          <div class="style-control">
            <span>风格：</span>
            <a-radio-group v-model="data.style" :options="styleOptions" />
          </div>
        </div>

        <div class="operate">
          <!-- <input accept="image/*" type="file" @change="btnUploadFile" /> -->
          <a-button @click="generateNewImg">开始生成</a-button>
        </div>
      </div>
      <!-- 新的图片 -->
      <div class="img2img">
        <a-spin :spinning="loading" class="new-image-loading"></a-spin>
        <img v-if="src && !loading" :src="src" style="width: 100%;height: 100%;object-fit: contain;"
          @click="() => viewBigPic(src)" />
        <span v-if="src">生成的图</span>
      </div>
    </div>
  </div>
</template>

<script>
const styleOptions = [
  {
    label: '默认',
    value: 'default'
  },
  {
    label: '结构重绘',
    value: 'structure_remap'
  }
]

const StyleOptionsMap = {
    default: {},
    structure_remap: {
      "batch_size": 1,
      "steps": 20,
      "cfg_scale": 7,
      "alwayson_scripts": {
        "controlnet": {
          "args": [{
            "input_image": "",
            "module": "canny",
            "model": "control_v11p_sd15_canny [d14c016b]",
          }]
        }
      }
    }
  }


export default {
  name: 'Img2Img',
  data() {
    return {
      src: "",
      loading: false,
      sourceSrc: "",
      sourceSrcBase64: "",
      data: {
        similar: 20,
        width: 0,
        height: 0,
        style: 'default'
      },
      styleOptions
    }
  },
  created() {
    // 1.获取url上的img参数
    const url = window.location.href;
    const img = url.split('?img=')[1];
    if (!img) {
      // 弹窗提示参数异常
      this.$message.error('图片不能为空');
      return
    } else {
      this.getImg(img);
    }
  },
  methods: {
    getImg(url) {
      this.downloadImg({ filePath: url });
    },
    downloadImg(record) {
      const xhr = new XMLHttpRequest()
      this.xhr = xhr
      xhr.open('GET', decodeURIComponent(record.filePath), true)
      xhr.responseType = 'blob'
      xhr.onload = () => {
        if (xhr.status != 200) {
          this.$message.error('下载异常！')
          return
        }
        this.sourceSrc = window.URL.createObjectURL(xhr.response)
        // 获取图片尺寸
        this.getImageSize(this.sourceSrc).then(res => {
          this.data.width = res.width;
          this.data.height = res.height;
        })
        // 获取图片base64
        this.getImageBase64(this.sourceSrc).then(res => {
          this.sourceSrcBase64 = res;
        })
      }
      // xhr.onprogress = throttle(({ loaded, total }) => {
      //   this.imgLoad.percent = Math.round(loaded / total * 100)
      // }, 200)
      xhr.send()
    },
    getImageSize(imageUrl) {
      return new Promise(function (resolve, reject) {
        var img = new Image();

        img.onload = function () {
          var width = img.width;
          var height = img.height;

          resolve({ width: width, height: height });
        };

        img.onerror = function () {
          reject(new Error("无法加载图片"));
        };

        img.src = imageUrl;
      });
    },
    getImageBase64(imageUrl) {
      return new Promise(function (resolve, reject) {
        var canvas = document.createElement("canvas");
        var ctx = canvas.getContext("2d");
        var img = new Image();

        img.onload = function () {
          canvas.width = img.width;
          canvas.height = img.height;

          // 在画布上绘制图片
          ctx.drawImage(img, 0, 0);

          // 将画布内容转换为Base64编码
          var base64Data = canvas.toDataURL("image/jpeg"); // 可根据需要修改图片格式

          resolve(base64Data);
        };

        img.onerror = function () {
          reject(new Error("无法加载图片"));
        };

        img.src = imageUrl;
      });
    },
    btnUploadFile(e) {
      //获取图片
      var files = e.target.files;
      var file = files[0];
      // 接受 jpeg, jpg, png 类型的图片
      if (!/\/(?:jpeg|jpg|png)/i.test(file.type)) {
        return;
      }
      var reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result;
        console.log('base64String', base64String);
        this.sourceSrc = `${base64String}`
      };
      reader.readAsDataURL(file);
    },
    generateNewImg() {
      if (!this.sourceSrcBase64) {
        return false;
      }
      this.loading = true;
      this.$service.img2img.getImg(
        {
          ...{
            width: this.data.width,
            height: this.data.height,
            denoising_strength: this.data.similar / 100,
          },
          "init_images": [this.sourceSrcBase64.slice(23)],
          "resize_mode": 0,
          "image_cfg_scale": 0,
          "mask_blur": 4,
          "inpainting_fill": 0,
          "inpaint_full_res": true,
          "inpaint_full_res_padding": 0,
          "inpainting_mask_invert": 0,
          "initial_noise_multiplier": 0,
          "prompt": "",
          "styles": [
            "string"
          ],
          "seed": -1,
          "subseed": -1,
          "subseed_strength": 0,
          "seed_resize_from_h": -1,
          "seed_resize_from_w": -1,
          "sampler_name": "Euler a",
          "batch_size": 1,
          "n_iter": 1,
          "steps": 50,
          "cfg_scale": 7,
          "restore_faces": false,
          "tiling": false,
          "do_not_save_samples": false,
          "do_not_save_grid": false,
          "negative_prompt": "string",
          "eta": 0,
          "s_min_uncond": 0,
          "s_churn": 0,
          "s_tmax": 0,
          "s_tmin": 0,
          "s_noise": 1,
          "override_settings": {},
          "override_settings_restore_afterwards": true,
          "script_args": [],
          "sampler_index": "Euler",
          "include_init_images": false,
          "script_name": "",
          "send_images": true,
          "save_images": false,
          "alwayson_scripts": {},
          ...StyleOptionsMap[this.data.style]
        }
      ).then(res => {
        this.src = `data:image/Jpeg;base64,${res.images[0]}`;
        this.loading = false;
      }).catch(() => {
        this.loading = false;
      })
    },
    formatter(value) {
      return `${value}%`;
    },
    viewBigPic(src) {
      this.$modal.info({
        title: '查看大图',
        content: `<img src="${src}" style="width: 100%;height: 100%;object-fit: contain;" />`,
        width: 800,
        okText: '关闭',
        onOk() { },
      });
    }
  }
}
</script>
<style lang="scss" scoped>
.banner {
  height: 80px;
  position: relative;
  overflow: hidden;
  background-image: linear-gradient(45deg, rgb(90, 54, 148) 0%, rgb(19, 189, 206) 33%, rgb(0, 148, 217) 66%, rgb(111, 199, 181) 100%);
  height: 100%;

  >h2 {
    text-align: center;
    font-weight: 400;
    font-family: webfontx;
    color: #fff;
    font-size: 34px;
    line-height: 80px;
  }
}

.container-wrapper {
  display: flex;
  padding: 24px;

  >div:nth-child(1) {
    width: 60%;
  }

  >div:nth-child(2) {
    flex: 1;
  }

}

.operate-container {
  display: flex;
  justify-content: space-around;
  flex-direction: column;

  .origin-container {
    display: flex;
    flex-direction: row;

    .custom {
      display: flex;
      flex-direction: column;
      justify-content: center;
      min-width: 280px;
    }
  }

  .style-control {
    display: inline-block;
    margin-top: 30px;

    >span:nth-child(1) {
      margin-right: 20px;
    }

  }
}

.imgOrigin {
  width: 300px;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
}

.img2img {
  width: 500px;
  height: 500px;
  background: #eee;
  text-align: center;
  border-radius: 6px;
  padding: 12px;

  >span {
    display: inline-block;
    margin: 12px;
  }
}

// 生成新图按钮
.operate {
  margin-top: 60px;
  margin-left: 100px;
}

.new-image-loading {
  position: relative;
  top: 50%;
}
</style>
