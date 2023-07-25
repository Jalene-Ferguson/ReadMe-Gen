// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");

const generateMarkdown = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "Input name of Project.",
    },
    {
        type: "input",
        name: "description",
        message: "Describe the purpose of this Project.",
    },
    {
        type: "list",
        name: "license",
        message: "Select a license for this Project.",
        choices: ["APACHE2.0", "MIT", "MPL2.0", "Boost1.0", "none"],
    },
    {
        type: "input",
        name: "useage",
        message: "Input the lanaguages or technologies with this Project.",
    },
    {
        type: "input",
        name: "installation",
        message: "Input the installation guide.",
    },
    {
        type: "input",
        name: "contributing",
        message: "Input the contributors.",
    },
    {
        type: "input",
        name: "test",
        message: "Input the testing instructions.",
    },
    {
        type: "input",
        name: "email",
        message: "Input your email.",
    },
    {
        type: "input",
        name: "github",
        message: "Input your github.",
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, date, (error) => {
        error ? console.error(error) : console.log(success)
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((respones) => {
let README = generateMarkdown(respones);
writeToFile("README.md", README);
    })
}
// Function call to initialize app
init();
