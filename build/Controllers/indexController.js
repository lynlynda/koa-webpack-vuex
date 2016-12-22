/*
 *@Description 一灯学堂学习系统主路由
 *@Author yuanzhijia@yidengxuetang.com
 *@Date 2016-07-19
 */
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var data = {
    title: "yd vue framework"
};
var indexController = {
    index: function index() {
        var _this = this;

        return function () {
            var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(ctx, next) {
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return ctx.render('index.html', data);

                            case 2:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, _this);
            }));

            return function (_x, _x2) {
                return _ref.apply(this, arguments);
            };
        }();
    }
};
exports.default = indexController;