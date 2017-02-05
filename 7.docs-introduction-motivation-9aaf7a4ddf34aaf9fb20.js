webpackJsonp([7],{

/***/ 128:
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
	    p = (0, _react.createFactory)('p') } =
	  factories;
	
	  return (
	    wrapper({},
	    p({},
	    "It was pretty normal day in Tokyo when I received a request from a client. “I’d like this application screen to be a React Component. And I want it to be reusable.”"),
	
	    p({},
	    "Given my client’s app was created with React, I naturally said “Yes Sir”. I mean, the best part about React is that components are reusable. What could go wrong?"),
	
	    p({},
	    "The answer is ",
	    em({},
	    "Links"),
	
	    ". Links are what could go wrong."),
	
	    p({},
	    "You see, the thing about the ",
	    em({},
	    "web"),
	
	    " is that it is made of URLs. And the thing about URLs is that they don’t compose. But reusable components need to compose!"),
	
	    p({},
	    "To demonstrate, imagine that you’d like to make a self contained ",
	    code({}, "PaymentsScreen"),
	    " component, like so:"),
	
	    codeBlock({ "className": "language-jsx" }, "<span class=\"token keyword\" >class</span> <span class=\"token class-name\" >PaymentsScreen</span> <span class=\"token keyword\" >extends</span> <span class=\"token class-name\" >Component</span> <span class=\"token punctuation\" >{</span>\n    <span class=\"token keyword\" >static</span> propTypes <span class=\"token operator\" >=</span> <span class=\"token punctuation\" >{</span>\n        path<span class=\"token punctuation\" >:</span> PropTypes<span class=\"token punctuation\" >.</span><span class=\"token function\" >oneOf</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >[</span><span class=\"token string\" >'/new'</span><span class=\"token punctuation\" >,</span> <span class=\"token string\" >'/list'</span><span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >,</span>\n    <span class=\"token punctuation\" >}</span>\n\n    <span class=\"token function\" >render</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n        <span class=\"token keyword\" >return</span> <span class=\"token punctuation\" >(</span>\n            <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>div</span><span class=\"token punctuation\" >></span></span>\n                <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>nav</span><span class=\"token punctuation\" >></span></span>\n                    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>a</span> <span class=\"token attr-name\" >href</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >'</span>/new<span class=\"token punctuation\" >'</span></span><span class=\"token punctuation\" >></span></span>Add Payment<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>a</span><span class=\"token punctuation\" >></span></span>\n                    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>a</span> <span class=\"token attr-name\" >href</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >'</span>/list<span class=\"token punctuation\" >'</span></span><span class=\"token punctuation\" >></span></span>List<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>a</span><span class=\"token punctuation\" >></span></span>\n                <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>nav</span><span class=\"token punctuation\" >></span></span>\n                <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>div</span><span class=\"token punctuation\" >></span></span>\n                    Hi<span class=\"token operator\" >!</span>\n                <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>div</span><span class=\"token punctuation\" >></span></span>\n            <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>div</span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token punctuation\" >)</span>\n    <span class=\"token punctuation\" >}</span>\n<span class=\"token punctuation\" >}</span>\n"),
	    p({},
	    "Easy, right? Except – what if you want to mount this component somewhere other than the application root? The ",
	    code({}, "<a>"),
	    " tags are going to break."),
	
	    p({},
	    "But you’ve got you’re head screwed on, so you know how to fix this. Just pass in a ",
	    code({}, "basePath"),
	    "."),
	
	    codeBlock({ "className": "language-jsx" }, "<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>a</span> <span class=\"token attr-name\" >href</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span>`${basePath}/new`</span><span class=\"token punctuation\" >></span></span>Add Payment<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>a</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>a</span> <span class=\"token attr-name\" >href</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span>`${basePath}/list`</span><span class=\"token punctuation\" >></span></span>List<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>a</span><span class=\"token punctuation\" >></span></span>\n"),
	    p({},
	    "And this works. Until you want to mount this component within a modal which doesn’t ",
	    em({},
	    "have"),
	
	    " URLs. ",
	    em({},
	    "Don’t mount it in a modal, you say"),
	
	    ". But your client insists. Now what?"),
	
	    p({},
	    em({},
	    "You’re up the creek with no paddle."),
	
	    " That’s what."),
	
	    h2({ "id": "components-with-urls-arent-reusable" },
	    "Components With URLs Aren’t Reusable"),
	
	    p({},
	    "Routable components have Links. Links point to URLs. And URLs cause components to be dependent on their environment. ",
	    em({},
	    "So perhaps we should just give up on reusability for any components with links?")),
	
	
	    p({},
	    "But wait a minute. The great thing about React is that it lets you write reusable components. And one of the great things about the web is that all its content has URLs. So wouldn’t it be ideal if you could have your cake and eat it too?"),
	
	    p({},
	    "This is the question that led to ",
	    em({},
	    "junctions.js"),
	
	    ". And happily, it turns out that you ",
	    em({},
	    "can"),
	
	    " have your cake and eat it too! But in order to do so, your routing library needs to follow principles – specifically, the first two lines of ",
	    a({ "href": "/docs/introduction/three-principles.md" },
	    "The Principles Haiku"),
	
	    ".")));
	
	
	
	};
	module.exports = __webpack_require__(1).markdownPostProcessor(module.exports);
	module.exports.meta = {
	  "metaTitle": "Why I Created Junctions.js",
	  "metaDescription": "React Apps are made of Components, and the web is made of URLs. But Components compose, and URLs don't. What if you want the best of both worlds?",
	  "title": "Motivation"
	}


/***/ }

});