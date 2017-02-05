webpackJsonp([12],{

/***/ 123:
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
	    em({},
	    "Junctions"),
	
	    " aims to make as few assumptions about your environment as possible.")),
	
	
	    li({},
	    p({},
	    "In fact, Junctions does not assume you’re using React. It should be perfectly possible to use Junctions with Vue, Angular, or any other component-based framework.")),
	
	
	    li({},
	    p({},
	    "One side-effect of this philosophy is that the core junctions package does not include a ",
	    code({}, "<Link>"),
	    " component.")),
	
	
	    li({},
	    p({},
	    "One solution to this is to roll your own Link.")),
	
	
	    li({},
	    p({},
	    "Because link components only need to communicate with your browser – not junctions itself – you can expect that the API will be stable for a very very long time")),
	
	
	    li({},
	    p({},
	    "But if you’d prefer to use something which already exists, we provide a separate react-junctions package which contains a ",
	    code({}, "<Link>"),
	    " component.")),
	
	
	    li({},
	    p({},
	    "This component assumes you’re using the history package for navigation, and uses pushState to update that history with the Location you specify."))),
	
	
	
	    p({},
	    strong({},
	    "TODO: example")),
	
	
	    ul({},
	    li({},
	    "And because passing a history to every link is less than ideal, the package also provides a HistoryContext component to make your history object available to Links throughout the application.")),
	
	
	    p({},
	    strong({},
	    "TODO: example")),
	
	
	    h2({ "id": "but-how-do-i-know-what-location-to-pass" },
	    "But how do I know what Location to pass?"),
	
	    ul({},
	    li({},
	    p({},
	    "You might have noticed in the above examples that the Location we pass is hard-coded.")),
	
	
	    li({},
	    p({},
	    "For small applications, this works fine. Even if your routes are ",
	    em({},
	    "technically"),
	
	    " relative, components with a set location in your application are ",
	    em({},
	    "effectively"),
	
	    " absolute. If you know where they’re going to be mounted, using hard-coded URLs is simple and effective.")),
	
	
	    li({},
	    p({},
	    "But what about for larger applications, where you want your screen components to be ",
	    em({},
	    "truly"),
	
	    " independent?")),
	
	
	    li({},
	    p({},
	    "Or what if you genuinely don’t know where your Screen will be mounted?")),
	
	
	    li({},
	    p({},
	    "In this case, you can’t specify a Location for your Link, because ",
	    em({},
	    "you don’t know what it will be"))),
	
	
	
	    li({},
	    p({},
	    "But this doesn’t change the fact that the ",
	    em({},
	    "browser"),
	
	    " needs a Location. Even if you can create a Route, the browser won’t understand it.")),
	
	
	    li({},
	    p({},
	    "In cases like this, you need a way to convert a relative Route into a Location which you can pass to links. Or in our terminology, we’ll need a way to Locate Routes.")))));
	
	
	
	
	
	};
	module.exports = __webpack_require__(1).markdownPostProcessor(module.exports);
	module.exports.meta = {
	  "title": "Links"
	}


/***/ }

});