const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js");
const {questions} = require("./utils/questions.js");

// function to initialize program
async function init(){
    const answers = await inquirer.prompt(questions);
    console.log(answers);
    // const userReadME = generateMarkdown(answers);
    // fs.promises.writeFile("README.md",userReadME);
}
 
// function call to initialize program
init();

