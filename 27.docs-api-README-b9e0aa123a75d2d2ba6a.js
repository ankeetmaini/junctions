webpackJsonp([27],{

/***/ 108:
/***/ function(module, exports, __webpack_require__) {

	'use strict';var _react = __webpack_require__(2);var _react2 = _interopRequireDefault(_react);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
	
	
	module.exports = function ({ factories = {} }) {
	  var {
	    wrapper = (0, _react.createFactory)('div'),
	    a = (0, _react.createFactory)('a'),
	    codeBlock = (props, children) => _react2.default.createElement('pre', props, _react2.default.createElement('code', { dangerouslySetInnerHTML: { __html: children || props.children } })),
	    h2 = (0, _react.createFactory)('h2'),
	    li = (0, _react.createFactory)('li'),
	    p = (0, _react.createFactory)('p'),
	    ul = (0, _react.createFactory)('ul') } =
	  factories;
	
	  return (
	    wrapper({},
	    p({},
	    "Junctions was designed to work great with React – without being tied to it. To facilitate this, its functionality has been separated into a core package and packages to integrate junctions with other libraries."),
	
	    h2({ "id": "core-package" },
	    "Core package"),
	
	    p({},
	    "The core package is called ",
	    a({ "href": "https://github.com/jamesknelson/react" },
	    "junctions"),
	
	    ". It contains the important parts. In particular:"),
	
	    ul({},
	    li({},
	    a({ "href": "/docs/api/junctions/createJunction.md" },
	    "createJunction"),
	
	    ", used to define new ",
	    a({ "href": "/docs/api/junctions/Junction.md" },
	    "Junction"),
	
	    " objects"),
	
	    li({},
	    a({ "href": "/docs/api/junctions/createConverter.md" },
	    "createConverter"),
	
	    ", used to create your application-wide ",
	    a({ "href": "/docs/api/junctions/Converter.md" },
	    "Converter"),
	
	    " object"),
	
	    li({},
	    a({ "href": "/docs/api/junctions/routesMatch.md" },
	    "routesMatch"),
	
	    ", used to check if two ",
	    a({ "href": "/docs/api/junctions/Route.md" },
	    "Route"),
	
	    " objects are equivalent"),
	
	    li({},
	    a({ "href": "/docs/api/junctions/locationsEqual.md" },
	    "locationsEqual"),
	
	    ", used to check if two ",
	    a({ "href": "/docs/api/junctions/Location.md" },
	    "Location"),
	
	    " objects are exactly equal")),
	
	
	    h2({ "id": "integration-packages" },
	    "Integration packages"),
	
	    p({},
	    "Additional packages are available to ease integration with other tools and libraries:"),
	
	    ul({},
	    li({},
	    a({ "href": "https://github.com/jamesknelson/react-junctions" },
	    "react-junctions"),
	
	    " provides components for React"),
	
	    li({},
	    a({ "href": "https://github.com/jamesknelson/react-router-junctions" },
	    "react-router-junctions"),
	
	    " allows you to mount a Junctions-based Component in a react-router app")),
	
	
	    h2({ "id": "importing" },
	    "Importing"),
	
	    p({},
	    "Functions and classes are top-level exports. State types cannot be created by themselves, but are returned from some of the top level functions."),
	
	    codeBlock({ "className": "language-js" }, "<span class=\"token comment\" spellcheck=\"true\">// ES6</span>\n<span class=\"token keyword\" >import</span> <span class=\"token punctuation\" >{</span> createJunction <span class=\"token punctuation\" >}</span> <span class=\"token keyword\" >from</span> <span class=\"token string\" >'junctions'</span>\n\n<span class=\"token comment\" spellcheck=\"true\">// ES5</span>\n<span class=\"token keyword\" >var</span> createJunction <span class=\"token operator\" >=</span> <span class=\"token function\" >require</span><span class=\"token punctuation\" >(</span><span class=\"token string\" >'junctions'</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >.</span>createJunction\n\n<span class=\"token comment\" spellcheck=\"true\">// UMD</span>\n<span class=\"token keyword\" >var</span> createJunction <span class=\"token operator\" >=</span> Junctions<span class=\"token punctuation\" >.</span>createJunction\n")));
	
	
	};
	module.exports = __webpack_require__(1).markdownPostProcessor(module.exports);
	module.exports.meta = {
	  "title": "About The API"
	}


/***/ }

});