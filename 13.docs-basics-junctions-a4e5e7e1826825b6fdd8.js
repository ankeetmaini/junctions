webpackJsonp([13],{

/***/ 122:
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
	
	
	    ul({},
	    li({},
	    p({},
	    "So far, we’ve discussed the two types of objects which ",
	    em({},
	    "hold"),
	
	    " our state - Locations and Routes.")),
	
	
	    li({},
	    p({},
	    "But ",
	    code({}, "Junction"),
	    " objects are a little different. Instead of holding navigation state itself, they ",
	    strong({},
	    "describe the set of possible values"),
	
	    " which the application’s navigation state can take – allowing Junctions to automatically convert between Location and Route objects.")),
	
	
	    li({},
	    p({},
	    "Junction objects are found wherever Routes are consumed. In practice, this means that your Screen Components have junctions associated with them.")),
	
	
	    li({},
	    p({},
	    "For example, a screen which can render one of these two routes would declare this by setting a static ",
	    code({}, "junction"),
	    " property like so")),
	
	
	    li({},
	    p({},
	    "each of these possibilities is called a ",
	    strong({},
	    "branch"))),
	
	
	
	    li({},
	    p({},
	    "branches can specify information")),
	
	
	    li({},
	    p({},
	    "for example, you can specify arbitrary data associated with a branch. This data will be passed through to a route on its ",
	    strong({},
	    "data"),
	
	    " property")),
	
	
	    li({},
	    p({},
	    "and where routes can have parameters, junctions declare the types of parameters (see API ref for details)")),
	
	
	    li({},
	    p({},
	    "but junctions aren’t just a way of specifying route types. they’re a way to specify navigation state types.")),
	
	
	    li({},
	    p({},
	    "junctions specify possible URLs too. and this can be used to map between Locations and Routes")),
	
	
	    li({},
	    p({},
	    "junctions are nested, like routes")),
	
	
	    li({},
	    p({},
	    "unlike routes, junctions are aren’t onions")),
	
	
	    li({},
	    p({},
	    "each junction can have multiple children")),
	
	
	    li({},
	    p({},
	    "junctions are trees. In fact, they’re decision trees."))),
	
	
	
	    p({},
	    strong({},
	    "TODO: decision tree image")),
	
	
	    h2({ "id": "junctions-are-decision-trees" },
	    "Junctions are decision trees"),
	
	    ul({},
	    li({},
	    "this section started by stating that junction objects describe your navigation state."),
	
	    li({},
	    "but the key to understanding Junction objects is to understanding ",
	    em({},
	    "why"),
	
	    " Junctions are described in the format they are."),
	
	    li({},
	    "Your Root Junction object describes all possible values of your application’s Location or Root Route, in the form of a decision tree which lets you convert between both forms - Location and Route"),
	
	    li({},
	    "to see this, consider the following URL. How do you split it into routes?")),
	
	
	    code({}, "`/invoices/add`\n"),
	    ul({},
	    li({},
	    "but given the following decision tree, the conversion becomes obvious")),
	
	
	    p({},
	    strong({},
	    "TODO: decision tree image")),
	
	
	    ul({},
	    li({},
	    "You can think of your application’s root Junction object as a Map which let’s this package’s tooling automatically find a Route to a given Location."),
	
	    li({},
	    "As you see, Junctions are really the core of this package. And to forgo all decorum and state the obvious, that is why the package is called Junctions."))));
	
	
	
	
	};
	module.exports = __webpack_require__(1).markdownPostProcessor(module.exports);
	module.exports.meta = {
	  "title": "Junctions"
	}


/***/ }

});