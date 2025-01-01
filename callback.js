function greeting(greetingHandler, name){
    console.log(name);
}
// const name = 'Halim mama';
// greeting(name);
// const number = 45;
// greeting(number);
// const numbers = [45, 54, 78];
// greeting(numbers);
// const laptop = {price: 45000, brand: 'lenovo', memory: '8gb'};
// greeting(laptop);

function greetingHandler(name){
    console.log('Good Morning', name);
}

function greetEvening(name){
    console.log('Goog Evening', name);
}

function greetNight(name){
    console.log('Good Night');
}

greeting(greetingHandler, 'Tom Hanks');
greeting(greetingHandler, 'Tom Brady');
greeting(greetingHandler, 'Tom Cruise');
greeting(greetEvening, 'Tom Solaiman');
greeting(greetNight, 'Tajuddin');
