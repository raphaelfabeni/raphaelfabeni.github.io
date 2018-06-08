---
layout: post
title:  "The end of clearfix"
description: "A new way to stop using the clearfix for grids and layouts."
type: Post
image: 'https://user-images.githubusercontent.com/1345662/32815391-00071d56-c99b-11e7-9a91-898127f9ac8d.jpg'
alt: 'Image showing a jellyfish in a blue sea.'
lang: en
url_en: /the-end-of-clearfix/
category: 'css'
---

Today we have a lot of different options to make grids system and complex interfaces. _Flexbox_ and _grid layouts_ are good examples of them. But, and before that, when we didn't have so many options unless the magnificent `float`.

I see a lot of people complaining about `float` but they usually forget it saved our life a lot of times, mainly for grid systems. For me, the main problem about `float` is about the container element lose the height. And to fix that we have some _alternative solutions_.

One of them is to use `overflow: hidden` on the container element and magically it recovers the height. But, on the other hand, if you have some specific design to do, it could be hard as we just hid everything that overflow the container.

Other alternative is the famous `clearfix` solution: basically a simple technique that uses the `:after` pseudoelement to _clear_ the `float` flow. Something like:

```css
.container-with-float-elements:after {
  content: '';
  display: table;
  clear: both;
}
```

## The new float solution

```css
.container-with-float-elements {
  display: flow-root;
}
```

This is awesome! And according to docs:_It always establishes a new block formatting context for its contents._ [The support is not so good yet](https://caniuse.com/#feat=flow-root), but we can test/use in some browsers already.
