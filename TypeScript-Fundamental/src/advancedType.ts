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

console.log(employee1.details())
console.log(employee2.details())

// === | Union Type | ===

let unionType: string | number;

unionType = "Hello world";
unionType = 123;

function kgToLbs(weight: number | string): number{
    if(typeof weight === "number"){
        return weight * 2.2;
    }else{
        return parseFloat(weight) * 2.2;
    }
}

console.log(kgToLbs(74));
console.log(kgToLbs("74kg"));


// === | Intersection Type | ===

type Person = {
    name: string;
    age: number;
}

type Staff = {
    id: number;
    salary: number;
}

type Manager = {
    department: String;
    staffs: Staff[] 
}

type ManagerWithPerson = Person & Manager & Staff;

let manger1: ManagerWithPerson = {
    name: "hana",
    age: 20,
    department: "IT",
    id: 1,
    salary: 1200,
    staffs: [
        {id: 1, salary: 2000},
        {id: 2, salary: 1500}
    ]

}

console.log(manger1)