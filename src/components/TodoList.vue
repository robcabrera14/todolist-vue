<template>
  <h1>Todolist</h1>
  <div class="filter-search-container">
    <input type="search" name="" id="" class="search-input" placeholder="Search..." />
    <div class="filter-container">
      <button class="filter-btn btn btn-primary">Filter</button>
      <ul class="filter-list">
        <li class="filter-item">All</li>
        <li class="filter-item">Uncompleted</li>
        <li class="filter-item">Completed</li>
      </ul>
    </div>
  </div>
  <p class="todo-message">You have 5 todos left!</p>
  <ul class="todo-list">
    <li class="todo-item">
      <div class="todo-item-col-1">
        <label for="todo-check" class="todo-check-label">
          <FontAwesomeIcon icon="fa-solid fa-check" />
        </label>
        <input type="checkbox" name="" id="todo-check" class="todo-check" />
        <p class="todo-text">Learn HTML</p>
      </div>
      <button class="todo-delete-btn">
        <FontAwesomeIcon icon="fa-solid fa-trash" />
      </button>
    </li>
  </ul>
  <form action="" class="todo-form">
    <input type="text" name="" id="" class="todo-input" placeholder="Todo Title" />
    <div class="text-end">
      <button class="todo-btn btn btn-primary">Add <FontAwesomeIcon icon="fa-solid fa-plus" /></button>
    </div>
  </form>
</template>
