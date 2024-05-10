 const carts = ["mango", "fanta", "orange", "eggs", "bread"];
 const prices = [34, 800, 345]
// // length
let len = carts.length;
// // console.log(len);

// // access the element of aray
// let first = carts[0];
// console.log(first);
// let last = carts[carts.length -1];
// console.log(last);

// for(let items of carts){
//     console.log(items);
// }

// console.log("***********************");
// carts.forEach((index, cart)=>console.log(index+":"+cart));
// console.log("***********************");
// for(let i=0; i<carts.length; i++){
//     console.log(carts[i]);
// }


// // remove last
let removeLast = carts.pop()
// console.log(removeLast);
// // remove first
let firstRemoved = carts.shift(); 
// console.log(carts);

// add to the end of the array

carts.push("Avogadro");
// console.log(carts);

// add to the begining of an array

carts.unshift("watermelon");
// console.log(carts);

// check if an array include an item

let isMango = carts.includes("fanta");
// console.log(isMango);

let itemIndex = carts.indexOf("coke");
// console.log(itemIndex);

let newArray = carts.concat(prices);
let newArr2 = [carts,...prices];
// console.log(newArray);

// copy
arr2 = carts.slice(carts.length-2);
// console.log(arr2);

// convert array to string 

let newCart = carts.toString();
// console.log(newCart);

// convert back to array

// move Zero

function moveZero(arr) {
    let nonZeroIndex = 0;
    for(let i=0; i<arr.length; i++){
        if(arr[i] !==0){
            [arr[nonZeroIndex], arr[i]] = [arr[i], arr[nonZeroIndex]];
            nonZeroIndex++;
        }
    }
    return arr;
}
console.log(moveZero([0,2,0,3,9,0,0,6,4,7,0,5,0,1]));




