webpackJsonp([9],{

/***/ 126:
/***/ function(module, exports, __webpack_require__) {

	'use strict';var _react = __webpack_require__(2);var _react2 = _interopRequireDefault(_react);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
	
	
	module.exports = function ({ factories = {} }) {
	  var {
	    wrapper = (0, _react.createFactory)('div'),
	    a = (0, _react.createFactory)('a'),
	    code = (0, _react.createFactory)('code'),
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
	
	
	    p({},
	    em({},
	    "Junctions"),
	
	    " is a single tool for converting between Routes and Locations – and that’s it. But while this gives you a huge amount of flexibility, it can also leave you scratching your head as to the best way to use it."),
	
	    p({},
	    strong({},
	    "Screen Components"),
	
	    " are a solution to this. They’re a pattern for components which specify junctions and consume matching routes. And while they still give you flexibility to use ",
	    em({},
	    "Junctions"),
	
	    " whichever way you see fit, they take the guesswork out of getting started."),
	
	    p({},
	    "So what do Screen components look like?"),
	
	    ul({},
	    li({},
	    "They have a static ",
	    code({}, "junction"),
	    " property"),
	
	    li({},
	    "They accept a ",
	    code({}, "route"),
	    " prop"),
	
	    li({},
	    "Their route’s ",
	    code({}, "child"),
	    ", if it exists, is passed to a child screen")),
	
	
	    p({},
	    "For example:"),
	
	    p({},
	    strong({},
	    "TODO: example")),
	
	
	    p({},
	    "Let’s go over this example one step at a time"),
	
	    h2({ "id": "the-static-property" },
	    "The static ",
	    code({}, "junction"),
	    " property"),
	
	    ul({},
	    li({},
	    "Like React’s ",
	    code({}, "propTypes"),
	    ", this specifies the types which can be passed in"),
	
	    li({},
	    "But unlike ",
	    code({}, "propTypes"),
	    ", it is actually used at runtime in production:",
	    ul({},
	    li({},
	    "If this is the root screen, the converter will use it directly"),
	
	    li({},
	    "If this is a nested screen, the parent screen’s Junction needs to access it",
	    strong({},
	    "TODO: example")))),
	
	
	
	
	    li({},
	    "Because we know that any screen component has a ",
	    code({}, "junction"),
	    " property, composing screens becomes simply a matter of passing that junction to our junction branch’s ",
	    code({}, "child"),
	    " property")),
	
	
	    h2({ "id": "the-prop" },
	    "The ",
	    code({}, "route"),
	    " prop"),
	
	    ul({},
	    li({},
	    "A screen’s ",
	    em({},
	    "current"),
	
	    " Route object is always passed in via the component’s ",
	    code({}, "route"),
	    " prop"),
	
	    li({},
	    "This route will match one of the junction branches specified on the screen’s junction, as we trust that anybody using a screen knows where to find our Junction")),
	
	
	    h2({ "id": "handling-routes-property" },
	    "Handling route’s ",
	    code({}, "child"),
	    " property"),
	
	    ul({},
	    li({},
	    "If a Screen component’s Junction specifies child Screens, then a Screen needs to handle the routes for child screens too."),
	
	    li({},
	    "To do so, the screen should pass its ",
	    code({}, "route.child"),
	    " through to the child Screen’s ",
	    code({}, "route"),
	    " prop"),
	
	    li({},
	    code({}, "route.child"),
	    " will differ based on which branch is currently active, so regardless of which child component you’re rendering for the current route, ",
	    em({},
	    "its"),
	
	    " children will still be ",
	    code({}, "route.child")))));
	
	
	
	
	};
	module.exports = __webpack_require__(1).markdownPostProcessor(module.exports);
	module.exports.meta = {
	  "title": "The Screen Pattern"
	}


/***/ }

});