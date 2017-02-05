webpackJsonp([31],{

/***/ 104:
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
	    li = (0, _react.createFactory)('li'),
	    p = (0, _react.createFactory)('p'),
	    strong = (0, _react.createFactory)('strong'),
	    ul = (0, _react.createFactory)('ul') } =
	  factories;
	
	  return (
	    wrapper({},
	    p({},
	    "Junctions.js is a router built from the ground up for component-based applications."),
	
	    p({},
	    "It equips you to create reusable React components that have routes and links, and integrate seamlessly with the browser ",
	    a({ "href": "https://developer.mozilla.org/en/docs/Web/API/History" },
	    "History API"),
	
	    "."),
	
	    h2({ "id": "why-use-junctionsjs" },
	    "Why use junctions.js?"),
	
	    p({},
	    "Because it has ",
	    em({},
	    "principles"),
	
	    "."),
	
	    ul({},
	    li({},
	    strong({},
	    "Composability."),
	
	    " Reuse components anywhere. Even those with links and routes!"),
	
	    li({},
	    strong({},
	    "No Surprises."),
	
	    " The Back and Forward buttons work just as the user expects."),
	
	    li({},
	    strong({},
	    "Flexibility."),
	
	    " Junctions doesn’t make decisions for you. It let’s React be React.")),
	
	
	    p({},
	    "These three principles are described in more (and less) detail in ",
	    a({ "href": "/docs/introduction/three-principles.md" },
	    "The Haiku Of Routing Principles"),
	
	    "."),
	
	    h2({ "id": "getting-started" },
	    "Getting Started"),
	
	    p({},
	    "The pitch for a super awesome routing library is a funny place to get asked “Do you actually need a router?” – but it would be irresponsible to tell you how great junctions.js is without telling you that ",
	    em({},
	    "not using any router is often even better"),
	
	    ". So ask yourself – ",
	    a({ "href": "/docs/introduction/do-i-need-a-router.md" },
	    "do you really ",
	    em({},
	    "need"),
	
	    " a router?")),
	
	
	    p({},
	    "Once you’ve decided that junctions.js does fit your needs, the best way to get started is to try it. and the ",
	    a({ "href": "/docs" },
	    "Tutorial"),
	
	    " makes this easy – after following along, you’ll have built a real app and have the experience to apply junctions.js to your own projects."),
	
	    h2({ "id": "demos" },
	    "Demos"),
	
	    p({},
	    "This website hosts a number of live demos with source. Take a look at the ",
	    a({ "href": "/examples/Raw.example.js" },
	    "Raw"),
	
	    " example to see how Junctions works without any React-specific helper components, or see ",
	    a({ "href": "/examples/Basic.example.js" },
	    "Basic"),
	
	    " for a typical example."),
	
	    p({},
	    "Also, the ",
	    a({ "href": "https://junctions.js.org" },
	    "junctions.js website"),
	
	    " eats its own dog food. When viewing the website, you can open your developer console to take a look!"),
	
	    h2({ "id": "installation" },
	    "Installation"),
	
	    p({},
	    "At minimum, you’ll need the junctions package"),
	
	    codeBlock({ "className": "language-bash" }, "npm <span class=\"token function\" >install</span> junctions --save\n"),
	    p({},
	    "If you want ",
	    a({ "href": "/docs/api/react-junctions/Link.md" },
	    "<Link>"),
	
	    " and ",
	    a({ "href": "/docs/api/react-junctions/Router.md" },
	    "<Router>"),
	
	    " components to help integrating with React, install ",
	    code({}, "react-junctions")),
	
	    codeBlock({ "className": "language-bash" }, "npm <span class=\"token function\" >install</span> react-junctions --save\n"),
	    p({},
	    "Alternatively, use plain-ol’ script tags with unpkg."),
	
	    codeBlock({ "className": "language-html" }, "<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>script</span> <span class=\"token attr-name\" >src</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>https://unpkg.com/junctions@0.3.0/dist/junctions.js<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>script</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>script</span> <span class=\"token attr-name\" >src</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>https://unpkg.com/react-junctions@0.3.2/dist/index.js<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>script</span><span class=\"token punctuation\" >></span></span>\n"),
	    h2({ "id": "contributing" },
	    "Contributing"),
	
	    p({},
	    "Contributions are welcome, especially for the documentation."),
	
	    p({},
	    "To get the documentation running locally, you’ll need to make sure you have a link to the junctions package itself in your ",
	    code({}, "node_modules"),
	    " directory:"),
	
	    codeBlock({ "className": "language-bash" }, "npm <span class=\"token function\" >install</span>\nnpm <span class=\"token function\" >link</span>\nnpm <span class=\"token function\" >link</span> junctions\nnpm run docs:start\n"),
	    p({},
	    "Then open your browser to ",
	    a({ "href": "http://localhost:4000" },
	    "http://localhost:4000"),
	
	    "!")));
	
	
	
	};
	module.exports = __webpack_require__(1).markdownPostProcessor(module.exports);
	module.exports.meta = {
	  "title": "Composable Routing For React"
	}


/***/ }

});