---
layout: post
title:  Conditional classes with classnames
description: ""
type: Post
image: ''
alt: ''
lang: en
url_en: /conditional-classes-with-classnames/
---

I'm not a React expert but I've been working with the framework in the last few months and I have to say that [classnames](https://github.com/JedWatson/classnames) is something that helps you a lot.

Code is better than words. So, I used to do something like this

```jsx
const MyComponent = ({ condition }) => (
	<div className={`myClass ${condition ? 'is-active' : ''}`}></div>
)
```

or...

```jsx
const MyComponent = ({ condition }) => {
	const myComponentClass = condition ? 'is-active' : '';
	return (
		<div className={`myClass ${myComponentClass}`}></div>
	)
}
```

It works! But for me, there was something it could be better and easier when the CSS classes' number starting to increase. Then, I found out this magic called _classnames_.


```jsx
import classnames from 'classnames';

const MyComponent = ({ condition, anotherCondition }) => {

	const myComponentClasses = classNames({
		'myClass': true,
		'is-active': condition,
		'has-icon': anotherCondition
	});

	return (
		<div className={myComponentClasses}></div>
	)
}
```
