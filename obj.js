// loop foreach loop
// employees.forEach((employee)=>console.log(employee))

const numbers = [1,2,3,4,5]
let sum = 0;

numbers.forEach((num)=> {
    if (num %2 == 0) {
        sum += num;
    }
});
// console.log(`sum= ${sum}`);

const onlyOddAdd = [3,4,10,2,99,45];
let sumOdd = 0;
onlyOddAdd.forEach((num, index) => {
    if (index % 2 === 1) {
        sumOdd += num;
    }
});

// console.log(`sum Odd = ${sumOdd}`);

// const findMax = (arr) => {
//     let max = arr[0]

//     for(let num of arr){
//         if(max < num) {
//             max = num;
//         }
//     }
//     return max;
// };

// console.log(findMax(onlyOddAdd));

const addTwo = (a, b) => {
    return a + b;
};

// console.log(addTwo(45,90));

// find 

// employees.find((employee) => console.log(employee.id===1));
const findEmployeeById = (id) => {
    return employees.find((employee) => employee.id === id);
};

// console.log(findEmployeeById(1));

// const findEmployeeIndex = (email) => {
//     return employees.findIndex((employee) => employee.email === email);

// };

// console.log(findEmployeeIndex("rtregaski@flavors.me"));

const findEmployeeIndex = (email) => {
   let result = employees.findIndex((employee) => employee.email === email);
   if (result !== -1) {
    return employee[result];
   } else {
    return "sorry no user found"
   }
};

// console.log(findEmployeeIndex("rtregaski@flavors.me"));

const fruits = ["mango", "banana", "apple", "lemon", "warnut"];
[a,b,...c]=fruits;
console.log(c);

const users = {
    name: "john",
    username: "mike",
    password: "1234"
};

const{username,password} = users;

console.log(username);



