webpackJsonp([24],{

/***/ 111:
/***/ function(module, exports, __webpack_require__) {

	'use strict';var _react = __webpack_require__(2);var _react2 = _interopRequireDefault(_react);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
	
	
	module.exports = function ({ factories = {} }) {
	  var {
	    wrapper = (0, _react.createFactory)('div'),
	    a = (0, _react.createFactory)('a'),
	    code = (0, _react.createFactory)('code'),
	    codeBlock = (props, children) => _react2.default.createElement('pre', props, _react2.default.createElement('code', { dangerouslySetInnerHTML: { __html: children || props.children } })),
	    em = (0, _react.createFactory)('em'),
	    h2 = (0, _react.createFactory)('h2'),
	    li = (0, _react.createFactory)('li'),
	    p = (0, _react.createFactory)('p'),
	    ul = (0, _react.createFactory)('ul') } =
	  factories;
	
	  return (
	    wrapper({},
	    p({},
	    "A type of object produced and consumed by the ",
	    a({ "href": "https://github.com/mjackson/history" },
	    "history"),
	
	    " package, representing one state of the browser’s URL and HTML5 History."),
	
	    p({},
	    code({}, "Location"),
	    " objects are plain-old JavaScript. You can create them with object literals."),
	
	    h2({ "id": "properties" },
	    "Properties"),
	
	    ul({},
	    li({},
	    code({}, "pathname"),
	    " (",
	    em({},
	    "string"),
	
	    ")"),
	
	    li({},
	    code({}, "search"),
	    " (",
	    em({},
	    "string"),
	
	    ")"),
	
	    li({},
	    code({}, "hash"),
	    " (",
	    em({},
	    "string"),
	
	    ")"),
	
	    li({},
	    code({}, "state"),
	    " (",
	    em({},
	    "object"),
	
	    ")")),
	
	
	    h2({ "id": "example" },
	    "Example"),
	
	    codeBlock({ "className": "language-js" }, "<span class=\"token keyword\" >const</span> myLocation <span class=\"token operator\" >=</span> <span class=\"token punctuation\" >{</span>\n  <span class=\"token comment\" spellcheck=\"true\">// These two parts correspond to the URL</span>\n  pathname<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'/contact/15/payments'</span><span class=\"token punctuation\" >,</span>\n  search<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'?order=date&amp;where=paid:false'</span>\n\n  <span class=\"token comment\" spellcheck=\"true\">// This part corresponds to the HTML5 History state</span>\n  state<span class=\"token punctuation\" >:</span> <span class=\"token punctuation\" >{</span>\n\n    <span class=\"token comment\" spellcheck=\"true\">// Junctions stores any information which cannot fit in the URL under a</span>\n    <span class=\"token comment\" spellcheck=\"true\">// `$$junctions` key within HTML5 History state</span>\n    $$junctions<span class=\"token punctuation\" >:</span> <span class=\"token punctuation\" >{</span>\n      <span class=\"token string\" >'main'</span><span class=\"token punctuation\" >:</span> <span class=\"token punctuation\" >{</span> branchKey<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'AddContactModal'</span> <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n    <span class=\"token punctuation\" >}</span>\n  <span class=\"token punctuation\" >}</span>\n<span class=\"token punctuation\" >}</span>\n")));
	
	
	};
	module.exports = __webpack_require__(1).markdownPostProcessor(module.exports);
	module.exports.meta = {
	  "title": "Location"
	}


/***/ }

});