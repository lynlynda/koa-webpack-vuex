/*
 *@Description基础请求类
 *@Date 2015-04-06
 *@Author yuanzhijia@jikexueyuan.com
 */
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _requestPromise = require('request-promise');

var _requestPromise2 = _interopRequireDefault(_requestPromise);

var _config = require('../config/config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SafeRequest = function () {
    function SafeRequest(ctx, url, data) {
        _classCallCheck(this, SafeRequest);

        this.ctx = ctx;
        this.url = url;
        this.data = data;
    }

    _createClass(SafeRequest, [{
        key: 'request',
        value: function request() {
            var _this = this;

            var rpOptions = {
                method: 'POST',
                uri: _config2.default.apiUrl + this.url,
                form: {
                    params: JSON.stringify(this.data)
                },
                headers: {
                    'content-type': 'application/x-www-form-urlencoded' // Set automatically 
                }
            };
            return new Promise(function (resolve, reject) {
                _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
                    return regeneratorRuntime.wrap(function _callee$(_context) {
                        while (1) {
                            switch (_context.prev = _context.next) {
                                case 0:
                                    _context.next = 2;
                                    return (0, _requestPromise2.default)(rpOptions).then(function (result) {
                                        var resp = JSON.parse(result);
                                        console.log('纯输出结果', resp);
                                        if (resp) {
                                            if (resp.error_code == 0) {
                                                resolve({
                                                    error_code: 0,
                                                    result: resp.result
                                                });
                                            } else {
                                                resolve({
                                                    error_code: 1,
                                                    result: resp.msg
                                                });
                                            }
                                        } else {
                                            resolve({
                                                error_code: 1,
                                                result: 'Fail to parse http response'
                                            });
                                        }
                                    }).catch(function (err) {
                                        reject({
                                            error_code: 1,
                                            result: err
                                        });
                                    });

                                case 2:
                                case 'end':
                                    return _context.stop();
                            }
                        }
                    }, _callee, _this);
                }))();
            });
        }
    }]);

    return SafeRequest;
}();

exports.default = SafeRequest;
;