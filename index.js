const express = require("express"),
  bodyParser = require("body-parser"),
  cors = require("cors"),
  PORT = require("./constants").PORT;

const todoRoutes = require("./todos/todo.routes");

const app = express();

app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(cors());

/**
 * Test API
 */
 app.get("/", (_, res) => {
  res.send({
    data: "Root test successful."
  });
});
app.get("/test", (_, res) => {
  res.send({
    data: "Test Successful."
  });
});

// todo-routes
app.use("/api/todos", todoRoutes);

app.listen(PORT, () => {
  console.log(`Node/Express server started at http://localhost:${PORT}`);
})
