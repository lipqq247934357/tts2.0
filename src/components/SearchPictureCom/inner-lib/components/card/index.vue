<template>
  <div>
    <div :class="`material-card-wrapper ${data.coverImgUrl ? 'hasCoverImg' : ''}`" @click="handleClick">
      <div class="img-wrapper">
        <div class="innerWrap">
          <img :src="getImgUrl(data)" alt="" />
        </div>
      </div>
      <div class="footer">
        <div class="footer-content">
          <span class="left">{{subStr(data.name, 20)}}</span>
          <span class="right" v-show="data.commitTime">{{ formatTime(data.commitTime) }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment';
import { computeMaterialCover } from '../../../../../utils/utils-global.js';
export default {
  name: 'Card',
  props: {
    data: {
      type: Object,
      default: () => { }
    }
  },
  data() {
    return {}
  },
  mounted() {
    console.log(this.data, 'this.data')
  },
  methods: {
    handleClick() {

    },
    subStr(str, n) {
      // eslint-disable-next-line no-control-regex
      const r = /[^\x00-\xff]/g;
      if (str.replace(r, '**').length <= n) {
        return str;
      }
      const m = Math.floor(n / 2);
      for (let i = m; i < str.length; i++) {
        if (str.substr(0, i).replace(r, '**').length >= n) {
          return `${str.substr(0, i)}...`;
        }
      }
      return str;
    },
    formatTime(time) {
      return time ? moment(time).format('YYYY/MM/DD') : '';
    },
    getImgUrl(data) {
      let imgUrl = '';
      // 设计素材，优先取 coverImgUrl
      if (data.coverImgUrl) {
        imgUrl = data.coverImgUrl;
      } else {
        imgUrl = computeMaterialCover(data.sourceUrl);
      }
      return imgUrl;
    }
  }
}
</script>

<style lang="scss" scoped>
.material-card-wrapper {
  position: relative;
  display: inline-block;
  width: 100%;
  height: 100%;
  cursor: pointer;

  &:hover {
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.03), 0 4px 10px rgba(0, 0, 0, 0.02);
    transform: translateY(-2px);
    transition: transform 0.2s;
  }

  .img-wrapper {
    position: relative;
    z-index: 0;
    width: 100%;
    padding-top: 57%; // 保持宽高比
    background: linear-gradient(180deg, #fff 0%, #fafafa 100%);
    border-radius: 5px 5px 0 0;

    .innerWrap {
      position: absolute; // 设置容器
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      z-index: 2;
      border-radius: 4px;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      /* transform: translate(-50%, -50%); */
    }

    &::after {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      z-index: 1;
      display: inline-block;
      overflow: hidden;
      background-image: url('../../../../../assets/imgBg.svg');
      background-repeat: no-repeat;
      background-position: center;
      content: '';
    }
  }

  &.hasCoverImg .img-wrapper {
    background-image: url('../../../../../assets/transparent-bg.png');
  }

  .footer {
    position: relative;
    padding-top: 12%;
    background: #fff;
    border-radius: 0 0 5px 5px;

    .footer-content {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      padding: 0 8px;
      color: #1f243d;
      background: #fff;
      border-radius: 0 0 5px 5px;
    }

    // line-height: 45px;
    .left {
      width: 160px;
      overflow: hidden;
      white-space: nowrap;
      text-align: left;
      text-overflow: ellipsis;
      cursor: pointer;
    }
  }
}
</style>