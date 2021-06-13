const { PRIORITY, STATUS } = require("./todo.constants");
const { getRandomId } = require('./todo.util');

function Todo({
  title,
  description,
  dueDate,
  priority,
  category,
  tags,
  status
}) {
  this.id = getRandomId();
  this.title = title;
  this.description = description;
  this.dueDate = dueDate;
  this.priority = priority || PRIORITY[4];
  this.category = category || "";
  this.tags = tags || "";
  this.status = status || STATUS.TODO
}

module.exports = Todo;
