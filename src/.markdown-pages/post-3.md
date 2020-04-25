---
path: "/blog/functional-javascript-es6"
date: "2020-03-31"
title: "Why and how to write Functional JavaScript with ES6"
tags: ["javascript", "programming"]
abstract: "ES6 allows for integratation functional programming in existing programs."
photo: "https://picsum.photos/800/500"
---

<!--
Introduction
-->

## What is Functional Programming?

An often used and concise description of functional programming is "a paradigm involving functions as first-class citizens, 
or in short first-class functions". To break this down a bit further for the uninitiated,
a function is first-class when it is able to be used as if it was a variable. This includes being returned, passed as an argument or reassigned.

<br />

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
const value = calc(add, 1, 2) // value = 3
```

In this case `add` is declared as a traditional function and assigned to a variable and it can be invoked directly with `add(a,b)`. 
`add` can also be passed as a variable (as in `calc()`). While this scenario is just overcomplicated arithmetic there are actual advantages
to the functional paradigm. Note we avoid defining variables with 'var' or 'let' and instead opt for 'const' which is cannot be reassigned, I'll talk more about this shortly.
 
## Advantages of Functional Programming

Functional programming is nothing new. Being modeled after lambda calculus and mathematical functions, functional programming languages 
like LISP and Haskell have been around for over 60 and 30 years respectively

### No Side Effects

Functional programming opts for programming without side effects. Much like a mathematical function functional programming takes input(s) and returns one or more outputs.

### Code Readability

## Why use JavaScript?

## Using ES6 for 

## Why Not to Use Functional Programming

Lastly, while functional programming can be a valuable item in a developer's toolbox, the most valuable tool, as corny as it sounds, is judgement.
Throwing new, exciting, or complicated technology at one's issues is not the most productive way to go about solving a problem. It is the same reason
there are multiple paradigms in use and more than one language implementation for each paradigm.