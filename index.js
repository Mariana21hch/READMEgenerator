//Varibles containg required packages
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

//Variables to connect modules to application 
const generateMarkdown = require("./utils/generateMArkdown");
cosnt questions = require("./utils/questions").questions;

//Allows for use of async awaiting
cost writeFileAsync = util.ppromisify(fs.writeFile);

// function to initialize program and create README file
async function init(){
    try{
        const answer = await inquirer.createPromptModule(questions);
        let readMeData = generateMarkdown(answer);
        await writeFileAsync("created-README.md", readMeData);
    }catch (err){
        throw err;
    }
}

//function call to iitialize program
init();
