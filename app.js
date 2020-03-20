const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const Todo = require('./models/Todo')
const TodoList = require('./models/TodoList');

app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

const todoList = new TodoList()

app.get('/', (req, res) => {
  res.render('list', { list: todoList.tasks });
});

app.get('/add', (req, res) => {
  res.render('add-task');
})

app.post('/add', (req, res) => {
  const {title, dueDate} = req.body;
  const task = new Todo(title, dueDate)
  todoList.addTask(task);
  console.log(todoList.tasks)
  res.redirect('/');
});

app.post('/delete/:id', (req, res) => {
  const id = req.params.id;
  todoList.deleteTask(id)
  res.redirect('/');
});

app.post('/complete/:id', (req, res) => {
  const id = req.params.id;
  todoList.completeTask(id)
  res.redirect('/');
});

app.get('/update/:id', (req, res) => {
  const id = req.params.id
  res.render('update-task', {task: todoList.tasks[id]});
})

app.post('/update/:id', (req, res) => {
  const id = req.params.id;
  const {title, description, dueDate} = req.body;
  todoList.updateTask(id, title, description, dueDate);
  todoList.incompleteTask(id)
  console.log(todoList.tasks)
  res.redirect('/');
});

app.listen(port, function(){
  console.log(`Listening on port ${port}`);
});