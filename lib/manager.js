//import employee class
const Employee = require("./employee");

//manager class extends employee class
class Manager extends Employee {
    //constructor function takes in name, email, id, and school
    constructor({name, email, id, officeNumber}){
        //we get name, email, and id from parent class employee
        super({name, email, id});
        //allows us to access user input for officeNumber
        this.officeNumber = officeNumber;
        //allows us to access user input for role
        this.role = "Manager";
    }
    //setting get requests for officeNumber, and role to retrieve from user input
    getOfficeNumber(){
        return this.officeNumber;
    }

    getRole(){
        return this.role;
    }
}
//exports our class
module.exports = Manager;