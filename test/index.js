var assert = require('assert')
var domify = require('domify')
var binder = require('binder')

describe('binder', function() {

	it ('binds a function to an attribute', function() {
		var called = 0
		var el = domify('<div data-bind></div>')
		binder()
			.bind('data-bind', function() { ++called })
			.render(el)
		assert.equal(called, 1)
	})

	it ('doesnt render inside scoped bindings', function() {
		var called = 0
		var el = domify('<div bind><p scope></p></div>')
		var inc = function() { ++called }
		binder()
			.bind('bind', inc, {scoped: true})
			.bind('scope', inc)
			.render(el)
		assert.equal(called, 1)
	})

	it ('renders eager bindings first', function() {
		var val = 0
		var el = domify('<div lazy eager></div>')
		var inst = new binder()
		inst.bind('eager', function() {val += 2}, {eager: true})
		inst.bind('lazy', function() {val *= 2})
		inst.render(el)
		// if lazy is called first, val will be 2
		// if eager is called first, val will be 4
		assert.equal(val, 4)
	})

})
