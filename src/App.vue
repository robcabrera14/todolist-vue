<template>
  <TheHeading />
  <FilterSearchContainer>
    <SearchInput @search-todo="searchTodo" />
    <FilterContainer @filter-todo="filterTodo" />
  </FilterSearchContainer>
  <TodoMessage :todosLeft="todosLeft" />
  <TodoList>
    <TodoItem v-for="todo in filteredTodos" :key="todo.id" :todo="todo" @delete-todo="deleteTodo" @check-todo="checkTodo" />
  </TodoList>
  <TodoForm @add-todo="addTodo" />
</template>

<script>
import SearchInput from './components/SearchInput';
import FilterContainer from './components/FilterContainer';
import FilterSearchContainer from './components/FilterSearchContainer';
import TheHeading from './components/TheHeading';
import TodoMessage from './components/TodoMessage';
import TodoList from './components/TodoList';
import TodoItem from './components/TodoItem';
import TodoForm from './components/TodoForm';

export default {
  components: {
    SearchInput,
    FilterContainer,
    FilterSearchContainer,
    TheHeading,
    TodoMessage,
    TodoList,
    TodoItem,
    TodoForm,
  },
  data() {
    return {
      query: '',
      filter: 'all',
      todos: [
        { id: 1, title: 'Learn HTML', isCompleted: false },
        { id: 2, title: 'Learn CSS', isCompleted: false },
        { id: 3, title: 'Learn JS', isCompleted: false },
        { id: 4, title: 'Learn PHP', isCompleted: false },
        { id: 5, title: 'Learn SQL', isCompleted: false },
      ],
    };
  },
  computed: {
    todosLeft() {
      return this.todos.filter(todo => !todo.isCompleted).length;
    },
    filteredTodos() {
      return this.todos.filter(todo => {
        const text = todo.title.toLowerCase().includes(this.query);
        if (this.filter && this.filter === 'completed') {
          return todo.isCompleted && text;
        } else if (this.filter && this.filter === 'uncompleted') {
          return !todo.isCompleted && text;
        } else {
          return text;
        }
      });
    },
  },
  methods: {
    searchTodo(event) {
      this.query = event.target.value.toLowerCase();
    },
    filterTodo(text) {
      this.filter = text;
    },
    addTodo(todo) {
      this.todos.push(todo);
    },
    deleteTodo(id) {
      this.todos = this.todos.filter(todo => todo.id !== id);
    },
    checkTodo(id) {
      const todoIndex = this.todos.findIndex(todo => todo.id === id);
      this.todos[todoIndex].isCompleted = !this.todos[todoIndex].isCompleted;
    },
  },
};
</script>
