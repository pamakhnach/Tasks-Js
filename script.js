//Vowel search

let str = 'hello';

function search() {
  let arr = str.split('');
  let vowels = arr.filter(item => item === 'a' || item === 'e' || item === 'i' || item === 'o' || item === 'u' || item === 'A' || item === 'E' || item === 'I' || item === 'O' || item === 'U');
  console.log(vowels.length);
}


let arr = str.split('');
let length = arr.filter(letter => 'aeiouAEIOU'.includes(letter)).length;


let re = /[aeiou]/gi;
let vowel = str.match(re).length;

//FizzBuzz

let n = 15;

for (var i=1; i <= n; i++)
{
    if (i % 15 == 0){
        console.log("FizzBuzz");
    } else if (i % 3 == 0) {
        console.log("Fizz");
    } else if (i % 5 == 0) {
        console.log("Buzz");
    }else
        console.log(i);
}


// Anagram

let str1 = 'hello';
let str2 = 'ollhe';

console.log(JSON.stringify(str1.split('').sort()) === JSON.stringify(str2.split('').sort()));


// Polindrom

let str1 = 'hello';
let str2 = 'olleh';

console.log(JSON.stringify(str1.split('')) === JSON.stringify(str2.split('').reverse()));