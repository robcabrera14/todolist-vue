<template>
  <TheHeading />
  <FilterSearchContainer>
    <SearchInput />
    <FilterContainer />
  </FilterSearchContainer>
  <TodoMessage :todosLeft="todosLeft" />
  <TodoList>
    <TodoItem v-for="todo in todos" :key="todo.id" :todo="todo" @delete-todo="deleteTodo" @check-todo="checkTodo" />
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
      title: '',
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
  },
  methods: {
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
