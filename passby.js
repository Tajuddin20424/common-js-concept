let num1 = 5;
let num2 = 7;

function multiply(a, b){
    a = 27;
    const result = a * b;
    return result;
}

const output = multiply(num1, num2);
console.log(output);


// let student1 = {name: 'Jalil', Partner: 'Borsha'};
// let student2 = {name: 'Raj', Partner: 'Anika'};

// function makeMovie(couple1, couple12){
//     couple1.name = 'Ononto';
//     couple2.Partner = 'mim';
// }
// console.log(student1, student2);
// makeMovie(student1, student2);
// console.log(student1, student2);


let student1 = {name: 'Jalil', Partner: 'Borsha'};
let student2 = {name: 'Raj', Partner: 'Anika'};

function makeMovie(couple1, couple2) { 
    couple1.name = 'Ononto';
    couple2.Partner = 'mim';
}
console.log(student1, student2);
makeMovie(student1, student2);
console.log(student1, student2);
