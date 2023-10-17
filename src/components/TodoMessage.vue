<template>
  <p class="todo-message">You have {{ todosLeft }} todos left!</p>
</template>

<script>
export default {
  props: {
    todosLeft: Number,
  },
};
</script>
