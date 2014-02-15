var binder = function() {
	this.bindings = {}, this.options = {}
	return this
}

module.exports = binder;

binder.prototype.bind = function(attr_name, fn, options) {
	this.bindings[attr_name] = fn
	if (options) this.options[attr_name] = options
	return this
}

// find and call bindings
binder.prototype.render = function(el) {
	var self = this;
	each_node(el, function(node) {
		var eagers = [], lazies = [], scoped = false
		if (!node.attributes) return []
		each(node.attributes, function(attr) {
			var binding = self.bindings[attr.name]
			if (binding) {
				var bind_obj = {f:binding, n:node, a:attr}
				var opts = self.options[attr.name]
				;(opts && opts.eager ? eagers : lazies).push(bind_obj)
				scoped = opts && opts.scoped
			}
		})
		apply_attrs(eagers, lazies)
		return scoped ? [] : node.childNodes
	})
	return this
}

// iteratively recurse through the dom with a stack and apply a function to every
// node. the return value of the function should supply (or not) the childNodes.
var each_node = function(el, fn) {
	var stack = [el]
	while (stack.length > 0) stack = stack.concat(fn(stack.pop())
}

// apply eager bindings first, then the others
var apply_attrs = function(eagers, lazies) {
	var apply_binding = function(b) {b.f(b.n, b.a.value, b.a.name)}
	each(eagers, apply_binding)
	each(lazies, apply_binding)
}

// for loops blerg
var each = function(xs, fn) { for(var i = 0; i < xs.length; ++i) fn(xs[i]) }
