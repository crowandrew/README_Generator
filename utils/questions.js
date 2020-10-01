// Constructor function used to create question objects
function Question(type,name,message,choices){
    this.type = type;
    this.name = name;
    this.message = message;
    this.choices = choices;
}

// Individual questions that can be asked
const titleQ = new Question("input","title","What is your project title?","")
const descriptionQ = new Question("input","description","Please describe your project.","")
const demoQ = new Question("input","demoURL","What is the link to your demo?","")
const installationQ = new Question("input","installation","How do you install your Repo","")
const questionTwo = new Question("list","user_list","What do you like?",["one","two","three"])


// Need Github username
// Need Github repo name
// Array of questions to be asked.
const questions = [questionOne,questionTwo]

// Exporting questions when called
module.exports = {
    questions:questions
}