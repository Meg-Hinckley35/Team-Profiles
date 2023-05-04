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

//render engineer function takes in the new instance of the engineer class
const renderEngineer = (engineer) => {
    let template = fs.readFileSync(
        path.resolve(templatesDir, "engineer.html"),
        "utf8"
    );
    //here we want to change the placeholders in intern.html into the user-inputted values
    template =replaceTemplates(template, "name", engineer.getName());
    template =replaceTemplates(template, "id", engineer.getId());
    template =replaceTemplates(template, "role", engineer.getRole());
    template =replaceTemplates(template, "email", engineer.getEmail());
    template =replaceTemplates(template, "github", engineer.getGithub());

    //we then return the updated template
    return template;
};

//render intern function takes in the new instance of the intern class
const renderIntern = (intern) => {
    let template = fs.readFileSync(
        path.resolve(templatesDir, "intern.html"),
        "utf8"
    );
    //here we want to change the placeholders in intern.html into the user-inputted values
    template =replaceTemplates(template, "name", intern.getName());
    template =replaceTemplates(template, "id", intern.getId());
    template =replaceTemplates(template, "role", intern.getRole());
    template =replaceTemplates(template, "email", intern.getEmail());
    template =replaceTemplates(template, "school", intern.getSchool());

    //we then return the updated template
    return template;
};

//render full markdown function and pass in HTML
const renderFullMarkdown = (HTML) => {
    //this will access the full markdown html file
    let template = fs.readFileSync(
        path.resolve(templatesDir, "full-markdown.html"),
        "utf8"
    );
    
    //the replace template function is returned, taking in the template, team, and HTML to update the markdown file
    return replaceTemplates(template, "team", HTML);
    };

    //the replace templates function takes in the template, placeholder and value
    const replaceTemplates = (template, placeholder, value) => {
        //the pattern are the values between the double curly brackets
        const pattern = new RegExp(`{{${placeholder}}}`, "gm");
        //the replace method will replace anything between the double curly brackets placeholders with the user input
        return template.replace(pattern, value);
    };

    //generate html
