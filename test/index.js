var assert = require('assert')
var domify = require('domify')
var bind = require('../')

describe('binder', function() {

	it('binds a function to an attribute within a node', function() {
		var el = domify("<div><div bind></div></div>")
		bind('bind', el, function(node, val) {
			node.innerHTML = 'hi'
		})
		assert.equal(el.firstChild.innerHTML, 'hi')
	})

})
