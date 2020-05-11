let firstName = "Sydni";
const states = 50; //number of states in the US
let sum = 5 + 4; //sum of two numbers

function sayHello() {
    alert ('Hello World');
};  
sayHello();

function checkAge(name, age) {
    if (age < 21) {
    alert ('Sorry ' + name + ', you are too young!');
}};
checkAge('Charles', 21);
checkAge('Abby', 27);
checkAge('James', 18);
checkAge('John', 17);

let favVeg = ['peppers', 'broccoli', 'squash', 'carrots']; 
for (let veggies of favVeg){
    console.log(veggies);
} 

let pet = {
    name: 'Puff',
    breed: 'kitty cat' 
} 
console.log(pet);

let clubMemb = [
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
for (let friends of clubMemb) {
    checkAge(friends.name, friends.age);
}
  
function getlength(word){
    return word.length;
}
let letters = getlength('Hello World');
if (letters % 2 === 0) {
    console.log('The world is nice and even!');
} else {
        console.log('The world is an odd place!');
}