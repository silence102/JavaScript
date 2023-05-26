// 1. Use strict
// added in ES 5
// use this for Vanilla JavaScript.
'use strict';

// 2. Variable(변수 선언), rw(read/write)
// let - Mutable (added in ES6) // 변하기 쉬운
// Block scope {} 
let globalName = 'global name';
{
    let name = 'minseok';
    console.log(name);
    name = 'hello';
    console.log(globalName);
}
console.log(name);
console.log(globalName);
// var (단점 많고 오래됨)
// var 선언하기도 전에 값을 사용할 수 있음 (don't ever use this)
// var hoisting(끌어올려주다) (move declartion from bottom to top) 
// = 어디서 선언했느냐에 상관없이 항상 제일 위로 끌어 올려주는 것을 의미함.
// has no block scope = 아무곳에서나 다 보여짐.

// 3. Constant (const - immutable) r(read only) // 불변
// use const whenever possible
// only use let of variable needs to change
const daysInWeek = 7;
const maxNumber = 5;

// Immutable data types: primitive types, frozen objects (i,e object.freeze())
// Mutable data types: all objects by default are mutable in JS
// favor immutable data type always for a few reasons;
// 값을 선언함과 동시에 할당된 값을 절대 변경할 수 없음.
// - security(보안)
// - thread satety
// - reduce human mistakes

// 4. Variable types
// *primitive, single item: number, string, boolean, null, undefined, symbol
// *object, box container
// function, first-class function

const count = 5; // integer
const size = 10; //decimal number
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

// number - speicla numeric values: infinity, 0-infinity, NaN 
const infinity = 1/0;
const negativeInfinity = -1/0;
const nAn = 'not a number' / 2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

// bigInt (fairly new, don't use it yet)
const bigInt = 12345667889809012354668798090n; // over (-2**53)
console.log(`value:${bigInt}, type: ${typeof bigInt}`);

// string
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello' + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${brendan}!`; // template literals(string)
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);

// boolean
// false: 0, null, undefined, NaN,''
// true: any other value 
const canRead = true;
const test = 3 < 1; // false
console.log(`value: ${canRead} type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

// null
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

// undefined
let x;
console.log(`value: ${x}, type: ${typeof x}`);

// symbol, create unique identifiers for objects
// 고유한 식별자 생성 시 사용
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2); // false 
// for : 주어진 string에 맞는 symbol을 만들어줌
const symbol01 = Symbol.for('id');
const symbol02 = Symbol.for('id');
console.log(symbol01 === symbol02); // true
console.log(`value: ${symbol01.description}, type: ${typeof symbol01.description}`)

// object, real-life object, data structure
const ellie 
= { name:'ellie', age:'25'}; 
ellie.age = 24;
console.log(ellie);
console.log(ellie.age);
// object 내에서는 const 변수 내에서 새로 값이 할당 가능하다

// 5. Dynamic typing: dynamically typed language
// 변수 선언 시 어떤 타입인지 선언하지 않고 할당된 값에 따라 달라질 수 있음.
let text ='hello';
console.log(`value: ${text}, type: ${typeof text}`); // value:hello, type:string
