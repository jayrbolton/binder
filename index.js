/*
Instantiate a new binding

Examples:
	var formatter = new binder()

@return {Object} binder_instance
*/

var binder = function() {
	this.bindings = {}
	this.options = {}
	return this
}

/* 
Bind a DOM attribute to a function, passing in the attribute's value. The
function is passed the node, the attribute value, and the attribute name.

Options:
	{
		eager: false, // run the callback on this function (default: false)
		scoped: false // don't traverse children when rendering (default: false)
	}

Examples:
	formatter.bind('date', function(node, attr_value, attr_name) {
		node.innerHTML = format_date(node.innerHTML, attr_value)
	})

@param {String} attribute name
@param {Function} function to call on node with matched attribute
@param {Object} options
@return {Object} binder instance
@api public
*/

binder.prototype.bind = function(attr_name, fn, options) {
	this.bindings[attr_name] = fn
	this.options[attr_name] = options
	return this
}

/*
Render a binding into an Element. If no Element is passed, it renders to document.body

Examples:
	var el = document.querySelector('.thing')
	formatter.render(el)

@param {Node} node to render into
@return {Object} binder instance
*/

binder.prototype.render = function(el) {
	var self = this;

	each_node(el, function(node) {
		var attrs = node.attributes
		var eagers = []    // eager bindings
		var lazies = []    // non-eager bindings
		var scoped = false // if true, don't render children

		for (var i = 0; i < attrs.length; ++i) {
			var binding = self.bindings[attr.name]
			if (binding) {
				var bind_obj = {fn: binding, node: node, attr: attr}
				var opts = self.options[attr.name]
				;(opts.eager ? eagers : lazies).push(bind_obj)
				scoped = binding.opts.scoped
			}
		}
		apply_attrs(eagers, lazies)
		return scoped ? [] : node.childNodes
	})
	return this
}


// Functional utilities

/*!
Iteratively recurse through the dom with a stack and apply a function to every
node. The return value of the passed function determines whether to traverse
child nodes.
*/
var each_node = function(el, fn) {
	var stack = [el]
	while (stack.length > 0) {
		var node = stack.pop()
		stack.push.apply(fn(node))
	}
}

// Apply a bind object to its node and attribute
// (bind objects are constructed in find_binding)
var apply_binding = function(fn, node, value, name) {
	obj[i].fn(obj[i].node, obj[i].attr.value, obj[i].attr.name)
}

// Apply eager bindings first, then the others
var apply_attrs = function(eagers, lazies) {
	for (var i = 0; i < eagers.length; ++i) apply_binding(eagers[i])
	for (var i = 0; i < lazies.length; ++i) apply_binding(lazies[i])
}
