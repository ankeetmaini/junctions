webpackJsonp([18],{

/***/ 117:
/***/ function(module, exports, __webpack_require__) {

	'use strict';var _react = __webpack_require__(2);var _react2 = _interopRequireDefault(_react);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
	
	
	module.exports = function ({ factories = {} }) {
	  var {
	    wrapper = (0, _react.createFactory)('div'),
	    a = (0, _react.createFactory)('a'),
	    code = (0, _react.createFactory)('code'),
	    codeBlock = (props, children) => _react2.default.createElement('pre', props, _react2.default.createElement('code', { dangerouslySetInnerHTML: { __html: children || props.children } })),
	    em = (0, _react.createFactory)('em'),
	    h4 = (0, _react.createFactory)('h4'),
	    li = (0, _react.createFactory)('li'),
	    p = (0, _react.createFactory)('p'),
	    ul = (0, _react.createFactory)('ul') } =
	  factories;
	
	  return (
	    wrapper({},
	    p({},
	    em({},
	    "Note: The ",
	    a({ "href": "/docs/api/react-junctions/Router.md" },
	    "<Router>"),
	
	    " component has a ",
	    code({}, "<HistoryContext>"),
	    " built in. You ",
	    em({},
	    "do not need"),
	
	    " to use both ",
	    code({}, "<Router>"),
	    " and ",
	    code({}, "<HistoryContext>"),
	    "!")),
	
	
	    p({},
	    "Adds a ",
	    code({}, "history"),
	    " entry to the ",
	    a({ "href": "https://facebook.github.io/react/docs/context.html" },
	    "context"),
	
	    " of any child components."),
	
	    p({},
	    "Use this to avoid the need to directly pass a ",
	    a({ "href": "https://github.com/mjackson/history#properties" },
	    "History"),
	
	    " object to each ",
	    a({ "href": "/docs/api/react-junctions/Link.md" },
	    "<Link>"),
	
	    " element."),
	
	    h4({ "id": "props" },
	    "Props"),
	
	    ul({},
	    li({},
	    code({}, "history"),
	    " (",
	    em({},
	    "History"),
	
	    "): A history object.")),
	
	
	    h4({ "id": "child-context" },
	    "Child Context"),
	
	    ul({},
	    li({},
	    code({}, "history"),
	    " (",
	    em({},
	    "History"),
	
	    "): A history object.")),
	
	
	    h4({ "id": "example" },
	    "Example"),
	
	    codeBlock({ "className": "language-js" }, "<span class=\"token comment\" spellcheck=\"true\">// With HistoryContext</span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>HistoryContext</span> <span class=\"token attr-name\" >history</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>history<span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Link</span> <span class=\"token attr-name\" >to</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >{</span> pathname<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'/home'</span> <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span>Home<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Link</span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Link</span> <span class=\"token attr-name\" >to</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >{</span> pathname<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'/about'</span> <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span>About<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Link</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>HistoryContext</span><span class=\"token punctuation\" >></span></span>\n\n<span class=\"token comment\" spellcheck=\"true\">// Without HistoryContext</span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Link</span> <span class=\"token attr-name\" >history</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>history<span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >to</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >{</span> pathname<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'/home'</span> <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span>Home<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Link</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Link</span> <span class=\"token attr-name\" >history</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>history<span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >to</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >{</span> pathname<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'/about'</span> <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span>About<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Link</span><span class=\"token punctuation\" >></span></span>\n")));
	
	
	};
	module.exports = __webpack_require__(1).markdownPostProcessor(module.exports);
	module.exports.meta = {
	  "title": "<HistoryContext>"
	}


/***/ }

});