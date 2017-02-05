webpackJsonp([30],{

/***/ 105:
/***/ function(module, exports, __webpack_require__) {

	'use strict';var _react = __webpack_require__(2);var _react2 = _interopRequireDefault(_react);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
	
	
	module.exports = function ({ factories = {} }) {
	  var {
	    wrapper = (0, _react.createFactory)('div'),
	    a = (0, _react.createFactory)('a'),
	    codeBlock = (props, children) => _react2.default.createElement('pre', props, _react2.default.createElement('code', { dangerouslySetInnerHTML: { __html: children || props.children } })),
	    h2 = (0, _react.createFactory)('h2'),
	    p = (0, _react.createFactory)('p') } =
	  factories;
	
	  return (
	    wrapper({},
	    p({},
	    "This is a glossary of the core terms in Junctions, along with their type signatures. The types are documented using ",
	    a({ "href": "http://flowtype.org/docs/quick-reference.html" },
	    "Flow notation"),
	
	    "."),
	
	    h2({ "id": "location" },
	    "Location"),
	
	    codeBlock({ "className": "language-js" }, "type Location <span class=\"token operator\" >=</span> <span class=\"token punctuation\" >{</span>\n  pathname<span class=\"token punctuation\" >:</span> string<span class=\"token punctuation\" >,</span>\n  search<span class=\"token punctuation\" >:</span> string<span class=\"token punctuation\" >,</span>\n  state<span class=\"token punctuation\" >:</span> Object<span class=\"token punctuation\" >,</span>\n<span class=\"token punctuation\" >}</span>\n"),
	    h2({ "id": "route" },
	    "Route"),
	
	    codeBlock({ "className": "language-js" }, "<span class=\"token keyword\" >class</span> <span class=\"token class-name\" >Route</span> <span class=\"token punctuation\" >{</span>\n  key<span class=\"token punctuation\" >:</span> string<span class=\"token punctuation\" >;</span>\n  data<span class=\"token punctuation\" >:</span> Object<span class=\"token punctuation\" >;</span>\n  params<span class=\"token punctuation\" >:</span> <span class=\"token punctuation\" >{</span> <span class=\"token punctuation\" >[</span>key<span class=\"token punctuation\" >:</span> string<span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >:</span> any <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >;</span>\n  next<span class=\"token punctuation\" >:</span> Route <span class=\"token operator\" >|</span> <span class=\"token punctuation\" >{</span> <span class=\"token punctuation\" >[</span>key<span class=\"token punctuation\" >:</span> string<span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >:</span> Route <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >;</span>\n<span class=\"token punctuation\" >}</span>\n"),
	    h2({ "id": "junction" },
	    "Junction"),
	
	    codeBlock({ "className": "language-js" }, "type Junction <span class=\"token operator\" >=</span> <span class=\"token punctuation\" >{</span>\n  <span class=\"token punctuation\" >[</span>key<span class=\"token punctuation\" >:</span> string<span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >:</span> Branch\n<span class=\"token punctuation\" >}</span>\n"),
	    h2({ "id": "branch" },
	    "Branch"),
	
	    codeBlock({ "className": "language-js" }, "type Branch <span class=\"token operator\" >=</span> <span class=\"token punctuation\" >{</span>\n  <span class=\"token keyword\" >default</span><span class=\"token punctuation\" >:</span> boolean<span class=\"token punctuation\" >;</span>\n  path<span class=\"token punctuation\" >:</span> string<span class=\"token punctuation\" >;</span>\n  data<span class=\"token punctuation\" >:</span> Object<span class=\"token punctuation\" >;</span>\n  paramTypes<span class=\"token punctuation\" >:</span> <span class=\"token punctuation\" >{</span> <span class=\"token punctuation\" >[</span>key<span class=\"token punctuation\" >:</span> string<span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >:</span> ParamType <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >;</span>\n  next<span class=\"token punctuation\" >:</span> Junction <span class=\"token operator\" >|</span> <span class=\"token punctuation\" >{</span> <span class=\"token punctuation\" >[</span>key<span class=\"token punctuation\" >:</span> string<span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >:</span> Junction <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >;</span>\n<span class=\"token punctuation\" >}</span>\n"),
	    h2({ "id": "paramtype" },
	    "ParamType"),
	
	    codeBlock({ "className": "language-js" }, "type ParamType <span class=\"token operator\" >=</span> <span class=\"token punctuation\" >{</span>\n  required<span class=\"token punctuation\" >:</span> bool<span class=\"token punctuation\" >,</span>\n  <span class=\"token keyword\" >default</span><span class=\"token punctuation\" >:</span> any <span class=\"token operator\" >|</span> <span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >)</span> <span class=\"token operator\" >=</span><span class=\"token operator\" >></span> any<span class=\"token punctuation\" >,</span>\n  serializer<span class=\"token punctuation\" >:</span> Serializer<span class=\"token punctuation\" >,</span>\n<span class=\"token punctuation\" >}</span>\n"),
	    h2({ "id": "serializer" },
	    "Serializer"),
	
	    codeBlock({ "className": "language-js" }, "type Serializer <span class=\"token operator\" >=</span> <span class=\"token punctuation\" >{</span>\n  serialize<span class=\"token punctuation\" >:</span> <span class=\"token punctuation\" >(</span>x<span class=\"token punctuation\" >:</span> any<span class=\"token punctuation\" >)</span> <span class=\"token operator\" >=</span><span class=\"token operator\" >></span> string<span class=\"token punctuation\" >,</span>\n  deserialize<span class=\"token punctuation\" >:</span> <span class=\"token punctuation\" >(</span>x<span class=\"token punctuation\" >:</span> string<span class=\"token punctuation\" >)</span> <span class=\"token operator\" >=</span><span class=\"token operator\" >></span> any<span class=\"token punctuation\" >,</span>\n<span class=\"token punctuation\" >}</span>\n"),
	    h2({ "id": "converter" },
	    "Converter"),
	
	    codeBlock({ "className": "language-js" }, "type Converter <span class=\"token operator\" >=</span> <span class=\"token punctuation\" >{</span>\n  route<span class=\"token punctuation\" >:</span> <span class=\"token punctuation\" >(</span>location<span class=\"token punctuation\" >:</span> Location<span class=\"token punctuation\" >)</span> <span class=\"token operator\" >=</span><span class=\"token operator\" >></span> Route <span class=\"token operator\" >|</span> <span class=\"token punctuation\" >{</span> <span class=\"token punctuation\" >[</span>key<span class=\"token punctuation\" >:</span> string<span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >:</span> Route <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >;</span>\n  locate<span class=\"token punctuation\" >:</span> <span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >.</span><span class=\"token punctuation\" >.</span><span class=\"token punctuation\" >.</span>routes<span class=\"token punctuation\" >:</span> Route<span class=\"token punctuation\" >[</span><span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >)</span> <span class=\"token operator\" >=</span><span class=\"token operator\" >></span> Location<span class=\"token punctuation\" >;</span>\n<span class=\"token punctuation\" >}</span>\n"),
	    h2({ "id": "located-route" },
	    "Located Route"),
	
	    codeBlock({ "className": "language-js" }, "<span class=\"token keyword\" >class</span> <span class=\"token class-name\" >LocatedRoute</span> <span class=\"token keyword\" >extends</span> <span class=\"token class-name\" >Route</span> <span class=\"token punctuation\" >{</span>\n  <span class=\"token function\" >locate</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >.</span><span class=\"token punctuation\" >.</span><span class=\"token punctuation\" >.</span>routes<span class=\"token punctuation\" >:</span> Route<span class=\"token punctuation\" >[</span><span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >:</span> Location<span class=\"token punctuation\" >;</span>\n<span class=\"token punctuation\" >}</span>\n")));
	
	
	};
	module.exports = __webpack_require__(1).markdownPostProcessor(module.exports);
	module.exports.meta = {
	  "title": "Glossary"
	}


/***/ }

});