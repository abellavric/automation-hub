//Create a function that counts the number of vowels in a string
 
function countVowels(text: string): number {
    let count = 0; //Initialize a counter for vowels
    let i = 0; //Start index for while loop
    //Repeat until all characters are checked
    while (i < text.length) {
        let char = text[i] //Assigning the current character to char
        // Check if the character is a vowel (both lowercase and uppercase)
if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u" || char === 'A' || char === 'E' || char === 'I' || char === 'O' || char === 'U') {
            count++ // Increase count if character is a vowel
        }
 
        i++ // Move to the next character
    }
 
    return count // Return the total vowels found
}

console.log("There are", countVowels("Hello World"), "vowels.") // Expected: 3
console.log("There are", countVowels("TypeScript is awesome!"), "vowels.") // Expected: 7
console.log("There are", countVowels("Ana is beautiful!"), "vowels.") // Expected: 8
console.log("There are", countVowels("Bdg HJK"), "vowels.") // Expected: 0