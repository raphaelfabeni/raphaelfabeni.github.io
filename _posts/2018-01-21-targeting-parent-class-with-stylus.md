---
layout: post
title: Target a parent CSS class with Stylus
description: A simple trick to target a parent CSS class using Stylus until CSS has
  support for it
type: Post
image: https://user-images.githubusercontent.com/1345662/35200425-3f63285c-fef5-11e7-8b44-14f470d8f4ba.jpg
alt: A white boat in the sea.
lang: en
category: css
permalink: targeting-parent-class-with-stylus/
ref: parent-class-stylus

---
Something I don't like is a pre-concept about some technology before I try it. I've been trying Stylus for a couple of months, and I have to say I liked it a lot. One type of CSS architecture I really like is BEM, and these days, I faced a simple problem that probably most of you were able to solve, but as it was new for me, I decided to post here.

## The scenario with BEM

Imagine there is a superclass `.fabeni`. It has a child element and a modificator class (if you want to know more about BEM, [I wrote some stuff some time ago](bem-css-overview/) ). Something like that:

{% gist 825928e16238207cdd3518ae09abd009 %}

Here's the thing: let's say we want to target the child element of the modificator class, something like:

{% gist 0ee8688543375828e43127e1ae0034f8 %}

Using Stylus, I realized three different ways we could write it (probably there is more).

### Rewriting the parent class

I have to confess that I've already done that. It's ok! It's not so beautiful, but it works.

{% gist 3845caad6009514cd748a2f7d271dff7 %}

### Holding the main class in a variable

Using this preprocessor feature, we could easily reuse the class.

{% gist b236e216a8ea80afe68f240e053be3e2 %}

### Targeting the parent class dynamically

And _boom_! It's possible to target the parent class using magic. `^[0]`.

{% gist 55163c8dac19ea0ead80f6cf1397925f %}

I don't know exactly which Stylus version supports it, but it's good homework (I tested directly on the Stylus website).