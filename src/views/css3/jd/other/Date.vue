<style lang="less">
  * {
    margin: 0;
    padding: 0;
  }

  input.actived {
    border-width: 1px;
    border-color: #cf2927;
  }


</style>

<template>
  <div>
    <div>
      <input type="button" @click="removeStyle" value="取消文本框样式"><br>
      <input :class="[isActivied]" type="text" v-model="todoItem">
      <input :style="[styleObj]" type="button" value="add" @click="addToDoItem">
    </div>
    <div>
      <ul>
        <todo-list :content="item" :index="index" v-for="(item,index) in list"
                   @removeToDoItem="removeToDoItem"></todo-list>
      </ul>
    </div>
    <hr>
    <div v-if="show" data-info="v-if">aaaaa</div>
    <div v-show="show" data-info="v-show">aaaaa</div>
    <button @click="show = !show">updateShow</button>
    <hr>
    <div>
      <div v-for="(val,key,index) in userInfo">{{key}}----{{val}}----{{index}}</div>
      <div>
        <button @click="addUserInfo">增加用户信息</button>
      </div>
    </div>
    <hr>
  </div>
</template>

<script type="text/ecmascript-6">
  /**
   * 需求：一个输入框，一个按钮，将输入框中的内容放到list中展示，点击list中的内容将该内容删除
   * 思路：
   *  1.页面结构：
   *    input，text,input:button  ul >li
   *  1.5样式 暂时不写
   *  2.对按钮增加点击事件，在点击之后将输入框中的内容添加到list当中
   *  3.点击li的时候触发事件，删除list
   *
   *  使用组件化：将ul转化成一个组件
   */

  import Vue from 'vue';

  export default {
    data() {
      return {
        todoItem: '',
        list: ['李鹏真帅！', '李鹏真cool！'],
        isActivied: 'actived',
        styleObj: {
          color: 'red',
          fontSize: '20px'
        },
        show: true,
        userInfo: {
          name: 'lipeng',
          age: '23',
          sex: '男'
        }
      };
    },
    methods: {
      addToDoItem() {
        this.list.push(this.todoItem);
      },
      removeToDoItem(index) {
        this.list.splice(index, 1);
      },
      removeStyle() {
        this.isActivied = 'notActivied';
        this.styleObj.color = this.styleObj.color === 'red' ? 'black' : 'red';
        this.styleObj.fontSize = this.styleObj.fontSize === '20px' ? '40px' : '20px';
      },
      addUserInfo() {
        Vue.set(this.userInfo, 'weight', '75kg')
      }
    },
    components: {
      todoList: {
        props: ['content', 'index'],
        template: `<li @click="$emit('removeToDoItem',index)" >{{content}}</li>`
      }
    }
  }
</script>

