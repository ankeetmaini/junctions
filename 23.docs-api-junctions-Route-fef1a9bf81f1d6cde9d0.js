webpackJsonp([23],{

/***/ 112:
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
	    li = (0, _react.createFactory)('li'),
	    p = (0, _react.createFactory)('p'),
	    ul = (0, _react.createFactory)('ul') } =
	  factories;
	
	  return (
	    wrapper({},
	    p({},
	    "Routes are objects which represent a single state of a ",
	    a({ "href": "/docs/api/junctions/Junction.md" },
	    "Junction"),
	
	    ". To learn more about what Routes are and how they’re used, read ",
	    a({ "href": "/docs/introduction/what-you-get-from-junctions.md" },
	    "What You Get From Junctions"),
	
	    " and ",
	    a({ "href": "/docs/basics/routes.md" },
	    "Routes"),
	
	    " in the Junctions Guide."),
	
	    p({},
	    "Route objects are most commonly used as props of your components. By checking a ",
	    a({ "href": "/docs/basics/the-screen-pattern.md" },
	    "Screen Component"),
	
	    "’s ",
	    code({}, "route"),
	    " prop, you can decide what content that screen should render."),
	
	    p({},
	    "Routes are also used as a way of referring to arbitrary locations within your application. They can be used in combination with a ",
	    code({}, "Converter"),
	    " or ",
	    code({}, "LocatedRoute"),
	    " object’s ",
	    a({ "href": "#locateroutes" },
	    "locate()"),
	
	    " method to produce ",
	    a({ "href": "/docs/api/junctions/Location.md" },
	    "Location"),
	
	    " objects used for navigating."),
	
	    h2({ "id": "route-vs-locatedroute" },
	    "Route vs. LocatedRoute"),
	
	    p({},
	    "There are two types of ",
	    code({}, "Route"),
	    " objects."),
	
	    ul({},
	    li({},
	    "Standard routes are created by calling a ",
	    code({}, "Junction"),
	    " object’s ",
	    a({ "href": "/docs/api/junctions/Junction.md#createroutekey-params-next" },
	    "createRoute()"),
	
	    " method."),
	
	    li({},
	    code({}, "LocatedRoute"),
	    " objects are returned by calling a ",
	    code({}, "Converter"),
	    " object’s ",
	    a({ "href": "/docs/api/junctions/Converter.md#routelocation" },
	    "route()"),
	
	    " method.")),
	
	
	    p({},
	    "The difference is that ",
	    code({}, "LocatedRoute"),
	    " objects have a ",
	    a({ "href": "#locateroutes" },
	    "locate()"),
	
	    " method, which acts like the ",
	    a({ "href": "/docs/api/junctions/Converter.md#locateroutes" },
	    "similarly named"),
	
	    " method on ",
	    code({}, "Converter"),
	    " but produces a ",
	    a({ "href": "/docs/api/junctions/Location.md" },
	    "Location"),
	
	    " which is ",
	    em({},
	    "relative"),
	
	    " to that ",
	    code({}, "LocatedRoute"),
	    "."),
	
	    h2({ "id": "properties" },
	    "Properties"),
	
	    ul({},
	    li({},
	    p({},
	    code({}, "key"),
	    " (",
	    em({},
	    "string"),
	
	    ")"),
	
	    p({},
	    "They key of the ",
	    a({ "href": "/docs/api/junctions/Junction.md" },
	    "Branch"),
	
	    " whose format this route follows")),
	
	
	    li({},
	    p({},
	    code({}, "params"),
	    " (",
	    em({},
	    "object"),
	
	    ")"),
	
	    p({},
	    "The values of any params which this route holds")),
	
	
	    li({},
	    p({},
	    code({}, "data"),
	    " (",
	    em({},
	    "object"),
	
	    ")"),
	
	    p({},
	    "The value of the ",
	    code({}, "data"),
	    " property defined on the associated branch in ",
	    a({ "href": "/docs/api/junctions/createJunction.md" },
	    "createJunction"),
	
	    ", if any")),
	
	
	    li({},
	    p({},
	    code({}, "next"),
	    " (",
	    em({},
	    a({ "href": "/docs/api/junctions/Route.md" },
	    "Route"),
	
	    " | { [key]: ",
	    a({ "href": "/docs/api/junctions/Route.md" },
	    "Route"),
	
	    " }"),
	
	    ")"),
	
	    p({},
	    "The ",
	    code({}, "Route"),
	    " object or objects which specify the state of any ",
	    code({}, "next"),
	    " junctions on the associated branch"))),
	
	
	
	    h4({ "id": "example" },
	    "Example"),
	
	    p({},
	    code({}, "Route"),
	    " objects are instances of an internal ",
	    code({}, "Route"),
	    " or ",
	    code({}, "LocatedRoute"),
	    " class, so they may not be represented by plain old JavaScript objects. With this in mind, here is an example of the ",
	    em({},
	    "shape"),
	
	    " which a ",
	    code({}, "Route"),
	    " object may take."),
	
	    codeBlock({ "className": "language-js" }, "<span class=\"token punctuation\" >{</span>\n  key<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'Invoices'</span><span class=\"token punctuation\" >,</span>\n  data<span class=\"token punctuation\" >:</span> <span class=\"token punctuation\" >{</span>\n    Component<span class=\"token punctuation\" >:</span> InvoicesScreen<span class=\"token punctuation\" >,</span>\n  <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n  params<span class=\"token punctuation\" >:</span> <span class=\"token punctuation\" >{</span>\n    id<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'15'</span><span class=\"token punctuation\" >,</span>\n  <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n  next<span class=\"token punctuation\" >:</span> <span class=\"token punctuation\" >{</span>\n    main<span class=\"token punctuation\" >:</span> <span class=\"token punctuation\" >{</span>\n      key<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'Payments'</span><span class=\"token punctuation\" >,</span>\n      data<span class=\"token punctuation\" >:</span> <span class=\"token punctuation\" >{</span>\n        Component<span class=\"token punctuation\" >:</span> InvoicePaymentsScreen<span class=\"token punctuation\" >,</span>\n      <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n      params<span class=\"token punctuation\" >:</span> <span class=\"token punctuation\" >{</span>\n        order<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'date'</span><span class=\"token punctuation\" >,</span>\n        where<span class=\"token punctuation\" >:</span> <span class=\"token punctuation\" >{</span> paid<span class=\"token punctuation\" >:</span> <span class=\"token boolean\" >false</span> <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n      <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n    <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n\n    modal<span class=\"token punctuation\" >:</span> <span class=\"token punctuation\" >{</span>\n      key<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'AddPayment'</span><span class=\"token punctuation\" >,</span>\n      data<span class=\"token punctuation\" >:</span> <span class=\"token punctuation\" >{</span>\n        Component<span class=\"token punctuation\" >:</span> AddPaymentScreen<span class=\"token punctuation\" >,</span>\n      <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n    <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n  <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n<span class=\"token punctuation\" >}</span>\n"),
	    h2({ "id": "methods" },
	    "Methods"),
	
	    h3({ "id": "locateroutes" },
	    "locate(…routes)"),
	
	    p({},
	    em({},
	    "This method is only available on ",
	    code({}, "LocatedRoute"),
	    " objects – i.e. those created by ",
	    code({}, "converter.route()"),
	    ". It is not available on routes created by ",
	    code({}, "junction.createRoute()"),
	    ".")),
	
	
	    p({},
	    "Create a new ",
	    a({ "href": "/docs/api/junctions/Location.md" },
	    "Location"),
	
	    " from the Location of this ",
	    a({ "href": "/docs/api/junctions/Route.md" },
	    "Route"),
	
	    ", but with ",
	    code({}, "next"),
	    " routes replaced by the arguments (or removed entirely in the case of no arguments)."),
	
	    h4({ "id": "arguments" },
	    "Arguments"),
	
	    ul({},
	    li({},
	    p({},
	    code({}, "...routes"),
	    " (",
	    em({},
	    a({ "href": "/docs/api/junctions/Route.md" },
	    "Route")),
	
	
	    ")"),
	
	    p({},
	    "Up to one ",
	    code({}, "Route"),
	    " for each ",
	    code({}, "Junction"),
	    " specified on the associated branch’s ",
	    code({}, "next"),
	    " Junction"))),
	
	
	
	    h4({ "id": "returns" },
	    "Returns"),
	
	    p({},
	    "(",
	    em({},
	    a({ "href": "/docs/api/junctions/Location.md" },
	    "Location")),
	
	
	    ") A ",
	    code({}, "Location"),
	    " which includes this Route’s ",
	    code({}, "Location"),
	    ", and extends it to also correspond to the passed in ",
	    code({}, "Route"),
	    " objects"),
	
	    h4({ "id": "example-2" },
	    "Example"),
	
	    p({},
	    "The ",
	    code({}, "locate"),
	    " method of a ",
	    code({}, "LocatedRoute"),
	    " is often passed to child components along with the route’s ",
	    code({}, "next"),
	    " route. This allows child components to create ",
	    code({}, "Location"),
	    " objects linking within the component – without knowing where in the application the component is mounted. For more details, read ",
	    a({ "href": "/docs/basics/the-screen-pattern.md" },
	    "The Screen Pattern"),
	
	    " in the Junctions Guide.")));
	
	
	
	};
	module.exports = __webpack_require__(1).markdownPostProcessor(module.exports);
	module.exports.meta = {
	  "title": "Route"
	}


/***/ }

});