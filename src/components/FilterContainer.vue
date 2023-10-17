<template>
  <div class="filter-container">
    <button class="filter-btn btn btn-primary" @click="showMenu">{{ btnText }}</button>
    <ul class="filter-list" :class="{ show: this.show }">
      <li class="filter-item" @click="filterTodo('all')">All</li>
      <li class="filter-item" @click="filterTodo('uncompleted')">Uncompleted</li>
      <li class="filter-item" @click="filterTodo('completed')">Completed</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      btnText: 'Filter',
      show: false,
    };
  },
  methods: {
    showMenu() {
      this.show = !this.show;
    },
    filterTodo(text) {
      this.$emit('filter-todo', text);
      this.showMenu();
      this.btnText = text.toLowerCase().replace(text.at(0), text.at(0).toUpperCase());
    },
  },
};
</script>
