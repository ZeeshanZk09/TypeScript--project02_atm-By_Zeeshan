#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = [10000]; //Dollar
let myPin = 65978;
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "Enter your pin Number",
        type: "number",
    },
]);
if (pinAnswer.pin === myPin) {
    console.log("Welcome to your account");
    let operationAns = await inquirer.prompt([
        {
            name: "option",
            message: "What do you want to do?",
            type: "list",
            choices: [
                "Check Balance",
                "Withdraw",
                "Deposit",
                "Exit"
            ],
        }
    ]);
    if (operationAns.option === "Check Balance") {
        console.log(`Your current balance is $${myBalance[0]}`);
    }
    else if (operationAns.option === "Withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "Enter the amount you want to withdraw",
                type: "list",
                choices: [
                    "2000",
                    "4000",
                    "6000",
                    "8000",
                    "10000",
                    "Enter manually",
                ]
            },
        ]);
        if (amountAns.amount === "Enter manually") {
            let amountAnsManually = await inquirer.prompt([
                {
                    name: "amountManually",
                    message: "Enter the amount you want to withdraw",
                    type: "number",
                }
            ]);
            if (amountAnsManually.amountManually <= myBalance) {
                console.log(`You withdraw $${amountAnsManually.amountManually} from your current balance that is $${myBalance}`);
                myBalance[0] -= amountAnsManually.amountManually;
                console.log(`Your new balance is $${myBalance}`);
            }
            else {
                console.log("Insufficient balance");
            }
        }
        else if (amountAns.amount === "2000" || "4000" || "6000" || "8000" || "10000") {
            console.log(`You withdraw $${amountAns.amount} from your current balance that is $${myBalance}`);
            myBalance[0] -= amountAns.amount;
            console.log(`Your new balance is $${myBalance}`);
        }
        else {
            console.log("Insufficient balance");
        }
    }
    else if (operationAns.option === "Deposit") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "Enter the amount you want to deposit",
                type: "number",
            }
        ]);
        console.log(`You deposit $${amountAns.amount} to your current balance that is ${myBalance}`);
        myBalance[0] += amountAns.amount;
        console.log(`Your new balance is $${myBalance}`);
    }
    else if (operationAns.option === "Exit") {
        console.log("Exiting the program");
        process.exit();
    }
}
else {
    console.log("\nInvalid Pin");
    console.log(`\nYou entered invalid pin so many times. \nDear customer your account has been freezed for 2 days for security purpose. \nYou can try again to login after 2 days with high security checks!`);
}
