// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs');

let readMeTemplate = ({ projectName, description, install, usage, license, contribute, test, question, username, email}) =>
`# ${projectName}

![badge](${license})


## Description: 
${description}

1. [Installation Instructions](#install)
2. [Usage Instructions](#usage)
3. [How to contribute](#contribute)
4. [How to test project](#test)
5. [How to ask questions about project](#questions)
6. [Github username](#username)
7. [Email](#email)

## <a name = "install"></a> Installation Instructions
${install}

## <a name = "usage"></a> Usage Instructions
${usage}

## <a name = "contribute"></a> How to Contribute
${contribute}

## <a name = "test"></a> How to Test Project
${test}

## <a name = "questions"></a> How to ask questions about the project
${question}

## <a name = "username"></a> github username: 
${username}

## <a name = "Email"></a> Email: 
${email}
`;
// TODO: Create an array of questions for user input
const questions = [
    {
        name: 'projectName',
        message: 'What is the name your project?'
    },
    {
        name: 'description',
        message: 'What is your project about?'
    },
    {
        name: 'install',
        message: 'How do you install your project?'
    }, 
    {
        name: 'usage',
        message: 'How do you use your project?'
    }, 
    {
        type: 'list',
        name: 'license',
        message: 'Choose your license:',
        choices: ['MIT', 'GPLv2', 'Apache', 'GPLv3']
    },
    {
        name: 'contribute',
        message: 'How to contribute:'
    }, 
    {
        name: 'test',
        message: 'How to test fucntionality:'
    },
    {
        name: 'question',
        message: 'How would someone ask questions about your project?'
    },
    {
        name: 'username',
        message: 'What is your github username?'
    },
    {
        name: 'email',
        message: 'What is your email?'
    },

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, { flag: 'w' }, function (err) {
        if (err) {
            throw err
        }
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(answers => {
        console.info(answers)
        var badgeImages = {
            MIT: 'https://img.shields.io/badge/License-MIT-green',
            Apache: 'https://img.shields.io/badge/License-Apache-green',
            GPLv2: 'https://img.shields.io/badge/License-GPLv2-green',
            GPLv3: 'https://img.shields.io/badge/License-GPLv3-green'
            }
        answers.license = badgeImages[answers.license]
        writeToFile('./dist/README.md', readMeTemplate(answers))
    })
}

// Function call to initialize app
init();
