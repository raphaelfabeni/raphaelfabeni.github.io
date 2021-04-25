---
layout: post
title: The end of clearfix
description: A new way to stop using the clearfix for grids and layouts.
type: Post
image: https://user-images.githubusercontent.com/1345662/32815391-00071d56-c99b-11e7-9a91-898127f9ac8d.jpg
alt: Image showing a jellyfish in a blue sea.
lang: en
category: tech
permalink: the-end-of-clearfix/
ref: end-clearfix

---
Today we have a lot of different options to make grids systems and complex interfaces. _Flexbox_ and _grid layouts_ are good examples of them. But, and before that, when we didn't have so many options unless the magnificent. `float`?

I see a lot of people complaining about `float` But they usually forget that it saved our life a lot of times, mainly for grid systems. For me, the main problem is that the container element loses height. And to fix that, we have some _alternative solutions_.

One of them is to use `overflow: hidden` on the container element, and magically it recovers the height. On the other hand, if you have some specific design to do, it could be hard because it will just hide everything that overflows the container.

Another alternative is a simple technique that uses the pseudoelement to _clear_ the flow. Something like:

{% gist ae6c80efdaa34827bf055c1fd4f00aec %}

## The new float solution

{% gist 786077683955be9793a5288b4ae43469 %}

This is awesome! And according to docs, _it always establishes a new block formatting context for its contents._ [The support is not so good yet](https://caniuse.com/#feat=flow-root), but we can test/use it in some browsers already.
