
const myNum = [1, 3, 5, 7];

const myTotal = myNum.reduce(function (acc, currval){
    console.log(`acc: ${acc} and currval ${currval}`);
    return acc + currval
}, 0)


console.log(myTotal);


const array1 = [1, 3, 5, 7];
const initiaValue = 0;

const initialValue = 0;
const sumwithInitial = array1.reduce(
    
    (accumulator, currentValue) => accumulator + currentValue, 
    initialValue
);

// console.log(sumwithInitial);
// 1,4,9,16


const shopingCart = [
    {
        itemName: "js course",
        price : 999
    },
    {
        itemName: "css course",
        price : 499
    },
    {
        itemName: "html course",
        price : 299
    },
    {
        itemName : "react course",
        price : 799 
    }
]

const priceToPay = shopingCart.reduce((acc, item)=> acc + item.price, 0)

console.log(priceToPay);
