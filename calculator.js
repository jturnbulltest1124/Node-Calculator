var proc = process.argv;

//to look at the second argument, which would be user's add, subtract, multiply, or etc..
var operand = proc[2];

//storing the value into a global variable
var outputNumber;

if (operand == "add") {
    //ADD
    outputNumber = parseFloat(proc[3]) + parseFloat(proc[4]);
    console.log(outputNumber);

    //SUBTRACT
} else if (operand == "subtract") {
    outputNumber = parseFloat(proc[3] - parseFloat(proc[4]));
    console.log(outputNumber);

    //MULTIPLY
} else if (operand == "multiply") {
    outputNumber = proc[3] * proc[4];
    console.log(outputNumber);

    //DIVIDE
} else if (operand == "divide") {
    outputNumber = proc[3] / proc[4];
    console.log(outputNumber);

    //REMAINDER
} else if (operand == "remainder") {
    outputNumber = proc[3] % proc[4];
    console.log(outputNumber);

} else {
    console.log("Unknown Command");
}