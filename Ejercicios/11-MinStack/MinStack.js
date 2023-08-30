function Node(value) {
  this.value = value
  this.next = null
}

function MinStack() {
  this.minimo = Infinity
  this.top = null
}

MinStack.prototype.push = function(value) {
  let current = this.top
  this.top = new Node(value)
  this.top.next = current

  if(!current) this.top.minimo = value
  else if(value < current.minimo) this.top.minimo = value
  else this.top.minimo = current.minimo
}

MinStack.prototype.pop = function() {
  let current = this.top
  this.top = this.top.next
  return current.value
}

MinStack.prototype.min = function() {
  return this.top.minimo
}


MinStack.prototype.peek = function() {
  return this.top.value
}

module.exports = {
  Node,
  MinStack
}
