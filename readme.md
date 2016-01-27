# binder

A micro-library for binding functions to attributes in the dom. No dependencies. IE8+.

```sh
$ npm install attr-binder
```

```js
var bind = require('binder')
```

#### bind(attribute, fn), bind(attribute, parentNode, fn)

Bind a DOM attribute to a function, passing in the attribute's value. The
function is passed the node, the attribute value, and the attribute name.

For example, we have a "Post Comment" button that shows a sign-in modal or a
comment modal depending on whether the user is signed in.

```html
<p markdown>**This will get turned into markdown using marked.js**</p>
```

```js
// Automatically render markdown
bind('markdown', function(node) {
	node.innerHTML = marked(node.innerHTML)
})
```

You can scope the bindings beneath a parent element
```js
bind('markdown', document.querySelector('.content'), fn)
// only binds to elements that are children of .content
```
