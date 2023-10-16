<template>
  <li class="todo-item">
    <div class="todo-item-col-1">
      <label :for="todo.id" class="todo-check-label">
        <FontAwesomeIcon icon="fa-solid fa-check" />
      </label>
      <input type="checkbox" name="" :id="todo.id" class="todo-check" />
      <p class="todo-text">{{ todo.title }}</p>
    </div>
    <button class="todo-delete-btn">
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
};
</script>
