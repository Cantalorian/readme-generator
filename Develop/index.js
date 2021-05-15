// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');


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
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();