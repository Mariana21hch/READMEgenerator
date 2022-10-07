//Varibles containg required packages
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

//Variables to connect modules to application 
const generateMarkdown = require("./utils/generateMArkdown");
const questions = require("./utils/questions").questions;

//Allows for use of async awaiting
const writeFileAsync = util.promisify(fs.writeFile);

// function to initialize program and create README file
async function init() {
    try {
      const answers = await inquirer.prompt(questions);
      let readMeData = generateMarkdown(answers);
      await writeFileAsync("created-README.md", readMeData);
    } catch (err) {
      throw err;
    }
  }

//function call to iitialize program
init();
