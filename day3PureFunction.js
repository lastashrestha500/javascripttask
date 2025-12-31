// pure function-10 practice task
// 1.write a pure function multiply(a,b)that returns the productof two numbers
function multiply(a,b){
    return (a*b);
}
console.log(multiply(10,5));
// 2.create a pure function getFullName(firstName,lastName)that returns a concatinated full name with a space
function getFullName(firstName,lastName){
    return(firstName+" "+lastName)
};
console.log(getFullName("lasta","shrestha"))
// 3.write a pure function isEven(num) that returns true if the number is even false otherwise
function isEven(num){
    return (num%2)==0;
}
console.log(isEven(15));
// 4.create a pf capitalize(str) that returns the string with the first letter capitalized
function capitalize(str){
    return str.charAt(0).toUpperCase()+str.slice(1);
}
console.log(capitalize("apple"));
//5. write a PF clculateArea(radius) that returns the area of circle(use pi=3.14)
function calculateArea(radius){
    return(3.14*radius*radius)
}
console.log(calculateArea(2))
// 6.create a PF getInitials(firstName,lastaname)that returns initials like "D.S" for "Dipak Shrestha".
function getInitials(firstName, lastName) {
  // 1. Get first letter of first name and make it big
  const firstI = firstName.charAt(0).toUpperCase();
  
  // 2. Get first letter of last name and make it big
  const lastI = lastName.charAt(0).toUpperCase();
  
  // 3. Glue them together with dots
  return firstI + "." + lastI + ".";
}
console.log(getInitials("Dipak","Shrestha"))
// 8.create a PF reverseString(str) that returns the reversed string
function reverseString(str){
    return[...str].reverse().join("");
}''
console.log(reverseString("Apple"));
// 9.Write a pure function findMax(arr) that returns the largest number in an array.
function findMax(arr){
    return Math.max(...arr);
}
console.log(findMax([10,2,3,47,1]));
// 10.Create a pure function formatDate(year, month, day) that returns a string in "DD/MM/YYYY" format.
function formatDate(year,month,day){
    return`${day}/${month}/${year}`;
}
console.log(formatDate(2025,12,31))


