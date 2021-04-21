
const inquirer = require('inquirer');
const fs = require('fs');
const markdown = require('./utils/generateMarkdown')


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
      when: (answers) => answers.contribution === false && answers.openSource === true,
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
      type: 'input',
      message: 'Please provide your preferred email address.',
      name: 'email',
        
    },
    {
      type: 'list',
      message: 'Please choose the correct license for this application.',
      name: 'license',
      choices: ['Apache', 'Boost', 'BSD3', 'Eclipse', 'GPLv3', 'IPL', 'ISC', 'MIT', 'MPL', 'Perl', 'Unlicense', 'WTFPL'],
    },

  ])
  .then((data) => {
    const filename = `README.md`;
    const readMeTemp = markdown(data);
   
    fs.writeFile(filename, readMeTemp, (err) => 
    err ? console.log(err) : console.log('Success!')

    );
  });

