// 1. String concatenation
console.log('my' + 'cat');
console.log('1' + 2);
console.log(`string literals: 1+2 = ${1 + 2}`);

// 2. Numeric operators
console.log(1 + 1); // add
console.log(1 - 1); // substract
console.log(1 / 1); // divide
console.log(1 * 1); // multiply
console.log(5 % 2 ); // remainer
console.log(2 ** 3); // exponentiation

// 3. Increment and decrement
let counter = 2;
const preIncrement = ++counter;
// 먼저 더해놓고 할당
// counter = counter + 1;
// preIncrement = counter;
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`)
// postIncrement: 3, counter: 3
const postIncrement = counter++;
console.log(`postIncrement: ${postIncrement}, counter: ${counter}`)
// postIncrement: 3, counter: 2
// 할당하고 나서 더함
// postIncrement = counter;
// counter = counter + 1;
const preDecrement = --counter;
const postDecrement = counter--;

// 4. Assignment operators
let x = 3;
let y = 6;
x += y; // x = x + y;
x -= y;
x *= y;
x /= y;

// 5. Comparision operators
console.log(10 < 6); // less than
console.log(10 <= 6); // less than or equal
console.log(10 > 6); // greater than
console.log(10 >= 6); // greater than or equal

// 6. Logical operators: || (or), && (and), ! (not)
const value1 = true;
const value2 = 4 < 2;

// || (or), finds the first truthy value
console.log(`or: ${value1 || value2 || check()}`);

// && (and), finds the first falsy value
console.log(`and: ${value1 && value2 && check()}`);

function check() {
    for (let i=0; i<10; i++){
        //wasting time
        console.log('...');
    }
    return true;
}

// null 체크 용도
// &&(and)는 object가 null이면 false가 되서 실행이 안됨
// null이 아닐때만 값을 받아와 실행
// often used to compress long if-statement 
// nullableObject && nullableObject.something
const nullableObject=1;
if (nullableObject != null) {
    nullableObject.something;
}

// ! (not)
console.log(!value1);

// Equality
const stringFive = '5';
const numberFive = 5;

// == loose equality, with type  conversion
console.log(stringFive == numberFive);
console.log(stringFive != numberFive);

// === strict equality, no type conversion
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);

// object equality by reference
const minseok1 = {name: 'minseok'};
const minseok2 = {name: 'minseok'};
// 1과 2 에는 같은 값이 들어가 있지만 각각 다른 래퍼런스에 저장되어 있다
const minseok3 = minseok1;
// 3과 1은 같은 래퍼런스를 갖게됨
console.log(minseok1 == minseok2); // false
console.log(minseok1 === minseok2); // false
console.log(minseok1 === minseok3); // true

// equality - puzzler
console.log(0 == false); // T
console.log(0 === false); // F
console.log('' == false); // T
console.log('' === false); // F
console.log(null == undefined); // T
console.log(null === undefined); // F

// 0, null, undefined, '' = false로 간주될 수 있다.
// === 타입 간의 비교까지!!

// 8. Conditional operators: if
// if, else, if, else
const name = 'minseok';
if (name === 'minseok') {
    console.log('welcome, minseok!');
} else if (name === 'coder') {
    console.log('You are amazing coder');
} else {
    console.log('unknown');
}

// 9. Ternary operator: ? 
// condition ? value1: value2;
console.log(name === 'minseok' ? 'yes' : 'no');


// 10. Switch statement
// use for multiple if checks
// use for enum-like value check
// use for multiple type checks in TS
const browser = 'IE';
switch (browser) {
    case 'IE':
        console.log('go away!');
        break;
    case 'Chrome':
    case 'Firefox':
        console.log('love you!');
        break;
    default:
        console.log('same all!');
        break;
}

// 11. Loops
// while loop, while the condition is truthy,
// body code is executed.
let i = 3;
while (i > 0){
    console.log(`while: ${i}`);
    i--;
}

// do while loop, body code is executed first,
// then check the condition.
do {
    console.log(`do while: ${i}`);
    i--;
} while (i > 0);

//for loop, for(begin; condition; step)
for (i = 3; i > 0; i--) {
    console.log(`for ${i}`);
}

for (let i = 3; i > 0; i = i -2 ) {
// inline varable declaration
    console.log(`inline varable for: ${i}`);    
} 

// nested loops 이중 for 문은 되도록이면 사용하지 않는걸 권장
for(let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
        console.log(`i: ${i}, j:${j}`);
    }
}

// Q1
for (let i = 0; i < 11; i++) {
    if(i % 2 === 0) {
        continue;
    }
    console.log(`q1. ${i}`);
}

// Q2
for (let i = 0; i < 6; i++) {
    for(let j=0; j<6; j++){
        if(j > 3) {
            break;
        }
        console.log(`q2. ${i}`);
    }
    
}
