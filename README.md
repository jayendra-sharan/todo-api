# todo-api
An API service for managing todos.

# Start using the dev server
## Steps
- Clone the repository
```
git clone https://github.com/jayendra-sharan/todo-api.git
```
- Install the depdencies
```
cd todo-api
yarn install
```
- Start the dev sever
```
yarn dev
```
# API List
### Add a Todo
Endpoint
```
/api/todos/add

Method: POST
```
Sample Request Body
```
{
  "title": "Test APIs",
  "description": "Test get calls",
  "priority": "Highest",
  "category": "Learning",
  "tags": "netlify, deployment",
  "dueDate": 1623605322366,
  "status": "Todo"
}
```

### Get all Todos
Endpoint
```
/api/todos/get

Method: GET
```

### Get a Todo by id
Endipoint
```
/api/todos/get/<id>

Method: GET
```

### Delete a Todo using id
Endpoint
```
/api/todos/delete/<id>

Method: DELETE
```

### Update/Modify a Todo using id
Endpoint
```
/api/todos/edit/<id>

Method: PUT
```
Sample Request Body
```
{
  "title": "New title",
  "description": "New description"
}
```

### Filter using key-value pair
Endpoint
```
/api/todos/get?key=status&value=done

Method: GET
```
