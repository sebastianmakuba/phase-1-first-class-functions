const { returns } = require("chai-spies")

function receivesAFunction (callback){
    callback ()
}

//returnsanamed function

function returnsANamedFunction (){
   return function namedFunction () {
    }
    
}

//returns anonymous function
function returnsAnAnonymousFunction (){
   return function () {};
}
returnsAnAnonymousFunction()