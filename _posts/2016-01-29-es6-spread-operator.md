---
layout: post
title: 'ES6: spread operator'
description: Expand the data from an array smiling! o/
type: Post
date: 2016-01-29
image: https://cloud.githubusercontent.com/assets/1345662/12072840/6360f8ae-b0de-11e5-8584-b748798c95c3.jpg
alt: Colorful fireworks in a dark sky
lang: en
category: tech
permalink: spread-operator/
ref: es6-spread-operator

---
The _spread_ guy allows us to extract/expand data from an array make our lives easier. Confused? I guess I could not explain. Go to practice. Imagine the following arrays:

{% gist 4b303e0c106e0e66fceefad0ec9535b2 %}

If we had to add the new _fighters_ to the main _array_, we could try something like that:

{% gist f72ade99d07e090e372ba1da797463c1 %}

The data is there, but not in the way that we want. So we need to manipulate it before:

{% gist 8b1589c552ebc70f6f7cbc0365027353 %}

The operator _spread_ arrives making magic and leaving everything beautiful.

{% gist c08fba8139fa4a17f781084e16f80959 %}

[Here](http://jsbin.com/cubiko/edit?js,console) you can find a JS Bin with the examples.
