webpackJsonp([21],{

/***/ 114:
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
	    a({ "href": "/docs/api/junctions/Junction.md" },
	    "Junction"),
	
	    " object to specify the possible types of ",
	    a({ "href": "/docs/api/junctions/Route.md" },
	    "Route"),
	
	    " which a component can handle. For more details on Junctions, see the ",
	    a({ "href": "/docs/introduction/what-you-get-from-junctions.md" },
	    "What You Get From Junctions"),
	
	    " or ",
	    a({ "href": "/docs/basics/junctions.md" },
	    "Junctions"),
	
	    " articles in the Guide."),
	
	    h4({ "id": "arguments" },
	    "Arguments"),
	
	    p({},
	    "Accepts an object of ",
	    em({},
	    "branches"),
	
	    ", which define the types of ",
	    code({}, "Route"),
	    " which a component can render. The object keys are used to uniquely identify each route type."),
	
	    codeBlock({ "className": "language-js" }, "<span class=\"token punctuation\" >{</span>\n  <span class=\"token punctuation\" >[</span>key<span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >:</span> Branch<span class=\"token punctuation\" >,</span>\n<span class=\"token punctuation\" >}</span>\n"),
	    h5({ "id": "branch" },
	    "Branch"),
	
	    p({},
	    "Each ",
	    code({}, "Branch"),
	    " object contains configuration for one type of ",
	    code({}, "Route"),
	    ". It can include any of the following properties:"),
	
	    ul({},
	    li({},
	    p({},
	    code({}, "data"),
	    " (",
	    em({},
	    "object"),
	
	    ")"),
	
	    p({},
	    "Stores application-specific data, such as a Component used to render routes of this type.")),
	
	
	    li({},
	    p({},
	    code({}, "default"),
	    " (",
	    em({},
	    "boolean"),
	
	    ")"),
	
	    p({},
	    "If true, the Junction will default to this branch if no route is known. If a Junction does not specify a default, its state will default to ",
	    code({}, "null"),
	    ".")),
	
	
	    li({},
	    p({},
	    code({}, "next"),
	    " (",
	    em({},
	    a({ "href": "/docs/api/junctions/Junction.md" },
	    "Junction"),
	
	    " | { [key]: ",
	    a({ "href": "/docs/api/junctions/Junction.md" },
	    "Junction"),
	
	    " }"),
	
	    ")"),
	
	    p({},
	    "Specifies the subsequent types of routes which a route of this type can take. Like ",
	    a({ "href": "/docs/api/junctions/createConverter.md" },
	    "createConverter"),
	
	    ", specifying an object of Junctions will allow for one ",
	    code({}, "Route"),
	    " from each ",
	    code({}, "Junction"),
	    " to be active simultaneously.")),
	
	
	    li({},
	    p({},
	    code({}, "paramTypes"),
	    " (",
	    em({},
	    "{ [key]: Param }"),
	
	    ")"),
	
	    p({},
	    "Configures the parameters for routes of this type.")),
	
	
	    li({},
	    p({},
	    code({}, "path"),
	    " (",
	    em({},
	    "string"),
	
	    ")"),
	
	    p({},
	    "Specifies how routes of this type should be represented in URLs. If not specified, a default will be generated based on the branch’s key and required param types."))),
	
	
	
	    h5({ "id": "param" },
	    "Param"),
	
	    p({},
	    "Each parameter requires a configuration object. It can be blank, or it can have any combination of the following properties:"),
	
	    ul({},
	    li({},
	    p({},
	    code({}, "required"),
	    " (",
	    em({},
	    "boolean"),
	
	    ")"),
	
	    p({},
	    "If true, routes of this type cannot be created without this parameter.")),
	
	
	    li({},
	    p({},
	    code({}, "default"),
	    " (",
	    em({},
	    "value | function"),
	
	    ")"),
	
	    p({},
	    "If specified, routes which are not supplied with this parameter will be given a default value. If not specified, the parameter will default to ",
	    code({}, "undefined"),
	    ".")),
	
	
	    li({},
	    p({},
	    code({}, "serializer"),
	    " (",
	    em({},
	    "{ serialize, deserialize }"),
	
	    ")"),
	
	    p({},
	    "Define how this parameter’s values should be converted to and from strings such as URL components."))),
	
	
	
	    h4({ "id": "example" },
	    "Example"),
	
	    codeBlock({ "className": "language-js" }, "<span class=\"token keyword\" >const</span> appJunction <span class=\"token operator\" >=</span> <span class=\"token function\" >createJunction</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >{</span>\n  Home<span class=\"token punctuation\" >:</span> <span class=\"token punctuation\" >{</span>\n    <span class=\"token keyword\" >default</span><span class=\"token punctuation\" >:</span> <span class=\"token boolean\" >true</span><span class=\"token punctuation\" >,</span>\n    path<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'/dashboard'</span><span class=\"token punctuation\" >,</span>\n    data<span class=\"token punctuation\" >:</span> <span class=\"token punctuation\" >{</span>\n      Component<span class=\"token punctuation\" >:</span> DashboardScreen<span class=\"token punctuation\" >,</span>\n    <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n  <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n\n  Contacts<span class=\"token punctuation\" >:</span> <span class=\"token punctuation\" >{</span>\n    paramTypes<span class=\"token punctuation\" >:</span> <span class=\"token punctuation\" >{</span>\n      page<span class=\"token punctuation\" >:</span> <span class=\"token punctuation\" >{</span>\n        <span class=\"token keyword\" >default</span><span class=\"token punctuation\" >:</span> <span class=\"token number\" >1</span><span class=\"token punctuation\" >,</span>\n        serializer<span class=\"token punctuation\" >:</span> <span class=\"token punctuation\" >{</span>\n          serialize<span class=\"token punctuation\" >:</span> <span class=\"token punctuation\" >(</span>x<span class=\"token punctuation\" >)</span> <span class=\"token operator\" >=</span><span class=\"token operator\" >></span> x <span class=\"token operator\" >?</span> <span class=\"token function\" >String</span><span class=\"token punctuation\" >(</span>x<span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >:</span> <span class=\"token string\" >''</span><span class=\"token punctuation\" >,</span>\n          deserialize<span class=\"token punctuation\" >:</span> <span class=\"token punctuation\" >(</span>x<span class=\"token punctuation\" >)</span> <span class=\"token operator\" >=</span><span class=\"token operator\" >></span> x <span class=\"token operator\" >===</span> <span class=\"token string\" >''</span> <span class=\"token operator\" >?</span> <span class=\"token keyword\" >null</span> <span class=\"token punctuation\" >:</span> window<span class=\"token punctuation\" >.</span><span class=\"token function\" >parseInt</span><span class=\"token punctuation\" >(</span>x<span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >,</span>\n        <span class=\"token punctuation\" >}</span>\n      <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n    <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n    children<span class=\"token punctuation\" >:</span> ContactsScreen<span class=\"token punctuation\" >.</span>junctions<span class=\"token punctuation\" >,</span>\n    data<span class=\"token punctuation\" >:</span> <span class=\"token punctuation\" >{</span>\n      Component<span class=\"token punctuation\" >:</span> ContactsScreen<span class=\"token punctuation\" >,</span>\n    <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n  <span class=\"token punctuation\" >}</span>\n<span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >)</span>\n")));
	
	
	};
	module.exports = __webpack_require__(1).markdownPostProcessor(module.exports);
	module.exports.meta = {
	  "title": "createJunction"
	}


/***/ }

});