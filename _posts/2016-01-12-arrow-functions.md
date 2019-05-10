---
layout: post
title:  "ES6: arrow functions in 5 minutes"
description: "Five minutes to understand how to use the arrow functions."
type: Post
date: 2016-01-12
image: "https://cloud.githubusercontent.com/assets/1345662/12060339/882c0d30-af54-11e5-9f10-79da8f4f1f50.jpg"
alt: "Way of a road covered with snow around"
lang: en
category: 'javascript'
permalink: 'arrow-functions/'
ref: 'es6-arrow-functions'
---

The *arrow functions* at first might seem confusing (for me *(◕(◕)* ), but after a while, you can understand their shorter syntax and the magic of the scope of `this`.

## Multiple parameters

Without *arrow functions*. 

{% gist 626c4a6b56ad2b62cbe4e0a7fe40716a %}

With *arrow functions*.

{% gist 844f96371b682d794e1ca80dd21c7a21 %}

Or in a shorter way.

{% gist 8f4db1cf3552cc6dbcb21ebb066ce8db %}

## Only one parameter

Without *arrow functions*.

{% gist a7c3c0afabebd5d052145e7ff9041261 %}

With *arrow functions*.

{% gist 44471c6936134258786e1c49ae70293a %}

## Scope

Without *arrow functions*.

{% gist c7428936b07a20bdee21b06246c98277 %}

With *arrow functions*.

{% gist 135be9697afeda35c0fe965dd557cb14 %}

## Example with `map`

Without *arrow functions*.

{% gist 5d019f714f6bd025cc9a5b3764f659b7 %}

With *arrow functions*.

{% gist 0e54e7876eebb048034d0c40d16a61f8 %}

[Here](http://jsbin.com/nogobe/edit?js,console) you can find an JS Bin with the examples.