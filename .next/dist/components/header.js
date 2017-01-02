'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('/Users/marvinmieth/dev/countr/node_modules/react/react.js');

var _react2 = _interopRequireDefault(_react);

var _head = require('/Users/marvinmieth/dev/countr/node_modules/next/dist/lib/head.js');

var _head2 = _interopRequireDefault(_head);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  return _react2.default.createElement(
    'header',
    null,
    _react2.default.createElement(
      _head2.default,
      null,
      _react2.default.createElement(
        'title',
        null,
        'countr'
      ),
      _react2.default.createElement('meta', { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0' }),
      _react2.default.createElement(
        'style',
        null,
        '\n        * { box-sizing: border-box; margin: 0; padding: 0 }\n        html {\n          background-color: #fff;\n          font-family: Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace, serif;\n          text-rendering: geometricPrecision;\n          color: #424242;\n          font-size: 14px;\n          line-height: 24px;\n          width: 100%;\n          height: 100%;\n        }\n        a {\n          color: #067df7;\n          border-bottom: none;\n          text-decoration: none;\n        }\n      '
      )
    )
  );
};