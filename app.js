let firstName = "Sydni";
const states = 50; //number of states in the US
let sum = 5 + 4; //sum of two numbers

function sayHello() { //function without parameters inside ()
    alert ('Hello World');
};  
sayHello(); //ccall the function

function checkAge(name, age) { //parameters go inside (), and whenever you call the function, you will need to supply "arguments" that correspond with the parameters
    if (age < 21) {
    alert ('Sorry ' + name + ', you are too young!');
}};

/*can also use template string to add variables and strings,
so as to not use quotation marks
function checkAge(name, age) {
    if (age < 21) {
    alert (`Sorry ${name} you are too young!`);
}};
*/

checkAge('Charles', 21); //call the checkAge function and pass the arguments to the function parameters
checkAge('Abby', 27);
checkAge('James', 18);
checkAge('John', 17);

let favVeg = ['peppers', 'broccoli', 'squash', 'carrots']; 
for (let veggies of favVeg){ //this is a for...of loop. for (let + new variable name for array items + of + array name)
    console.log(veggies); //use the new variable name
} 

let pet = { //this is an object
    name: 'Puff',
    breed: 'kitty cat' 
} 
console.log(pet); 

let clubMemb = [ //this is an array with objects inside
    {
        name: 'Sydni', 
        age: 30
    },
    {
        name: 'NaTasha',
        age: 21
    },
    {
        name: 'Nikki',
        age: 18
    },
    {
        name: 'Autumn',
        age: 20
    },
    {
        name: 'Cleveland',
        age: 32
    }
];

for (let friends of clubMemb) { //for...of loop
    checkAge(friends.name, friends.age);
}
/* caan use a for loop to call checkAge function and cycle through array.
This way is harder, and a for...of loop should be used instead
for ( let i=0; i < clubMemb.length; i++) {
    checkAge(clubMemb[i].name, clubMemb[i].age)
}
*/

function getlength(word){ //best pactice to define a new variable in the parameter, so if you want to call the function later, you can use or change the variable, without having to find and change the function.
    return word.length; //return calls back the answer of whatever you ask it to do
}
let letters = getlength('Hello World'); //saving the result of the function in a variable

if (letters % 2 === 0) { //define that we want there to be a zero remainder
    console.log('The world is nice and even!');
} else {
        console.log('The world is an odd place!');
}

/* if...else statement can also be written using the ternary operator
condition ? true : false
letters % 2 === 0 ? console.log('even') : console.log('odd'); 
*/