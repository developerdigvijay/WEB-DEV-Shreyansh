// console.log("hello elliot!");
// console.log("chacha is a word!");
// that chacha is nothing in js ok!!👨‍💻
// console.log("for is a loop!");

// word chacha
// keyword for,int,float,if ,else

// variable: var const let
// program me data store karne ke liye jo use hota he vo variable.
// variable meaning = it can be changed
//  constant meaning = can't be changed it's fixed!

// wed program
// const groom = "elliot";
// const spouse = "emma";
// var groom = "elliot";
// var spouse = "emma";
// groom = "sam";
// groom ="elliot";

// console.log(groom + " weds " + spouse);

// hosting , hoisting ✅
// undefined and not-defined are different!!!🔊
// console.log("hoisting");
// let a;
// console.log(a);

// cant fetch before initialization
// console.log(b);
// let b=58;

// types in js ✅
console.log("data types");

// primitive = non bracket values (real copy)(number , undefined,boolean,string, null)
// reference = [],{},()

// primitive
// var x=54;
// y=x;
// console.log(y);

// array is a reference data type (no real copy)
// let z = [5, 4, 2, 7, 8];
// b = z;
// b.pop();
// console.log(z);

// conditionals if else else-if
// aisa vaisa vice versa

// if(true or false){
//     // statement
// }

// let x = 100;
// let y = 99;

// if (x > y) {
//   console.log("x is big");
// } else {
//   console.log("y is big");
// }

// if else-if
// if(true or false){
//     statement
// }
// else if(true or false){
//     statement
// }
// else if(true or false){
//     statement
// }
// else (true or false){
//     statement
// }

// let x=100;
// let y=200;

// if (x>y){    /// true
//     console.log("x is big");
// }
// else if(y>50){
//     console.log("y is big");
// }
// else{       /// false
//     console.log("nope!");
// }

// loops (repeat) for and while 👨‍💻

// for(Stat;change;end;){
//     statement
// }

// 1 to 10
// for (let x = 0; x <= 10; x++) {
//   console.log(x);
// }

// 25 to 50
// for (let y = 25; y <= 50; y++) {
//   console.log(y);
// }

// while (condition) { 👨‍💻
//     statement
// }

// let x=50;

// while (x<=40) {
//     x++;
// }
// console.log(x);

// functions👨‍💻
// function name(params) {
//     statemants
// }

// function sayhello(params) {
//   console.log("hello elliot");
// }
// sayhello();  // function call

// function elliot_fun(x) {
//     statements
// }
// elliot_fun(arguments);

// function my_fun(x) {
//   console.log(x + " printed from arguments");
// }
// my_fun(50);

//  function hello(params) {
//   console.log("hello bitch");
//  }
//  hello()
//  hello()
//  hello()
//  hello()
//  hello()

// array
// let c=[4,5,6,1,7];

// push pop shift unshift
// c.push(7);
// c.pop(1);
// c.splice(1,2);
// console.log(c);

// console.log("window object");👨‍💻
// window object are so many like console, alert, prompt
// var a=45;  // is visible can be data breach
// let b=5;    // use this
// const c=96;  //use this

// stack is similar like index (order of valuse)

// function laxical Context ♟️
// when function is created it creates it's own imaginary container which includes variables, functions, scope functions etc, and lexical enviroment

// laxical environment desides that which variable or functions can be used🪢

// spread operator  [...],{...} used to copy array or objects 🪢

// can;t cpy in this method
// const ary=[1,2,3,4,5,6];
// b=ary;
// b.pop();
// console.log(ary);

// right way to cpy ✅
// arry=[5,4,2,6,9,4,7,9];
// cpy=[...arry];
// cpy.pop();
// console.log(cpy);

// truthy and falsy values ✅
// console.log("truthy and falsy");
// only remember falsy values
// falsy== NaN,undefine,null,0,document.all,false
// example ✅
// if (1) {
//     // truthy
//     console.log("truthy value");
// } else {
//     // falsy ,,NaN,undefine,null,0,document.all,false
//     console.log("falsy value");
// }

// heap memory:  heap is a region of memory where objects and variables are stored during the runtime of a program.
// like 2+2+5+6+4+8
// pc will do : 2+2=4
// pc will do : 5+6=11
// pc will do : 4+8=12
// pc will do : 4+11+12=27✅✅

// reference valuse [] {} ()

//ojects 👨‍💻
// let myobj = {
//   name: "Digvijay",
//   age: 19,
//   profession: "WebDeveloper",
// };

// console.log(myobj);

// console.log(myobj.name);
// console.log(myobj.age);
// console.log(myobj.profession);

// forEach loop mainly used on array 👍
// console.log("ForEach loop");

// let x=[1,2,3,4,5,6,7,8,9];
// x.forEach(function(value){
//     console.log(value+1); // added +1
// });

// for in: used in object 👍

// const myobj = {
//   name: "Digvijay",
//   age: 19,
//   profession: "WebDeveloper",
// };

// for(var key in myobj){
// console.log(key);   //key only prints labels
// console.log(myobj[key]); // myobj][key] prints values of the label
// console.log(key,myobj[key]); prints all values
// }

// do while 👨‍💻
// let a = 1;
// do {
//   console.log("print");
//   a++;  // don't forget this🔊
// } while (a <= 5);

// call back function 🪢

// setTimeout(() => {   //kuch der bad code run karao
//     alert("2 sec alert");
// }, 2000); //valuse in milisec..

// setTimeout(function(){
//     console.log("5 sec");
// },5000);

// first class function  🤾

// let fun=function () {console.log("hey it's let function");}
// console.log(fun);

// function func(value) {
//   value();
// }
// func(function(){console.log("heyyy");});

// arrays are objects
// find using Array.isArray([]) : true  ✅
// find using Array.isArray({}) : false ❌

// deleting object properties 🪢

// let obj={
//     name:"digvijay",
//     age:18,
//     dob:"18-05-23"
// }
// delete obj.name;  //delete an object propertie
// delete obj.age;
// // delete obj.dob;
// console.log(obj);

// updating object properties 🪢
// let obj = {
//   name: "digvijay",
//   age: 20,
//   dob: "18-05-23",
// };

// obj.name = "Elliot"; //update existing values
// obj.age = 18; //update existing values
// obj.dob = "18-07-2323"; //update existing values

// console.log("hell ya iam back!**");
