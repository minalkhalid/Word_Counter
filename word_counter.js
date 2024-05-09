import inquirer from "inquirer";
// declare answer 
const answers = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: "Enter your sentence to count the word: "
    }
]);
const words = answers.sentence.trim().split(" ");
// print the array
console.log(words);
// print the word count 
console.log(`your sentence word count is ${words.length}`);
