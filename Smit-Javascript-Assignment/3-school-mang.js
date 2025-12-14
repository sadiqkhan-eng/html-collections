// Abstraction
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    getDetails() {
        return `${this.name}, ${this.age} years old.`;
    }
}

// Inheritance: Student
class Student extends Person {
    #grades; // Encapsulation

    constructor(name, age, grades) {
        super(name, age);
        this.#grades = grades;
    }

    getDetails() {   // Polymorphism
        return `Student: ${this.name}, Grades: ${this.#grades}`;
    }
}

// Inheritance: Teacher
class Teacher extends Person {
    #salary; 
    // Encapsulation

    constructor(name, age, salary) {
        super(name, age);
        this.#salary = salary;
    }

    getDetails() {   // Polymorphism
        return `Teacher: ${this.name}, Salary: ${this.#salary}`;
    }
}

// Using the classes
const st = new Student("Ali", 16, "A+");
const tc = new Teacher("Mr. Ahmed", 35, 80000);

console.log(st.getDetails());
console.log(tc.getDetails());
