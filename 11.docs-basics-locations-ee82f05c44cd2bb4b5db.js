webpackJsonp([11],{

/***/ 124:
/***/ function(module, exports, __webpack_require__) {

	'use strict';var _react = __webpack_require__(2);var _react2 = _interopRequireDefault(_react);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
	
	
	module.exports = function ({ factories = {} }) {
	  var {
	    wrapper = (0, _react.createFactory)('div'),
	    a = (0, _react.createFactory)('a'),
	    code = (0, _react.createFactory)('code'),
	    codeBlock = (props, children) => _react2.default.createElement('pre', props, _react2.default.createElement('code', { dangerouslySetInnerHTML: { __html: children || props.children } })),
	    em = (0, _react.createFactory)('em'),
	    li = (0, _react.createFactory)('li'),
	    p = (0, _react.createFactory)('p'),
	    strong = (0, _react.createFactory)('strong'),
	    ul = (0, _react.createFactory)('ul') } =
	  factories;
	
	  return (
	    wrapper({},
	    p({},
	    strong({},
	    "Note: The Guide is still only an outline. ",
	    a({ "href": "https://github.com/jamesknelson/junctions" },
	    "Pull Requests"),
	
	    " would be greatly appreciated!")),
	
	
	    ul({},
	    li({},
	    p({},
	    "One of the things that makes the web ",
	    em({},
	    "the web"),
	
	    " is that everything has a URL.")),
	
	
	    li({},
	    p({},
	    "In fact, everything that is displayed in a browser has a URL, which is displayed in the address bar.")),
	
	
	    li({},
	    p({},
	    "But applications can’t see the address bar, so how do they know the current URL?")),
	
	
	    li({},
	    p({},
	    "There is a JavaScript object containing this information that every application automatically has access to. It is old as JavaScript itself.")),
	
	
	    li({},
	    p({},
	    "This object is ",
	    code({}, "window.location"),
	    ", and it looks something like this:"))),
	
	
	
	    codeBlock({ "className": "language-js" }, "<span class=\"token punctuation\" >{</span>\n    pathname<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'/some/path'</span><span class=\"token punctuation\" >,</span>\n    search<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'?page=1&amp;pageSize=20'</span><span class=\"token punctuation\" >,</span>\n    hash<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'#top'</span><span class=\"token punctuation\" >,</span>\n<span class=\"token punctuation\" >}</span>\n"),
	    ul({},
	    li({},
	    p({},
	    "Within ",
	    em({},
	    "junctions.js"),
	
	    ", this object would be called a ",
	    code({}, "Location"),
	    " object.")),
	
	
	    li({},
	    p({},
	    "It represents a single ",
	    em({},
	    "location"),
	
	    " within your application.")),
	
	
	    li({},
	    p({},
	    "While a URL is certainly one way to represent a location, not all locations be represented with a single URL.")),
	
	
	    li({},
	    p({},
	    "For example, some applications contain modals. Modals ",
	    em({},
	    "feel"),
	
	    " like locations – it makes sense that after opening a modal, clicking the ",
	    em({},
	    "Back"),
	
	    " button should close it.")),
	
	
	    li({},
	    p({},
	    "But not every modal needs its own URL.")),
	
	
	    li({},
	    p({},
	    "How do we solve this?")),
	
	
	    li({},
	    p({},
	    "Modern browsers also have the concept of location ",
	    code({}, "state"),
	    ".")),
	
	
	    li({},
	    p({},
	    "This is an arbitrary object that can be associated with any item within your browser history, by using the browser’s ",
	    code({}, "window.history.pushState()"),
	    " method.")),
	
	
	    li({},
	    p({},
	    "The application’s current location ",
	    code({}, "state"),
	    " can be viewed at ",
	    code({}, "window.history.state"),
	    ".")),
	
	
	    li({},
	    p({},
	    "But to make things easier for you, Junctions assumes that your current ",
	    code({}, "state"),
	    " will be stored as part of a ",
	    code({}, "Location"),
	    " object.")),
	
	
	    li({},
	    p({},
	    "With this in mind, a ",
	    code({}, "Location"),
	    " object can look like this:"))),
	
	
	
	    codeBlock({ "className": "language-js" }, "<span class=\"token punctuation\" >{</span>\n    pathname<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'/some/path'</span><span class=\"token punctuation\" >,</span>\n    search<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'?page=1&amp;pageSize=20'</span><span class=\"token punctuation\" >,</span>\n    hash<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'#top'</span><span class=\"token punctuation\" >,</span>\n    state<span class=\"token punctuation\" >:</span> <span class=\"token punctuation\" >{</span>\n        showAddModal<span class=\"token punctuation\" >:</span> <span class=\"token boolean\" >true</span><span class=\"token punctuation\" >,</span>\n    <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n<span class=\"token punctuation\" >}</span>\n"),
	    ul({},
	    li({},
	    p({},
	    "In fact, the format of this ",
	    code({}, "Location"),
	    " object is not unique to ",
	    em({},
	    "junctions.js"),
	
	    ". It is also used by the popular ",
	    a({ "href": "https://github.com/mjackson/history" },
	    "history"),
	
	    " package.")),
	
	
	    li({},
	    p({},
	    "For small applications, these ",
	    code({}, "Location"),
	    " objects provide all the information we need to handle routing.")),
	
	
	    li({},
	    p({},
	    "But as your app grows, feeding pieces of data from the current ",
	    code({}, "Location"),
	    " into associated components will become a hassle.")),
	
	
	    li({},
	    p({},
	    "The problem is that ",
	    code({}, "Location"),
	    " objects are ",
	    em({},
	    "flat"),
	
	    ", while a component-based application will be nested.")),
	
	
	    li({},
	    p({},
	    "To fix this problem, ",
	    em({},
	    "junctions.js"),
	
	    " gives you a more suitable way to represent location information, called ",
	    a({ "href": "/docs/basics/routes.md" },
	    "Routes"),
	
	    ".")))));
	
	
	
	
	
	};
	module.exports = __webpack_require__(1).markdownPostProcessor(module.exports);
	module.exports.meta = {
	  "title": "Locations"
	}


/***/ }

});