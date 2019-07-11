<style lang="less">
  div.mt20 {
    margin-top: 50px;
  }
</style>

<template>
  <div>
    <div>第一种：$emit</div>
    <App :title="title" @updateTitle='updateTitle'></App>
    <input type="button" @click="updateTitle('xxx')" value="父亲更新title"/>


    <div class="mt20"></div>
    <div>第二种v-model</div>
    <App2 v-model="name"></App2>
    <div>父级的name：{{name}}</div>
    <input type="button" @click="updateName" value="父亲更新name"/>


    <div class="mt20">第三种自定义v-model</div>
    <div class="hello">
      <button @click="show=true">打开model</button>
      <App3 v-model="show"></App3>
    </div>


    <div class="mt20">第四种sync</div>
    <div class="hello">
      <App4 :age.sync='age'></App4>
      <div>{{age}}</div>
    </div>

    <div class="mt20">第五种</div>
    <div class="hello">
      <App5 ref="hahaA"></App5>
    </div>

  </div>
</template>

<script type="text/ecmascript-6">
  import App from './App1Son';
  import App2 from './App2Son';
  import App3 from './App3Son';
  import App4 from './App4Son';
  import App5 from './App5Son';

  export default {
    components: {App, App2, App3, App4, App5},
    data() {
      return {
        title: 'lipeng niu bi',
        name: 'lipeng',
        show: false,
        age: 23
      };
    },
    methods: {
      updateTitle(item) {
        this.title = item || 'lipeng very niu bi';
      },
      updateName() {
        this.name = 'lipeng zhen ba qi ';
      }
    },
    created() {
      setTimeout(() => {
        console.log(this.$refs.hahaA.data1)
      }, 300)
    }
  };
</script>

