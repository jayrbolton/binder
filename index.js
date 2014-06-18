function bind(attr, x, y) {
	if (typeof x === 'function') {
		var node = document
		var fn = x
	} else {
		var node = x
		var fn = y
	}
	console.log('[' + attr + ']', node.querySelectorAll('*[' + attr + ']'))
	var nodes = node.querySelectorAll('[' + attr + ']')
	console.log(nodes)
	for(var i = 0; i < nodes.length; ++i)
		fn(nodes[i], nodes[i].getAttribute(attr))
}

module.exports = bind
