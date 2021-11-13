# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @tony_walker101/lotide`

**Require it:**

`const _ = require('@tony_walker101/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual(actualArray,  expectedArray)`: Takes in 2 arrays and returns "Passed" if they're equal and "Failed" if they're not.
* `assertEqual(actualFoo, expectedFoo)`: Takes in 2 values and returns "Passed" if they're equal and "Failed" if they're not.
* `assertObjectsEqual(actualObject, expectedObject)`: Takes in 2 objects and returns "Passed" if they're equal and "Failed" if they're not.
* `counterLetters(string)`: Takes in a sentence and returns a count of each letter in the sentence.
* `countOnly(allItems, itemsToCount)`: Takes in an array of items and returns a subset of those items.
* `eqArrays(actualArray, expectedArray)`: Takes in 2 arrays and returns "True" if they're equal and "False" if they're not.
* `eqObjects(actualObject, expectedObject)`: Takes in 2 objects and returns "True" if they're equal and "False" if they're not.
* `findKey(object, fn)`: Takes in an object and a function and returns the first key that matches the criteria of the function.
* `findKeyByValue(object, foo)`: Takes in an object and a value and returns the first key equal to that value.
* `flatten(array)`:  Takes in an array that contains nested arrays and returns a version of the array with no nests.
* `head(array)`: Takes in an array and returns the first element of the array.
* `letterPositions(string)`: Takes in a string and returns indices of letter positions in the string.
* `map(array, fn)`: Takes in an array and a function and returns a new array that matches the criteria of the function.
* `middle(array)`: Takes in an array and returns the middle most element(s) of the array.
* `tail(array)`: Takes in an array and returns everything except the first element of the array.
* `takeUntil(array, fn)`: Takes in an array and a function and returns a slice of the array based off the criteria of the function.
* `without(array, itemsToRemoveArray)`: Takes in 2 arrays and returns only the items not common between the two arrays.