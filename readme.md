# binder

Bind functions to attributes.

Like component/reactive but with just bindings.

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

## Installation

[component](http://component.io)

```sh
$ component install the-swerve/bind
```

## API

#### new binder()

Instantiate a new binding

```js
var formatter = new binder()
```

#### bind(attribute, function, options)

Bind a DOM attribute to a function, passing in the attribute's value. The
function is passed the node, the attribute value, and the attribute name.

```js
// format an element with some date text
formatter.bind('date', function(node, attr_value, attr_name) {
	node.innerHTML = format_date(node.innerHTML, attr_value)
})
```

```js
// Available Options
{
	eager: false, // run the callback on this function (default: false)
	scoped: false // don&#39;t traverse children when rendering (default: false)
}
```

#### render(node)

Render a binding into an Element.

```js
var el = document.querySelector('div')
formatter.render(el)
```

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
