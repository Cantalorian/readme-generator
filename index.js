// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./Develop/utils/generateMarkdown');


// TODO: Create an array of questions for user input
const questions = [
  {
      type: 'input',
      name: 'title',
      message: 'What is the name of your project?',

  },
  {
      type: 'input',
      name: 'description',
      message: 'Please enter a brief description of your project.',
  },
  {
      type: 'input',
      name: 'installation',
      message: 'What do you need to install for this to work.'
  },
  {
      type: 'input',
      name: 'usage',
      message: 'Provide instructions and examples in this section (example a screenshot or video demo).'
  },
  {
      type: 'list',
      name: 'license',
      message: 'Which license would you like to choose?',
      choices: ["Apache License 2.0", "GNU GPLv3", "MIT", "ISC", "None"],
  },
  {
      type: 'input',
      name: 'contributing',
      message: 'Please list who has contributed to this project.'
  },
  {
      type: 'input',
      name: 'tests',
      message: 'If applicable, please provide any tests written for this project.'
  },
  {
    type: "input",
    name: "github",
    message: "Enter your GitHub Username. (Required)",
    validate: gitHubInput => {
      if (gitHubInput) {
        return true;
      } else {
        console.log("Please enter your GitHub Username!");
        return false;
      }
    }
  },
  {
    type: "input",
    name: "link",
    message: "Enter the GitHub link to your project. (Required)",
    validate: gitHubLink => {
      if (gitHubLink) {
        return true;
      } else {
        console.log("Please enter a link to your project!");
        return false;
      }
    }
  },
  {
      type: 'input',
      name: 'questions',
      message: 'For any questions regarding this project I can be reached at (Give Email/GitHub).',
      validate: nameInput => {
          if (nameInput) {
              return true;
          } else {
              console.log('Please enter your GitHub Usernam/Email address');
              return false;
          }
      }
  }
];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  console.log(fileName, data)
  fs.writeFileSync(fileName, data);
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then(function (value) {

    let questions = generateMarkdown(value)

    writeToFile("readme.md", questions);
  })
}

// Function call to initialize app
init();