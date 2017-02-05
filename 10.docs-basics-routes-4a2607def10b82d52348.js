webpackJsonp([10],{

/***/ 125:
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
	    "A ",
	    code({}, "Route"),
	    " is an object which contains a portion of your app’s Navigation state."),
	
	    li({},
	    "But where a ",
	    code({}, "Location"),
	    " describes the state of your entire application, a ",
	    code({}, "Route"),
	    " typically describes the portion of navigation state corresponds to one specific component within your application")),
	
	
	    p({},
	    strong({},
	    "TODO: Example of screen which can render one of two routes, each with different keys")),
	
	
	    ul({},
	    li({},
	    p({},
	    "You’ll often render different types of components based on the key. But how can you pass other information to the component?")),
	
	
	    li({},
	    p({},
	    "Route objects can also hold a ",
	    strong({},
	    "params"),
	
	    " object with further details on the route")),
	
	
	    li({},
	    p({},
	    "Example of a screen rendering something based on its parameters"))),
	
	
	
	    h2({ "id": "nesting-routes" },
	    "Nesting Routes"),
	
	    ul({},
	    li({},
	    "Each Route represents the navigation state of a single Screen. But what happens if one Screen contains another screen?"),
	
	    li({},
	    em({},
	    "The Route for the parent screen must contain the Route for the child screen.")),
	
	
	    li({},
	    "This is accomplished through the ",
	    strong({},
	    "children"),
	
	    " property of a Route.")),
	
	
	    p({},
	    strong({},
	    "TODO: Example of a Route which holds another Route under its children property")),
	
	
	    ul({},
	    li({},
	    p({},
	    "One of the most important concepts to grasp about Junctions is that ",
	    strong({},
	    "Routes are relative"),
	
	    ".")),
	
	
	    li({},
	    p({},
	    "Routes only ever contain the information about their state and their children’s state. But they don’t know anything about their parents.")),
	
	
	    li({},
	    p({},
	    "This means that any Route can be included in the children of another Route. And ",
	    strong({},
	    "any navigable screen can be mounted in any other navigable screen"))),
	
	
	
	    li({},
	    p({},
	    "Example where the above route is mounted inside another screen, along with screen code"))),
	
	
	
	    h2({ "id": "routes-are-like-onions" },
	    "Routes are like Onions"),
	
	    ul({},
	    li({},
	    "One way of visualising this is to think of Routes as onions.")),
	
	
	    p({},
	    strong({},
	    "TODO: Image: Onion vs. Route")),
	
	
	    ul({},
	    li({},
	    p({},
	    "Like an onion, Each Route can contain a number of layers, linked by ",
	    code({}, "children"),
	    " properties.")),
	
	
	    li({},
	    p({},
	    "Also like an onion, you only have access to the outermost layer of an Route.")),
	
	
	    li({},
	    p({},
	    "But luckily, one screen generally only needs access to the information in the outermost layer.")),
	
	
	    li({},
	    p({},
	    "Once we’ve got our information, we can peel off that layer by accessing the ",
	    code({}, "children"),
	    " prop, and passing it through to our child Screen.")),
	
	
	    li({},
	    p({},
	    "Conversely, just because we have a route, we cannot say where it came from. It may have had many layers. Thus routes must be relative.")),
	
	
	    li({},
	    p({},
	    "In fact, its not just Routes which are like onions. React components are like onions too."))),
	
	
	
	    p({},
	    strong({},
	    "TODO: Image: React Component Block Diagram vs. Route Object block Diagram")),
	
	
	    ul({},
	    li({},
	    p({},
	    "It is this similarity that allows Junctions to meet its third principle: Pass your own props")),
	
	
	    li({},
	    p({},
	    "Because the structures of React components and Route objects are so similar, manually passing the correct information to a child component is as simple as peeling off a layer and passing in the result.")),
	
	
	    li({},
	    p({},
	    "Both React Components and Junctions ",
	    code({}, "Route"),
	    " objects do not include any information about their original context. In onion terms, once you peel a layer away from a Route, the remaining Route will not know that the layer existed.")),
	
	
	    li({},
	    p({},
	    "But even if a Route doesn’t know where it came from, it still has to have come from somewhere."))),
	
	
	
	    h2({ "id": "the-root-route" },
	    "The Root Route"),
	
	    ul({},
	    li({},
	    "Your Root route is the single Route object within your application which is absolute."),
	
	    li({},
	    "This is the Route which corresponds to the most top-level Screen in your application"),
	
	    li({},
	    "It also contains all the information in your application’s current ",
	    code({}, "Location"),
	    "."),
	
	    li({},
	    "But the route is only absolute in some contexts."),
	
	    li({},
	    "It isn’t absolute when used within a screen."),
	
	    li({},
	    "So what makes it absolute?"),
	
	    li({},
	    "The thing which makes this route absolute isn’t that it contains this information, but that you ",
	    em({},
	    "know"),
	
	    " there are no parent layers. And you know this because you’ll have built this Route by converting a ",
	    code({}, "Location")),
	
	    li({},
	    "You could do this conversion manually. But this package provides helpers to do it for you. And to do so, it’ll need a Map. And that map is composed of ",
	    code({}, "Junction"),
	    " objects."))));
	
	
	
	
	};
	module.exports = __webpack_require__(1).markdownPostProcessor(module.exports);
	module.exports.meta = {
	  "title": "Routes"
	}


/***/ }

});