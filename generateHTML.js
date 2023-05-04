//fs is imported
const fs = require("fs");

//the path is imported
const path = require("path");

//the templates directory in imported
const templatesDir = path.resolve(__dirname, "../templates");

//generate html function takes in the employee array
const generateHTML = (employees) => {
    //html is declared as an empty array
    const HTML = [];

    //the objects in the employees array will be filtered by role
    //the corresponding function will create an employee of that type
    //all of the objects are then pushed into the HTML array
    HTML.push(
        employees
        .filter((employee) => employee.getRole() === "Manager")
        .map((manager) => renderManager(manager))
    );
    HTML.push(
        employees
        .filter((employee) => employee.getRole() === "Engineer")
        .map((engineer) => renderEngineer(engineer))
    );
    HTML.push(
        employees
        .filter((employee) => employee.getRole() === "Intern")
        .map((intern) => renderIntern(intern))
    );

    //the object is the html array are then joined and passed into the render full markdown function
    return renderFullMarkdown(HTML.join("")); 
};

//render manager function takes in the new instance of the manager class
const renderManager = (manager) => {
    let template = fs.readFileSync(
        path.resolve(templatesDir, "manager.html"),
        "utf8"
    );
    //here we want to change the placeholders in manager.html into the user-inputted values
    template =replaceTemplates(template, "name", manager.getName());
    template =replaceTemplates(template, "id", manager.getId());
    template =replaceTemplates(template, "role", manager.getRole());
    template =replaceTemplates(template, "email", manager.getEmail());
    template =replaceTemplates(template, "officeNumber", manager.getOfficeNumber());

    //we then return the updated template
    return template;
};

//render manager function takes in the new instance of the engineer class
const renderEngineer = (engineer) => {
    let template = fs.readFileSync(
        path.resolve(templatesDir, "engineer.html"),
        "utf8"
    );
    //here we want to change the placeholders in engineer.html into the user-inputted values
    template =replaceTemplates(template, "name", engineer.getName());
    template =replaceTemplates(template, "id", engineer.getId());
    template =replaceTemplates(template, "role", engineer.getRole());
    template =replaceTemplates(template, "email", engineer.getEmail());
    template =replaceTemplates(template, "github", engineer.getGithub());

    //we then return the updated template
    return template;
};
