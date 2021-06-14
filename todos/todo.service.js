const { STATUS } = require("./todo.constants");
const { mockTodo } = require("./todo.mock");
const Todo = require('./todo.model');

function TodoService () {
  this.todos = mockTodo;
}

TodoService.prototype.get = function () {
  return this.todos;
}

TodoService.prototype.getById = function (id) {
  return this.todos.find(t => t.id === id);
}

TodoService.prototype.add = function (data) {
  const { title } = data;
  if (!title) {
    throw new Error(`Field: title is mandatory.`);
    return;
  }
  const todo = new Todo(data);
  this.todos = [
    ...this.todos,
    todo
  ];
  return todo;
}

TodoService.prototype.delete = function (id) {
  const todo = this.todos.find(t => t.id === id);
  if (todo) {
    this.todos = this.todos.filter(t => t.id !== id);
    return true;
  } else {
    return false;
  }
}

TodoService.prototype.filter = function(key, value) {
  return this.todos.filter(
    t => t[key] === STATUS[value.toUpperCase()]
  )
}

TodoService.prototype.edit = function(id, data) {
  const todo = this.getById(id);
  const updatedTodo = {
    ...todo,
    ...data
  };
  this.todos = this.todos.map((todo) => {
    if (todo.id === id) return updatedTodo;
    return todo;
  });
  return updatedTodo;
}

const todoService = new TodoService();
module.exports = todoService;
