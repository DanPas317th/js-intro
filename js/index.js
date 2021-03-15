const userName = prompt('Enter your name');
alert('Hello, ' + userName + '.');
const userAge = Number(prompt('Tell your age'));
alert('Your age is ' + userAge + '.');
const nextAge = add(userAge, 1);
const nextAge = multiply(userAge, 1);
alert('Next year you should be ' + nextAge + ' years old.')
if(userAge >= 150){
    alert('You are an "immortal" cheater.')
}
if(userAge >= 18){
    alert('So, you are an adult.')
}else{
    alert('You are not an adult.')
}

function add(a, b){
    const result = a + b;
    return result;
}
function multiply(a, b){
    const result = a * b;
    return result;
}