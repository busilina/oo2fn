# oo2fn
converts any object-oriented function's call to a functional call: o.f(args) => f(o, args)

# getting started
- var O = {x: 1, y: 2, add: function(z){return this.x + this.y + z}}
- O.add(5); // 8
- var add = oo2fn(O.add)
- add(O, 5) // 8

# more useful examples
- var toUpperCase = oo2fn(String.prototype.toUpperCase)
- toUpperCase('abc') //ABC
