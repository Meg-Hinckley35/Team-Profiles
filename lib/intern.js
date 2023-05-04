//import employee class
const Employee = require("./employee");

//intern class extends employee class
class Intern extends Employee {
    //constructor function takes in name, email, id, and school
    constructor({name, email, id, school}){
        //we get name, email, and id from parent class employee
        super({name, email, id});
        //allows us to access user input for school
        this.school = school;
        //allows us to access user input for role
        this.role = "Intern";
    }
    //setting get requests for school, and role to retrieve from user input
    getSchool(){
        return this.school;
    }

    getRole(){
        return this.role;
    }
}
//exports our class
module.exports = Intern;