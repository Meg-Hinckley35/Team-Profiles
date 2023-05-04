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

//the create manager function
const createManager = async () => {
    //here we make the array of manager questions for user input
    const managerQuestions = [
        {
            type: "input",
            message: "Enter manager name:",
            name: "name",
            validate: validateInput,
        },
        {
            type: "input",
            message: "Enter employee ID:",
            name: "id",
            validate: validateInput,
        },
        {
            type: "input",
            message: "Enter your office number:",
            name: "officeNumber",
            validate: validateInput,
        },
        {
            type: "input",
            message: "Enter work email:",
            name: "email",
            validate: validateInput,
        },
    ];

    //the manager's answers will be generated from the manager's input to the questions
    const managerAnswers = await inquirer.prompt(managerQuestions);

    //the new instance for the manager class will take these answers
    const manager = new Manager(managerAnswers);

    //the manager object is then pushed into the employees array
    employees.push(manager);
};

//Next is the create engineer function
const createEngineer = async () => {
    //setting the array of engineer questions for user input
    const engineerQuestions = [
        {
            type: "input",
            message: "Enter engineer name:",
            name: "name",
            validate: validateInput,
        },
        {
            type: "input",
            message: "Enter engineer ID:",
            name: "id",
            validate: validateInput,
        },
        {
            type: "input",
            message: "Enter your email:",
            name: "email",
            validate: validateInput,
        },
        {
            type: "input",
            message: "Enter your github profile:",
            name: "github",
            validate: validateInput,
        },
    ];

    //the engineer's answers will be generated from the user input to the questions
    const engineerAnswers = await inquirer.prompt(engineerQuestions);

    //the new instance for the engineer class will take these answers
    const engineer = new Engineer(engineerAnswers);

    //the engineer object is then pushed into the employees array
    employees.push(engineer);
};

//Here is the create intern function
const createIntern = async () => {
    //setting the array of intern questions for user input
    const internQuestions = [
        {
            type: "input",
            message: "Enter intern name:",
            name: "name",
            validate: validateInput,
        },
        {
            type: "input",
            message: "Enter intern ID:",
            name: "id",
            validate: validateInput,
        },
        {
            type: "input",
            message: "Enter intern email:",
            name: "email",
            validate: validateInput,
        },
        {
            type: "input",
            message: "Enter intern school name:",
            name: "school",
            validate: validateInput,
        },
    ];

    //the intern's answers will be generated from the user input to the questions
    const internAnswers = await inquirer.prompt(internQuestions);

    //the new instance for the intern class will take these answers
    const intern = new Intern(internAnswers);

    //the intern object is then pushed into the employees array
    employees.push(intern);
};

//Now to add a function to initialize the app
init();