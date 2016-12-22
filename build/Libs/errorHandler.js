/*
 *@Description 极客学院爬虫系统 慕课网 model
 *@Author yuanzhijia@jikexueyuan.com
 *@Date 2015-5-26
 */
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var errorHandler = {
    error: function error(app) {
        var _this = this;

        app.use(function () {
            var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(ctx, next) {
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.prev = 0;
                                _context.next = 3;
                                return next();

                            case 3:
                                _context.next = 11;
                                break;

                            case 5:
                                _context.prev = 5;
                                _context.t0 = _context['catch'](0);

                                console.error(new Error(_context.t0));
                                ctx.status = _context.t0.status || 500;
                                // console.log('出错信息', err);
                                _context.next = 11;
                                return ctx.render('error/pages/500.html');

                            case 11:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, _this, [[0, 5]]);
            }));

            return function (_x, _x2) {
                return _ref.apply(this, arguments);
            };
        }());
        app.use(function () {
            var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee2(ctx, next) {
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                _context2.next = 2;
                                return next();

                            case 2:
                                if (!(404 != ctx.status)) {
                                    _context2.next = 4;
                                    break;
                                }

                                return _context2.abrupt('return');

                            case 4:
                                console.log(ctx.url, '404页面');
                                ctx.status = 404;
                                // console.log('404监听结束');
                                _context2.next = 8;
                                return ctx.render('error/pages/404.html');

                            case 8:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, _this);
            }));

            return function (_x3, _x4) {
                return _ref2.apply(this, arguments);
            };
        }());
    }
};
exports.default = errorHandler;