"use strict";
let employee1 = {
    id: 1,
    name: "mengse",
    salary: 2000,
    details: function () {
        return `ID: ${this.id}, Name: ${this.name}`;
    },
    retirement: function (date) {
        console.log(`${this.name} is retiring on ${date}`);
    }
};
let employee2 = {
    id: 2,
    name: "chanelle",
    salary: 2000,
    details: function () {
        return `ID: ${this.id}, Name: ${this.name}`;
    },
    retirement: function (date) {
        console.log(`${this.name} is retiring on ${date}`);
    },
};
console.log(employee1.details());
console.log(employee2.details());
let unionType;
unionType = "Hello world";
unionType = 123;
function kgToLbs(weight) {
    if (typeof weight === "number") {
        return weight * 2.2;
    }
    else {
        return parseFloat(weight) * 2.2;
    }
}
console.log(kgToLbs(74));
console.log(kgToLbs("74kg"));
let manger1 = {
    name: "hana",
    age: 20,
    department: "IT",
    id: 1,
    salary: 1200,
    staffs: [
        { id: 1, salary: 2000 },
        { id: 2, salary: 1500 }
    ]
};
console.log(manger1);
function printQunatity(value) {
    console.log(value);
}
printQunatity(30);
