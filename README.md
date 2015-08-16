# Backbone TodoMVC + Earl-Grey

This is an implementation of the Backbone TodoMVC app but written with [Earl-Grey](https://breuleux.github.io/earl-grey/).  Earl-Grey has many nice features that are just now gaining traction in ES6/7 but also it has pattern matching, a document-building DSL, macros and so much more! Take a look and give it a whirl!

## Usage

```
npm install
npm start
```
Then open `http://localhost:8080/`.

## Upcoming

I want to take a look at the [todomvc-backbone-es6](https://github.com/tastejs/todomvc-backbone-es6) and see if there's any new patterns (not in the original Backbone.js version) that I could implement in EG.  I also need to figure out why Earl-Grey classes don't seamlessly work with Backbone.js's `extend` function.  Lastly, I'd like to see if there's any good place to use some macros!
