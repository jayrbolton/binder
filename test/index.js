var assert = require('assert')
var binder = require ('binder')

describe('binder', function() {

	it ('instantiates', function() {
		var formatter = new binder()
		assert.notEqual(formatter, undefined)
	})

})
