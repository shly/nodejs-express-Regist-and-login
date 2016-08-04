var express = require('express');
var router = express.Router();
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.route("/login").get(function(req, res, next) {
	/*点击登录跳转到登录界面，get方法*/
  res.render('login', { title: 'login' });
}).post(function(req, res, next) {
	/*输入用户名和密码之后执行post操作*/
	res.send(req.body.name);
 
});
router.route("/regist").get(function(req, res, next) {
	/*点击注册跳转到注册界面，get方法*/
  res.render('regist', { title: 'regist' });
}).post(function(req, res, next) {
	/*输入用户名密码之后，点击提交执行post操作*/
  res.render('regist', { title: 'regist' });
});
module.exports = router;
