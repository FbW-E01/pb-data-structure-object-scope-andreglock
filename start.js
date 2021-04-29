const student = {
    firstName: 'John',
    lastName: 'Smith',
    class: 12,
    getStudent() {
        return `${this.firstName} ${this.lastName} is a student in class ${this.class}`;
    },
};

console.log('1:', student)

console.log('2:', student.getStudent())

/* Create a person object. Include the person's first and last name, age, job, city etc. Create a method to print data from the object e.g. "John Smith is a 41 year old engineer living in France" */

const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 25,
    job: 'Unemployed',
    city: 'Madrid',
    print() {
        console.log(`3: ${this.firstName} ${this.lastName} is a ${this.age} years old ${this.job} in ${this.city}`);
    },
    getLength() {
        let size = 0;
        for (const key in person) {
            size++;
        }
        console.log('4:', size)
    }
}

person.print();
person.getLength();
