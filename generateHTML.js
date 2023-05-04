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