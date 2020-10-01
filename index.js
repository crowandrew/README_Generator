const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js");
const {questions} = require("./utils/questions.js");

// function to initialize program
async function init(){
    const userAnswers = await inquirer.prompt(questions);
    console.log(userAnswers);
    // const userReadME = generateMarkdown(userAnswers);
    // fs.promises.writeFile("README.md",userReadME);
}
 
// function call to initialize program
init();