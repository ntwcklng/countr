'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys = require('/Users/marvinmieth/dev/countr/node_modules/babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _stringify = require('/Users/marvinmieth/dev/countr/node_modules/babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

var _assign = require('/Users/marvinmieth/dev/countr/node_modules/babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

var _getPrototypeOf = require('/Users/marvinmieth/dev/countr/node_modules/babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('/Users/marvinmieth/dev/countr/node_modules/babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('/Users/marvinmieth/dev/countr/node_modules/babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('/Users/marvinmieth/dev/countr/node_modules/babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('/Users/marvinmieth/dev/countr/node_modules/babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('/Users/marvinmieth/dev/countr/node_modules/react/react.js');

var _react2 = _interopRequireDefault(_react);

var _countrItem = require('../components/countr-item');

var _countrItem2 = _interopRequireDefault(_countrItem);

var _header = require('../components/header');

var _header2 = _interopRequireDefault(_header);

var _style = require('../components/style');

var _style2 = _interopRequireDefault(_style);

var _v = require('uuid/v4');

var _v2 = _interopRequireDefault(_v);

var _reactModal = require('react-modal');

var _reactModal2 = _interopRequireDefault(_reactModal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Countr = function (_React$Component) {
  (0, _inherits3.default)(Countr, _React$Component);

  function Countr() {
    (0, _classCallCheck3.default)(this, Countr);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Countr.__proto__ || (0, _getPrototypeOf2.default)(Countr)).call(this));

    _this.state = {
      counter: {},
      modal: false,
      hash: ''
    };
    return _this;
  }

  (0, _createClass3.default)(Countr, [{
    key: 'openModal',
    value: function openModal() {
      var _this2 = this;

      this.setState({ modal: true }, function () {
        _this2.refs.addInput.focus();
      });
    }
  }, {
    key: 'closeModal',
    value: function closeModal() {
      this.setState({ modal: false });
    }
  }, {
    key: 'addCountr',
    value: function addCountr() {
      var input = this.refs.addInput.value;
      if (input.length > 25) {
        alert(input + ' is a bit too long. Max 25 Chars');
      }
      if (input && input.length <= 25) {
        this.closeModal();
        var id = (0, _v2.default)();
        var newCountr = {};
        newCountr[id] = {
          name: input.trim(),
          n: 0
        };
        var newCounter = (0, _assign2.default)({}, this.state.counter, newCountr);
        this.setState({
          counter: newCounter,
          hash: new Buffer((0, _stringify2.default)(newCountr)).toString('base64')
        });
      }
    }
  }, {
    key: 'handleDel',
    value: function handleDel(key) {
      var deleted = this.state.counter;
      var res = confirm('Delete ' + deleted[key].name + '?');
      if (res) {
        delete deleted[key];
        this.setState({
          counter: deleted,
          hash: new Buffer((0, _stringify2.default)(deleted)).toString('base64')
        });
      }
    }
  }, {
    key: 'handleCountrAct',
    value: function handleCountrAct(id, type) {
      var countr = this.state.counter;
      countr[id].n = type === 'DECR' ? countr[id].n - 1 : countr[id].n + 1;
      var newCountr = (0, _assign2.default)({}, this.state.counter, countr[id].n);
      this.setState({
        counter: newCountr,
        hash: new Buffer((0, _stringify2.default)(newCountr)).toString('base64')
      });
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (document.location.hash.length > 0) {
        var countr = JSON.parse(atob(document.location.hash.split('#')[1]));
        if ((0, _keys2.default)(countr).length > 0) {
          this.setState({
            counter: countr,
            hash: document.location.hash.split('#')[1]
          });
        }
      } else if ((0, _keys2.default)(JSON.parse(localStorage.counter)).length > 0) {
        var _countr = JSON.parse(localStorage.counter);
        this.setState({
          counter: _countr,
          hash: new Buffer((0, _stringify2.default)(_countr)).toString('base64')
        });
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      localStorage.counter = (0, _stringify2.default)(this.state.counter);
      console.log('did update', this.state.hash);
      location.hash = this.state.hash;
    }
  }, {
    key: 'renderCountr',
    value: function renderCountr() {
      var _this3 = this;

      var render = [];

      var _loop = function _loop(key) {
        render.push(_react2.default.createElement(_countrItem2.default, {
          key: key,
          countr: _this3.state.counter[key],
          n: _this3.state.counter[key],
          inc: function inc() {
            return _this3.handleCountrAct(key, 'INC');
          },
          decr: function decr() {
            return _this3.handleCountrAct(key, 'DECR');
          },
          del: function del() {
            return _this3.handleDel(key);
          }
        }));
      };

      for (var key in this.state.counter) {
        _loop(key);
      }
      return _react2.default.createElement(
        'div',
        null,
        render,
        _react2.default.createElement(
          'p',
          null,
          _react2.default.createElement(
            'a',
            { className: 'countr-share_link', href: '#' + this.state.hash },
            'share your countr'
          )
        )
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var _this4 = this;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_header2.default, null),
        _react2.default.createElement(
          'div',
          { className: 'app' },
          _react2.default.createElement(
            'style',
            null,
            _style2.default
          ),
          _react2.default.createElement(
            'h1',
            { onClick: function onClick() {
                return _this4.openModal();
              } },
            'countr+'
          ),
          _react2.default.createElement(
            'div',
            { className: 'countr-items' },
            _react2.default.createElement(
              _reactModal2.default,
              { closeTimeoutMS: 200, isOpen: this.state.modal, onRequestClose: function onRequestClose() {
                  return _this4.closeModal();
                }, contentLabel: 'Add Countr' },
              _react2.default.createElement(
                'div',
                { className: 'countr-modal_close', onClick: function onClick() {
                    return _this4.closeModal();
                  } },
                'close'
              ),
              _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement('input', { type: 'text', placeholder: 'Description', ref: 'addInput', className: 'countr-input_add' }),
                _react2.default.createElement(
                  'div',
                  { className: 'countr-modal_add', onClick: function onClick() {
                      return _this4.addCountr();
                    } },
                  'add'
                )
              )
            ),
            (0, _keys2.default)(this.state.counter).length > 0 ? this.renderCountr() : _react2.default.createElement(
              'h2',
              null,
              'click on countr+ to add new a counter.'
            )
          )
        )
      );
    }
  }]);
  return Countr;
}(_react2.default.Component);

exports.default = Countr;