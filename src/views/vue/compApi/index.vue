<template>
  <div>
    <TodoAdd @addTodo="addTodo"></TodoAdd>
    <TodoFilter></TodoFilter>
    <TodoList :todos="todos"></TodoList>
    <button @click="setNumber">设置数字为5</button>
    <button @click="getTwice">获取twice</button>
  </div>
</template>
<script>
import {
  ref,
  reactive,
  onMounted,
  watch,
  computed,
} from "@vue/composition-api";
import TodoAdd from "./TodoAdd";
import TodoFilter from "./TodoFilter";
import TodoList from "./TodoList";

export default {
  components: { TodoAdd, TodoFilter, TodoList },
  setup(props, context) {
    // ref给数据增加响应式
    const todos = ref([]);
    const addTodo = (todo) => {
      todos.value.push(todo.content);
    };

    // 声明周期函数
    onMounted(() => {
      console.log("1111");
    });

    // watch
    watch(todos, (newVal, oldVal) => {
      console.log("todos.value", todos.value);
    });

    const number = ref(0);
    const setNumber = () => {
      number.value = 5;
    };
    // computed
    const twice = computed(() => number.value * 2);
    const getTwice = () => {
      console.log("twice", twice.value);
    };
    return {
      todos,
      addTodo,
      number,
      twice,
      setNumber,
      getTwice,
    };
  },
};
</script>
<style scoped lang="less"></style>
