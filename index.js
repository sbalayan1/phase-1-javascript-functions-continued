// Your code here

//example of a function declaration 
function razzle() {
    console.log("You've been razzled!");
}


//Implement a function called saturdayFun. 
//It should return a String like "This Saturday, I want to ....!" 
//Fill in the ... with the activity that's passed in as the first parameter. 
//If nothing is passed in, default to "roller-skate". 
//Run learn to verify you've gotten the first set of tests passing before continuing with the lesson.
function saturdayFun (activity='roller-skate') {
    return `This Saturday, I want to ${activity}!`;    
}



//An expression is an arrangement of constants, variables and symbols that when interpreted produce a value. 
// below is an example of a function expression. 
//NOTE that the value returned by this expression is the function itself 
// the grouping operator () tells js to interpret the value inside the () first. aka it recognizes our function as a function EXPRESSION 
(function() {
    console.log("Yet more razzling");
})


//NOTE that you can invoke an anonymous function via a callback function, declaring a variable and assigning the function, or ()
//NOTE function expressions are not hoisted 
//NOTE another way to invoke an anonymous function is by creating an INSTANTLY INVOKED FUNCTION EXPRESSION(IIFE)
//example of an IIFE below 
(function(baseNumber){ return baseNumber + 3; })(2);
                                            //^^^^^ the second() are the function invocation

// Implement a function expression called mondayWork. 
//The function should return a String like "This Monday, I will ... ." Fill in the ... with the activity that's passed in as the first parameter. 
// If nothing is passed in, default to "go to the office". 
//Run learn to verify you've gotten this set of tests passing before continuing with the lesson.

function mondayWork (activity="go to the office") {
    return `This Monday, I will ${activity}.`
}

//define function-level scope 
//JavaScript exhibits "function-level" scope. 
//This means that if a function is defined inside another function, the inner function has access to all the parameters of, as well as any variables defined in, the outer function. 
//This works recursively: if we nest a third function inside the inner function, it will have access to all the variables of both the inner and outer enclosing functions.



//define closure
//In the previous example, we could call the "inner" function, the anonymous function, a "closure." 
//It "encloses" the function-level scope of its parent. 
//And, like a backpack, it can carry out the knowledge that it saw — even when you're out of the parent's scope.


//define scope chain 
//allows functions defined inside functions (inside functions) to access all their parent (and grandparent) scopes' variables.

function wrapAdjective (y="*") {
    return function (x = "special") {
            return `You are ${y}${x}${y}!`
        }
       
            
    }

