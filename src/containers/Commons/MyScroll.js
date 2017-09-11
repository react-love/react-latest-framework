/**
 * Created by yongyuehuang on 2017/8/27.
 */
'use strict';
/*
* 如果你在移动端项目尝试过IScroll5，就会发现他的卡顿问题很难完美解决，于是我就在react中封装了下面这个性能更好的组件。
* 该组件的作用和臭名昭著的IScroll插件相同，但是这个组件比IScroll封装的更好用，我已经在移动端项目全部页面使用了该组件。
* 组件使用教程可以查看我写的一篇博客：https://segmentfault.com/a/1190000010042474
* */
exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var JRoll = require('jroll');

var MyJRoll = function (_React$Component) {
    _inherits(MyJRoll, _React$Component);
    
    function MyJRoll(props) {
        _classCallCheck(this, MyJRoll);
        
        var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));
        
        _this.jroll = null;
        return _this;
    }
    
    MyJRoll.prototype.componentDidMount = function componentDidMount() {
        var wrappers = this.props.ID || 'wrappers';
        this.jroll = new JRoll('#' + wrappers);
        this.jroll.refresh();
    };
    
    MyJRoll.prototype.componentDidUpdate = function componentDidUpdate() {
        var _this2 = this;
        
        setTimeout(function () {
            return _this2.jroll.refresh();
        }, 400);
    };
    
    MyJRoll.prototype.render = function render() {
        var _props = this.props,
            height = _props.height,
            maxHeight = _props.maxHeight;
        
        var _style = void 0;
        if (!maxHeight) {
            _style = { height: height ? height : "100%" };
        } else {
            _style = { maxHeight: maxHeight };
        }
        return _react2.default.createElement(
            'div',
            { id: this.props.ID ? this.props.ID : 'wrappers', style: _style },
            _react2.default.createElement(
                'ul',
                { id: 'scroller', className: 'clearfix' },
                this.props.children
            )
        );
    };
    
    return MyJRoll;
}(_react2.default.Component);

exports.default = MyJRoll;