---
layout: post
title:  "ES6: arrow functions in 5 minutes"
description: "Five minutes to understand how to use the arrow functions."
type: Post
date: 2016-01-12
image: "https://cloud.githubusercontent.com/assets/1345662/12060339/882c0d30-af54-11e5-9f10-79da8f4f1f50.jpg"
alt: "Way of a road covered with snow around"
lang: en
url_en: /arrow-functions/
url_br: /es6-arrow-functions/
---

The *arrow functions* at first might seem confusing (for me *(◕(◕)* ), but after a while, you can understand their shorter syntax and the magic of the scope of `this`.

## Multiple parameters

Without *arrow functions*. 

```js
var oldWay = function(name, nickname) {
  return 'My name is ' + nickname + ', ' + name;
};

console.log( oldWay('James Bond', 'Bond') );
// My name is Bond, James Bond
```

With *arrow functions*.

```js
let newWay = (name, nickname) => {
  return 'My name is ' + nickname + ', ' + name;
};

console.log( newWay('James Bond', 'Bond') );
// My name is Bond, James Bond
```

Or in a shorter way.

```js
let newWay2 = (name, nickname) => 'My name is ' + nickname + ', ' + name;

console.log( newWay2('James Bond', 'Bond') );
// My name is Bond, James Bond
```

## Only one parameter

Without *arrow functions*.

```js
var one = function(what) {
  return 'I ' + what + ' you';
};

console.log( one('hate') );
// I hate you
```

With *arrow functions*.

```js
var oneNew = what => 'I ' + what + ' you';

console.log( oneNew('hate') );
// I hate you
```

## Scope

Without *arrow functions*.

```js
var sandwich = {
  bread: 'integral',
  cheese: 'white',
  
  prepare: function() {
    return 'I want a sandwich with ' + this.bread + ' bread and ' + this.cheese + ' cheese';
  },
  
  make: function() {
    var that = this; // (◕︵◕)
    window.setTimeout( function () {
      console.log( that.prepare() );
    }, 100 );
  }
  
};

// sandwich.make();
// I want a sandwich with integral bread and white cheese
```

With *arrow functions*.

```js
let newSandwich = {
  bread: 'integral',
  cheese: 'white',
  
  prepare: function() {
    return 'I want a sandwich with ' + this.bread + ' bread and ' + this.cheese + ' cheese';
  },
  
  make: function() {
    window.setTimeout( () => console.log(this.prepare()), 100 );
  }
  
};

// newSandwich.make();
// I want a sandwich with integral bread and white cheese
```

## Example with `map`

Without *arrow functions*.

```js
var sample = [1, 2, 3, 4, 5];

var double = sample.map(function(item) {
  return item * 2;
});

// console.log(double);
// [2, 4, 6, 8, 10]
```

With *arrow functions*.

```js
let sample = [1, 2, 3, 4, 5];

let newDouble = sample.map(item => item * 2);

// console.log(newDouble);
// [2, 4, 6, 8, 10]
```

[Here](http://jsbin.com/nogobe/edit?js,console) you can find an JS Bin with the examples.

Do you like it? Did I write something stupid? Do you want to improve? Open an [issue](https://github.com/raphaelfabeni/raphaelfabeni.github.io/issues) mentioning the post and let's talk about it.
