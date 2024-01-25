# Introduction
With Test Driven Development you first write the test and then you write the code that makes the  
test pass (instead of the other way around).  
Try to solve the commands below using the RED, GREEN, REFACTORING method.  
Write the function that passes the test below:  

1. Write the function....
   
            const addOne = function(numbers) {
                    // Write the function here...
            }

            module.exports = addOne;

    - ... which passes the test below:

            const addOne = require("./add-one.js");

                test("Add 1 to each item in myArray", function() {
                const myArray = [31, 57, 12, 5];

                const unchanged = [31, 57, 12, 5];
                const expected = [32, 58, 13, 6];
                const output = addOne(myArray);

                expect(output).toEqual(expected);
                expect(myArray).toEqual(unchanged);
            });

2.	Write the function....

            const getWordLengths = function(someWords) {
                //Write your function...
            };

            module.exports = getWordLengths;

    - ... which passes the test below:

            const getWordLengths = require("./get-word-lengths.js");

                test("Get word lengths", function() {
                const words = ["sun", "potato", "roundabout", "pizza"];
                const expected = [3, 6, 10, 5];

                const output = getWordLengths(words);
                expect(output).toEqual(expected);
            });


3.	Write the function....

            const findNeedle = function(words) {
            // Write the function here...
            };

            module.exports = findNeedle;

    - ... which passes the test below:

            const findNeedle = require("./find-needle.js");

                test("Find the needle", function() {
                const words = ["house", "train", "slide", "needle", "book"];
                const expected = 3;

                const output = findNeedle(words, "needle");
                expect(output).toEqual(expected);
            });
