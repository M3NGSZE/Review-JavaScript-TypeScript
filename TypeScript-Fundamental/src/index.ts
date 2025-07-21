let a: number = 22;
console.log("I'm", a)

a = 30

let x: string[] = ['a', 'b', 'c']

// this comment to improve readability

// compile both typescript and javascript file if both true
// tsc && node ./dist/index.js
// clear && tsc && node ./dist/index.js  || clear and run

// tuple
let person: [number, string]
person = [1, "mengse"]

const enum Sizes {small, meduim, large}

// console.log(Sizes)

let staff: {
    readonly id: number,
    name: string,
    salary?: number,
    details: () => string,
    retirement: (date: Date) => void
} = {
    id: 1,
    name: "megnse",
    details: function(){
        return `ID: ${this.id}, Name: ${this.name}`
    },
    retirement: function(date: Date){
        console.log(`${this.name} is retiring on ${date}`)
    }
}
staff.retirement(new Date());
// console.log()