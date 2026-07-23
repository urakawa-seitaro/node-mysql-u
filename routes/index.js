const express = require('express');
const router = express.Router();
const mysql = require('mysql')

//let todos = [];

//データベースに繋げる。
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'todo_app'
});
//tasksテーブルのレコード全件を取得し。取得したデータ(results)とtodos:resultsに送る
router.get('/', function (req, res, next) {
  connection.query(
    `select * from tasks;`,
    (error, results) => {
      console.log(error);
      console.log(results);
      res.render('index', {
        title: 'ToDo App',
        todos: results,
      });
    }
  );
});


router.post('/', function (req, res, next) {
  connection.connect((err) => {
    if (err) {
      console.log('error connecting: ' + err.stack);
      return
    }
    console.log('success');
  });

  const todo = req.body.add;
  //SQL
  connection.query(
  `insert into tasks (user_id, content) values (1, '${todo}');`,
  (error, results) => {
      console.log(error);
      res.redirect('/');
    }
  );
});

module.exports = router;