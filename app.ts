// Question No 1: Write a JavaScript function that accepts a string as a parameter and counts the number 
// of vowels within the string?

function countVowels(str: string) {
    let vowels = ["a", "e", "i", "o", "u"];
    let countVowels = 0;
    for(let i=0; i < str.length; i++){
        const char = str[i];
        if(vowels.includes(char))countVowels++;
            
        }
    return `The number of vowels in the given string is ${countVowels},`;

    }
    
console.log(countVowels("This is a string to check forvowels."));







 

// Question No. 2: Write a JavaScript function that accepts a number as a parameter and checks 
// whether it is prime or not using recursion?



function isPrimeNumber(n: number){ 
    function isPrime(num: number){
        if(num === 1 || num === 2){
            return `${n} is a prime number.`;
        }
        if (n % num === 0){
            return `${n} is not a prime number.`;
          
        }
        return isPrime(num - 1);
    } 
    return isPrime(n - 1);
}


console.log(isPrimeNumber(0));
console.log(isPrimeNumber(1));
console.log(isPrimeNumber(67));




// Question No. 3: Write a java script function to find the first not repeated character?


function getFirstUniqueChar(str: string){
for(let i = 0; i < str.length; i++){
    const char = str[i];
    if(str.indexOf(char) === str.lastIndexOf(char)){
        return `${char} is the first unique character in the given string.`;

    }
}
}
console.log(getFirstUniqueChar("what is the first w unique char in this string"));





// Question No. 4: Write a function that returns the square of a number?



function getsquare(num: number){
    return num ** 2;
}
console.log(getsquare(6));
console.log(getsquare(10));
console.log(getsquare(25));
console.log(getsquare(30));





// Question No. 5: Function `displayMessege()` prints “Hello World” string using console.log() function?

function displayMessage(){
    console.log("Hello World")
}
displayMessage();

