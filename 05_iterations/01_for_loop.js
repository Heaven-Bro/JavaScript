//for loop

array = [1, 2, 3, 4, 5];

for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if (element == 5) {
        console.log(" Number is 5");
    }
    // console.log(element);
}



for (let i = 0; i <= 10; i++) {
    console.log(`Outer Loop value: ${i}`);
    
    for (let j = 0; j <= 10; j++) {

        // console.log(`Inner Loop value: ${j} and inner loop value: ${i}`);
        // console.log(i + '*' + j + '=' + i*j);
        
    }

}


let myarray = ["flash", "superman", "spiderman"]
// console.log(myarray.length);

for (let index = 0; index < myarray.length; index++) {
    const element = myarray[index];
    // console.log(element);
    
}


//break and continue
for (let index = 0; index < 20; index++) {
    if (index == 5) {
        console.log('Detected 5');
        break; // exit the loop when index is 5
    }
        
    console.log(`Value of i is ${index}`);
    
}

for (let index = 0; index < 20; index++) {
    if (index == 5) {
        console.log('Detected 5');
        continue; // skip the rest of the loop body when index is 5
    }
        
    console.log(`Value of i is ${index}`);
    
}