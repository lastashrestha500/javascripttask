// arrow function with multiple parameters
const greet=(name)=>{
    return 'hello,${name}!';
    console.log(greet("lasta"));
}


// object destructuring
const person={
    name:"lasta",
    age:20,
    country:"Nepal"
};
const{name,country}=person;
console.log(name);
console.log(country);


// array destructuring
const arr=[10,20,30,40];
const [first,second] = arr;
console.log(first);
console.log(second);

// deafult parameters
function sayHello(name = "Guest") {
    console.log("Hello, " + name +  "!");
}

sayHello("lasta");  
sayHello();          
// rest operator(sum of numbers)
const sumAll=(...numbers)=>{
    return numbers.reduce((total,n)=>total+n,0);

};
console.log(sumAll(1,2,3,4));
// spread operator with array
const arr1=[1,2,3];
 const arr2=[4,5];
const arr3=[...arr1,...arr2]
console.log(arr3);
// 
{
let fruit="orange";
console.log(fruit)

}
// console.log(fruit) {cannot access outside the block}
{
    const vegetable="potato"
    console.log(vegetable)
}
// console.log(vegetable){cannot access outside the block}
const obj1={a:1,b:2};
const obj2={c:3,d:4};
const merged={...obj1,...obj2}
console.log(merged)
const {a,d}=merged;
console.log(a,d);
