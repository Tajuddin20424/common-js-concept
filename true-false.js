/**
Truthy:
1.true
2. any number (+ve, -ve) will be truthy other then 0
3. any string other then empty string
4. '0', 'false'
5. {}
6. []



Falsy:
1.false
2. 0
3. '' (empty string)
4. undefined
5.null

 */

// const x = ' ';

// let x = null;
// let x = {a:5, b:56};

let x = [5, 6];
console.log(x);
if(x){
    console.log('value of x is truthy');
}
else{
    console.log('value of x is falsy');
}


// Optional
// Check falsy
const y = null;
if(!y){
    console.log('Value is falsy');
}


// check true
// const z = 50;
const z = {class: 9};
if(!!x){
    console.log('value is truthy');
}

