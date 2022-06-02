// Follow along with the examples here
function doNothing() {}
function sayHello() {
    console.log ("Hello!");
}
sayHello();
function sayHelloToGuadalupe() {
    console.log("Hello Guadalupe");
}
function sayHelloToLiz() {
    console.log("Hello Liz");
}
function sayHelloToSamip() {
    console.log("Hello Samip");
}
sayHelloToGuadalupe();
sayHelloToLiz();
sayHelloToSamip();
function say(greeting, firstName){
    console.log(`${greeting}, ${firstName}!`);
}
say("Goodbye", "Julio");
say("Julio", "Goodbye");
function add(x,y){
 return x+y;
}
console.log(add(80, 9000));

function say(greeting ,firstName){
    return `${greeting}, ${firstName}`
}
say("Mambo" ,"Mambo");