webpackJsonp([1],{

/***/ 59:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "b8f87f8fdb4c0295e0cfd931310d74ba.png";

/***/ },

/***/ 60:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "63d8539be1b481ea13cd9ca3831fb00f.png";

/***/ },

/***/ 130:
/***/ function(module, exports, __webpack_require__) {

	'use strict';var _react = __webpack_require__(2);var _react2 = _interopRequireDefault(_react);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
	
	
	module.exports = function ({ factories = {} }) {
	  var {
	    wrapper = (0, _react.createFactory)('div'),
	    a = (0, _react.createFactory)('a'),
	    blockquote = (0, _react.createFactory)('blockquote'),
	    code = (0, _react.createFactory)('code'),
	    codeBlock = (props, children) => _react2.default.createElement('pre', props, _react2.default.createElement('code', { dangerouslySetInnerHTML: { __html: children || props.children } })),
	    em = (0, _react.createFactory)('em'),
	    h2 = (0, _react.createFactory)('h2'),
	    img = (0, _react.createFactory)('img'),
	    li = (0, _react.createFactory)('li'),
	    ol = (0, _react.createFactory)('ol'),
	    p = (0, _react.createFactory)('p'),
	    strong = (0, _react.createFactory)('strong'),
	    ul = (0, _react.createFactory)('ul') } =
	  factories;
	
	  return (
	    wrapper({},
	    p({},
	    "So far, we’ve covered what you get from Junctions in a rather general sense:"),
	
	    ul({},
	    li({},
	    "You get the ability to compose components that have routes"),
	
	    li({},
	    "You get integration with HTML5 History"),
	
	    li({},
	    "You get flexibility to use React however you’d like")),
	
	
	    p({},
	    "But what is it about Junctions that makes all of this possible? To answer this, we’re going to need to dive into the specifics. So let’s change the question a little:"),
	
	    p({},
	    em({},
	    "What tools in particular will make your life easier?")),
	
	
	    p({},
	    "This is easier to answer."),
	
	    ol({},
	    li({},
	    "A ",
	    code({}, "Route"),
	    " structure that represents routing information"),
	
	    li({},
	    "A ",
	    code({}, "Converter"),
	    " that converts URLs into ",
	    code({}, "Route"),
	    " objects"),
	
	    li({},
	    "A ",
	    code({}, "Junction"),
	    " structure that allows you to configure your ",
	    code({}, "Converter"))),
	
	
	    p({},
	    "It turns out that these three tools are all you’ll need to write a Junctions app, so let’s go through them in a little more detail!"),
	
	    h2({ "id": "routes-aint-locations" },
	    "Routes Ain’t Locations"),
	
	    p({},
	    "The best way to understand a ",
	    code({}, "Route"),
	    " object is to compare it to the ",
	    code({}, "Location"),
	    " objects that we first encountered in ",
	    a({ "href": "/docs/introduction/do-i-need-a-router.md" },
	    "Do I Need A Router?"),
	
	    ". Recall that ",
	    a({ "href": "/docs/api/junctions/Location.md" },
	    "Location"),
	
	    " objects each hold a single URL and some arbitrary state:"),
	
	    codeBlock({ "className": "language-js" }, "<span class=\"token punctuation\" >{</span>\n  pathname<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'/invoices/12345/payments'</span><span class=\"token punctuation\" >,</span>\n  search<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'?page=2'</span><span class=\"token punctuation\" >,</span>\n  state<span class=\"token punctuation\" >:</span> <span class=\"token punctuation\" >{</span>\n    arbitrary<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'stuff'</span><span class=\"token punctuation\" >,</span>\n  <span class=\"token punctuation\" >}</span>\n<span class=\"token punctuation\" >}</span>\n"),
	    p({},
	    "The problem that we encountered with ",
	    code({}, "Location"),
	    " objects is that their structure doesn’t fit with React component trees. Splitting up the ",
	    code({}, "pathname"),
	    " and getting the information to the correct component is cumbersome."),
	
	    p({},
	    img({ "src": __webpack_require__(59), "alt": "Flat and nested" }),
	    em({},
	    "It is not immediately obvious how to pass a flat Location into a nested tree.")),
	
	
	    p({},
	    "And even if you’re fine with splitting up this information manually, you’ll still face the problem of composability. As the ",
	    a({ "href": "/docs/introduction/three-principles.md" },
	    "Haiku of Routing Principles"),
	
	    " states, ",
	    em({},
	    "Components Compose"),
	
	    " – but URLs don’t."),
	
	    p({},
	    "This is where Routes come in. Routes, like Locations, are a way of representing navigation state. But unlike Locations, ",
	    code({}, "Route"),
	    " objects are composable, and structured to match your component tree ",
	    em({},
	    "perfectly"),
	
	    "."),
	
	    p({},
	    img({ "src": __webpack_require__(60), "alt": "Routes and Components" }),
	    em({},
	    "Nested route data flows naturally through a component tree.")),
	
	
	    p({},
	    "Each ",
	    code({}, "Route"),
	    " object has:"),
	
	    ul({},
	    li({},
	    "a ",
	    code({}, "key"),
	    " specifying the type of route that it represents"),
	
	    li({},
	    "some ",
	    code({}, "params"),
	    " that have been extracted from the URL’s path or query string"),
	
	    li({},
	    "one or many ",
	    code({}, "next"),
	    " routes, allowing routes to be composed just like components")),
	
	
	    p({},
	    "For example, the Route in the diagram above would look something like this:"),
	
	    codeBlock({ "className": "language-js" }, "<span class=\"token punctuation\" >{</span>\n    key<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'InvoiceList'</span><span class=\"token punctuation\" >,</span>\n    next<span class=\"token punctuation\" >:</span> <span class=\"token punctuation\" >{</span>\n        key<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'Invoice'</span><span class=\"token punctuation\" >,</span>\n        params<span class=\"token punctuation\" >:</span> <span class=\"token punctuation\" >{</span> id<span class=\"token punctuation\" >:</span> <span class=\"token number\" >12345</span> <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n        next<span class=\"token punctuation\" >:</span> <span class=\"token punctuation\" >{</span>\n            key<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'Details'</span><span class=\"token punctuation\" >,</span>\n        <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n    <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n<span class=\"token punctuation\" >}</span>\n"),
	    p({},
	    "But how do you get hold of a ",
	    code({}, "Route"),
	    " object? The browser API only understands absolute ",
	    code({}, "Location"),
	    " objects, so we’re going to need some way of converting between ",
	    code({}, "Location"),
	    " and ",
	    code({}, "Route"),
	    ". And that’s what the ",
	    code({}, "Converter"),
	    " is for."),
	
	    h2({ "id": "converters-convert" },
	    "Converters Convert"),
	
	    p({},
	    "Converters convert between ",
	    code({}, "Route"),
	    " and ",
	    code({}, "Location"),
	    " objects, just as you might expect. But a ",
	    code({}, "Location"),
	    " object by itself doesn’t have enough information to generate a ",
	    code({}, "Route"),
	    " object – ",
	    em({},
	    "so how does the Converter actually work?")),
	
	
	    p({},
	    "To demonstrate, let’s consider the URL ",
	    code({}, "/invoices/add"),
	    ". To create a ",
	    code({}, "Route"),
	    ", the Converter will need to choose between a number of possibilities:"),
	
	    ul({},
	    li({},
	    p({},
	    "Does ",
	    code({}, "add"),
	    " represent a page with a form for adding new invoices, or an Invoice with the ID ",
	    code({}, "\"add\""),
	    "?"),
	
	    codeBlock({ "className": "language-js" }, "<span class=\"token keyword\" >const</span> option1 <span class=\"token operator\" >=</span> <span class=\"token punctuation\" >{</span>\n    key<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'AddInvoice'</span><span class=\"token punctuation\" >,</span>\n<span class=\"token punctuation\" >}</span>\n\n<span class=\"token keyword\" >const</span> option2 <span class=\"token operator\" >=</span> <span class=\"token punctuation\" >{</span>\n    key<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'Invoice'</span><span class=\"token punctuation\" >,</span>\n    params<span class=\"token punctuation\" >:</span> <span class=\"token punctuation\" >{</span> id<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'add'</span> <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n<span class=\"token punctuation\" >}</span>\n")),
	
	    li({},
	    p({},
	    "Should this URL be represented as a single Route, or as two nested routes?"),
	
	    codeBlock({ "className": "language-js" }, "<span class=\"token keyword\" >const</span> option1 <span class=\"token operator\" >=</span> <span class=\"token punctuation\" >{</span>\n    key<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'AddInvoice'</span><span class=\"token punctuation\" >,</span>\n<span class=\"token punctuation\" >}</span>\n\n<span class=\"token keyword\" >const</span> option2 <span class=\"token operator\" >=</span> <span class=\"token punctuation\" >{</span>\n    key<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'Invoices'</span><span class=\"token punctuation\" >,</span>\n    next<span class=\"token punctuation\" >:</span> <span class=\"token punctuation\" >{</span>\n        key<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'Add'</span><span class=\"token punctuation\" >,</span>\n    <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n<span class=\"token punctuation\" >}</span>\n"))),
	
	
	    p({},
	    "As you can see, there is a problem: ",
	    em({},
	    "The Converter doesn’t know how to answer these questions.")),
	
	
	    p({},
	    "We’re going to have to ",
	    em({},
	    "tell"),
	
	    " it the answers. And that is what ",
	    code({}, "Junction"),
	    " objects are for!"),
	
	    h2({ "id": "junctions-list-possibilities" },
	    "Junctions List Possibilities"),
	
	    p({},
	    "A ",
	    code({}, "Junction"),
	    " is an object which defines the ",
	    em({},
	    "possibilities"),
	
	    " that a ",
	    code({}, "Converter"),
	    " needs to consider."),
	
	    p({},
	    "The best way to understand this is to see it in action. So let’s create a ",
	    code({}, "Junction"),
	    " which can answer the questions from the previous section:"),
	
	    codeBlock({ "className": "language-js" }, "<span class=\"token keyword\" >const</span> junction <span class=\"token operator\" >=</span> <span class=\"token function\" >createJunction</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >{</span>\n    Dashboard<span class=\"token punctuation\" >:</span> <span class=\"token punctuation\" >{</span>\n        path<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'/dashboard'</span><span class=\"token punctuation\" >,</span>\n    <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n    InvoiceList<span class=\"token punctuation\" >:</span> <span class=\"token punctuation\" >{</span>\n        path<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'/invoices'</span><span class=\"token punctuation\" >,</span>\n    <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n<span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >)</span>\n"),
	    p({},
	    "If we pass this ",
	    code({}, "Junction"),
	    " to a ",
	    code({}, "Converter"),
	    ", ",
	    strong({},
	    "we’re indicating that the ",
	    code({}, "Converter"),
	    " only needs to consider two possible URLs"),
	
	    ". Anything else is unexpected, and the ",
	    code({}, "Converter"),
	    " is perfectly within its rights to bail by returning ",
	    code({}, "undefined"),
	    " – i.e. 404."),
	
	    p({},
	    "So now that we have a ",
	    code({}, "Junction"),
	    ", let’s answer the questions from the previous section:"),
	
	    blockquote({},
	    p({},
	    strong({},
	    "Q"),
	
	    ": Does ",
	    code({}, "add"),
	    " represent a page with a form for adding new invoices, or an Invoice with the ID ",
	    code({}, "\"add\""),
	    "?",
	    _react2.default.createElement('br', null),
	    em({},
	    strong({},
	    "A"),
	
	    ": It represents neither!"))),
	
	
	
	    blockquote({},
	    p({},
	    strong({},
	    "Q"),
	
	    ": Should this URL be represented as a single Route, or as two nested routes?",
	    _react2.default.createElement('br', null),
	    em({},
	    strong({},
	    "A"),
	
	    ": It is ",
	    code({}, "undefined"),
	    "!"))),
	
	
	
	    p({},
	    "We probably don’t actually want the ",
	    code({}, "Converter"),
	    " to return ",
	    code({}, "undefined"),
	    ", so let’s fix the ",
	    code({}, "Junction"),
	    ". But how?"),
	
	    p({},
	    "Junction objects, like ",
	    code({}, "Route"),
	    " objects, can be nested using the ",
	    code({}, "next"),
	    " property. And importantly, the possible paths they specify are ",
	    em({},
	    "relative"),
	
	    " – not absolute."),
	
	    codeBlock({ "className": "language-js" }, "<span class=\"token keyword\" >const</span> junction <span class=\"token operator\" >=</span> <span class=\"token function\" >createJunction</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >{</span>\n    Dashboard<span class=\"token punctuation\" >:</span> <span class=\"token punctuation\" >{</span>\n        path<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'/dashboard'</span><span class=\"token punctuation\" >,</span>\n    <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n    InvoiceList<span class=\"token punctuation\" >:</span> <span class=\"token punctuation\" >{</span>\n        path<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'/invoices'</span><span class=\"token punctuation\" >,</span>\n        next<span class=\"token punctuation\" >:</span> <span class=\"token function\" >createJunction</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >{</span>\n            Invoice<span class=\"token punctuation\" >:</span> <span class=\"token punctuation\" >{</span>\n                path<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'/:id'</span><span class=\"token punctuation\" >,</span>\n                paramTypes<span class=\"token punctuation\" >:</span> <span class=\"token punctuation\" >{</span>\n                    id<span class=\"token punctuation\" >:</span> <span class=\"token punctuation\" >{</span> required<span class=\"token punctuation\" >:</span> <span class=\"token boolean\" >true</span> <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n                <span class=\"token punctuation\" >}</span>\n            <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n        <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >,</span>\n    <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n<span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >)</span>\n"),
	    p({},
	    "By specifying a ",
	    code({}, "next"),
	    " junction, you’re telling the ",
	    code({}, "Converter"),
	    ":"),
	
	    p({},
	    em({},
	    "If you find a URL which begins with this ",
	    code({}, "path"),
	    ", the ",
	    strong({},
	    "next"),
	
	    " part of the path should match the ",
	    strong({},
	    "next"),
	
	    " Junction"),
	
	    "."),
	
	    p({},
	    "You can even think of this as a kind of equation:"),
	
	    p({},
	    img({ "src": __webpack_require__(328), "alt": "Decision Tree" })),
	
	    p({},
	    "If the URL starts with one of your branches, you get a ",
	    code({}, "Route"),
	    ", the next ",
	    code({}, "Junction"),
	    ", and the remainder of the URL. Repeat the process until you either have no remainder URL, no next ",
	    code({}, "Junction"),
	    ", or no matching branch. That’s all the ",
	    code({}, "Converter"),
	    " does! ",
	    em({},
	    "It’s Math, not Magic.")),
	
	
	    p({},
	    "Speaking of math, when you draw all of your junctions as a tree, you get a pretty thing like this:"),
	
	    p({},
	    img({ "src": __webpack_require__(327), "alt": "Decision Tree" }),
	    em({},
	    "Junctions can be represented as a Decision Tree")),
	
	
	    p({},
	    "The great thing about this ",
	    em({},
	    "Junction Diagram"),
	
	    " is that you can see at a glance what Route any given URL will take. You could even draw it:"),
	
	    p({},
	    img({ "src": __webpack_require__(326), "alt": "Decision Tree" }),
	    em({},
	    "Routes can be represented as a subset of a Decision Tree.")),
	
	
	    p({},
	    "And with that, you know that Junctions are exactly what the ",
	    code({}, "Converter"),
	    " needs to find a ",
	    code({}, "Route"),
	    ". After all – they’re exactly what you need, too!")));
	
	
	
	};
	module.exports = __webpack_require__(1).markdownPostProcessor(module.exports);
	module.exports.meta = {
	  "metaDescription": "Junctions.js gives you three tools that make your life as a React developer easier.",
	  "title": "What You Get From Junctions"
	}


/***/ },

/***/ 326:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "bd55958691efe2c63307fd7b7d5a3644.png";

/***/ },

/***/ 327:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "8ba7f97c02ca2df6a15fbd88f7e2e325.png";

/***/ },

/***/ 328:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "bfbc35eea5e663cfe6dd5726eb76a791.png";

/***/ }

});