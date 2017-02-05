webpackJsonp([19],{

/***/ 116:
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
	    "Compares two ",
	    a({ "href": "/docs/api/junctions/Route.md" },
	    "Route"),
	
	    " objects."),
	
	    h4({ "id": "exact-match-mode" },
	    "Exact match mode"),
	
	    p({},
	    "If ",
	    code({}, "reqiureExact"),
	    " is true, this function will return ",
	    code({}, "true"),
	    " if ",
	    code({}, "partial"),
	    " and ",
	    code({}, "specific"),
	    " are identical."),
	
	    p({},
	    "Use this when you want to know if two routes are exactly the same."),
	
	    h4({ "id": "partial-match-mode" },
	    "Partial match mode"),
	
	    p({},
	    "If ",
	    code({}, "requireExact"),
	    " is false, this function will return ",
	    code({}, "true"),
	    " if the ",
	    code({}, "partial"),
	    " route does not contain any information which differs from that in the ",
	    code({}, "specific"),
	    " route."),
	
	    p({},
	    "Use this when you want to know if the active route is a child of some arbitrary route. For example, when you want to highlight menu items."),
	
	    h4({ "id": "arguments" },
	    "Arguments"),
	
	    ul({},
	    li({},
	    code({}, "specific"),
	    " (",
	    em({},
	    a({ "href": "/docs/api/junctions/Route.md" },
	    "Route")),
	
	
	    ")"),
	
	    li({},
	    code({}, "partial"),
	    " (",
	    em({},
	    a({ "href": "/docs/api/junctions/Route.md" },
	    "Route")),
	
	
	    ")"),
	
	    li({},
	    code({}, "requireExact"),
	    " (",
	    em({},
	    "bool"),
	
	    "): If false, will also return true for partial matches")),
	
	
	    h4({ "id": "returns" },
	    "Returns"),
	
	    p({},
	    "(",
	    em({},
	    "boolean"),
	
	    ")"),
	
	    h4({ "id": "example" },
	    "Example"),
	
	    p({},
	    "This function is used to handle the highlighting for the side menus on the ",
	    a({ "href": "https://junctions.js.org" },
	    "Junctions website"),
	
	    "."),
	
	    p({},
	    "This website uses a custom ",
	    code({}, "<Link>"),
	    " component which accepts the page’s current ",
	    code({}, "Route"),
	    " via ",
	    a({ "href": "https://facebook.github.io/react/docs/context.html" },
	    "React Context"),
	
	    ". It then compares the given route with the current route to decide whether to highlight the menu item."),
	
	    codeBlock({ "className": "language-js" }, "<span class=\"token keyword\" >const</span> active <span class=\"token operator\" >=</span>\n  <span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>context<span class=\"token punctuation\" >.</span>currentRoute <span class=\"token operator\" >&amp;&amp;</span>\n  <span class=\"token function\" >routesMatch</span><span class=\"token punctuation\" >(</span><span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>context<span class=\"token punctuation\" >.</span>currentRoute<span class=\"token punctuation\" >,</span> route<span class=\"token punctuation\" >,</span> <span class=\"token boolean\" >false</span><span class=\"token punctuation\" >)</span>\n")));
	
	
	};
	module.exports = __webpack_require__(1).markdownPostProcessor(module.exports);
	module.exports.meta = {
	  "title": "routesMatch"
	}


/***/ }

});