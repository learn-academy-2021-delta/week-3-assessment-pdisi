// ASSESSMENT 3: Coding practical questions with Jest

// const { number } = require("prop-types")

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.

// a) Create a test with expect statements for each of the variables provided.

// a describe method that lists the name of the function OR naming of the particular test.
describe("fibonnaciArray", () => {

    // a test/it method, nested within the describe block, that in plain words, describes that the function does.
    it("Returns an array with the length of the given variable that includes the Fibonnaci sequence", () => {
  
      //an expect method, nested within the test block, calling on the hello() function, followed by the .toEqual() matcher that checks the expected output of the function return.
      expect(input(6)).toEqual(([1, 1, 2, 3, 5, 8]))
      expect(input(10)).toEqual(([1, 1, 2, 3, 5, 8, 13, 21, 34, 55]))
    })
})

//Test FAIL. ReferenceError: input is not defined


// Example input: 6
// Expected output: [1, 1, 2, 3, 5, 8]

// Example input: 10
// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

// b) Create the function that makes the test pass.


const input = (num) => {
    let array = [1,1];
    for (let index = 2; index < num; index++) {
        array.push(array[index-1] + array[index-2]);
    }
    return array
}

// //Take input of variable that includes an example number
// //Establish an array with a length equal to input variable
// //Create a For loop that adds two prior index values to current index location (fibonnaci sequence)
// //Return array of numbers that gives the output of the fibonnaci sequence

//Test PASS

//Notes on process: Creating anonymous functions that coincide with jest tests has proven to be a really heavy learning hurtle for me. 
// I knew what I had to do in order to make this function work, however, I kept overcomplicating it by adding in additional parameters.
// The final function came with some help from Rebecca and she really helped simplify the approach to this.



// // --------------------2) Create a function that takes in an array and returns a new array of only odd numbers sorted from least to greatest.

// // a) Create a test with expect statements for each of the variables provided.

describe("Accumulating Sum", () => {

//     // a test/it method, nested within the describe block, that in plain words, describes that the function does.
    it("Returns array with only numbers in numerical order", () => {
  
      //an expect method, nested within the test block, calling on the hello() function, followed by the .toEqual() matcher that checks the expected output of the function return.
      expect(sorted([4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"])).toEqual(([-9, 7, 9, 199]))
      expect(sorted(["hello", 7, 23, -823, false, 78, null, "67", 6, "number"])).toEqual(([-823, 7, 23]))
    })
  })

//Test FAIL. ReferenceError: input is not defined

// var fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
// // Expected output: [-9, 7, 9, 199]

// var fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
// // Expected output: [-823, 7, 23]


// b) Create the function that makes the test pass.

//Take input of given array into a const
//Create a filter that removes all types of data except for numbers
//Order the filtered numbers from least to greatest
//Return new array with only numbers

const sorted = (val) => {
    if(typeOf(val) === 'number'){
        let newArray = sorted.slice().sort((a,b)=>a-b)
            return newArray
    
    }
    }
    
//Test FAIL. Received undefined / typeOf is not defined
   
//Notes on process: Having difficulty with this one. I believe that the logic I am following in my code is correct, but I am not sure about how to write it.




// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// a) Create a test with expect statements for each of the variables provided.

describe("Accumulating Sum", () => {

    // a test/it method, nested within the describe block, that in plain words, describes that the function does.
    it("Returns array with accumulating sum", () => {
  
      //an expect method, nested within the test block, calling on the hello() function, followed by the .toEqual() matcher that checks the expected output of the function return.
      expect(numbers([2, 4, 45, 9])).toEqual(([2, 6, 51, 60]))
      expect(numbers([0, 7, -8, 12])).toEqual(([0, 7, -1, 11]))
      expect(numbers([])).toEqual(([]))
    })
  })

//   Test FAIL. ReferenceError: numbers is not defined

// var numbersToAdd1 = [2, 4, 45, 9]
// // Excpected output: [2, 6, 51, 60]

// var numbersToAdd2 = [0, 7, -8, 12]
// // Expected output: [0, 7, -1, 11]

// var numbersToAdd3 = []
// // Expected output: []



// // b) Create the function that makes the test pass.

//Create a an anonymous function named numbers that takes in an array
//use .map to get the sum of each value within the given arrays
//return the array after the addition is complete

const numbers = (arr)=> {
    arr.map((sum => value => sum += value)(0));
return arr
    
}

//Test FAIL. expect(received).toEqual(expected) // deep equality

    // - Expected  - 3
    // + Received  + 3

    //   Array [
    //     2,
    // -   6,
    // -   51,
    // -   60,
    // +   4,
    // +   45,
    // +   9,


//Notes on process: Again my logic seems to be correct and it seems like half of the answers are correct in the jest test. Maybe my test isn't setup correctly.
//I found the way to .map this on codegrepper. This was a difficult week! I spent lots of time just trying to figure out my syntax issues, but I still have difficulty with researching the exact problem.