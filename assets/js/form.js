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

// function introduce(name, callback) {
//   console.log(`My name is ${name}.`);
//   callback();
// }
// function learningMessage() {
//   console.log("I am excited to learn JavaScript!");
// }

// introduce("Ryker", learningMessage);

// //for (let i = 2, <= 20, i += 2) {
//   console.log(i)
// }
let state = "Rivers state";
console.log(state.length);
console.log(state.toUpperCase())
console.log(state.toLowerCase())
console.log(state.charAt(4))
console.log(state.charCodeAt(2))
console.log(state.at(-1))
console.log(state.slice(0, 6))
console.log(state.substring(0, 6))
let concat = state.concat(" ", "Govt")
console.log(concat)
let pwd = (" 1237 ")
console.log(state.trim())
const react = "ha";
console.log(react.repeat(5))
const greetings = "Hello world"
const replace = greetings.replace("world", "james")
console.log(replace)
let email = "james@gmail.com"
let check = email.includes("@")
console.log(check)
let string = "university"
let statement = "This is my house i love my house"
console.log(statement.split(" "))
let num = 50;
num = num.toString()
console.log(num)
console.log(typeof num)
let text = "javaScript is sweet"
console.log(text.startsWith("java"))
console.log(text.startsWith("script"))
let text2 = "file.pdf";
console.log(text2.endsWith(".pdf"));
console.log(text2.endsWith(".doc"));
let ind = "I love JavaScript";
console.log(ind.indexOf("love"));
console.log(ind.indexOf("Python"));
let scrop = "I love JavaScript";
console.log(scrop.indexOf("love"));
console.log(scrop.indexOf("Python"));
let ryk = "hello world hello";
console.log(ryk.lastIndexOf("hello"));
