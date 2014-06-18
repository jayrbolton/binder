# binder

A micro-library for binding functions to attributes in the dom. No dependencies. IE8+.

```sh
$ npm install attr-binder
```

```js
var bind = require('binder')
```

#### bind(attribute, fn), bind(attribute, starting_node, fn)

Bind a DOM attribute to a function, passing in the attribute's value. The
function is passed the node, the attribute value, and the attribute name.

For example, we have a "Post Comment" button that shows a sign-in modal or a
comment modal depending on whether the user is signed in.

```html
<a auth-modal='new-comment'>Post Comment</a>
```

```js
// Open a modal depending on whether the user is signed in
bind('auth-modal', function(node, modal_id) {
	if (App.user)
		show_modal(query(modal_id))
	else
		show_modal(query('#sign-in'))
})
```
