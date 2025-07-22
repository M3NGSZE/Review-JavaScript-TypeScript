type Employee = {
    readonly id: number;
    name: string;
    salary: number;
    details: () => string;
    retirement: (date: Date) => void;
}

let employee1: Employee = {
    id: 1,
    name: "mengse",
    salary: 2000,
    details: function(){
        return `ID: ${this.id}, Name: ${this.name}`; 
    },
    retirement: function(date: Date){
        console.log(`${this.name} is retiring on ${date}`)
    }
}

let employee2: Employee = {
    id: 2,
    name: "chanelle",
    salary: 2000,
    details: function () {
        return `ID: ${this.id}, Name: ${this.name}`;
    },
    retirement: function (date: Date) {
        console.log(`${this.name} is retiring on ${date}`);
    },
};

console.log(employee1.details)
console.log(employee2.details)