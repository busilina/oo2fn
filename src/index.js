var oo2func = function(oofunc){
    return Function.call.bind(oofunc);
}