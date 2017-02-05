webpackJsonp([25],{

/***/ 110:
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
	    "Junctions are objects which represents a number of possible ",
	    em({},
	    "choices"),
	
	    " – for example, the choices on a tab bar, a navigation menu, or the choice between whether a modal is displayed or not."),
	
	    p({},
	    "Within a ",
	    code({}, "Junction"),
	    " object, each ",
	    em({},
	    "possibility"),
	
	    " is represented by a ",
	    em({},
	    "Branch"),
	
	    " object. And within your application, a single ",
	    em({},
	    "state"),
	
	    " of a ",
	    code({}, "Junction"),
	    " is represent by a ",
	    a({ "href": "/docs/api/junctions/Route.md" },
	    "Route"),
	
	    " object."),
	
	    p({},
	    "To create a ",
	    code({}, "Junction"),
	    ", use the ",
	    a({ "href": "/docs/api/junctions/createJunction.md" },
	    "createJunction"),
	
	    " function. Once you have a Junction, use its ",
	    a({ "href": "#createroutekey-params-next" },
	    "createRoute()"),
	
	    " method to create ",
	    a({ "href": "/docs/api/junctions/Route.md" },
	    "Route"),
	
	    " objects which represent states of that Junction."),
	
	    p({},
	    "To learn more about what Junctions are and how they’re used, read ",
	    a({ "href": "/docs/introduction/what-you-get-from-junctions.md" },
	    "What You Get From Junctions"),
	
	    " and ",
	    a({ "href": "/docs/basics/junctions.md" },
	    "Junctions"),
	
	    " in the Junctions Guide."),
	
	    h3({ "id": "component-junctions" },
	    "Component Junctions"),
	
	    p({},
	    "By adding a Junction to a Component, you’re indicating that the Component expects to receive a single ",
	    code({}, "route"),
	    " prop, whose value must be a ",
	    code({}, "Route"),
	    " object following one of the formats defined by the Junctions’s branches."),
	
	    codeBlock({ "className": "language-js" }, "<span class=\"token comment\" spellcheck=\"true\">// Create a Junction which can hold one of three Route Types</span>\n<span class=\"token keyword\" >const</span> junction <span class=\"token operator\" >=</span> <span class=\"token function\" >createJunction</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >{</span>\n  Dashboard<span class=\"token punctuation\" >:</span> <span class=\"token punctuation\" >{</span> <span class=\"token keyword\" >default</span><span class=\"token punctuation\" >:</span> <span class=\"token boolean\" >true</span> <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n  Invoices<span class=\"token punctuation\" >:</span> <span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n  Help<span class=\"token punctuation\" >:</span> <span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n<span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >)</span>\n\n<span class=\"token keyword\" >class</span> <span class=\"token class-name\" >ApplicationScreen</span> <span class=\"token keyword\" >extends</span> <span class=\"token class-name\" >React<span class=\"token punctuation\" >.</span>Component</span> <span class=\"token punctuation\" >{</span>\n  <span class=\"token comment\" spellcheck=\"true\">// By adding `junction`, you're specifying that this component should</span>\n  <span class=\"token comment\" spellcheck=\"true\">// receive a `Route` object on its `route` property with one of the</span>\n  <span class=\"token comment\" spellcheck=\"true\">// keys defined above.</span>\n  <span class=\"token keyword\" >static</span> junction <span class=\"token operator\" >=</span> junction\n\n  <span class=\"token comment\" spellcheck=\"true\">// ...</span>\n<span class=\"token punctuation\" >}</span>\n"),
	    p({},
	    em({},
	    "See a similar in use at the ",
	    a({ "href": "/examples/Raw.example.js" },
	    "Raw"),
	
	    " live example!")),
	
	
	    h3({ "id": "composing-junctions" },
	    "Composing Junctions"),
	
	    p({},
	    "The main purpose of a Junction is to represent the possible navigation states of a single Component. But what if that Component is composed of ",
	    em({},
	    "other"),
	
	    " components, each of which has its own navigation states?"),
	
	    p({},
	    "As an example, imagine that the Component in the above example renders a ",
	    code({}, "<HelpScreen>"),
	    " component when the ",
	    code({}, "Help"),
	    " branch is selected. But then say that this ",
	    code({}, "<HelpScreen>"),
	    " component itself can take one of two possible states",
	    "In order to represent the possible navigation states within a single component."),
	
	    codeBlock({ "className": "language-js" }, "<span class=\"token keyword\" >class</span> <span class=\"token class-name\" >HelpScreen</span> <span class=\"token keyword\" >extends</span> <span class=\"token class-name\" >React<span class=\"token punctuation\" >.</span>Component</span> <span class=\"token punctuation\" >{</span>\n  <span class=\"token keyword\" >static</span> junction <span class=\"token operator\" >=</span> <span class=\"token function\" >createJunction</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >{</span>\n    DashboardHelp<span class=\"token punctuation\" >:</span> <span class=\"token punctuation\" >{</span> <span class=\"token keyword\" >default</span><span class=\"token punctuation\" >:</span> <span class=\"token boolean\" >true</span> <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n    InvoicesHelp<span class=\"token punctuation\" >:</span> <span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n  <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >)</span>\n<span class=\"token punctuation\" >}</span>\n"),
	    p({},
	    "Because the ",
	    code({}, "<ApplicationScreen>"),
	    " component composes the ",
	    code({}, "<HelpScreen>"),
	    ", the possible states of ",
	    code({}, "<HelpScreen>"),
	    " are ",
	    em({},
	    "also"),
	
	    " possible states of ",
	    code({}, "<ApplicationScreen>"),
	    " – but ",
	    em({},
	    "only"),
	
	    " when ",
	    code({}, "<ApplicationState>"),
	    " is rendering a ",
	    code({}, "Help"),
	    " route."),
	
	    p({},
	    "In order to represent this, each Branch within a ",
	    code({}, "Junction"),
	    " can also define its own ",
	    code({}, "next"),
	    " junction – representing the next choice which needs to be made if that branch is selected."),
	
	    codeBlock({ "className": "language-js" }, "<span class=\"token keyword\" >const</span> junction <span class=\"token operator\" >=</span> <span class=\"token function\" >createJunction</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >{</span>\n  Dashboard<span class=\"token punctuation\" >:</span> <span class=\"token punctuation\" >{</span> <span class=\"token keyword\" >default</span><span class=\"token punctuation\" >:</span> <span class=\"token boolean\" >true</span> <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n  Invoices<span class=\"token punctuation\" >:</span> <span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n  Help<span class=\"token punctuation\" >:</span> <span class=\"token punctuation\" >{</span>\n    <span class=\"token comment\" spellcheck=\"true\">// Indicates that if this branch is selected, a selection from</span>\n    <span class=\"token comment\" spellcheck=\"true\">// the help screen's junction will also need to be made</span>\n    next<span class=\"token punctuation\" >:</span> HelpScreen<span class=\"token punctuation\" >.</span>junction<span class=\"token punctuation\" >,</span>\n  <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n<span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >)</span>\n"),
	    p({},
	    "The end result of this is that each ",
	    code({}, "Junction"),
	    " is effectively a ",
	    a({ "href": "https://en.wikipedia.org/wiki/Decision_tree" },
	    "Decision tree"),
	
	    ". The branches at each node represent the possible things that one single component can render."),
	
	    h3({ "id": "parallel-junctions" },
	    "Parallel Junctions"),
	
	    p({},
	    "A single ",
	    code({}, "Junction"),
	    " only allows you to represent a single choice. But what if your component needs to be able to represent ",
	    em({},
	    "multiple"),
	
	    " choices – for example, the choice between which tab to render, and the choice between which modal to render?"),
	
	    p({},
	    "In order to facilitate this, each Branch can be assigned ",
	    em({},
	    "multiple"),
	
	    " ",
	    code({}, "next"),
	    " junctions. To do so, instead of passing a single ",
	    code({}, "Junction"),
	    " object to ",
	    code({}, "next"),
	    ", pass an object containing ",
	    code({}, "Junction"),
	    " objects. This will cause the ",
	    code({}, "next"),
	    " property of associated ",
	    code({}, "Route"),
	    " objects to use an object with the same shape."),
	
	    p({},
	    em({},
	    "Note: When providing an object of parallel junctions, only the state of the junction with the key ",
	    code({}, "main"),
	    " will be added to the path of ",
	    code({}, "Location"),
	    " objects. The state of any other junctions will be added to the Location ",
	    code({}, "state"),
	    ".")),
	
	
	    codeBlock({ "className": "language-js" }, "<span class=\"token keyword\" >const</span> invoiceMainJunction <span class=\"token operator\" >=</span> <span class=\"token function\" >createJunction</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >{</span>\n  Details<span class=\"token punctuation\" >:</span> <span class=\"token punctuation\" >{</span> <span class=\"token keyword\" >default</span><span class=\"token punctuation\" >:</span> <span class=\"token boolean\" >true</span> <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n  Payments<span class=\"token punctuation\" >:</span> <span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n<span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >)</span>\n\n<span class=\"token keyword\" >const</span> invoiceModalJunction <span class=\"token operator\" >=</span> <span class=\"token function\" >createJunction</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >{</span>\n  AddPayment<span class=\"token punctuation\" >:</span> <span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n<span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >)</span>\n\n<span class=\"token keyword\" >const</span> invoicesJunction <span class=\"token operator\" >=</span> <span class=\"token function\" >createJunction</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >{</span>\n  List<span class=\"token punctuation\" >:</span> <span class=\"token punctuation\" >{</span> <span class=\"token keyword\" >default</span><span class=\"token punctuation\" >:</span> <span class=\"token boolean\" >true</span> <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n  Invoice<span class=\"token punctuation\" >:</span> <span class=\"token punctuation\" >{</span>\n    paramTypes<span class=\"token punctuation\" >:</span> <span class=\"token punctuation\" >{</span>\n      id<span class=\"token punctuation\" >:</span> <span class=\"token punctuation\" >{</span> required<span class=\"token punctuation\" >:</span> <span class=\"token boolean\" >true</span> <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n    <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n    next<span class=\"token punctuation\" >:</span> <span class=\"token punctuation\" >{</span>\n      main<span class=\"token punctuation\" >:</span> invoiceMainJunction<span class=\"token punctuation\" >,</span>\n      modal<span class=\"token punctuation\" >:</span> invoiceModalJunction<span class=\"token punctuation\" >,</span>\n    <span class=\"token punctuation\" >}</span>\n  <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n<span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >)</span>\n\n<span class=\"token keyword\" >class</span> <span class=\"token class-name\" >InvoicesScreen</span> <span class=\"token keyword\" >extends</span> <span class=\"token class-name\" >React<span class=\"token punctuation\" >.</span>Component</span> <span class=\"token punctuation\" >{</span>\n  <span class=\"token keyword\" >static</span> junction <span class=\"token operator\" >=</span> invoicesJunction\n\n  <span class=\"token function\" >render</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n    <span class=\"token keyword\" >const</span> route <span class=\"token operator\" >=</span> <span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>props<span class=\"token punctuation\" >.</span>route\n\n    <span class=\"token keyword\" >if</span> <span class=\"token punctuation\" >(</span>route<span class=\"token punctuation\" >.</span>key <span class=\"token operator\" >==</span> <span class=\"token string\" >'Invoice'</span><span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n      <span class=\"token comment\" spellcheck=\"true\">// When rendering an `Invoice` route, it will have *two* next routes.</span>\n      console<span class=\"token punctuation\" >.</span><span class=\"token function\" >log</span><span class=\"token punctuation\" >(</span>route<span class=\"token punctuation\" >.</span>next<span class=\"token punctuation\" >.</span>main<span class=\"token punctuation\" >.</span>key<span class=\"token punctuation\" >)</span>\n      console<span class=\"token punctuation\" >.</span><span class=\"token function\" >log</span><span class=\"token punctuation\" >(</span>route<span class=\"token punctuation\" >.</span>next<span class=\"token punctuation\" >.</span>modal<span class=\"token punctuation\" >.</span>key<span class=\"token punctuation\" >)</span>\n    <span class=\"token punctuation\" >}</span>\n  <span class=\"token punctuation\" >}</span>\n<span class=\"token punctuation\" >}</span>\n"),
	    h2({ "id": "methods" },
	    "Methods"),
	
	    h3({ "id": "createroutekey-params-next" },
	    "createRoute(key, params, …next)"),
	
	    p({},
	    "Create a ",
	    code({}, "Route"),
	    " object representing one state of this Junction."),
	
	    p({},
	    "Use this method when you need an arbitrary ",
	    code({}, "Route"),
	    " object. For example, when you’d like to link to a specific route within your current component, or when you’d like to programatically navigate to a specific route."),
	
	    h4({ "id": "arguments" },
	    "Arguments"),
	
	    ul({},
	    li({},
	    code({}, "key"),
	    " (",
	    em({},
	    "string"),
	
	    "): The key of the branch which this ",
	    code({}, "Route"),
	    " will follow"),
	
	    li({},
	    code({}, "params"),
	    " ",
	    em({},
	    _react2.default.createElement('small', null, ', "optional",')),
	
	
	
	    " (",
	    em({},
	    "object"),
	
	    "): An object containing values of the created route’s ",
	    code({}, "params")),
	
	    li({},
	    code({}, "...next"),
	    " ",
	    em({},
	    _react2.default.createElement('small', null, ', "optional",')),
	
	
	
	    " (",
	    em({},
	    a({ "href": "/docs/api/junctions/Route.md" },
	    "Route"),
	
	    "]"),
	
	    "): ",
	    code({}, "Route"),
	    " objects representing the state of the branch’s ",
	    code({}, "next"),
	    " junctions")),
	
	
	    p({},
	    em({},
	    "If you’re familiar with ",
	    a({ "href": "https://facebook.github.io/react/docs/react-api.html#createelement" },
	    "React.createElement()"),
	
	    ", note that ",
	    code({}, "createRoute()"),
	    " uses exactly the same format. Theoretically, you could even create routes with JSX.")),
	
	
	    h4({ "id": "returns" },
	    "Returns"),
	
	    p({},
	    "(",
	    em({},
	    a({ "href": "/docs/api/junctions/Route.md" },
	    "Route")),
	
	
	    ")"),
	
	    h4({ "id": "example" },
	    "Example"),
	
	    p({},
	    "This example puts together all of the different forms of Junction, to create a single route linking deep into an application."),
	
	    p({},
	    "Note that this is rather contrived. A more realistic example would have these junctions defined over multiple files, with routes mostly being created only a single level deep."),
	
	    codeBlock({ "className": "language-jsx" }, "<span class=\"token keyword\" >const</span> invoiceMainJunction <span class=\"token operator\" >=</span> <span class=\"token function\" >createJunction</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >{</span>\n  Details<span class=\"token punctuation\" >:</span> <span class=\"token punctuation\" >{</span> <span class=\"token keyword\" >default</span><span class=\"token punctuation\" >:</span> <span class=\"token boolean\" >true</span> <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n  Payments<span class=\"token punctuation\" >:</span> <span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n<span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >)</span>\n\n<span class=\"token keyword\" >const</span> invoiceModalJunction <span class=\"token operator\" >=</span> <span class=\"token function\" >createJunction</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >{</span>\n  AddPayment<span class=\"token punctuation\" >:</span> <span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n<span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >)</span>\n\n<span class=\"token keyword\" >const</span> invoicesJunction <span class=\"token operator\" >=</span> <span class=\"token function\" >createJunction</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >{</span>\n  Add<span class=\"token punctuation\" >:</span> <span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n  Invoice<span class=\"token punctuation\" >:</span> <span class=\"token punctuation\" >{</span>\n    path<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'/:id'</span><span class=\"token punctuation\" >,</span>\n    paramTypes<span class=\"token punctuation\" >:</span> <span class=\"token punctuation\" >{</span>\n      id<span class=\"token punctuation\" >:</span> <span class=\"token punctuation\" >{</span> required<span class=\"token punctuation\" >:</span> <span class=\"token boolean\" >true</span> <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n    <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n    next<span class=\"token punctuation\" >:</span> <span class=\"token punctuation\" >{</span>\n      main<span class=\"token punctuation\" >:</span> invoiceMainJunction<span class=\"token punctuation\" >,</span>\n      modal<span class=\"token punctuation\" >:</span> invoiceModalJunction<span class=\"token punctuation\" >,</span>\n    <span class=\"token punctuation\" >}</span>\n  <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n<span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >)</span>\n\n<span class=\"token keyword\" >const</span> appJunction <span class=\"token operator\" >=</span> <span class=\"token function\" >createJunction</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >{</span>\n  Dashboard<span class=\"token punctuation\" >:</span> <span class=\"token punctuation\" >{</span> <span class=\"token keyword\" >default</span><span class=\"token punctuation\" >:</span> <span class=\"token boolean\" >true</span> <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n  Invoices<span class=\"token punctuation\" >:</span> <span class=\"token punctuation\" >{</span>\n    next<span class=\"token punctuation\" >:</span> invoicesJunction<span class=\"token punctuation\" >,</span>\n  <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n<span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >)</span>\n\n<span class=\"token keyword\" >const</span> converter <span class=\"token operator\" >=</span> <span class=\"token function\" >createConverter</span><span class=\"token punctuation\" >(</span>appJunction<span class=\"token punctuation\" >)</span>\n\n<span class=\"token keyword\" >const</span> route <span class=\"token operator\" >=</span>\n  appJunction<span class=\"token punctuation\" >.</span><span class=\"token function\" >createRoute</span><span class=\"token punctuation\" >(</span><span class=\"token string\" >'Invoices'</span><span class=\"token punctuation\" >,</span> <span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n    invoicesJunction<span class=\"token punctuation\" >.</span><span class=\"token function\" >createRoute</span><span class=\"token punctuation\" >(</span><span class=\"token string\" >'Invoice'</span><span class=\"token punctuation\" >,</span> <span class=\"token punctuation\" >{</span> id<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'123'</span> <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n      invoiceMainJunction<span class=\"token punctuation\" >.</span><span class=\"token function\" >createRoute</span><span class=\"token punctuation\" >(</span><span class=\"token string\" >'Details'</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >,</span>\n      invoiceModalJunction<span class=\"token punctuation\" >.</span><span class=\"token function\" >createRoute</span><span class=\"token punctuation\" >(</span><span class=\"token string\" >'AddPayment'</span><span class=\"token punctuation\" >)</span>\n    <span class=\"token punctuation\" >)</span>\n  <span class=\"token punctuation\" >)</span>\n\nhistory<span class=\"token punctuation\" >.</span><span class=\"token function\" >push</span><span class=\"token punctuation\" >(</span>converter<span class=\"token punctuation\" >.</span><span class=\"token function\" >locate</span><span class=\"token punctuation\" >(</span>route<span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >)</span>\n")));
	
	
	};
	module.exports = __webpack_require__(1).markdownPostProcessor(module.exports);
	module.exports.meta = {
	  "title": "Junction"
	}


/***/ }

});