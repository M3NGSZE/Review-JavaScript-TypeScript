"use strict";
let a = 22;
console.log("I'm", a);
a = 30;
let x = ['a', 'b', 'c'];
let person;
person = [1, "mengse"];
let staff = {
    id: 1,
    name: "megnse",
    details: function () {
        return `ID: ${this.id}, Name: ${this.name}`;
    },
    retirement: function (date) {
        console.log(`${this.name} is retiring on ${date}`);
    }
};
staff.retirement(new Date());
