webpackJsonp([22],{

/***/ 113:
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
	    h5 = (0, _react.createFactory)('h5'),
	    li = (0, _react.createFactory)('li'),
	    p = (0, _react.createFactory)('p'),
	    ul = (0, _react.createFactory)('ul') } =
	  factories;
	
	  return (
	    wrapper({},
	    p({},
	    "Creates a ",
	    a({ "href": "/docs/api/junctions/Converter.md" },
	    "Converter"),
	
	    " object to help convert between ",
	    a({ "href": "/docs/api/junctions/Route.md" },
	    "Route"),
	
	    " and ",
	    a({ "href": "/docs/api/junctions/Location.md" },
	    "Location"),
	
	    " objects."),
	
	    h4({ "id": "arguments" },
	    "Arguments"),
	
	    ul({},
	    li({},
	    code({}, "junction"),
	    " (",
	    em({},
	    a({ "href": "/docs/api/junctions/Junction.md" },
	    "Junction"),
	
	    " | { [key]: ",
	    a({ "href": "/docs/api/junctions/Junction.md" },
	    "Junction"),
	
	    " }"),
	
	    "): The Junction or Junctions which specify the map between Route and Location."),
	
	    li({},
	    code({}, "baseLocation"),
	    " ",
	    em({},
	    _react2.default.createElement('small', null, ', "optional",')),
	
	
	
	    " (",
	    em({},
	    a({ "href": "/docs/api/junctions/Location.md" },
	    "Location")),
	
	
	    "): Location information which must be part of every ",
	    code({}, "Location"),
	    " object consumed and produced by this ",
	    code({}, "Converter"),
	    ".")),
	
	
	    h4({ "id": "returns" },
	    "Returns"),
	
	    p({},
	    "(",
	    em({},
	    a({ "href": "/docs/api/junctions/Converter.md" },
	    "Converter")),
	
	
	    ") A ",
	    code({}, "Converter"),
	    " object"),
	
	    h4({ "id": "examples" },
	    "Examples"),
	
	    h5({ "id": "typical-usage" },
	    "Typical Usage"),
	
	    p({},
	    "Pass a single ",
	    a({ "href": "/docs/api/junctions/Junction.md" },
	    "Junction"),
	
	    ", indicating that you expect ",
	    a({ "href": "/docs/api/junctions/Converter.md#routelocation" },
	    "converter.route()"),
	
	    " to return a single ",
	    code({}, "Route"),
	    " for any input ",
	    code({}, "Location"),
	    "."),
	
	    codeBlock({ "className": "language-js" }, "<span class=\"token comment\" spellcheck=\"true\">// Create a Converter for a single Junction</span>\n<span class=\"token keyword\" >const</span> converter <span class=\"token operator\" >=</span> <span class=\"token function\" >createConverter</span><span class=\"token punctuation\" >(</span>appJunction<span class=\"token punctuation\" >)</span>\n"),
	    h5({ "id": "multiple-junctions" },
	    "Multiple Junctions"),
	
	    p({},
	    "It is also possible to pass a ",
	    em({},
	    "group"),
	
	    " of Junctions, indicating that multiple Routes may be active simultaneously."),
	
	    p({},
	    "Use this feature when you want to allow one component to render multiple Routes simultaneously. For example, a modal ",
	    em({},
	    "and"),
	
	    " a tab bar."),
	
	    codeBlock({ "className": "language-js" }, "<span class=\"token keyword\" >const</span> converter <span class=\"token operator\" >=</span> <span class=\"token function\" >createConverter</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >{</span>\n\n  <span class=\"token comment\" spellcheck=\"true\">// This Junction represents your main navigation</span>\n  main<span class=\"token punctuation\" >:</span> <span class=\"token function\" >createJunction</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >{</span>\n    dashboard<span class=\"token punctuation\" >:</span> <span class=\"token punctuation\" >{</span> <span class=\"token keyword\" >default</span><span class=\"token punctuation\" >:</span> <span class=\"token boolean\" >true</span> <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n    invoices<span class=\"token punctuation\" >:</span> <span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n    contacts<span class=\"token punctuation\" >:</span> <span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n  <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >,</span>\n\n  <span class=\"token comment\" spellcheck=\"true\">// This Junction allows you to overlay a modal over your entire application</span>\n  modal<span class=\"token punctuation\" >:</span> <span class=\"token function\" >createJunction</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >{</span>\n    settings<span class=\"token punctuation\" >:</span> <span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n  <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >,</span>\n\n<span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >)</span>\n"),
	    h5({ "id": "base-location" },
	    "Base Location"),
	
	    p({},
	    "The optional ",
	    code({}, "baseLocation"),
	    " argument allows you to specify parts of your ",
	    code({}, "Location"),
	    " objects which should be ignored by ",
	    code({}, "converter.route()"),
	    ", and added to locations produced by ",
	    code({}, "converter.locate()"),
	    "."),
	
	    p({},
	    "Use this argument if your app is being served from a subdirectory, as opposed to the root of your domain."),
	
	    codeBlock({ "className": "language-js" }, "<span class=\"token keyword\" >const</span> baseLocation <span class=\"token operator\" >=</span> <span class=\"token punctuation\" >{</span>\n  pathname<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'/blog/'</span>\n<span class=\"token punctuation\" >}</span>\n<span class=\"token keyword\" >const</span> converter <span class=\"token operator\" >=</span> <span class=\"token function\" >createConverter</span><span class=\"token punctuation\" >(</span>appJunction<span class=\"token punctuation\" >,</span> baseLocation<span class=\"token punctuation\" >)</span>    \n")));
	
	
	};
	module.exports = __webpack_require__(1).markdownPostProcessor(module.exports);
	module.exports.meta = {
	  "title": "createConverter"
	}


/***/ }

});