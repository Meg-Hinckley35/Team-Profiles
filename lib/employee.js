//Setting the employee class
//the constructor function is setting the outline for the employee class, name id and email.
class Employee{
    constructor({name, id, email}){
        this.name = name;
        this.id = id;
        this.email = email;
    }


//setting get requests to retrieve the users input answers
getName() {
    return this.name;
}

getId() {
    return this.id;
}

getEmail() {
    return this.email;
}

}


//export the class so that it can be accessed to generate an html file
module.exports = Employee;