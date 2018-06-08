---
layout: post
title:  Target a parent CSS class with Stylus
description: A simple trick to target a parent CSS class using Stylus until CSS has support for it
type: Post
image: https://user-images.githubusercontent.com/1345662/35200425-3f63285c-fef5-11e7-8b44-14f470d8f4ba.jpg
alt: A white boat in the sea.
lang: en
url_en: /targeting-parent-class-with-stylus/
category: 'css'
---

Something I don't like is a pre-concept about some technology before I try it. For a couple of months, I've been trying Stylus and I have to say I'm liking a lot. One type of CSS architecture I really like is BEM and these days I faced a simple problem that probably most of you resolved but as it was new for me I decided to post here.

## The scenario with BEM

Imagine there is a superclass `.fabeni` and it has a child element and a modificator class (if you want to know more about BEM, [I wrote some stuff some time ago](bem-css-overview/) ). Something like that:

```css
.fabeni {
	background-color: blue;
}

.fabeni__child-element {
	border: solid 1px blue;
}

.fabeni--inverse {
	background-color: green;
}
```

 Here's the thing: let's say we want to target the child element of the modificator class, something like:

```css
.fabeni--inverse .fabeni__child-element {
	border-color: green;
}
```

Using Stylus, I realized three different ways we could write it (probably there is more).

### Rewriting the parent class

I have to confess that I've already done that. It's ok! It's not so beautiful but it works.


```stylus
.fabeni
	background blue

	&__child-element
		border solid 1px blue

	&--inverse
		background-color green

		.fabeni__child-element
			border-color green
```


### Holding the main class in a variable

Using this preprocessor feature, easily we could reuse the class.

```stylus
myClass = 'fabeni'

.{myClass}
	background blue

	&__child-element
		border solid 1px blue

	&--inverse
		background-color green

		.{myClass}__child-element
			border-color green

```

### Targeting dynamically the parent class

And _booom_! It's possible to target the parent class using the magic `^[0]`.

```stylus
.fabeni
	background blue

	&__child-element
		border solid 1px blue

	&--inverse
		background-color green

		& ^[0]__child-element
	  		border-color green
```

I don't know exactly which Stylus' version supports it, but it's a good homework (I tested directly on the Stylus website).
