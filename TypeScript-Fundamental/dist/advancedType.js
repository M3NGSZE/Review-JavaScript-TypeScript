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
