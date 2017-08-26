/**
 * Created by yongyuehuang on 2017/8/27.
 */
'use strict';
/*
* 该插件作用是设置文档的标题，这样你就不再需要使用react-document-title插件了。
*
* 使用方法非常简单
*
* import SetDocumentTitle from 'path/SetDocumentTitle'
     render() {
         return (
             <SetDocumentTitle title="文档标题">
                //这里仅能有一个唯一的root元素。
             </SetDocumentTitle>
         )
     }
*
* */
exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SetDocumentTitle = function (_React$Component) {
    _inherits(SetDocumentTitle, _React$Component);
    
    function SetDocumentTitle() {
        _classCallCheck(this, SetDocumentTitle);
        
        return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
    }
    
    SetDocumentTitle.prototype.setTitle = function setTitle() {
        var title = this.props.title;
        
        document.title = title;
    };
    
    SetDocumentTitle.prototype.componentDidMount = function componentDidMount() {
        this.setTitle();
    };
    
    SetDocumentTitle.prototype.componentDidUpdate = function componentDidUpdate() {
        this.setTitle();
    };
    
    SetDocumentTitle.prototype.render = function render() {
        return _react2.default.Children.only(this.props.children);
    };
    
    return SetDocumentTitle;
}(_react2.default.Component);

exports.default = SetDocumentTitle;

SetDocumentTitle.propTypes = {
    title: _propTypes2.default.string.isRequired
};