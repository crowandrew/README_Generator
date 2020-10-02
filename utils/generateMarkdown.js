// function to generate markdown for README
function generateMarkdown(answers) {
  return `# ${answers.title}
  ![GitHub top language](https://img.shields.io/github/languages/top/${answers.githubUser}/README_Generator) ![Libraries.io dependency status for GitHub repo](https://img.shields.io/badge/license-${answers.license.replace(" ","_")}-yellowgreen) ![Libraries.io dependency status for GitHub repo](https://img.shields.io/librariesio/github/${answers.githubUser}/${answers.repo})
  
  ---

  <a name="description"></a>
  ## Description
  ${answers.description}

  ---
  ## Table of Contents
  
  1. [ Description ](#description)
  2. [ Visuals ](#visuals)
  3. [ Demo](#demo)
  4. [ Installation](#installation)
  5. [ Usage ](#usage)
  6. [ License ](#license)
  7. [ Contributing ](#contributing)
  8. [ Tests ](#tests)
  9. [ Questions ](#questions)

  ---

  ## Visuals

  Screenshot of Project
  ![Screenshot of project](./${answers.screenshot})

  ---

  ## Demo

  Checkout the [demo page](${answers.demoURL}) to see ${answers.title} in action.

  ---

  ## Installation

  
  ${answers.installationInstruction}

  ${answers.installationCommand}

  ---

  ## Usage

  ${answers.usageInstruction}

  ${answers.usageCommand}
  
  ---

  ## License

  Copyright (c) ${answers.copyrightYear}, ${answers.copyrightPerson}. (${answers.license})

  ---

  ## Contributing

  ${answers.contributing}

  ---

  ## Tests

  ${answers.tests}

  ---

  ## Questions

  If you have questions you can reach me here:
  
  Email: ${answers.email}

  GitHub: [Github Profile](https://github.com/${answers.githubUser})

  ---

`;
}

module.exports = generateMarkdown;
