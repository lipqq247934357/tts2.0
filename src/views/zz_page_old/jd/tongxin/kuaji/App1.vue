<style lang="less">

</style>

<template>
  <div>
    <div>父级name:{{name}}</div>
    <App :name="name" :age="age" @changeName="changeName" @changeAge="changeAge"></App>
  </div>
</template>

<script type="text/ecmascript-6">
  import App from './App1Son';

  export default {
    components: {App},
    data() {
      return {
        name: 'lipeng',
        age: '25'
      };
    },
    methods: {
      changeName(name) {
        this.name = name;
      },
      changeAge(age) {
        this.age = age;
      }
    }
  };
</script>

