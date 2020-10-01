// function to generate markdown for README
function generateMarkdown(answers) {
  return `# ${answers.title}
  ![GitHub top language](https://img.shields.io/github/languages/top/crowandrew/README_Generator) ![Libraries.io dependency status for GitHub repo](https://img.shields.io/badge/license-MIT-yellowgreen) ![Libraries.io dependency status for GitHub repo](https://img.shields.io/librariesio/github/crowandrew/README_Generator)
  
  ---
  <a name="description"></a>
  ## Description
  
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
  ---
  ## Demo
  ---
  ## Installation
  ---
  ## Usage
  ---
  ## License
  ---
  ## Contributing
  ---
  ## Tests
  ---
  ## Questions

`;
}

module.exports = generateMarkdown;
