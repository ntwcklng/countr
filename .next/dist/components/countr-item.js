'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('/Users/marvinmieth/dev/countr/node_modules/react/react.js');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
  var countr = _ref.countr,
      inc = _ref.inc,
      decr = _ref.decr,
      del = _ref.del;
  return _react2.default.createElement(
    'div',
    { className: 'countr-item' },
    _react2.default.createElement(
      'div',
      { className: 'countr-item_decr-incr', onClick: decr },
      '-'
    ),
    _react2.default.createElement(
      'div',
      { className: 'countr-item_num', onClick: del },
      countr.n,
      _react2.default.createElement(
        'h6',
        null,
        countr.name
      )
    ),
    _react2.default.createElement(
      'div',
      { className: 'countr-item_decr-incr', onClick: inc },
      '+'
    )
  );
};