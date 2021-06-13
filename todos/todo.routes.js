const express = require("express");
const todoService = require("./todo.service");
const router = express.Router();

router.get('/get', (req, res) => {
  try {
    const { key, value } = req.query;
    if (key && value) {
      const todos = todoService.filter(key, value);
      res.send({
        success: true,
        data: todos
      })
      return;
    }

    const todos = todoService.get();
    res.send({
      success: true,
      data: todos
    })
  } catch (e) {
    res.status(500).send({
      success: false,
      error: e.message || 'Something went wrong'
    })
  }
});


router.get('/get/:id', (req, res) => {
  try {
    const { id } = req.params;
    const todo = todoService.getById(id);
    res.send({
      success: true,
      data: todo
    })
  } catch (e) {
    res.status(500).send({
      success: false,
      error: e.message || 'Something went wrong'
    })
  }
});

router.delete('/delete/:id', (req, res) => {
  try {
    const { id } = req.params;
    const todo = todoService.delete(id);
    res.send({
      success: true,
      data: todo
    })
  } catch (e) {
    res.status(500).send({
      success: false,
      error: e.message || 'Something went wrong'
    })
  }
});

router.post('/add', (req, res) => {
  try {
    const data = req.body;
    const todo = todoService.add(data);
    res.send({
      success: true,
      data: todo
    });
  } catch (e) {
    res.status(500).send({
      success: false,
      error: e.message || 'Something went wrong'
    })
  }
});

module.exports = router;
