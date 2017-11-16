var queue = (function(){
    //var a=[];
    a = [];
    var pushFn = function(value){
    a.push(value);
    };
    var popFn = function(){
    return a.sort(function(a,b){ return b-a }).pop();
    };
    return { push : pushFn, pop : popFn};
    })();

    queue.push(10);
    queue.push(20);
    queue.push(30);
    queue.push(40);

    console.log('Original Queue',a);
    queue.pop();
    console.log('Remain first round',a);
    queue.pop();
    console.log('Remain second round',a);
    queue.pop();
    console.log('Remain third round',a);
    queue.pop();
    console.log('Remain last round',a);