const express = require('express');
const router = express.Router();

router.get('/', function (req, res, next) {
    //nullとするとことでセッションを削除＝logout
  req.session = null;
  res.redirect('/');
});

module.exports = router;