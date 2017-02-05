webpackJsonp([28],{

/***/ 107:
/***/ function(module, exports, __webpack_require__) {

	'use strict';var _react = __webpack_require__(2);var _react2 = _interopRequireDefault(_react);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
	
	
	module.exports = function ({ factories = {} }) {
	  var {
	    wrapper = (0, _react.createFactory)('div'),
	    a = (0, _react.createFactory)('a'),
	    code = (0, _react.createFactory)('code'),
	    codeBlock = (props, children) => _react2.default.createElement('pre', props, _react2.default.createElement('code', { dangerouslySetInnerHTML: { __html: children || props.children } })),
	    h2 = (0, _react.createFactory)('h2'),
	    p = (0, _react.createFactory)('p') } =
	  factories;
	
	  return (
	    wrapper({},
	    p({},
	    "By wrapping your application with the ",
	    a({ "href": "/docs/api/react-junctions/HistoryContext.md" },
	    "<HistoryContext>"),
	
	    " and ",
	    a({ "href": "/docs/api/react-junctions/Router.md" },
	    "<Router>"),
	
	    "  components from the ",
	    code({}, "react-junctions"),
	    " package, you eliminate the need to pass ",
	    code({}, "history"),
	    " via props to each ",
	    a({ "href": "/docs/api/react-junctions/Link.md" },
	    "<Link>"),
	
	    "."),
	
	    h2({ "id": "example" },
	    "Example"),
	
	    codeBlock({ "className": "language-jsx" }, "<span class=\"token keyword\" >import</span> React <span class=\"token keyword\" >from</span> <span class=\"token string\" >'react'</span>\n<span class=\"token keyword\" >import</span> ReactDOM <span class=\"token keyword\" >from</span> <span class=\"token string\" >'react-dom'</span>\n<span class=\"token keyword\" >import</span> <span class=\"token punctuation\" >{</span> HistoryContext <span class=\"token punctuation\" >}</span> <span class=\"token keyword\" >from</span> <span class=\"token string\" >'react-junctions'</span>\n<span class=\"token keyword\" >import</span> AppScreen <span class=\"token keyword\" >from</span> <span class=\"token string\" >'./screens/AppScreen'</span>\n\n<span class=\"token keyword\" >function</span> <span class=\"token function\" >render</span><span class=\"token punctuation\" >(</span>history<span class=\"token punctuation\" >,</span> locate<span class=\"token punctuation\" >,</span> route<span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n  ReactDOM<span class=\"token punctuation\" >.</span><span class=\"token function\" >render</span><span class=\"token punctuation\" >(</span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>HistoryContext</span> <span class=\"token attr-name\" >history</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>history<span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span>\n      <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>AppScreen</span>\n        <span class=\"token attr-name\" >routes</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>route<span class=\"token punctuation\" >}</span></span>\n        <span class=\"token attr-name\" >locate</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>locate<span class=\"token punctuation\" >}</span></span>\n      <span class=\"token punctuation\" >/></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>HistoryContext</span><span class=\"token punctuation\" >></span></span><span class=\"token punctuation\" >,</span>\n    document<span class=\"token punctuation\" >.</span><span class=\"token function\" >getElementById</span><span class=\"token punctuation\" >(</span><span class=\"token string\" >'app'</span><span class=\"token punctuation\" >)</span>\n  <span class=\"token punctuation\" >)</span>\n<span class=\"token punctuation\" >}</span>\n")));
	
	
	};
	module.exports = __webpack_require__(1).markdownPostProcessor(module.exports);
	module.exports.meta = {
	  "title": "Pass history via context"
	}


/***/ }

});