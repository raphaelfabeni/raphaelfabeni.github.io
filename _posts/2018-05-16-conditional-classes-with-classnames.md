---
layout: post
title:  Conditional classes with classnames
description: 'The classnames package helps you to handle classes in your components.'
type: Post
image: 'https://user-images.githubusercontent.com/1345662/40094697-e29d52e2-589e-11e8-8d9b-25ab842482d4.jpg'
alt: 'An S-shaped road, inside a forest.'
lang: en
category: 'javascript'
permalink: 'conditional-classes-with-classnames/'
ref: 'classnames'
---

<style>
	pre {
  -moz-tab-size: 4;
  tab-size: 4;
}
</style>

I'm not a React expert but I've been working with the framework in the last few months and I have to say that [classnames](https://github.com/JedWatson/classnames) is something that helps you a lot.

Code is better than words. So, I used to do something like this

{% gist 893c216dbc22d16138c47da1040c52d6 %}

or...

{% gist 5c26a6fb658f04d229a97e26acc894e8 %}

It works... but thinking about the possibility of the number of CSS classes start to increase, this approach wouldn't be good enough. So, I found out this magic called _classnames_. 


{% gist 2b4953792611320f0a27e07acbe03225 %}