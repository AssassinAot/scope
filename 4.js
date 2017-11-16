function foo(){
    var bar = false;
    function zip(){
        var quux = 5;
        bar = true;
    };
    quux = 10;
    return zip;
}
// var xxx = foo();
// xxx();
//Will say undefined because 
//console.log(bar);