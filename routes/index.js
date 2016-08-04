var express = require('express');
var router = express.Router();
var persons=[];
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.route("/login").get(function(req, res, next) {
	/*点击登录跳转到登录界面，get方法*/
  res.render('login', { title: 'login' });
}).post(function(req, res, next) {
	/*输入用户名和密码之后执行post操作*/
	var name = req.body.name;
	var pwd = req.body.pwd;
	if(persons[name]==pwd){
		res.send('welcome '+req.body.name);
	}else{
		res.send('对不起，用户名或密码错误');
	}
});
router.route("/regist").get(function(req, res, next) {
	/*点击注册跳转到注册界面，get方法*/
  res.render('regist', { title: 'regist' });
}).post(function(req, res, next) {
	/*输入用户名密码之后，点击提交执行post操作*/
	var name = req.body.name;
	var pwd = req.body.pwd;
	/*判断用户名是否已存在*/
	if(persons[name]){
		res.send('对不起，用户名已存在');
	}else{
		persons[name] = pwd;
   		res.send('注册成功');
	}
	
});
module.exports = router;
