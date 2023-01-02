function sayHello() {
    console.log("Hello!");
  }
function sayHelloToJohn () {console.log("Hello, John!");}
  function sayHelloToLiz() {
    console.log("Hello, Liz!");
  }
  function sayHelloToSamip() {
    console.log("Hello, Samip!");
  }
  sayHelloToJohn();
  sayHelloToLiz();
  sayHelloToSamip();  
  function say(greeting, firstName) 
    {
    console.log(`${greeting}, ${firstName}!`);
  }
  say("Goodbye", "Julio");
  say("Julio", "hello");
  function say(greeting, firstName) {
    console.log("firstName: ", firstName);
    console.log("greeting: ", greeting);
    console.log(`${greeting}, ${firstName}!`);
  }
  function add(x, y) {
    return x + y;
  }
  console.log(add(80, 9900));
  function say(greeting, firstName) {
    return `${greeting}, ${firstName}!`;
  }
  console.log(say("Hello", "Liz"));
  function say(greeting, firstName) {
    console.log(`${greeting}, ${firstName}!`);
  }
  console.log(say("Hello", "Liz"));
  function say(greeting, firstName) {
    console.log("I was called!");
    return `${greeting}, ${firstName}!`;
  }
  console.log(say("Howdy", "partner"));