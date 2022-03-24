const Joke = require('awesome-dev-jokes');
 

function sayHello(){
    console.log('Hello there')
}

function sayGoodbye(){
    console.log('Goodbye!')
}

function tellAJoke(){
    console.log(Joke.getRandomJoke());
}

//module.exports = sayHello;  //To export one function
module.exports={sayHello, sayGoodbye, tellAJoke}