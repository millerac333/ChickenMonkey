//creates FOR-loop that will consecutively calls intergers 1 through 100
for (let i = 1; i <= 100; i++) {
    const chickenNumber = [i];

    //Test FOR-loop
    // console.log(chickenNumber);

    // IF function that iterates through values in loop finding the numbers divisible by 5 AS WELL AS 7 then replacing value with "string"
    if (chickenNumber % 5 === 0 && chickenNumber % 7 === 0) {
        console.log("Chicken Monkey");    
    } 
    
    //if above condition not met, this function will find the numbers in loop divisbile by 5 and replace value with "string"
    else if (chickenNumber % 5 === 0) {
        console.log("Chicken");
    } 

    //if above conditions not met, this function will find the numbers in loop divisbile by 7 and replace value with "string"
    else if (chickenNumber % 7 === 0) {
        console.log("Monkey");
    } 

    // otherwise console.log originial value of loop
    else {
        console.log(chickenNumber);
    }
}

