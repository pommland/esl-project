const router = require('express').Router();
let Todo = require('../models/todo.model');

router.route('/').get((req, res) => {
    Todo.find()
      .then(todoes => res.json(todoes))
      .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const username = req.body.username;
    const description = req.body.description;
  
  
    const newTodo = new Todo({
      username,
      description,
  
    });
  
    newTodo.save()
    .then(() => res.json('Todo added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});
  


router.route('/:id').get((req, res) => {
  Todo.findById(req.params.id)
    .then(todoes => res.json(todoes))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Todo.findByIdAndDelete(req.params.id)
    .then(() => res.json('Exercise deleted'))
    .catch(err => res.status(400).json('Error' + err))
});

router.route('/update/:id').post((req, res) => {
    Todo.findById(req.params.id)
      .then(todo => {
        todo.username = req.body.username;
        todo.description = req.body.description;
      
  
        todo.save()
          .then(() => res.json('Exercise updated!'))
          .catch(err => res.status(400).json('Error: ' + err));
      })
      .catch(err => res.status(400).json('Error: ' + err));
  });



module.exports = router ; 