// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

const { string } = require("yargs")

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in a string and returns a string with a coded message. The coded message converts "a" to 4, "e" to 3, "i" to 1, and "o" to 0.

// a) Create a test with expect statements using the variables provided.

const secretCodeWord1 = "Lackadaisical"
// Expected output: "L4ck4d41s1c4l"
const secretCodeWord2 = "Gobbledygook"
// Expected output: "G0bbl3dyg00k"
const secretCodeWord3 = "Eccentric"
// Expected output: "3cc3ntr1c"

describe("codeGenerator", () => {
    it("takes in a string and returns a string with a coded message", () => {
        expect(codeGenerator(secretCodeWord1)).toEqual("L4ck4d41s1c4l")
        expect(codeGenerator(secretCodeWord2)).toEqual("G0bbl3dyg00k")
        expect(codeGenerator(secretCodeWord3)).toEqual("3cc3ntr1c")
    })
}
)
// b) Create the function that makes the test pass.

// Pseudo code:
//input: A string contains letter only
//output: A string that replaces "a" to 4, "e" to 3, "i" to 1, and "o" to 0

//Creat a function that takes in a string and convert it to an arrays using .split("") 
// Then use a for-loop to iterate every element from the array and use if statemnet to see if they equal to any of the vowels lowercase or uppercase
// If they are, replace them with corresponding number,
// Push the result into a new array and convert it back to a as the final output using .join(""). 

const codeGenerator = (string) => {
    const array1 = []   // create an empty array to hold the tranlated values in an array 
    
    // convert the input string to a array, every single letter will be an element by itself because split by ""
    const newArray = string.split("")       

    // use a for-loop to iterate all the elements in the array from the word
    for (let i = 0; i < newArray.length; i ++) {

        // use conditional statement to find and replace all the target values with our desire number replacement
        if (newArray[i] == 'a' || newArray[i] == "A"){
        array1.push("4")
        }
        else if (newArray[i] == 'e' || newArray[i] == "E"){
        array1.push("3")
        }
        else if (newArray[i] == 'i' || newArray[i] == "I"){
        array1.push("1")
        }
        else if (newArray[i] == 'o' || newArray[i] == "O"){
        array1.push("0")
        }

        // push all the other letters into the same array
        else {array1.push(newArray[i])}
    }

    // covert the array holding all the results back to a string message using join("")
    return array1.join("") // 
}










// --------------------2) Create a function that takes in an array of 5 numbers and determines whether or not the array is a "full house". A full house is exactly one pair and one three of a kind.

// a) Create a test with expect statements using the variable provided.

const hand1 = [5, 5, 5, 3, 3]
// Expected output: true
const hand2 = [5, 5, 3, 3, 4]
// Expected output: false
const hand3 = [5, 5, 5, 5, 4]
// Expected output: false
const hand4 = [7, 2, 7, 2, 7]
// Expected output: true

describe("fullHouse", () => {
    it("takes in an array of 5 numbers and determines whether or not the array is a 'full house'.", () => {
        expect(fullHouse(hand1)).toEqual("true")
        expect(fullHouse(hand2)).toEqual("false")
        expect(fullHouse(hand3)).toEqual("false")
        expect(fullHouse(hand4)).toEqual("true")
    })
})

// b) Create the function that makes the test pass.

// Pseudo code:
// input: an array with 5 integers
// output: "true" : 2 of the integers and 3 of the other are the same. "false": either there are no pairs, or three of a kind. 

 // create a function that takes in an array; this is the overall funtion that includes other functions
const fullHouse = (array) => {     
// create three empty arrays to hold values for later
    const num3Array = []           
    const num1Array = []
    const num2Array = []

// when this function receives an array, the first value[0] from the array is stored in an empty array using .push(), so it can be used to compared later. 

    num1Array.push(array[0])        

// use a for-loop to sort the rest of the values in they array into two categories/arrays; starting from the second value, either they equal to the first value from the OG array or don't. if equal to the first->num1Array; if doesn't equal to the fist -> num2Array

    for (let i = 1; i < array.length; i ++){        
        if (array[i] == num1Array[0]){
            num1Array.push(array[i])
        }
        else {
            num2Array.push(array[i])
        }
    } ;

 // Becaue in a full-house, there can only be two different kinds for cards. Use another for-loop to sort out the num2Array to see if they are all the same. Then sort this array (num2Array) by comparing all the values from this array to the first value that is holds, and use .push() to collect all the values that are the same from the array into a new array (num3Array), and leave any potential values that are not the same as others in num2Array.

    for (i=0; i <5; i ++) {                        
        if (num2Array[i] == num2Array[0]) {
            num3Array.push(num2Array[i])
        }
        else {
        }
    }

    //Now only need to conider num1Array and num3Array. Use a conditional statement to see determine if the hand is full house based on how mmany values are the same by using .length. Full house = three of a kind and a pair, so the length of the arrays holding the same number have to be either 2 + 3 or 3 + 2. If the condition is met -->true, if not ----> false

    if (                                               
    (num1Array.length == 3 && num3Array.length ==2)   
    ||
    (num1Array.length == 2 && num3Array.length ==3) 
    ) 
        {
           return "true"
        }
    else {
        return "false"
    }
    }
console.log(fullHouse(hand1))
console.log(fullHouse(hand2))
console.log(fullHouse(hand3))
console.log(fullHouse(hand4))

