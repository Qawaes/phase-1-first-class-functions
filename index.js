function receivesAFunction (callback) {
callback();
  }
  function callback(){
    console.log("Hello");
  }
  receivesAFunction(callback); 

function returnsANamedFunction(){
  return function callback(){
    console.log("Hello");
  }
}
returnsANamedFunction();

function returnsAnAnonymousFunction(){
  return function(){
    console.log("Hello");
  }
}
returnsAnAnonymousFunction();
  