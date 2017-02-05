webpackJsonp([26],{

/***/ 109:
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
	    h3 = (0, _react.createFactory)('h3'),
	    h4 = (0, _react.createFactory)('h4'),
	    h5 = (0, _react.createFactory)('h5'),
	    li = (0, _react.createFactory)('li'),
	    p = (0, _react.createFactory)('p'),
	    ul = (0, _react.createFactory)('ul') } =
	  factories;
	
	  return (
	    wrapper({},
	    p({},
	    "Contains methods to convert between ",
	    a({ "href": "/docs/api/junctions/Location.md" },
	    "Location"),
	
	    " and ",
	    a({ "href": "/docs/api/junctions/Route.md" },
	    "Route"),
	
	    " objects. ",
	    code({}, "Converter"),
	    " objects are returned by the ",
	    a({ "href": "/docs/api/junctions/createConverter.md" },
	    "createConverter"),
	
	    " function."),
	
	    p({},
	    "You generally need exactly one ",
	    code({}, "Converter"),
	    " per application. This object will be in charge of turning the ",
	    code({}, "Location"),
	    " objects received from navigation events into ",
	    code({}, "Route"),
	    " objects."),
	
	    h2({ "id": "methods" },
	    "Methods"),
	
	    h3({ "id": "locateroutes" },
	    "locate(…routes)"),
	
	    p({},
	    "Convert ",
	    code({}, "Route"),
	    " objects to a ",
	    code({}, "Location"),
	    " object."),
	
	    p({},
	    "Use this method when you have a ",
	    code({}, "Route"),
	    " which you’d like to navigate, but you need a ",
	    code({}, "Location"),
	    " to actually perform this navigation. For example, this may occur when you want to call ",
	    a({ "href": "https://github.com/mjackson/history#navigation" },
	    "history.push()"),
	
	    ", or when you want to pass a route to a ",
	    a({ "href": "/docs/api/react-junctions/Link.md" },
	    "<Link>"),
	
	    "."),
	
	    h4({ "id": "arguments" },
	    "Arguments"),
	
	    ul({},
	    li({},
	    code({}, "...routes"),
	    " (",
	    em({},
	    a({ "href": "/docs/api/junctions/Route.md" },
	    "Route")),
	
	
	    "): One or many routes corresponding to the ",
	    a({ "href": "/docs/api/junctions/Junction.md" },
	    "Junction"),
	
	    " objects which ",
	    code({}, "createConverter"),
	    " was configured with.")),
	
	
	    h4({ "id": "returns" },
	    "Returns"),
	
	    p({},
	    "(",
	    em({},
	    a({ "href": "/docs/api/junctions/Location.md" },
	    "Location")),
	
	
	    ") A Location which is equivalent to the passed in Routes."),
	
	    h4({ "id": "example" },
	    "Example"),
	
	    codeBlock({ "className": "language-js" }, "<span class=\"token keyword\" >const</span> converter <span class=\"token operator\" >=</span> <span class=\"token function\" >createConverter</span><span class=\"token punctuation\" >(</span>junction<span class=\"token punctuation\" >)</span>\n\n<span class=\"token keyword\" >class</span> <span class=\"token class-name\" >Application</span> <span class=\"token keyword\" >extends</span> <span class=\"token class-name\" >Component</span> <span class=\"token punctuation\" >{</span>\n  <span class=\"token function\" >render</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n    <span class=\"token keyword\" >return</span> <span class=\"token punctuation\" >(</span>\n      <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>nav</span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Link</span> <span class=\"token attr-name\" >to</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>converter<span class=\"token punctuation\" >.</span><span class=\"token function\" >locate</span><span class=\"token punctuation\" >(</span>junction<span class=\"token punctuation\" >.</span><span class=\"token function\" >createRoute</span><span class=\"token punctuation\" >(</span><span class=\"token string\" >'home'</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span>Home<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Link</span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Link</span> <span class=\"token attr-name\" >to</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>converter<span class=\"token punctuation\" >.</span><span class=\"token function\" >locate</span><span class=\"token punctuation\" >(</span>junction<span class=\"token punctuation\" >.</span><span class=\"token function\" >createRoute</span><span class=\"token punctuation\" >(</span><span class=\"token string\" >'about'</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span>About<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Link</span><span class=\"token punctuation\" >></span></span>\n      <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>nav</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token punctuation\" >)</span>\n  <span class=\"token punctuation\" >}</span>\n<span class=\"token punctuation\" >}</span>\n"),
	    h3({ "id": "routelocation" },
	    "route(location)"),
	
	    p({},
	    "Convert a ",
	    code({}, "Location"),
	    " object to ",
	    code({}, "Route"),
	    " objects."),
	
	    p({},
	    "Used this method to handle browser navigation events which produce ",
	    code({}, "Location"),
	    " objects, such as ",
	    a({ "href": "https://github.com/mjackson/history#listening" },
	    "history.listen()"),
	
	    "."),
	
	    h4({ "id": "arguments-2" },
	    "Arguments"),
	
	    ul({},
	    li({},
	    code({}, "location"),
	    " (",
	    em({},
	    a({ "href": "/docs/api/junctions/Location.md" },
	    "Location")),
	
	
	    "): A Location object.")),
	
	
	    h4({ "id": "returns-2" },
	    "Returns"),
	
	    p({},
	    "(",
	    em({},
	    a({ "href": "/docs/api/junctions/Route.md" },
	    "Route"),
	
	    " | { [junctionKey]: Route | null } | undefined | null"),
	
	    ")."),
	
	    p({},
	    "The return format depends on the format of the Junction objects which the ",
	    code({}, "createConverter"),
	    " was configured with."),
	
	    ul({},
	    li({},
	    "If ",
	    code({}, "createConverter"),
	    " was passed a single ",
	    code({}, "Junction"),
	    " object, the return will be a single ",
	    code({}, "Route"),
	    "."),
	
	    li({},
	    "If ",
	    code({}, "createConverter"),
	    " was passed an object mapping keys to ",
	    code({}, "Junction"),
	    " objects, the return will be an object mapping those same keys to ",
	    code({}, "Route"),
	    " objects")),
	
	
	    p({},
	    "Additionally, there are two special cases:"),
	
	    ul({},
	    li({},
	    code({}, "null"),
	    " indicates that the received ",
	    code({}, "Location"),
	    " does not contain any routing information. For example, the URL ",
	    code({}, "/"),
	    "."),
	
	    li({},
	    code({}, "undefined"),
	    " indicates that a ",
	    code({}, "Location"),
	    " with unexpected information was received – i.e. 404.")),
	
	
	    h4({ "id": "examples" },
	    "Examples"),
	
	    h5({ "id": "given-a-with-parallel-junctions" },
	    "Given a ",
	    code({}, "Converter"),
	    " with Parallel Junctions"),
	
	    p({},
	    "Assuming the argument location is known, ",
	    code({}, "converter.route()"),
	    " will return an object specifying the routes for each Junction."),
	
	    codeBlock({ "className": "language-js" }, "<span class=\"token keyword\" >const</span> converter <span class=\"token operator\" >=</span> <span class=\"token function\" >createConverter</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >{</span>\n  main<span class=\"token punctuation\" >:</span> mainJunction<span class=\"token punctuation\" >,</span>\n  modal<span class=\"token punctuation\" >:</span> modalJunction<span class=\"token punctuation\" >,</span>\n<span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >)</span>\n\n<span class=\"token comment\" spellcheck=\"true\">// returns {</span>\n<span class=\"token comment\" spellcheck=\"true\">//   main: Route | null,</span>\n<span class=\"token comment\" spellcheck=\"true\">//   modal: Route | null,</span>\n<span class=\"token comment\" spellcheck=\"true\">// }</span>\n<span class=\"token keyword\" >const</span> routes <span class=\"token operator\" >=</span> converter<span class=\"token punctuation\" >.</span><span class=\"token function\" >route</span><span class=\"token punctuation\" >(</span>someLocation<span class=\"token punctuation\" >)</span>\n"),
	    h5({ "id": "given-a-with-a-single-junction" },
	    "Given a ",
	    code({}, "Converter"),
	    " with a single Junction"),
	
	    p({},
	    "Assuming the argument location is known, ",
	    code({}, "converter.route()"),
	    " will return a single Route."),
	
	    codeBlock({ "className": "language-js" }, "<span class=\"token keyword\" >const</span> converter <span class=\"token operator\" >=</span> <span class=\"token function\" >createConverter</span><span class=\"token punctuation\" >(</span>mainJunction<span class=\"token punctuation\" >)</span>\n\n<span class=\"token comment\" spellcheck=\"true\">// returns Route or null</span>\n<span class=\"token keyword\" >const</span> routes <span class=\"token operator\" >=</span> converter<span class=\"token punctuation\" >.</span><span class=\"token function\" >route</span><span class=\"token punctuation\" >(</span>someLocation<span class=\"token punctuation\" >)</span>\n")));
	
	
	};
	module.exports = __webpack_require__(1).markdownPostProcessor(module.exports);
	module.exports.meta = {
	  "title": "Converter"
	}


/***/ }

});