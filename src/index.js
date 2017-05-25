module.exports = function(oofunc){
    return Function.call.bind(oofunc);
}

// var O = {f: function(args){...}}
// var f = oo2func(O.f)
// now we can call f like this:
// f(O, args) the same as Function.call.bind(O.f)(O, args)
// but we know that g.bind(k)(args) is the same as k.g(args)
// => Function.call.bind(O.f)(O, args) is the same as O.f.call(O,args)
//    giving  g = Function.call, and
//            k = O.f
// O.f.call(O, args) equals to O.f(args)
// => f(O, args) = O.f(args)
