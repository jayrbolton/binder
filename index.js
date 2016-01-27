// Can do two formats:
// bind('attr-name', myFunction)               -> binds to all attrs in document
// bind('attr-name', parentNode, myFunction)   -> binds to all attrs below parentNode
function bind(attr) {
  if (typeof arguments[1] === 'function') {
    var node = document
    var fn = arguments[1]
  } else {
    var node = arguments[1]
    var fn = arguments[2]
  }
  var nodes = node.querySelectorAll('[' + attr + ']')
  for(var i = 0; i < nodes.length; ++i) {
    fn(nodes[i], nodes[i].getAttribute(attr))
  }
}

module.exports = bind
