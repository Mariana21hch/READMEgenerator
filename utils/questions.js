// Array of questions for the user
const questions = [
    {
        type: "input",
        message: "what is the title of the project?",
        name: "title",
    },
    {
        type: "input",
        message: "Enter one sentense description of your project:",
        name: "description",
    },
    {
        type: "input",
        message: "Tell us about your project",
        name: "about",
    },
    {
        type: "input",
        message: "What are the installation instructions for your project?",
        name: "installation",
    },
    {
        type: "input",
        message: "What is the link to clone the repo?",
        name: "clone",
    },
    {
        type: "input",
        message: "What is the license for your project?",
        name: "License",
    },
    {
        type: "input",
        message: "Please enter any testing protocols you used for your project?",
        name: "test",
    },
    {
        type: "input",
        message: "What is your name?",
        name: "author",
    },
    {
        type: "input",
        message: "What is your Github username?",
        name: "useName",
    },
    {
        type: "input",
        message: "What is your Email",
        name: "useEmail",
    },
    {
        type: "input",
        message: "What is the URL for the live site?",
        name: "URL",
    },
    {
        type: "input",
        message: "What is the URL for the Github repo?",
        name: "repo",
    }
];

module.exports = {
  questions: questions,
};