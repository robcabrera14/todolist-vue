<template>
  <TheHeading />
  <FilterSearchContainer>
    <SearchInput />
    <FilterContainer />
  </FilterSearchContainer>
  <TodoMessage />
  <TodoList>
    <TodoItem v-for="todo in todos" :key="todo.id" :todo="todo" @delete-todo="deleteTodo" />
  </TodoList>
  <TodoForm />
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
  data() {
    return {
      todos: [
        { id: 1, title: 'Learn HTML', isCompleted: false },
        { id: 2, title: 'Learn CSS', isCompleted: false },
        { id: 3, title: 'Learn JS', isCompleted: false },
        { id: 4, title: 'Learn PHP', isCompleted: false },
        { id: 5, title: 'Learn SQL', isCompleted: false },
      ],
    };
  },
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
  methods: {
    deleteTodo(id) {
      this.todos = this.todos.filter(todo => todo.id !== id);
    },
  },
};
</script>
