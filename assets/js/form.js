const dog = {
  name: "Bolt",
  breed: "German Shepherd",
  age: 3,
  color: "red"
};
console.log(dog.name);

dog.age = 4;
console.log(dog.age);

const student = {
  name: "John",
  age: 18,
  grade: "A",
  school: "Harvoxx"
};
const keys = Object.keys(student);
console.log(keys);

const students = {
  name: "John",
  age: 18,
  grade: "A",
  school: "Harcoxx"
};
const values = Object.values(student);
console.log(values);

let company = {
  name: "Harvoxx",
  address: {
    city: "Port Harcourt",
    country: "Nigeria"
  }
}
console.log(company.address.city);

let product = [
  { id: 1, name: "Laptop", price: 250000 },
  { id: 2, name: "Phone", price: 150000 },
  { id: 3, name: "Tablet", price: 100000 }
]
console.log(product[1].name);

let num1 = {
  x: 1,
  y: 2
}
let num2 = {
  z: 3
}
console.log(Object.assign(num1, num2));

let studentDetails = {
  name: "James",
  age: 20,
  gender: "male"
}

let randomNumber = 0;

while (randomNumber < 10) {
  randomNumber = Math.floor(Math.random() * 20);
  console.log(randomNumber);
}

function greetStudent(name = "elijah") {
  console.log(`hello, ${name}! welcome to the class`)
}

greetStudent();

function numberSquare(nums) {
  return nums * nums;
}
console.log(numberSquare(6));

const evenOrOdd = (num) => {
  return num % 2 === 0 ? "Even" : "Odd";
};

console.log(evenOrOdd(5));
console.log(evenOrOdd(7));
console.log(evenOrOdd(10));

function calculate(number1, number2, operation) {
  if (operation === "add") {
    return number1 + number2;
  } else if (operation === "subtract") {
    return number1 - number2;
  } else if (operation === "divide") {
    return number1 / number2;
  } else if (operation === "multiply") {
    return number1 * number2;
  } else {
    return "operation invalid"
  }
}
console.log(calculate(10, 5, "add"));
console.log(calculate(10, 5, "subtract"));
console.log(calculate(10, 5, "divide"));
console.log(calculate(10, 5, "multiply"));

function introduce(name, callback) {
  console.log(`My name is ${name}.`);
  callback();
}
function learningMessage() {
  console.log("I am excited to learn JavaScript!");
}

introduce("Ryker", learningMessage);

for (let i = 2, <= 20, i += 2) {
  console.log(i)
}