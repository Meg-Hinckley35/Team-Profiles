//we must import the employee parent class first
const Employee = require("./employee");

//we extend the employee class with the engineer class
class Engineer extends Employee {
    //we are going to take in name, id, email, and github url
    constructor({name, id, email, github}) {
        //inherited properties from parent class Employee
        super({name, id, email});
        //grabbing user input for github
        this.github = github;
        //defining the engineer role
        this.role = "Engineer";
    }
    //setting get requests for github url and role definition from user input
    getGithub(){
        return this.github;
    }
    getRole(){
        return this.role;
    }

}

//export the engineer class so it can be used to generate html file
module.exports = Engineer;