---
layout: post
title: CSS Scroll Snap Points
description: It's not witchcraft, it's CSS scroll snap points
type: Post
date: 2015-10-16
image: https://cloud.githubusercontent.com/assets/1345662/10500869/3f0ee854-72b2-11e5-94c4-04db468e18ce.jpg
alt: Image of a sidewalk and coconut tree in the background behind a grid
lang: en
category: css
permalink: css-scroll-snap/
ref: css-scroll-snap-points

---
Scrolling effects always have been more related to touch devices. However, lately, many projects have used this feature,

The solution to apply this effect was like a jQuery plugin or something similar. The basic idea was to divide the content into different areas that the user could _scroll_ into them or _click_ in some button the page was responsible make the _scroll_ automatic.

So, the CSS guy says: "Take it, easy boys! I'm coming with good news, and we could do it only with CSS.

## CSS Scroll Snap

Basically, we can control the behavior of content inside a _scroll container_ setting snaps in the x and y-axis. With these _snaps_, the _wrapper_ will jump to each of these snaps after the user has made the _scroll_ action. It's something like: _when the user once, go to this snap! After going to the next snap.. and goes on..._

## Stop talking...

Let's write a little bit and check this beautiful thing. First, I'll need to alert you that the [support according to Can I Use](http://caniuse.com/#feat=css-snappoints) is not so good, so I recommend Firefox.

Basically, what we are going to do is: create a wrapper element that will hold the content, and we set some properties like `overflow`, `width` e `height`. The magic happens here:

* `scroll-snap-type` => here, we set that we will use the _snap points_.
* `scroll-snap-points-x` or `scroll-snap-points-y` => here, we set the _snap points_ on the x or y-axis.
* `repeat(value)` => we set this for the last property above to repeat the _snap points_ in each _value_.

So, with that, we can create some stuffs like that:

<p data-height="483" data-theme-id="4240" data-slug-hash="zvEdRy" data-default-tab="result" data-user="raphaelfabeni" class='codepen'>See the Pen <a href='http://codepen.io/raphaelfabeni/pen/zvEdRy/'>CSS Snap Points</a> by Raphael Fabeni (<a href='http://codepen.io/raphaelfabeni'>@raphaelfabeni</a>) on <a href='http://codepen.io'>CodePen</a>.</p>

<p data-height="434" data-theme-id="4240" data-slug-hash="RWLZBa" data-default-tab="result" data-user="raphaelfabeni" class='codepen'>See the Pen <a href='http://codepen.io/raphaelfabeni/pen/RWLZBa/'>CSS Snap Points</a> by Raphael Fabeni (<a href='http://codepen.io/raphaelfabeni'>@raphaelfabeni</a>) on <a href='http://codepen.io'>CodePen</a>.</p>

Some references and links:

* [Sergey Gospodarets - Native CSS Scrol Snap](http://blog.gospodarets.com/css-scroll-snap/)
* [treehouse -Thinking Ahead: CSS Scroll Snap Points](http://blog.teamtreehouse.com/css-scroll-snap-points)

<script async src="//assets.codepen.io/assets/embed/ei.js"></script>