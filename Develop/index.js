const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const generateMarkdown = require('./generateMarkdown');

// array of questions 
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is your project title?',
        validate: (value) => {
            if (value) { return true } else { return 'Please enter your project title.' }
        },
    },
    {
        type: 'input',
        name: 'repo',
        message: 'What is the repository name of your project?',
        validate: (value) => {
            if (value) { return true } else { return 'Please enter your repository name.' }
        },
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is the description of your project?',
        validate: (value) => {
            if (value) { return true } else { return 'Please enter description.' }
        },
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Enter instructions for installation',
        validate: (value) => {
            if (value) { return true } else { return 'Please enter instructions.' }
        },
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What is the usage information?',
        validate: (value) => {
            if (value) { return true } else { return 'Please enter usage information.' }
        },
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'What are contribution guidelines?',
        validate: (value) => {
            if (value) { return true } else { return 'Please enter your contribution guidelines.' }
        },
    },
    {
        type: 'input',
        name: 'test',
        message: 'What are the test instructions?',
        validate: (value) => {
            if (value) { return true } else { return 'Please enter your test instructions.' }
        },
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license for your project?',
        choices: ["MIT", "ISC", "GNU GPLv3"],
        validate: (value) => {
            if (value) { return true } else { return 'Please choose a license.' }
        },
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?',
        validate: (value) => {
            if (value) { return true } else { return 'Please enter your username.' }
        },
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
        validate: (value) => {
            if (value) {return true } else { return 'Please enter a valid email address' }
        },
    }
];

// write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function (err) {
        if (err) {
            console.log(err);
        } else {
            console.log('README file successfully created!');
        }
    })
};

// initialize program
function init() {
    inquirer.prompt(questions).then(function (data) {
        writeToFile("README.md", generateMarkdown(data));
    })
};

//  call program
init();