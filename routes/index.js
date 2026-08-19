const express = require('express');
const router = express.Router();
const knex = require('../db/knex');
//const mysql = require('mysql')

//let todos = [];

//データベースに繋げる。
//const connection = mysql.createConnection({
//  host: 'localhost',
//  user: 'root',
//  password: 'password',
//  database: 'todo_app'
//});
//tasksテーブルのレコード全件を取得し。取得したデータ(results)とtodos:resultsに送る
router.get('/', function (req, res, next) {
  //const userId = req.session.userid;
  //const isAuth = Boolean(userId);
  const isAuth = req.isAuthenticated();
  knex("tasks")
    .select("*")
    .then(function (results) {
      res.render('index', {
        title: 'ToDo App',
        todos: results,
        isAuth: isAuth,
      });
    })
    .catch(function (err) {
      console.error(err);
      res.render('index', {
        title: 'ToDo App',
        isAUth: isAuth,
        errorMessage: [err.sqlMessage],
      });
    });
});

//chapter 14
router.post('/', function (req, res, next) {
  //const userId = req.session.userid;
  //const isAuth = Boolean(userId);
  const isAuth = req.isAuthenticated();
  const todo = req.body.add;
  knex("tasks")
    .insert({user_id: 1, content: todo})
    .then(function () {
      res.redirect('/')
    })
    .catch(function (err) {
      console.error(err);
      res.render('index', {
        title: 'ToDo App',
        isAuth: isAuth,
        errorMessage: [err.sqlMessage],
      });
    });
});

router.use('/signup', require('./signup'));
router.use('/signin', require('./signin'));
router.use('/logout', require('./logout'));

module.exports = router;