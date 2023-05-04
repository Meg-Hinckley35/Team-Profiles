//require inquirer to ask the question to the user
const inquirer = require("inquirer");
//fs is required to write the team profile file
const fs = require("fs");
//generate html is required to create the markdown
const generateHTML = require("./generateHTML.js");
//we must import the manager, engineer, and intern classes
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
//we declare employees as an empty variable
const employees = [];
//we will declare is team complete with a boolean and set it to false
let isTeamComplete = false;
//here we must add a validate input function to prevent the user from sending an empty string for any question
const validateInput = (userInput) => {
    if(userInput === "") {
        return "please type your answer before proceeding";
    } else {
        return true;
    }
};
//async init function to initialize the app
const init = async () => {
    await createManager();
    //while team is NOT complete, the manager will be asked what role of employee to add
    while(!isTeamComplete){
        //setting up a multiple choice question for the user
        const employeeTypeQuestion = [
            {
                type: "list",
                message: "Please select the employee type yo wish to add:",
                name: "employeeType",
                choices: [
                    {name: "Engineer", value: "engineer", short: "Engineer"},
                    {name: "Intern", value: "intern", short: "Intern"},
                    {name: "None", value: "none", short: "None"},
                ],
            },
        ];
        // employeeType object will be generated from the manager's answers
        const { employeeType } = await inquirer.prompt(employeeTypeQuestion);
        //if none is selected the employee type question, the team is complete
        if(employeeType === "none"){
            isTeamComplete = true;
            //if either engineer or intern is selected, the respective function will create an employee of the selected class
        } else{
            if(employeeType === "engineer"){
                await createEngineer();
            }
            if(employeeType === "intern"){
                await createIntern();
            }
        }
    }
    //the employees array is passed into the generate html function and then markdown is used to create a new team-profile.html
    const HTML = generateHTML(employees);
    fs.writeFileSync("team-profiles.html", HTML, (err) => {
        //we will catch errors with this
        if(err){
            console.log(err);
        //we will console log a success message with this  
        } else {
            console.log("HTML file created");
        }
    });
};