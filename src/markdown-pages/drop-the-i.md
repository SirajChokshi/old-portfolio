---
path: "/blog/drop-the-i"
date: "2020-10-25"
title: "Drop the 'I' and When to Use Prefixes"
tags: ["TypeScript"]
abstract: "Clearer naming conventions for a strongly typed web."
photo: ""
---

Wider adoption of TypeScript has led to a web that is more type-safe than ever. Many stacks are still written solely in JavaScript, but a multitude of developers are transitioning over. During this transition, developers are bringing practices from other paradigms along with them. TypeScript is on the newer end of languages and there are a variety of standardized practices in circulation. This post is a refresher on semantics and consistent, readable code. While the ideas presented are not new, new structurally typed frontends re-contextualize them.

## Dropping the 'I'

The title practice and inspiration for this write-up concerns the 'I'-prefixed naming conventions some employ when writing TypeScript and other strongly typed languages. In the vast majority of Interface usage I have come across are operationally as a type. After all, vanilla JavaScript deals with objects as dictionaries rather than classes, so this practice carried over with TypeScript's interfaces.

Consequent to the semantic use of Interfaces, naming one with an 'I' (e.g. `interface IFoo { ... }`) as opposed to without it (e.g. `interface Foo { ... }`) is not only redundant as the type is strongly specified, but harmful to readability and debugging. Consider the following.

```typescript
interface IVehicle {
  name: string
}

interface ICar extends IVehicle {
  make: string
  year: number
}
```

Nothing about these definitions alone are wrong, but lets step through an example of these in use.

```typescript
// initialize a car
const myCar: ICar = { name: "My Car", make: "Honda", year: 2000 }

// initialize an array of vehicles with `myCar`
const myVehicles: IVehicle[] = [myCar]

myVehicles // [{ "name": "My Car", "make": "Honda", "year": 1998 }]
```

In the above example the 'I'-prefix stands out, more so than with the original definitions. This presents a consistency issue, which turns out to be one of the more fundamental issues with using this convention in TypeScript. If this representation of a car needs to be `ICar` should `myCar` not be instantiated as `myICar`? I say the answer to this question is strong 'no', but recognize there is a bigger issue at play

It is likely that somewhere along the line of creating many `ICar` and `IVehicle` references an author drops the prefix as in the example above. When scanning through the prior example nothing pops out as distinctly incorrect or even poor practice. If most programmers would be fine scanning through this snippet and leaving `myCar` named as-is, then the issue lies within the naming of the interface itself. Its real purpose is as a validated key-value store (à la `struct` in C).

By dropping the 'I', code is more consistent and readable at the sacrifice missing that your type is implemented as an interface, but this caveat is not all too important for most TypeScript developers.

Broadly, a simple way to think about how prefixes in naming should work is thinking about how a piece of code is used rather than how it is implemented. No user cares whether the web app they do their taxes with is written in Java or Ruby or even Haskell, only that it works, and fast. By the same token, it probably does not keep an engineer up at night not knowing if the List interface they interact with is implemented as a linked-list or resizable array.

## When Using Prefixes

Drawing directly from the previous example, there is a reason that most languages<sup>1</sup> implement a list interface as a `List<T>` as opposed to a `IList<T>` because if they perform the same semantic purpose the underlying implementation is not all that important. A good time to use prefixes however, is in the opposite case: a semantic disagreement between two definitions with similar contents.

Take, for example, loading in data from a spreadsheet whose rows need to be displayed in a web table. The head of my original data could look like the following.

| product_id | price |
| ---------- | ----- |
| 1097B      | 40.25 |
| 1024D      | 35.00 |
| 1112A      | 28.00 |
| 1024D      | 35.00 |
| ...        | ...   |

To match this table schema I have defined an interface below and used it to display.

```typescript
interface Row {
  product_id: string
  price: number
}
```

This type definition is perfect for displaying the data directly from the spreadsheet, but what if we want to combine all duplicate entries and store quantity as a column? We define another interface to keep quantity associated with a product. The bigger question is what to call this new interface.

This is where prefix naming can be incredibly helpful: in situations where the computer cannot distinguish the meaning between two pieces of data. Let's shelve the table row example for the time being. The snippet below centers user scores around an average as part of a rating system.

```cpp
#include <iostream>

...

double averageScore = 3.36;
double uncenteredUserScore = 4.00;

double centeredUserScore = uncenteredUserScore - averageScore;

cout << centeredUserScore << endl; // 0.64
```

To the compiler this sequence of operations is assignment and subtraction, so our prefixes make no difference. Each value is a floating point, so prepending 'D' as a prefix (e.g. `DScore`) is distracting. Instead, prefixes are here to provide context to values which, when being later referenced, can make their misuse clear to any reader.

A statistical analogy is a great one. Statisticians work with calculus and linear algebra, but they are really in the business of forming conclusions from datasets through contextualization. In the same way, it is the programmer's job to provide the context a computer cannot understand. This is why semantic prefixes are so powerful for both debugging and readability.

Returning to the web table exercise from earlier, we can now use prefixes to create two versions of our type. The former type could be renamed to `rawRow` then a new one, containing any new fields necessary, could have the name `processedRow`. Having many named variables also assist in leaning into functional programming for easier debugging.

```typescript
interface rawRow {
  product_id: string
  price: number
}

interface processedRow extends rawRow {
  quantity: number
}

const processedRows: processedRow[] = rawDataFromSpreadsheet
  // Add new field for all data types
  .map(elem => ({ ...elem, quantity: 1 }))
  // Process duplicates into single entries with increased quantity
  .reduce(function (accumulator: processedRow[], cur: processedRow) {
    let found = accumulator.find(function (elem: processedRow) {
      return elem.product_id === cur.product_id
    })
    if (found) {
      found.quantity += cur.quantity
    } else {
      accumulator.push(cur)
    }
    return accumulator
  }, [])
```

Now, as long as we reference the correctly prefixed value when accessing this data, we should be able to put together a table similar to the following.

| product_id | price     | quantity |
| ---------- | --------- | -------- |
| 1097B      | 40.25     | 1        |
| **1024D**  | **35.00** | **2**    |
| 1112A      | 28.00     | 1        |
| ...        | ...       | ...      |

## In Practice

While I am of the belief that I made a strong case for not using type prefixes there is nothing more valuable in code readability than consistency. The team I work on uses 'I'-prefixes for interfaces within our TypeScript frontends. When developing its important to use conventions from your style guide. An abstract "best practice" is not valuable until consistent. With many projects, sticking with what engineers find comfortable will help teams moves fast. In some cases that calls for keeping the 'I'.

### Footnotes

1. Most languages with a notable exception of C#. The Microsoft .NET style guide popularized the idea of type prefixes. The popularity of 'hungarian' conventions led to programmers over-using it outside of its useful purposes
