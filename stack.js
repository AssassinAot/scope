var stack = (function(){
    var a=[];
    var pushFn = function(value){
    a.push(value);
    };
    var popFn = function(){
    return a.pop();
    };
    return { push : pushFn, pop : popFn};
    })();