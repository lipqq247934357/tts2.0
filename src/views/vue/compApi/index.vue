<template>
  <div>
    <TodoAdd @addTodo="addTodo"></TodoAdd>
    <TodoFilter></TodoFilter>
    <TodoList :todos="todos"></TodoList>
  </div>
</template>
<script>
import { ref, reactive } from "@vue/composition-api";
import TodoAdd from "./TodoAdd";
import TodoFilter from "./TodoFilter";
import TodoList from "./TodoList";

export default {
  components: { TodoAdd, TodoFilter, TodoList },
  setup() {
    const todos = ref([]);
    const addTodo = (todo) => {
      todos.value.push(todo.content);
    };
    return {
      todos,
      addTodo,
    };
  },
};
</script>
<style scoped lang="less"></style>
