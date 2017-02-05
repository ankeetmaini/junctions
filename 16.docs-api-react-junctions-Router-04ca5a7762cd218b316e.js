webpackJsonp([16],{

/***/ 119:
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
	    li = (0, _react.createFactory)('li'),
	    p = (0, _react.createFactory)('p'),
	    ul = (0, _react.createFactory)('ul') } =
	  factories;
	
	  return (
	    wrapper({},
	    p({},
	    "Converts the ",
	    a({ "href": "/docs/api/junctions/Location.md" },
	    "Location"),
	
	    " objects emitted by the supplied ",
	    a({ "href": "https://github.com/mjackson/history#properties" },
	    "History"),
	
	    " into ",
	    a({ "href": "/docs/api/junctions/Route.md" },
	    "Route"),
	
	    " objects, and passes these to the supplied renderer."),
	
	    p({},
	    "The renderer is defined by the ",
	    code({}, "render"),
	    " prop, which should take one of these forms:"),
	
	    ul({},
	    li({},
	    "A function which takes a ",
	    code({}, "{ route, locate }"),
	    " object and returns a React Element"),
	
	    li({},
	    "A Component which accepts a ",
	    code({}, "route"),
	    " and ",
	    code({}, "locate"),
	    " props"),
	
	    li({},
	    "A React Element which will have ",
	    code({}, "route"),
	    " and ",
	    code({}, "locate"),
	    " props added via ",
	    a({ "href": "https://facebook.github.io/react/docs/react-api.html#cloneelement" },
	    "React.cloneElement"))),
	
	
	
	    p({},
	    "This component works be internally creating and wrapping a ",
	    a({ "href": "/docs/api/junctions/Converter.md" },
	    "Converter"),
	
	    " object, and passing any received ",
	    code({}, "Location"),
	    " objects to its ",
	    a({ "href": "/docs/api/junctions/Converter.md#routelocation" },
	    "converter.route()"),
	
	    " method. The optional ",
	    code({}, "baseLocation"),
	    " prop behaves the same as the ",
	    code({}, "baseLocation"),
	    " argument on ",
	    a({ "href": "/docs/api/junctions/createConverter.md" },
	    "createConverter"),
	
	    "."),
	
	    p({},
	    "Use this component to reduce boilerplate. If you find you need more control, you can always revert to managing your own ",
	    code({}, "Converter"),
	    " instance later on."),
	
	    h4({ "id": "props" },
	    "Props"),
	
	    ul({},
	    li({},
	    code({}, "history"),
	    " (",
	    em({},
	    "History"),
	
	    "): A history object"),
	
	    li({},
	    code({}, "junction"),
	    " (",
	    em({},
	    a({ "href": "/docs/api/junctions/Junction.md" },
	    "Junction")),
	
	
	    "): A map of possible routes"),
	
	    li({},
	    code({}, "render"),
	    " (",
	    em({},
	    "function | Component | ReactElement"),
	
	    "): A handler to render your current route"),
	
	    li({},
	    code({}, "baseLocation"),
	    " ",
	    em({},
	    _react2.default.createElement('small', null, ', "optional",')),
	
	
	
	    " (",
	    em({},
	    a({ "href": "/docs/api/junctions/Location.md" },
	    "Location")),
	
	
	    "): The parts of your URLs which must exist, but are ignored for routing purposes")),
	
	
	    h4({ "id": "child-context" },
	    "Child Context"),
	
	    ul({},
	    li({},
	    code({}, "history"),
	    " (",
	    em({},
	    "History"),
	
	    "): A history object")),
	
	
	    p({},
	    "This component’s context is managed by an internal ",
	    a({ "href": "/docs/api/react-junctions/HistoryContext.md" },
	    "<HistoryContext>"),
	
	    " element."),
	
	    h4({ "id": "example" },
	    "Example"),
	
	    p({},
	    "Most of this website’s live examples use a ",
	    code({}, "<Router>"),
	    " component to handle routing."),
	
	    p({},
	    "In particular, the ",
	    a({ "href": "/examples/BaseLocation.example.js" },
	    "Base Location"),
	
	    " example includes a ",
	    code({}, "<Router>"),
	    " with ",
	    code({}, "baseLocation"),
	    ". View this page to see the ",
	    code({}, "AppScreen"),
	    " component which is used below."),
	
	    codeBlock({ "className": "language-js" }, "<span class=\"token comment\" spellcheck=\"true\">// By providing a `baseLocation` prop with the '/mountpoint' pathname, we</span>\n<span class=\"token comment\" spellcheck=\"true\">// indicate that *all* URLs must start with `/mountpoint', and thus it</span>\n<span class=\"token comment\" spellcheck=\"true\">// should be ignored for routing purposes.</span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Router</span>\n  <span class=\"token attr-name\" >baseLocation</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >{</span>pathname<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'/mountpoint'</span><span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >}</span></span>\n  <span class=\"token attr-name\" >history</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>history<span class=\"token punctuation\" >}</span></span>\n  <span class=\"token attr-name\" >junction</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>AppScreen<span class=\"token punctuation\" >.</span>junction<span class=\"token punctuation\" >}</span></span>\n  <span class=\"token attr-name\" >render</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >{</span> route<span class=\"token punctuation\" >,</span> locate <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >)</span> <span class=\"token operator\" >=</span><span class=\"token operator\" >></span> <span class=\"token operator\" >&lt;</span>AppScreen route<span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>rouute<span class=\"token punctuation\" >}</span> locate<span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>locate<span class=\"token punctuation\" >}</span></span> <span class=\"token punctuation\" >/></span></span><span class=\"token punctuation\" >}</span>\n<span class=\"token operator\" >/</span><span class=\"token operator\" >></span>\n\n<span class=\"token comment\" spellcheck=\"true\">// If your handler component takes `route` and `locate` props, you can</span>\n<span class=\"token comment\" spellcheck=\"true\">// pass it to the `render` prop directly</span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Router</span>\n  <span class=\"token attr-name\" >history</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>history<span class=\"token punctuation\" >}</span></span>\n  <span class=\"token attr-name\" >junction</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>AppScreen<span class=\"token punctuation\" >.</span>junction<span class=\"token punctuation\" >}</span></span>\n  <span class=\"token attr-name\" >render</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>AppScreen<span class=\"token punctuation\" >}</span></span>\n<span class=\"token punctuation\" >/></span></span>\n\n<span class=\"token comment\" spellcheck=\"true\">// If you'd like to pass extra props to your component, you can pass a</span>\n<span class=\"token comment\" spellcheck=\"true\">// React Element to `render`</span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Router</span>\n  <span class=\"token attr-name\" >history</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>history<span class=\"token punctuation\" >}</span></span>\n  <span class=\"token attr-name\" >junction</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>AppScreen<span class=\"token punctuation\" >.</span>junction<span class=\"token punctuation\" >}</span></span>\n  <span class=\"token attr-name\" >render</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token operator\" >&lt;</span>AppScreen user<span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>currentUser<span class=\"token punctuation\" >}</span></span> <span class=\"token punctuation\" >/></span></span><span class=\"token punctuation\" >}</span>\n<span class=\"token operator\" >/</span><span class=\"token operator\" >></span>\n")));
	
	
	};
	module.exports = __webpack_require__(1).markdownPostProcessor(module.exports);
	module.exports.meta = {
	  "title": "<Router>"
	}


/***/ }

});