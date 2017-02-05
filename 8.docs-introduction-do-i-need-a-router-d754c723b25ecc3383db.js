webpackJsonp([8],{

/***/ 127:
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
	    h3 = (0, _react.createFactory)('h3'),
	    h4 = (0, _react.createFactory)('h4'),
	    li = (0, _react.createFactory)('li'),
	    p = (0, _react.createFactory)('p'),
	    ul = (0, _react.createFactory)('ul') } =
	  factories;
	
	  return (
	    wrapper({},
	    p({},
	    "So you’ve decided to build a new React app. And usually, your first step would be to add a routing library. ",
	    em({},
	    "But do you really need one?")),
	
	
	    h2({ "id": "what-routers-do" },
	    "What Routers Do"),
	
	    p({},
	    "The first step to understand whether you need a routing library is to understand what routing libraries do. Which is something along the lines of:"),
	
	    ul({},
	    li({},
	    "Smooth over inconsistencies between browsers"),
	
	    li({},
	    "Provide helpers for working with React"),
	
	    li({},
	    "Respond to browser navigation events")),
	
	
	    p({},
	    "Of course, most routing libraries do a lot more. But we probably don’t ",
	    em({},
	    "need"),
	
	    " features like loading entire scripts dynamically or JSX-based definitions of available routes. So let’s keep to the basics as we go over the details."),
	
	    h3({ "id": "smoothing-over-inconsistencies-between-browsers" },
	    "Smoothing over inconsistencies between browsers"),
	
	    p({},
	    "While modern web browsers supposedly all respect the same standards, the reality is that each browser still has its own quirks. Not to mention that the standards sometimes leave a little room for interpretation."),
	
	    p({},
	    "One example is the ",
	    a({ "href": "https://developer.mozilla.org/en-US/docs/Web/Events/popstate" },
	    "popstate"),
	
	    " event. The browser emits this every time time the location changes. Or at least some browsers do; Chrome and Firefox also emit it on load, while safari doesn’t. And none of the browsers emit it when ",
	    em({},
	    "you"),
	
	    " change the state by calling ",
	    a({ "href": "https://developer.mozilla.org/en-US/docs/Web/API/History_API#The_pushState()_method" },
	    "pushState()"),
	
	    "."),
	
	    p({},
	    "To write a router using the browser’s raw History API, we’d need to smooth over all these differences. And even then, our application shouldn’t care ",
	    em({},
	    "why"),
	
	    " the location changed – it should respond to navigation events regardless. Given all this, it seems like the browser API is going to make life difficult for us. So does that mean we need a routing library? Kind of. But kind of not."),
	
	    p({},
	    em({},
	    "It means we need a browser inconsistency smoothing library.")),
	
	
	    p({},
	    "And thats what the ",
	    a({ "href": "https://github.com/mjackson/history" },
	    "history"),
	
	    " package is for. ",
	    a({ "href": "https://github.com/ReactTraining/react-router" },
	    "react-router"),
	
	    " uses it internally, but it is a completely independent library. And it is a very useful library too. It lets you avoid all the browser inconsistencies by sticking to this pretty simple API:"),
	
	    codeBlock({ "className": "language-js" }, "<span class=\"token keyword\" >import</span> createHistory <span class=\"token keyword\" >from</span> <span class=\"token string\" >'history/createBrowserHistory'</span>\n<span class=\"token keyword\" >const</span> history <span class=\"token operator\" >=</span> <span class=\"token function\" >createHistory</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >)</span>\n\n<span class=\"token keyword\" >function</span> <span class=\"token function\" >handleNavigation</span><span class=\"token punctuation\" >(</span>location<span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n  console<span class=\"token punctuation\" >.</span><span class=\"token function\" >log</span><span class=\"token punctuation\" >(</span>location<span class=\"token punctuation\" >.</span>pathname<span class=\"token punctuation\" >)</span>\n<span class=\"token punctuation\" >}</span>\n\n<span class=\"token comment\" spellcheck=\"true\">// Handle the initial location</span>\n<span class=\"token function\" >handleNavigation</span><span class=\"token punctuation\" >(</span>history<span class=\"token punctuation\" >.</span>location<span class=\"token punctuation\" >)</span>\n\n<span class=\"token comment\" spellcheck=\"true\">// Handle subsequent navigation events</span>\nhistory<span class=\"token punctuation\" >.</span><span class=\"token function\" >listen</span><span class=\"token punctuation\" >(</span>handleNavigation<span class=\"token punctuation\" >)</span>\n"),
	    p({},
	    "Ok, so with history, we now have access to the latest location. But these history objects present a new problem: ",
	    code({}, "<a>"),
	    " tags don’t work with the History API. In fact, every time we click an ",
	    code({}, "<a>"),
	    " which holds anything other than a hash fragment like ",
	    code({}, "#butterflies"),
	    ", the entire page reloads! In order to navigate without a page reload, we’ll need to call ",
	    code({}, "history.push()"),
	    ". And to do that, a routing library will often supply some tools."),
	
	    h3({ "id": "helpers-for-working-with-react" },
	    "Helpers for working with React"),
	
	    p({},
	    "Because of the situation with ",
	    code({}, "<a>"),
	    " not working with push state, you’ll find that routing libraries include a fix. This commonly takes the form of a ",
	    code({}, "<Link>"),
	    " component – which renders an ",
	    code({}, "<a>"),
	    ", but adds an ",
	    code({}, "onClick"),
	    " handler to capture any clicks and redirect them to ",
	    code({}, "history.push()"),
	    ". In practice, this looks something like this:"),
	
	    codeBlock({ "className": "language-js" }, "<span class=\"token keyword\" >class</span> <span class=\"token class-name\" >Link</span> <span class=\"token keyword\" >extends</span> <span class=\"token class-name\" >React<span class=\"token punctuation\" >.</span>component</span> <span class=\"token punctuation\" >{</span>\n  <span class=\"token function\" >constructor</span><span class=\"token punctuation\" >(</span>props<span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n    <span class=\"token keyword\" >super</span><span class=\"token punctuation\" >(</span>props<span class=\"token punctuation\" >)</span>\n\n    <span class=\"token comment\" spellcheck=\"true\">// The `bind` is necessary to make `this` work within the `handleClick`  </span>\n    <span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>handleClick <span class=\"token operator\" >=</span> <span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>handleClick<span class=\"token punctuation\" >.</span><span class=\"token function\" >bind</span><span class=\"token punctuation\" >(</span><span class=\"token keyword\" >this</span><span class=\"token punctuation\" >)</span>\n  <span class=\"token punctuation\" >}</span>\n\n  <span class=\"token function\" >handleClick</span><span class=\"token punctuation\" >(</span>event<span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n    <span class=\"token keyword\" >if</span> <span class=\"token punctuation\" >(</span>event<span class=\"token punctuation\" >.</span>defaultPrevented <span class=\"token operator\" >||</span>\n        <span class=\"token function\" >isModifiedEvent</span><span class=\"token punctuation\" >(</span>event<span class=\"token punctuation\" >)</span> <span class=\"token operator\" >||</span>\n        <span class=\"token operator\" >!</span><span class=\"token function\" >isLeftClickEvent</span><span class=\"token punctuation\" >(</span>event<span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n      <span class=\"token keyword\" >return</span>\n    <span class=\"token punctuation\" >}</span>\n\n    event<span class=\"token punctuation\" >.</span><span class=\"token function\" >preventDefault</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >)</span>\n\n    <span class=\"token comment\" spellcheck=\"true\">// It only makes sense for an application to have one history, so we can</span>\n    <span class=\"token comment\" spellcheck=\"true\">// make it global</span>\n    history<span class=\"token punctuation\" >.</span><span class=\"token function\" >push</span><span class=\"token punctuation\" >(</span><span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>props<span class=\"token punctuation\" >.</span>to<span class=\"token punctuation\" >)</span>\n  <span class=\"token punctuation\" >}</span>\n\n  <span class=\"token function\" >render</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n    <span class=\"token keyword\" >var</span> props <span class=\"token operator\" >=</span> Object<span class=\"token punctuation\" >.</span><span class=\"token function\" >assign</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span> <span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>props<span class=\"token punctuation\" >)</span>\n\n    \n    props<span class=\"token punctuation\" >.</span>onClick <span class=\"token operator\" >=</span> <span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>handleClick\n    props<span class=\"token punctuation\" >.</span>href <span class=\"token operator\" >=</span> <span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>props<span class=\"token punctuation\" >.</span>to<span class=\"token punctuation\" >.</span>pathname <span class=\"token operator\" >+</span> <span class=\"token punctuation\" >(</span><span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>props<span class=\"token punctuation\" >.</span>to<span class=\"token punctuation\" >.</span>search <span class=\"token operator\" >||</span> <span class=\"token string\" >''</span><span class=\"token punctuation\" >)</span>\n    <span class=\"token keyword\" >delete</span> <span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>props<span class=\"token punctuation\" >.</span>to\n\n    <span class=\"token keyword\" >return</span> <span class=\"token operator\" >&lt;</span>a <span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >.</span><span class=\"token punctuation\" >.</span><span class=\"token punctuation\" >.</span>props<span class=\"token punctuation\" >}</span><span class=\"token operator\" >></span><span class=\"token punctuation\" >{</span>props<span class=\"token punctuation\" >.</span>children<span class=\"token punctuation\" >}</span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>a</span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token punctuation\" >}</span>\n<span class=\"token punctuation\" >}</span>\n"),
	    p({},
	    "A full featured implementation of ",
	    code({}, "<Link>"),
	    " will probably want a few extra features; for example, accepting a ",
	    code({}, "history"),
	    " object from ",
	    a({ "href": "https://facebook.github.io/react/docs/context.html" },
	    "Context"),
	
	    ". But even with these features, ",
	    code({}, "<Link>"),
	    " doesn’t need to be hugely complicated. After all, ",
	    code({}, "<a>"),
	    " isn’t hugely complicated either."),
	
	    p({},
	    "And while most routing libraries will probably provide some other bits and pieces, it is unlikely you’ll actually need them. I mean, you don’t even really need a ",
	    code({}, "<Link>"),
	    " component; if you use a ",
	    a({ "href": "http://jamesknelson.com/push-state-vs-hash-based-routing-with-react-js/" },
	    "hash based"),
	
	    " router instead, then you’ll be fine without it. But assuming you’re using push state, it isn’t a huge problem to just roll your own."),
	
	    p({},
	    "So maybe we don’t need a routing library? But there is still one thing we need to take care of. Even if we can render ",
	    code({}, "<Link>"),
	    " tags and receive a notification when the user navigates, we still don’t know what to actually ",
	    em({},
	    "do"),
	
	    " with the received locations."),
	
	    h3({ "id": "responding-to-browser-navigation-events" },
	    "Responding to browser navigation events"),
	
	    p({},
	    "Given we have a ",
	    code({}, "history.listen()"),
	    " handler, our application is going to receive a series of ",
	    code({}, "location"),
	    " objects. Each one looks something like this:"),
	
	    codeBlock({ "className": "language-js" }, "<span class=\"token punctuation\" >{</span>\n  pathname<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'/todos'</span><span class=\"token punctuation\" >,</span>\n  search<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'?page=2'</span><span class=\"token punctuation\" >,</span>\n  state<span class=\"token punctuation\" >:</span> <span class=\"token punctuation\" >{</span>\n    some_arbitrary_stuff<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'人参'</span>\n  <span class=\"token punctuation\" >}</span>\n<span class=\"token punctuation\" >}</span>\n"),
	    p({},
	    "You can think of these locations as one way of specifying what the application should render. For example, the object above may specify that we’d like to see page two of a ",
	    em({},
	    "Todos"),
	
	    " screen. Easy, right?"),
	
	    p({},
	    "But let me ask you a question. Given the user has just clicked a ",
	    code({}, "<Link>"),
	    " and we’ve received this new location, ",
	    em({},
	    "how does React know what to actually render"),
	
	    "? And this brings up another question: ",
	    em({},
	    "how does React even know it has to re-render?")),
	
	
	    h4({ "id": "telling-react-about-location-changes" },
	    "Telling React about location changes"),
	
	    p({},
	    "One of the best things about React is that it is pretty dumb. It doesn’t try and guess when things like your location change. You need to tell it."),
	
	    p({},
	    "The most common way of doing so is with a component’s ",
	    a({ "href": "https://facebook.github.io/react/docs/react-component.html#setstate" },
	    "setState()"),
	
	    " method. But in order to use ",
	    code({}, "setState()"),
	    " from within our navigation handler, our handler will need to have access to ",
	    code({}, "setState()"),
	    ". And this means that we’ll need to create the handler function and pass it to ",
	    code({}, "history.listen()"),
	    " within the component itself. Like this:"),
	
	    codeBlock({ "className": "language-js" }, "<span class=\"token keyword\" >class</span> <span class=\"token class-name\" >Application</span> <span class=\"token keyword\" >extends</span> <span class=\"token class-name\" >React<span class=\"token punctuation\" >.</span>Component</span> <span class=\"token punctuation\" >{</span>\n  <span class=\"token function\" >constructor</span><span class=\"token punctuation\" >(</span>props<span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n    <span class=\"token keyword\" >super</span><span class=\"token punctuation\" >(</span>props<span class=\"token punctuation\" >)</span>\n\n    <span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>state <span class=\"token operator\" >=</span> <span class=\"token punctuation\" >{</span>\n      location<span class=\"token punctuation\" >:</span> history<span class=\"token punctuation\" >.</span>location\n    <span class=\"token punctuation\" >}</span>\n\n    history<span class=\"token punctuation\" >.</span><span class=\"token function\" >listen</span><span class=\"token punctuation\" >(</span><span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>handleNavigation<span class=\"token punctuation\" >.</span><span class=\"token function\" >bind</span><span class=\"token punctuation\" >(</span><span class=\"token keyword\" >this</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >)</span>\n  <span class=\"token punctuation\" >}</span>\n\n  <span class=\"token function\" >handleNavigation</span><span class=\"token punctuation\" >(</span>location<span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n    <span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span><span class=\"token function\" >setState</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >{</span>\n      location<span class=\"token punctuation\" >:</span> location<span class=\"token punctuation\" >,</span>\n    <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >)</span>\n  <span class=\"token punctuation\" >}</span>\n\n  <span class=\"token comment\" spellcheck=\"true\">// ...</span>\n<span class=\"token punctuation\" >}</span>\n"),
	    p({},
	    "With this, you can now always access the most recent location at ",
	    code({}, "this.state.location"),
	    ". So the obvious question is: what should you actually do with it?"),
	
	    h4({ "id": "rendering-your-routes" },
	    "Rendering your routes"),
	
	    p({},
	    "In React, rendering your routes is really no different than rendering anything else. You just take the location at ",
	    code({}, "this.state.location"),
	    ", and return an element based on its value. Like this:"),
	
	    codeBlock({ "className": "language-js" }, "<span class=\"token function\" >render</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n  <span class=\"token keyword\" >const</span> pathname <span class=\"token operator\" >=</span> <span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>state<span class=\"token punctuation\" >.</span>location<span class=\"token punctuation\" >.</span>pathname\n\n  <span class=\"token keyword\" >if</span> <span class=\"token punctuation\" >(</span>pathname <span class=\"token operator\" >===</span> <span class=\"token string\" >'/todos'</span><span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n    <span class=\"token keyword\" >return</span> <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Todos</span> <span class=\"token attr-name\" >search</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>state<span class=\"token punctuation\" >.</span>location<span class=\"token punctuation\" >.</span>search<span class=\"token punctuation\" >}</span></span> <span class=\"token punctuation\" >/></span></span>\n  <span class=\"token punctuation\" >}</span>\n  <span class=\"token keyword\" >else</span> <span class=\"token keyword\" >if</span> <span class=\"token punctuation\" >(</span>pathname <span class=\"token operator\" >===</span> <span class=\"token string\" >'/reminders'</span><span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n    <span class=\"token keyword\" >return</span> <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Reminders</span> <span class=\"token attr-name\" >search</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>state<span class=\"token punctuation\" >.</span>location<span class=\"token punctuation\" >.</span>search<span class=\"token punctuation\" >}</span></span> <span class=\"token punctuation\" >/></span></span>\n  <span class=\"token punctuation\" >}</span>\n  <span class=\"token keyword\" >else</span> <span class=\"token punctuation\" >{</span>\n    <span class=\"token keyword\" >return</span> <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>NotFound</span> <span class=\"token punctuation\" >/></span></span>\n  <span class=\"token punctuation\" >}</span>\n<span class=\"token punctuation\" >}</span>\n"),
	    p({},
	    "Simple, right? Or at least, simple so long as we don’t add a bunch more routes. Once your application starts to grow in size, you’re going to want to find a better way of processing the location than a giant ",
	    code({}, "if-else"),
	    " or ",
	    code({}, "switch"),
	    " statement. And that is going to mean a better way of representing the Location than two gnarly strings."),
	
	    p({},
	    "The thing about the two strings you get from a ",
	    code({}, "Location"),
	    " object is they’re made that way due to browser limitations. The browser has a URL bar, so your application receives URLs – even if it would make way more sense to receive some sort of ",
	    em({},
	    "Route"),
	
	    " object which matches the structure of your application."),
	
	    p({},
	    "This is where routing libraries really do shine – they can convert ",
	    code({}, "Location"),
	    " objects into something more useful. Or to put it another way, good libraries add useful functionality. They don’t replace it."),
	
	    h2({ "id": "to-route-or-not-to-route" },
	    "To Route Or Not To Route"),
	
	    p({},
	    "But to return to the original question; ",
	    em({},
	    "do I even need a routing library?"),
	
	    " The answer is (of course) it depends."),
	
	    p({},
	    "Are you writing a simple application where you’ve got few enough URLs that a simple ",
	    code({}, "<Application>"),
	    " component is easily comprehensible? Then you probably don’t need a routing library. Using the history package with a custom ",
	    code({}, "<Link>"),
	    " component is nice and simple. And if your application grows, you can always add appropriate tools down the track."),
	
	    p({},
	    "But maybe your URLs are complex enough that you’d like to break them down into more manageable parts. Or maybe you want individual screens to manage their own routes – as opposed to a single application-wide ",
	    code({}, "<Application>"),
	    " component. Or maybe you just want some well-defined patterns to follow. In this case, Junctions is just what you need!")));
	
	
	
	};
	module.exports = __webpack_require__(1).markdownPostProcessor(module.exports);
	module.exports.meta = {
	  "metaTitle": "Does my React app need a Router?",
	  "metaDescription": "So you've decided to build a new React app. And usually, your first step would be to add a routing library. *But do you really need one?*",
	  "title": "Do I Need A Router?"
	}


/***/ }

});