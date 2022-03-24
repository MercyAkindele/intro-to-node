//const sayHello = require('./greetings');  //To import one exported function
const moment = require('moment'); 
const {sayHello, sayGoodbye, tellAJoke} = require('./components/greetings');
let args = process.argv;
 
//console.log(args);  //What is this logging?
let input = args[2];

if(input === "Hello"){
  sayHello();
  let dateTime = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
  console.log(`It is ${dateTime}`);
} else if(input ==="Goodbye"){
    sayGoodbye();
}else{
   tellAJoke();
} 
 