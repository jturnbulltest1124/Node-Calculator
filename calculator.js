var proc = process.argv;

//to look at the second argument, which would be user's add, subtract, multiply, or etc..
var operand = proc[2];


//store the process.argv[3] and process.argv[4] into variables for easier readability
num1 = proc[3];
num2 = proc[4];

//storing the value into a global variable
var outputNumber;

if (operand == "add") {
    //ADD
    outputNumber = parseFloat(num1) + parseFloat(num2);
    console.log(outputNumber);

    //SUBTRACT
} else if (operand == "subtract") {
    outputNumber = parseFloat(num1) - parseFloat(num2);
    console.log(outputNumber);

    //MULTIPLY
} else if (operand == "multiply") {
    outputNumber = num1 * num2;
    console.log(outputNumber);

    //DIVIDE
} else if (operand == "divide") {
    outputNumber = num1 / num2;
    console.log(outputNumber);

    //REMAINDER
} else if (operand == "remainder") {
    outputNumber = num1 % num2;
    console.log(outputNumber);

} else {
    console.log("Unknown Command");
}


//BONUS
