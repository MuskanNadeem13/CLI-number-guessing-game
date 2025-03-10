#! /usr/bin/env node
import inquirer from "inquirer";
console.log("\n\tWelcome to MuskanNadeem - CLI Number Guessing Game\n");
const randomNumber = Math.floor(Math.random() * 5 + 1);
const answer = await inquirer.prompt([
    {
        name: "userGuesseNumber",
        type: "number",
        message: "Enter your guess number(Number Limit from 1 to 5):",
    },
]);
if (answer.userGuesseNumber === randomNumber) {
    console.log("Congratulation ! You guess a correct number.");
}
else {
    console.log("Sorry, you guest a using number");
}
