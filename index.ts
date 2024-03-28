import inquirer from "inquirer";

let myBalance = 10000;  // Doller
let myPin = 1998; 

let pinAnswer = await inquirer.prompt(
    [
        {
             name: "pin",
             type: "number",
             message: "Please Enter Your Pin Number",
        }
    ]
);
 
if (pinAnswer.pin === myPin) {
    console.log("Pin is Correct, Login Sucessfully!");

 let operationAns = await inquirer.prompt(
        [
            {
                name: "operation",
                type: "list",
                message: "Select One Operation",
                choices: ["Withdraw", "Check Balance"],
            }
        ]
    );
    if(operationAns.operation === "Withdraw"){
        let amountAns = await inquirer.prompt(
            [
                {
                    name: "amount",
                    type: "number",
                    message: "Please enter the amount to withdraw:",
                }
            ]
        );

        // =, -=, +=,
        if(amountAns.amount > myBalance){
            console.log("Insufficient Balance");
        }
        else {
        myBalance -= amountAns.amount;

        console.log(`${amountAns.amount}, withdraw Successfully`);
        console.log(`Your Remaining Balance is: ${myBalance}`);
        }
    }
    else if(operationAns.operation === "Check Balance"){
        console.log(`Your Account Balance is: ${myBalance}`);
    }
}

else{
    console.log("Invalid Pin Code");
}