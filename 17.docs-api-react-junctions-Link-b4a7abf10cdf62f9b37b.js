webpackJsonp([17],{

/***/ 118:
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
	    "Create a special ",
	    code({}, "<a>"),
	    " tag which accepts a ",
	    a({ "href": "/docs/api/junctions/Location.md" },
	    "Location"),
	
	    " object, and handles clicks with ",
	    code({}, "pushState"),
	    " instead of standard navigation."),
	
	    p({},
	    "This component does not interact with the browser History API directly, but instead works through a ",
	    a({ "href": "https://github.com/mjackson/history#properties" },
	    "History"),
	
	    " object – allowing it to be used on both the server and the client."),
	
	    p({},
	    "To avoid passing ",
	    code({}, "history"),
	    " direcetly to every ",
	    code({}, "<Link>"),
	    " component, you can pass it through ",
	    a({ "href": "https://facebook.github.io/react/docs/context.html" },
	    "context"),
	
	    " via the ",
	    a({ "href": "/docs/api/react-junctions/HistoryContext.md" },
	    "<HistoryContext>"),
	
	    " or ",
	    a({ "href": "/docs/api/react-junctions/Router.md" },
	    "<Router>"),
	
	    " components."),
	
	    h4({ "id": "props" },
	    "Props"),
	
	    ul({},
	    li({},
	    code({}, "to"),
	    " (",
	    em({},
	    a({ "href": "/docs/api/junctions/Location.md" },
	    "Location")),
	
	
	    "): The location to navigate to."),
	
	    li({},
	    code({}, "history"),
	    " (",
	    em({},
	    "History"),
	
	    "): A history object – takes priority over any contextual history."),
	
	    li({},
	    em({},
	    "All other props are passed to the rendered ",
	    code({}, "<a>"),
	    " element."))),
	
	
	
	    h4({ "id": "consumable-context" },
	    "Consumable Context"),
	
	    ul({},
	    li({},
	    code({}, "history"),
	    " (",
	    em({},
	    "History"),
	
	    "): A history object.")),
	
	
	    h4({ "id": "example" },
	    "Example"),
	
	    codeBlock({ "className": "language-js" }, "<span class=\"token comment\" spellcheck=\"true\">// Props are passed to the underlying `&lt;a>` element</span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Link</span> <span class=\"token attr-name\" >to</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >{</span> pathname<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'/home'</span> <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >className</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>active <span class=\"token operator\" >?</span> <span class=\"token string\" >'active'</span> <span class=\"token punctuation\" >:</span> <span class=\"token string\" >''</span><span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span>Home<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Link</span><span class=\"token punctuation\" >></span></span>\n\n<span class=\"token comment\" spellcheck=\"true\">// Suppling a `target` prop prevents `pushState` from being called</span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Link</span> <span class=\"token attr-name\" >to</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >{</span> pathname<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'/home'</span> <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >target</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >'</span>_blank<span class=\"token punctuation\" >'</span></span><span class=\"token punctuation\" >></span></span>Home<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Link</span><span class=\"token punctuation\" >></span></span> \n\n<span class=\"token comment\" spellcheck=\"true\">// You can pass state too!</span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Link</span> <span class=\"token attr-name\" >to</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >{</span> state<span class=\"token punctuation\" >:</span> <span class=\"token punctuation\" >{</span> data<span class=\"token punctuation\" >:</span> <span class=\"token string\" >\"url won't change\"</span> <span class=\"token punctuation\" >}</span> <span class=\"token punctuation\" >}</span></span><span class=\"token attr-name\" >}</span> <span class=\"token attr-name\" >target</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >'</span>_blank<span class=\"token punctuation\" >'</span></span><span class=\"token punctuation\" >></span></span>Home<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Link</span><span class=\"token punctuation\" >></span></span> \n\n<span class=\"token comment\" spellcheck=\"true\">// Using contextual history</span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>HistoryContext</span> <span class=\"token attr-name\" >history</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>history<span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Link</span> <span class=\"token attr-name\" >to</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >{</span> pathname<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'/home'</span> <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span>Home<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Link</span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Link</span> <span class=\"token attr-name\" >to</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >{</span> pathname<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'/about'</span> <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span>About<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Link</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>HistoryContext</span><span class=\"token punctuation\" >></span></span>\n")));
	
	
	};
	module.exports = __webpack_require__(1).markdownPostProcessor(module.exports);
	module.exports.meta = {
	  "title": "<Link>"
	}


/***/ }

});