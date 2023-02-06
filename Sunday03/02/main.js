
// Classes 
//Task 1
class Car{
    constructor(model,make,year,min,max){
        this.model=model,
        this.make=make,
        this.year=year,
        this.cost=this.carCost(min,max)
    }


    carCost(min,max){
        return Math.floor(Math.random()*(max-min)+min);
    }


    getDescription(){
        return `A ${this.model} made by ${this.make} at ${this.year} the price is ${this.cost} `
    }
}

const car1= new Car("Camry","Toyota",2020 ,20000,50000)
console.log(car1.getDescription());



//Task 2
class Person{
    constructor(firstName,lastName,age){
        this.firstName=firstName,
        this.lastName=lastName,
        this.age=age
    }

    getGreeting(){
        return `Hi, I'm ${this.firstName} ${this.lastName} and I'm ${this.age} years old`
    }
}
 const Person1= new Person("Ruba","Salahuddin",26)
 console.log(Person1.getGreeting());





/// Arrow Function
// Task 1 - A
 counterFunc = (counter) => {
    if(counter > 100){
        counter = 0;
    } else{
        counter++;
    }
    return counter;
 }
console.log(counterFunc(200));

 counterFunc = (counter) => {
    (counter > 100) ? console.log(counter = 0) : console.log(counter++);
    return counter;
 }
console.log(counterFunc(60));


// Task 1 - B
nameAge = (name , age) => {
    console.log("Hello " + name);
    console.log("You are " + age + " years old");
}
console.log(nameAge("Mayar", 7));



// Task 2
// Task 2 - A
const createFullName = (firstName , lastName) => {
    return firstName + " " + lastName;
}
console.log(createFullName("Ruba","Salahuddin"));


// Task 2 - B
const doubleNumber = (number) => {
    return number * 2;
}
console.log(doubleNumber(12));


// Task 2 - C
const getEventNumbers = (array) => {
    let eventNumbers = [];
    for(let i of array){
        if(i % 2 === 0){
            eventNumbers.push(i);
        }
    }
    return eventNumbers;
}
console.log(getEventNumbers([1,2,3,4,5,6,7,8,9,10,11,12]));



// Task 3 
if(1 < 2){
    for (let index = 0; index < 5; index++){
        console.log("Hi");
    }
}else{
    console.log("Bye");
}

const func2 = () => (7<2)? (() => {
    for (let index = 0; index < 5; index++){
        console.log("Hi");
    }
}) ():console.log("Bye");
func2();






/// Array Method
// Task 1
let nums = [2, 4, 5];
const sum = nums.reduce((acc,cur)=>acc+cur**2,0)/nums.length
console.log(sum);



// Task 2
let list=[1,2,3,4,5,6,7,8];
const Ruba = list.map(e=>e*10);
console.log(Ruba);



// Task 3





// Task 4





// Task 5 - A
let evenOnly = [1,8,6,4];
const newEven = evenOnly.filter(e => e % 2 == 0);
console.log(newEven);



// Task 5 - B
let multiFour = [1,8,6,4];
const newEven1 = multiFour.filter(e => e % 4 == 0);
console.log(newEven1);