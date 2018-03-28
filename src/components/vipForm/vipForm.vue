<style scoped lang="less">
  .title {
    color: #666666;
    font-size: .43rem;
    font-weight: bold;
    margin-bottom: .4rem;
  }

  ul {
    font-size: .34rem;
    border: 1px solid #eee;
  }

  li:first-child {
    background: #ffcbb2;
    color: #333;
  }

  li {
    list-style: none outside none;
    color: #666;
    border-bottom: 1px solid #eee;
    line-height: .85rem;
    span:first-child {
      float: left;
      display: block;
      width: 30%;
      text-align: center;
      border-right: 1px solid #eee;
    }
    span:nth-child(2) {
      display: block;
      float: left;
      width: 68%;
      text-align: center;
    }
  }

  li.red {
    color: #ff7e3f;
  }

</style>

<template>
  <div>
    <div class="title">特权说明</div>
    <ul>
      <li class="clearfix">
        <span>会员等级</span>
        <span>{{awardName}}</span>
      </li>
      <li class="clearfix" v-for="item in list" v-bind:class="{ red: item.vcid === vcId}">
        <span>{{item.name}}</span>
        <span>{{item.value}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    props: ['list', 'vcId', 'awardName']
  };
</script>
