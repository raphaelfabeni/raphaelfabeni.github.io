---
layout: post
title:  "ES6: destructuring assignment"
description: "Taking data from a better and easier way."
type: Post
date: 2016-02-04
image: "https://cloud.githubusercontent.com/assets/1345662/12071845/13d407d4-b0a9-11e5-8a14-95a3bac85cf1.jpg"
alt: "Foosball viewed from above with players in black and yellow."
lang: en
url_en: /destructuring-assignment-es6
url_br: /es6-destructuring-assignment
---

I met great *destructuring assignment* through my brother [Weslley Araujo](https://twitter.com/_weslleyaraujo), and I need to confess that I really liked. It is nothing more than an expression that allows us to *get* data from *objects* or *arrays* of a much simpler way.

For we get a property of an object, we could do something like that:

{% highlight js %}
var movieStar = {
  name: 'James Bond',
  nickname: 'Bond',
  profession: 'Federal Agent'
};

console.log(movieStar.name);
// James Bond
{% endhighlight %}

With the *new guy*, we could do something like that:

{% highlight js %}
var movieStar = {
  name: 'James Bond',
  nickname: 'Bond',
  profession: 'Federal Agent'
};

let { name, profession } = movieStar;

console.log(name, profession);

// James Bond
// Federal Agent
{% endhighlight %}

##  With arrays

If we wanted to take the first item of an `array`, we could do something like:

{% highlight js %}
var mortalKombat = ['Scorpion', 'Liu Kang', 'Sub Zero', 'Johnny Cage'];

console.log(mortalKombat[0]);
// Scorpion
{% endhighlight %}

With the *fella* *destructuring*, we could do:

{% highlight js %}
let mortalKombat = ['Scorpion', 'Liu Kang', 'Sub Zero', 'Johnny Cage'];

let [user1, user2] = mortalKombat;

console.log(user1, user2);
// Scorpion
// Liu Kang
{% endhighlight %}

It is still possible, play a bit more:

{% highlight js %}
let mortalKombat = ['Scorpion', 'Liu Kang', 'Sub Zero', 'Johnny Cage'];

let [userA, , userB] = mortalKombat;
let [user, ...users] = mortalKombat;

console.log(userA, userB);
// Scorpion
// Sub Zero

console.log(user, users);
// Scorpion
// ['Liu Kang', 'Sub Zero', 'Johnny Cage']
{% endhighlight %}

## Using when importing files

A very cool thing to use *destructuring assignment* is when we need to import *things* to our files. Imagine we have a generic file, as a *helpers*, something like that:

{% highlight js %}
// helpers.js
export function getNext(arr) {
  return (arr.length);
};

export function makeMoney() {
  ...
};
...
{% endhighlight %}

Nice! In other file, let's suppose that we need only these two functions, and not the entire file. So, let's go:

{% highlight js %}
import { getNext, makeMoney } from '../helpers';

// Now we have access to both function in our file
// getNext([1, 2, 3]);
// makeMoney();
{% endhighlight %}

## Applying to `forEach`

We could use to in the famous `forEach`. So, if we have a data like that:

{% highlight js %}
var movieStars = [
  {
    name: 'James Bond',
    nickname: 'Bond',
    profession: 'Federal Agent'
  },
  {
    name: 'Dominic Toretto',
    nickname: 'Toretto',
    profession: 'Driver'
  },
  {
    name: 'John Rambo',
    nickname: 'Rambo',
    profession: 'Killer'
  }
];
{% endhighlight %}

With this data, normally we could do something like that:

{% highlight js %}
movieStars.forEach(function(star) {
  console.log(star.nickname);
});

// Bond
// Toreto
// Rambo
{% endhighlight %}

With the double of [arrow-functions](/es6-arrow-functions) and *destructuring*, we got some powers:

{% highlight js %}
movieStars.forEach( ({nickname}) => console.log(nickname) );

// Bond
// Toreto
// Rambo
{% endhighlight %}

## Creating objects

We could create objects in this way:

{% highlight js %}
let username = 'Raphael Fabeni';
let nickname = 'Fabeni';

var oldGuy =  {
  username: username,
  nickname: nickname
};

console.log(oldGuy);
// {
//   nickname: "Fabeni",
//   username: "Raphael Fabeni"
// }
{% endhighlight %}

But there is a new way much more fun. *◕‿◕*

{% highlight js %}
let username = 'Raphael Fabeni';
let nickname = 'Fabeni';

let newGuy = { username, nickname };

console.log(newGuy);
// {
//   nickname: "Fabeni",
//   username: "Raphael Fabeni"
// }
{% endhighlight %}

[Here](http://jsbin.com/qejoyo/edit?js,console) you can find an JS Bin with the examples.

Do you like it? Did I write something stupid? Do you want to improve? Open an [issue](https://github.com/raphaelfabeni/raphaelfabeni.github.io/issues) mentioning the post and let's talk about it.
