webpackJsonp([29],{

/***/ 106:
/***/ function(module, exports, __webpack_require__) {

	'use strict';var _react = __webpack_require__(2);var _react2 = _interopRequireDefault(_react);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
	
	
	module.exports = function ({ factories = {} }) {
	  var {
	    wrapper = (0, _react.createFactory)('div'),
	    a = (0, _react.createFactory)('a'),
	    code = (0, _react.createFactory)('code'),
	    codeBlock = (props, children) => _react2.default.createElement('pre', props, _react2.default.createElement('code', { dangerouslySetInnerHTML: { __html: children || props.children } })),
	    em = (0, _react.createFactory)('em'),
	    p = (0, _react.createFactory)('p'),
	    strong = (0, _react.createFactory)('strong') } =
	  factories;
	
	  return (
	    wrapper({},
	    p({},
	    "Not every URL which your application receives is going to be valid. Similarly, not every URL which you ",
	    em({},
	    "produce"),
	
	    " is going to be exactly the same as where you end up. In particular, if your junction tree has default branches or default parameters, the ",
	    a({ "href": "/docs/api/junctions/Route.md" },
	    "Route"),
	
	    " the converter produces may not match the ",
	    a({ "href": "/docs/api/junctions/Location.md" },
	    "Location"),
	
	    " which it received."),
	
	    p({},
	    "To get around this, Junctions uses the concept of a ",
	    strong({},
	    "Canonical Location"),
	
	    ". This is the single ",
	    code({}, "Location"),
	    " which will be ",
	    em({},
	    "produced"),
	
	    " by any ",
	    code({}, "Route"),
	    " when fed to ",
	    code({}, "getLocation"),
	    ", as opposed to the many ",
	    code({}, "Location"),
	    " objects which can be fed into ",
	    code({}, "getRouteSet"),
	    " to produce that same ",
	    code({}, "Route"),
	    "."),
	
	    p({},
	    "You may want to redirect your user to the canonical location for whichever URL they enter. This can be achieved by checking the canonical location of the route set from each location emitted by a ",
	    code({}, "history"),
	    ":"),
	
	    codeBlock({ "className": "language-js" }, "<span class=\"token keyword\" >const</span> converter <span class=\"token operator\" >=</span> Junctions<span class=\"token punctuation\" >.</span><span class=\"token function\" >createConverter</span><span class=\"token punctuation\" >(</span>AppScreen<span class=\"token punctuation\" >.</span>junction<span class=\"token punctuation\" >,</span> baseLocation<span class=\"token punctuation\" >)</span>\n    \n<span class=\"token keyword\" >function</span> <span class=\"token function\" >handleLocationChange</span><span class=\"token punctuation\" >(</span>location<span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n  <span class=\"token keyword\" >const</span> route <span class=\"token operator\" >=</span> converter<span class=\"token punctuation\" >.</span><span class=\"token function\" >route</span><span class=\"token punctuation\" >(</span>location<span class=\"token punctuation\" >)</span>\n  <span class=\"token keyword\" >const</span> canonicalLocation <span class=\"token operator\" >=</span> route <span class=\"token operator\" >&amp;&amp;</span> converter<span class=\"token punctuation\" >.</span><span class=\"token function\" >locate</span><span class=\"token punctuation\" >(</span>route<span class=\"token punctuation\" >)</span>\n\n  <span class=\"token keyword\" >if</span> <span class=\"token punctuation\" >(</span>route <span class=\"token operator\" >&amp;&amp;</span> <span class=\"token operator\" >!</span>Junctions<span class=\"token punctuation\" >.</span><span class=\"token function\" >locationsEqual</span><span class=\"token punctuation\" >(</span>location<span class=\"token punctuation\" >,</span> canonicalLocation<span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n    history<span class=\"token punctuation\" >.</span><span class=\"token function\" >replace</span><span class=\"token punctuation\" >(</span>canonicalLocation<span class=\"token punctuation\" >)</span>\n  <span class=\"token punctuation\" >}</span>\n\n  <span class=\"token function\" >render</span><span class=\"token punctuation\" >(</span>route<span class=\"token punctuation\" >)</span>\n<span class=\"token punctuation\" >}</span>\n\n<span class=\"token function\" >handleLocationChange</span><span class=\"token punctuation\" >(</span>history<span class=\"token punctuation\" >.</span>location<span class=\"token punctuation\" >)</span>\nhistory<span class=\"token punctuation\" >.</span><span class=\"token function\" >listen</span><span class=\"token punctuation\" >(</span>handleLocationChange<span class=\"token punctuation\" >)</span>\n")));
	
	
	};
	module.exports = __webpack_require__(1).markdownPostProcessor(module.exports);
	module.exports.meta = {
	  "title": "Canonical Location"
	}


/***/ }

});