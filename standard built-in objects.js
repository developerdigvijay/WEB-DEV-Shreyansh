console.log("time is: below");
// addition using evaluate
console.log(eval("5+5"));

console.log(eval(new String("5+5")));

console.log(eval(new Number(5 + 5)));
// compare string and numbers
console.log(eval(new String(5 + 5) === eval(new String(5 + 5))));
console.log(eval(Number(5 + 5)) === eval(Number(5 + 5)));

console.log(eval());
