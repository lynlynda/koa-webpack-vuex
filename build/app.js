/*
 *@Description 一灯学堂Vue SPA单页系统
 *@Author yuanzhijia@yidengxuetang.com
 *@Date 2016-12-01
 */
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _koa = require('koa');

var _koa2 = _interopRequireDefault(_koa);

var _koaConvert = require('koa-convert');

var _koaConvert2 = _interopRequireDefault(_koaConvert);

var _errorHandler = require('./Libs/errorHandler');

var _errorHandler2 = _interopRequireDefault(_errorHandler);

var _koaStatic = require('koa-static');

var _koaStatic2 = _interopRequireDefault(_koaStatic);

var _koaSimpleRouter = require('koa-simple-router');

var _koaSimpleRouter2 = _interopRequireDefault(_koaSimpleRouter);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _config = require('./Config/config');

var _config2 = _interopRequireDefault(_config);

var _controllerInit = require('./Controllers/controllerInit');

var _controllerInit2 = _interopRequireDefault(_controllerInit);

var _koaSwig = require('koa-swig');

var _koaSwig2 = _interopRequireDefault(_koaSwig);

var _co = require('co');

var _co2 = _interopRequireDefault(_co);

var _koaViews = require('koa-views');

var _koaViews2 = _interopRequireDefault(_koaViews);

require('babel-core/register');

require('babel-polyfill');

var _koaHistoryApiFallback = require('koa-history-api-fallback');

var _koaHistoryApiFallback2 = _interopRequireDefault(_koaHistoryApiFallback);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//koa1 转换器
var app = new _koa2.default();
app.use((0, _koaViews2.default)(_config2.default.get('viewDir'), {
    map: {
        html: 'swig'
    }
}));
app.use((0, _koaConvert2.default)((0, _koaHistoryApiFallback2.default)()));
_errorHandler2.default.error(app); //处理页面错误的处理句柄
_controllerInit2.default.getAllrouters(app, _koaSimpleRouter2.default); //初始化controllers
app.use((0, _koaConvert2.default)((0, _koaStatic2.default)(_config2.default.get('staticDir')))); // 静态资源文件
//监听端口🐂😊
app.listen(_config2.default.get('port'));
console.log('ydxtVueSystem listening on port %s', _config2.default.get('port'));
exports.default = app;