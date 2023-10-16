<template>
  <li class="todo-item">
    <div class="todo-item-col-1">
      <input type="checkbox" name="" :id="todo.id" class="todo-check" @change="$emit('check-todo', todo.id)" :checked="todo.isCompleted" />
      <label :for="todo.id" class="todo-check-label">
        <FontAwesomeIcon icon="fa-solid fa-check" />
      </label>
      <p class="todo-text">{{ todo.title }}</p>
    </div>
    <button class="todo-delete-btn" @click="$emit('delete-todo', todo.id)">
      <FontAwesomeIcon icon="fa-solid fa-trash" />
    </button>
  </li>
</template>

<script>
export default {
  props: {
    todo: {
      type: Object,
    },
  },
  emits: ['delete-todo', 'check-todo'],
};
</script>
