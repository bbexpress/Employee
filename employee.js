
// let employee = {
//     overtime: 50
// };

// let consultant = {
//     employeeName: "John Doe",
//     baseSalary: 4000

// };

// let manager = {
//     employeeName: "Dave Smith",
//     baseSalary: 6000

// };
// let seniorManager = {
//     employeeName: "Dan Johnson",
//     baseSalary: 8000

// };

// let person = {
//     firstName: "John",
//     lastName: "Doe"
// };

//let {firstName:fName, lastName:lName} = person;
//({firstName,lastName} = person);

//console.log(lastName);

// let display = ({firstName, lastName}) => console.log(newEmployee.name.firstName);

// let newEmployee = {
//     id: 101,
//     name:{
//         firstName: 'mark',
//         lastName: 'spenser'
//     }
// };
// display(newEmployee);

// let{
//     name:{firstName, lastName}
// } = newEmployee;

// console.log(lastName);


// let display = ({firstName, lastName, grade}) => console.log(firstName + " " + lastName + " got an " + grade);

// let student = {
//     firstName: "John",
//     lastName: "Doe",
//     grade: "A"
// };

// display(student);


// function Employee(employeeId, employeeName, salary){
//     this.employeeId = employeeId;
//     this.employeeName = employeeName;
//     this.salary = salary;
//     this.getSalary = function () {
//         return this.salary;
//     }
// }

// let employee1 = new Employee("1", "Ben", 50000);
// let employee2 = new Employee("2", "John", 70000);
// let employee3 = new Employee("3", "Dave", 500000);

// console.log(employee1.employeeName);
// console.log(employee2.employeeName);

// let superobj = {
//     color: 'red'
// };

// let subobj = {
//     height: 'medium'
// };

// subobj.__proto__ = superobj;
// console.log(subobj.color);


// let animal = {
//     eats: true,
//     walk: function() {
//         return true;
//     }
// };

// let rabbit = {
//     jumps: true,
// };

// let longEar = {
//     earlLength: 10
// };

// rabbit.__proto__ = animal;
// longEar.__proto__ = rabbit;

// console.log(longEar.eats);
// console.log(longEar.jumps);


// function math(a){
//     return [a*a, a*a*a]
// }

// let [b, c] = math(2);
// console.log("b " + b + " c " +c);

// function Person(name){
//     this.name = name;
// }

// Person.prototype.getName = function(){
//     return this.name;
// };

// let john = new Person("John Doe");
// let mark = new Person("Mark Woods");
// console.log(john.getName());
// console.log(mark.getName());

class Employee {
    #empName;
    #empId;
    #designation;
    #salary;
    constructor(name, id, designation) {
        this.#empName = name;
        this.#empId = id;
        this.#designation = designation;
    }
    get empName(){
        return this.#empName;
    }
    get empId(){
        return this.#empId;
    }
    get designation(){
        return this.#designation;
    }
    get salary(){
        return this.#salary;
    }
    set empName(name){
        this.#empName = name;
    }
    set empId(id){
        this.#empId = id;
    }
    set designation(designation){
        this.#designation = designation;
    }
    set salary(salary){
        if(salary > 1000){
            this.#salary = salary;
        }else{
            throw new Error("Salary too low");
        }
    }
}

const employee = new Employee("Jon Snow", 123, "admin");
// employee.salary = 999;
// console.log(employee.salary);
employee.salary = 1001;
console.log(employee.salary);