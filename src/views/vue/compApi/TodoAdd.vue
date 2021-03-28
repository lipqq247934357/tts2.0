<template>
  <div>
    <input type="text" name="todo" v-model="todoContent" />
    <div></div>
    <button @click="emitTodo">Add</button>
  </div>
</template>
<script>
import { ref } from "@vue/composition-api";
export default {
  setup(props, context) {

    const todoContent = ref("");
    const emitTodo = () => {
      const todo = {
        id: props.id,
        content: todoContent.value,
        completed: false,
      };
      context.emit("addTodo", todo);
    };
    return {
      todoContent,
      emitTodo,
    };
  },
};
</script>
<style scoped lang="less"></style>
