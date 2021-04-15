
const inquirer = require('inquirer');
const fs = require('fs');


// Invokes the inquirer npm and lists the necessary questions. Then generates the README file with the data collected from the questions. 
inquirer
  .prompt([
    {
      type: 'input',
      message: 'Please enter the title of your project.',
      name: 'title',
    },
    {
      type: 'input',
      message: 'Please enter a detailed description of your project.',
      name: 'descript',
      
    },
    {
      type: 'input',
      message: 'Please include any relevent installation instructions.',
      name: 'install',
      
    },
    {
      type: 'input',
      message: 'Please enter any useage information needed by the user.',
      name: 'usage',
      
    },
    {
      type: 'confirm',
      message: 'Is your project open sourced?',
      name: 'openSource',
      
    },
    {
      type: 'confirm',
      message: 'Do you have a contribution.md?',
      name: 'contribution',
      when: (answers) => answers.openSource === true,
    },
    {
      type: 'input',
      message: 'Please provide a link to your contribution.md.',
      name: 'contribFile',
      when: (answers) => answers.contribution === true,
    },
    {
      type: 'input',
      message: 'Please enter any guidelines for contributors to your project.',
      name: 'contribGuide',
      when: (answers) => answers.contribFile === false || answers.openSource === true,
    },
    {
      type: 'input',
      message: 'Please enter detailed testing instructions.',
      name: 'testInfo',
        
    },
    {
      type: 'input',
      message: 'What is your Github username?',
      name: 'gitUser',
        
    },
    {
      type: 'input',
      message: 'Please provide the URL to your Github Profile.',
      name: 'gitURL',
        
    },
    {
      type: 'list',
      message: 'Please choose the correct license for this application.',
      name: 'license',
      choices: ['1', '2', '3'],
    },

  ])
  .then((data) => {
    const filename = `README.md`;
    const readMeTemp = `${data.title}`
    fs.writeFile(filename, readMeTemp, (err) => 
    err ? console.log(err) : console.log('Success!')

    );
  });

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
