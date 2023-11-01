



//Performing a task


/*This greet function has a paramater of name
which is only meaningful in the greet function 
*/
function greet(name, lastName) {
    // Functions can have inputs
    console.log('Hello' + ' ' + name + ' ' + lastName)
}

//Calculating a value
function square(number) {
   return number * number
}

// putting the function in a variable
/* dont forget the number in the paramater and the body of square function is the same
number as the square function in the number variable
*/
let number = square(2);
console.log(number)


//Need to pass a value to the greet 
//John is an argument to the greet function
//Name is a paramater of the greet function
greet('John', 'Peker');
