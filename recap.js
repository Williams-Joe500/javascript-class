// let no = 10;
// for (let i = 1; i <=no; i +=2){
//     console.log(`$(i): l love you`);
// } 

// sum even number between 0 to 10
// let sum = 0;
// for(let i=0; i <no; i+=2){
//     sum+=i;
// }

// let sum =0;
// for(let i=0; i<=no; i++){
//     if(i%2===0){
//         sum+=i;
//     }
// }
// console.log(`sum = ${sum}`);

// while loop
// let i=0;
// let sum = 0;
// while(i<=10){
//     if(i%2===0)sum+=i;
//     i++
// }
// console.log(`sum = ${sum}`);

// do while loop
let i=12;
do{
    // console.log("****************************************");
    // console.log("1. Deposite");
    // console.log("2. Withdrawal");
    // console.log("3. Transfer");
    // console.log("4. exit");
    // console.log("****************************************");
    let myInput= "select from option\n1: Deposit\n2: Withdrawal\n3: Transfer\n4: exit";
    let input = parseInt(prompt(myInput))
    if (input===1) {
        let depo = parseFloat(prompt("Enter Amount To Deposit"))    
        deposit(depo);   
    }
    input = prompt("Do yo want to perform another transaction? (y/n")
}while(i<=14)