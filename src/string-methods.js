// #11 (00:50:53) useful string methods 🧵

let userName = "    Bro Code    ";
let phoneNumber = "123-456-7890";
userName = userName.trim(); // removes spaces

// console.log(userName.length); // displays length
// console.log(userName.charAt(0)); // returning the index of a character in a string (if it's undefined, then it returns 0)

// console.log(userName.indexOf("o")); // shows index location of "o"
// console.log(userName.lastIndexOf("o")); // shows the last index location of "o" if it repeats

// userName = userName.toUpperCase(); // all characters uppercase
// userName = userName.toLowerCase(); // all characters lowercase

phoneNumber = phoneNumber.replaceAll("-", "");

console.log(userName);
console.log(phoneNumber);