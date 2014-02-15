# binder

Bind functions to attributes.

Some ideas for ways you can use declarative bindings:

* Dynamic templating
* Inline form validation
* Date, time, and currency formatting
* State machines
* Form wizards
* Auto form submission
* Input masks
* Modal/dropdown/tooltip toggling

No dependencies. IE6+.

Like component/reactive but with just bindings.

## Installation

[component](http://component.io)

```sh
$ component install the-swerve/binder
```

## API

#### new binder()

Instantiate a new binding

```js
var binder = require('binder')
var formatter = new binder()
```

#### binder#bind(attribute, fn), binder#bind(attribute, fn, options)

Bind a DOM attribute to a function, passing in the attribute's value. The
function is passed the node, the attribute value, and the attribute name.

```js
// format an element with some date text
formatter.bind('date', function(node, attr_val) {
	node.innerHTML = format_date(node.innerHTML, attr_val)
})
```

```js
// Available Options
{
	eager: false, // run this binding before others on this node (default: false)
	scoped: false // don't traverse children within this node when rendering (default: false)
}
```

Eager bindings are useful for making sure that certain bindings run before
others. Multiple eager bindings will have no guaranteed order.

Scoped bindings will prevent the renderer from checking for any bindings within
the children of its node. 

#### binder#render(node)

Render a binding into an Element.

```js
var el = document.querySelector('div')
formatter.render(el)
```

This will find and call any bindings within `el`, including `el` itself.

## License

The MIT License (MIT)

Copyright (c) 2014 <copyright holders>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
