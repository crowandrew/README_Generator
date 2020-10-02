// Constructor function used to create question objects
function Question(type,name,message,choices){
    this.type = type;
    this.name = name;
    this.message = message;
    this.choices = choices;
};

const licenseArr = ['GNU Affero General Public License v3.0',
'Apache License 2.0',
'BSD 2-Clause "Simplified" License',
'BSD 3-Clause "New" or "Revised" License',
'Boost Software License 1.0',
'Creative Commons Zero v1.0 Universal',
'Eclipse Public License 2.0',
'GNU General Public License v2.0',
'GNU General Public License v3.0',
'GNU Lesser General Public License v2.1',
'MIT License',
'Mozilla Public License 2.0',
'The Unlicense']

// Individual questions that can be asked
const titleQ = new Question("input","title","What is your project title?","");
const githubUserQ = new Question("input","githubUser","What is your github username?","");
const repoQ = new Question("input","repo","What is the GitHub repo?","");
const emailQ = new Question("input","email","What email would you like to be contacted on?","")
const descriptionQ = new Question("input","description","Please describe your project.","");
const demoQ = new Question("input","demoURL","What is the link to your demo?","");
const screenshotQ = new Question("input","screenshot","What is the screenshot file name?","");
const installationQ = new Question("input","installation","How do you install your project?","");
const usageQ = new Question("input","usage","Why would someone use this project?","");
const licenseQ = new Question("list","user_list","What license do you want to use?",licenseArr);
const contributingQ = new Question("input","contributing","Who contributed to this project?","");
const testsQ = new Question("input","tests","What do you want to include in the tests section?","");

// Array of questions to be asked.
const questions = [titleQ,githubUserQ,repoQ,emailQ,descriptionQ,demoQ,screenshotQ,installationQ,usageQ,licenseQ,contributingQ,testsQ];

// Exporting questions when called
module.exports = {questions:questions};