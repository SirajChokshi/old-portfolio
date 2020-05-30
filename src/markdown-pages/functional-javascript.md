---
path: "/blog/functional-javascript-es6"
date: "2020-05-27"
title: "Why and How to Write Functional JavaScript with ES6"
tags: ["JavaScript"]
abstract: "ES6 allows for integration of functional programming in existing JavaScript programs."
photo: ""
---

With functional programming's increasing popularity many developers are giving it a shot. While you
might often mutate state (e.g. using an ES1 Array method like `.push` or `.pop`) or loop through data there are advantages to 
breaking this norm. Frontend frameworks like React and Angular are incorporating more functional ideas into their developer
experiences. 

## What is Functional Programming?

An often used and concise description of functional programming is "a paradigm involving functions as first-class citizens, 
or in short first-class functions". To break this down a bit further for the uninitiated,
a function is first-class when it is able to be used as if it was a variable. This includes being returned, passed as an argument or reassigned.

**For example:**

```javascript
// where `a` and `b` are numbers
const add = function(a, b) {
    return a + b
}

const calc = (operation, a, b) => {
    return operation(a, b)
}

// Pass `add`, `1`, and `2` as arguments to the `calc` function
calc(add, 1, 2) // = 3
```

In this case `add` is declared as a traditional function and assigned to a variable, and it can be invoked directly with `add(a,b)`. 
`add` can also be passed as a variable (as in `calc()`). While this scenario is just overcomplicated arithmetic there are actual advantages
to the functional paradigm. Note we avoid defining variables with 'var' or 'let' and instead opt for 'const' which is cannot be reassigned, I'll talk more about this shortly.
 
## Advantages of Functional Programming

Functional programming is nothing new. Being modeled after lambda calculus and mathematical functions, functional programming languages 
like LISP and Haskell have been around for over 60 and 30 years respectively. While you may not see these names crop up often they still
have they [still have their uses](https://engineering.fb.com/security/fighting-spam-with-haskell/) and for good reason. Functional programming 
poses advantages that, in practice, are unique to the paradigm.

### No Side Effects & Debugging

Functional programming opts for programming without side effects. Much like a mathematical function, functions take input(s) and return one or more outputs.
When writing code with functions with no side effects, also known as pure functions, a program will often become much easier to debug. Data and state are 
received and returned throughout a series of breakpoints (i.e. pure functions) which allows a programmer to pinpoint errors with ease.

### Code Readability

One caveat of writing pure functions and reducing state changes is allocating memory. Luckily JavaScript garbage collection is far from expensive, making it
a great playground for exploring the benefits of functional programming. One of these benefits is readability. Functional programming allows for abstract
concepts to be condensed and obscured for clean, very readable code. A great example of this are JavaScript ES5's Array methods like `map()` and `filter()`.

Since React 16.8, the framework has supported, and has made it clear they intend to move to, using functions from components
and functional hooks for state management. Both of these implementations replacing their class or object-based predecessors.
The React team made this change to provide a simpler and more readable development experience for frontend engineers. Further,
understanding functional programming can prove useful when writing clean code in React.

## Why JavaScript and ES6?

While all these ideas may sound great something that may have come across your mind is 'why JavaScript'? The language is extremely popular
due to its dominance on the web, not because it is very readable or logical. These conditions allow for many inexperienced and experienced 
programmers alike to write JavaScript in completely different ways. By moving towards a functional paradigm streamlining repositories becomes 
a lot easier. Clearly, this would be true of any style guide or paradigm, but there are other, more compelling reason, to write functionally
in ES6.

### JavaScript Supports a Variable Number of Arguments

JavaScript is somewhat unique in the way it handles arguments in functions. It essentially allows for a variable amount of predefined, or undefined, arguments
to be passed to a function and will not throw an error unless the compiler flags a variable a required (e.g. it is returned or directly manipulated). This allows functions
to be written with either truthy values or JavaScript's implicit iterable `arguments` array as seen in the following example.

```javascript
/*
 *  returns the sum for any length of numerical arguments
 */
function sum() {
  let sum = 0;
  for (const arg of arguments) sum += arg; 
  // iterate through JavaScript's implicitly created `arguments` array
  return sum;
}

sum() // = 0
sum(1, 2, 3, 4) // = 10
```

### Writing Recursively

Most newcomers to the functional paradigm question the efficiency of recursion and that uncertainty is well-founded. In most popular (read: object-oriented) 
programming languages like Python, C/C++, or Java, recursion can definitely bloat the call stack. This, however, is resolved with [tail call optimization](https://en.wikipedia.org/wiki/Tail_call), 
which enables recursive functions calls without adding a new stack frame to the call stack which will help avoid a `RangeError`.
Also called tail call elimination, this technique has been added to the JavaScript specifications with EMCAScript 2015 (ES6) and is available in Node.JS. 
This type of optimization is present in strictly functional languages like Haskell. Unfortunately most browser engines [(with the odd exception of Safari)](https://kangax.github.io/compat-table/es6/) 
have not implemented this part of ES6. While this is concerning for functional JavaScript right now,
it is also a clear sign of the direction the language is taking in shifting its focus paradigm.

## Why Not to Use Functional Programming

As any computer scientist should know, throwing new, exciting, or complex technology at one's issues is not the most productive way to go about solving a problem.
While functional programming can be a valuable item in a developer's toolbox, the most valuable tool, as corny as it sounds, is judgement.
Knowing more paradigms can also allow one to both find styles they like to write in themselves and jump into another developer's codebase with ease.