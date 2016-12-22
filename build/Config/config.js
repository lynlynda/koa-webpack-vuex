'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var configMap = new Map(); //应用配置文件

configMap.set('port', 3000);
configMap.set('viewDir', _path2.default.join(__dirname, '..', 'views'));
configMap.set('logDir', _path2.default.join(__dirname, '..', 'logs'));
configMap.set('staticDir', _path2.default.join(__dirname, '..'));
//本地Map配置
var local = function local() {
    configMap.set('apiUrl', '192.168.1.1');
};
//服务端Map配置
var server = function server() {
    configMap.set('apiUrl', '0.0.0.0');
};
process.env.NODE_ENV = "development"; //production
if (process.env.NODE_ENV === 'development') {
    local();
} else {
    server();
}
exports.default = configMap;