class Employee{

    constructor(name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }

    getEmail = () => this.email;

    getRole = () => "Employee"
}

// var testOB = new Employee("test", 1 "tes@test.com")
// console.log(testOB);
// console.log(testOB.getEmail());

module.exports = Employee;