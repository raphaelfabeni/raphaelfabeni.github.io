---
layout: post
title: 'ES6: destructuring assignment'
description: Taking data from a better and easier way.
type: Post
date: 2016-02-04
image: https://cloud.githubusercontent.com/assets/1345662/12071845/13d407d4-b0a9-11e5-8a14-95a3bac85cf1.jpg
alt: Foosball viewed from above with players in black and yellow.
lang: en
category: tech
permalink: destructuring-assignment/
ref: es6-destructuring-assignment

---
I met a great _destructuring assignment_ through my brother [Weslley Araujo](https://twitter.com/_weslleyaraujo), and I need to confess that I really liked it. It is nothing more than an expression that allows us to _get_ data from _objects_ or _arrays_ in a much simpler way.

For we get a property of an object, we could do something like that:

{% gist eb197d540533622a63ce90c26bd725bd %}

With the _new guy_, we could do something like that:

{% gist 7a17dc39fcc58c42fe407e343900dc82 %}

## With arrays

If we wanted to take the first item of an `array`, we could do something like:

{% gist 5d04833fa61c5e9bbbe1685f8e163ad5 %}

With the _fella_ _destructuring_, we could do:

{% gist 2271f2f884142224df2b1b040d9dbbc8 %}

It is still possible, play a bit more:

{% gist d5cd3bfec872d581a0e87d2836115649 %}

## Using when importing files

A very cool thing to use _destructuring assignment_ is when we need to import _things_ to our files. Imagine we have a generic file, as a _helpers_, something like that:

{% gist fea8d5b641ddfca3676a4c0dca5e1ddb %}

Nice! In other file, let's suppose that we need only these two functions, and not the entire file. So, let's go:

{% gist 009dda7f95d0ce2399613469cef4e117 %}

## Applying to `forEach`

We could use to in the famous `forEach`. So, if we have a data like that:

{% gist 5d3357bc4414754bc542dbb597535432 %}

With this data, normally we could do something like that:

{% gist 0f6bf72833c65ebc62c165c367cbf3ae %}

With the double of [arrow-functions](/es6-arrow-functions) and _destructuring_, we got some powers:

{% gist 2abae3213f2d8e50f263618f2276642c %}

## Creating objects

We could create objects in this way:

{% gist ca845aa1bf2787f1e938ba74bf4b8022 %}

But there is a new way much more fun. _◕‿◕_

{% gist 9bbee4b1a5352c57573b3bbb45118499 %}

[Here](http://jsbin.com/qejoyo/edit?js,console) you can find an JS Bin with the examples.
