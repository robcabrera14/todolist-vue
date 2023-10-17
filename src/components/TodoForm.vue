<template>
  <form action="" class="todo-form" @submit.prevent="addTodo">
    <input type="text" name="" id="" class="todo-input" placeholder="Todo Title" ref="title" />
    <div class="text-end">
      <button class="todo-btn btn btn-primary">Add <FontAwesomeIcon icon="fa-solid fa-plus" /></button>
    </div>
  </form>
</template>

<script>
export default {
  methods: {
    addTodo() {
      const todo = { id: crypto.randomUUID(), title: this.$refs.title.value, isCompleted: false };
      this.$emit('add-todo', todo);
      this.$refs.title.value = '';
    },
  },
};
</script>
