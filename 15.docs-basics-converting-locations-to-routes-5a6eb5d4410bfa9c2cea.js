webpackJsonp([15],{

/***/ 120:
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
	    strong({},
	    "Note: The Guide is still only an outline. ",
	    a({ "href": "https://github.com/jamesknelson/junctions" },
	    "Pull Requests"),
	
	    " would be greatly appreciated!")),
	
	
	    ul({},
	    li({},
	    p({},
	    "Junctions is – at its core – a package for converting between ‘Location’ and ‘Route’ objects. So how do you actually accomplish this?")),
	
	
	    li({},
	    p({},
	    "Once the pieces are in place, the process is actually incredibly simple. Assuming you have a root ",
	    code({}, "Junction"),
	    ", all you need to do is create a ",
	    code({}, "Converter"),
	    " object and do a conversion:"))),
	
	
	
	    codeBlock({ "className": "language-js" }, "<span class=\"token keyword\" >const</span> converter <span class=\"token operator\" >=</span> <span class=\"token function\" >createConverter</span><span class=\"token punctuation\" >(</span>rootJunction<span class=\"token punctuation\" >)</span>\n<span class=\"token keyword\" >const</span> rootRoute <span class=\"token operator\" >=</span> converter<span class=\"token punctuation\" >.</span><span class=\"token function\" >route</span><span class=\"token punctuation\" >(</span>location<span class=\"token punctuation\" >)</span>\n"),
	    ul({},
	    li({},
	    "In fact, we ",
	    em({},
	    "could"),
	
	    " make this even simpler by creating a ",
	    code({}, "getRoute"),
	    " function which accepts both the location and Junction."),
	
	    li({},
	    "The only reason we split them into two is performance"),
	
	    li({},
	    "Any conversion needs to do some up-front work on the supplied Junction object. Creating a persistent ",
	    code({}, "Converter"),
	    " object lets Junctions save the result of this work for later, improving performance."),
	
	    li({},
	    "But what about a real application?"),
	
	    li({},
	    "Usage in an actual application is – surprisingly – almost identical. But there are a few differences you may encounter")),
	
	
	    h2({ "id": "base-locations" },
	    "Base Locations"),
	
	    ul({},
	    li({},
	    "If your application doesn’t know where it is mounted, it might not work"),
	
	    li({},
	    "Junctions assumes that the entire Location, right from the start, needs to be converted into routes.",
	    strong({},
	    "TODO: example")),
	
	
	    li({},
	    "So if your Location has some irrelevant information, it needs to be stripped."),
	
	    li({},
	    "You can tell the Converter to do so by supplying a base Location",
	    strong({},
	    "TODO: example"))),
	
	
	
	    h2({ "id": "canonical-locations" },
	    "Canonical Locations"),
	
	    ul({},
	    li({},
	    "If any of your applications junctions specify default parameters, then the converter will add these where necessary."),
	
	    li({},
	    "This means that the Route which the converter returns may differ from the Location which you passed to it",
	    strong({},
	    "TODO: example")),
	
	
	    li({},
	    "This may not be a problem for you. But if it is, you can also use the converter to generate a ",
	    em({},
	    "new"),
	
	    ", ",
	    em({},
	    "canonical"),
	
	    " location for your route",
	    strong({},
	    "TODO: example")),
	
	
	    li({},
	    "If your original location didn’t specify some parameters with defaults, your new one will. By navigating to it, you can ensure that the user only ever sees one URL for a given route.")),
	
	
	    h2({ "id": "example-use-with-history" },
	    "Example: Use with History"),
	
	    ul({},
	    li({},
	    "Here’s an example which uses the history package, along with everything we’ve learned so far, to output the current root route to the screen and navigate to the canonical location")),
	
	
	    p({},
	    strong({},
	    "TODO: example"))));
	
	
	
	
	};
	module.exports = __webpack_require__(1).markdownPostProcessor(module.exports);
	module.exports.meta = {
	  "title": "Converting Locations to Routes"
	}


/***/ }

});