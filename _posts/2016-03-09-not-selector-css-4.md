---
layout: post
title:  "CSS level 4: not selector"
description: "The CSS3 version stronger!"
type: Post
date: 2016-03-09
image: "https://cloud.githubusercontent.com/assets/1345662/13589836/ccd512d4-e4b9-11e5-8f57-505c86b526ea.jpg"
alt: "Several pieces of wood stacked"
lang: en
category: 'css'
permalink: 'css-not/'
ref: 'css-not'
---

In CSS3 it was possible *exclude* an element of a selection. Something like that:

{% gist 5dfe772b22f356e3c714e0867baf6712 %}

In the example above, we get all the `p` element except those which have the `highlight` class. It's so nice, right? But if we wanted apply one more *filter* in the negation? It's not possible. So, CSS level 4 give us this power.

{% gist 666bae2a168154d4ce42d1e75f9318c6 %}

In the example above, we can select all `p` elements excluding those which are `:first-child`, `:last-of-type` or that have the `highlight` class.

<figure class="text-center loading">
  <p data-height="345" data-theme-id="4240" data-slug-hash="grPBGm" data-default-tab="result" data-user="raphaelfabeni" class="codepen">See the Pen <a href="http://codepen.io/raphaelfabeni/pen/grPBGm/">:not selector</a> by Raphael Fabeni (<a href="http://codepen.io/raphaelfabeni">@raphaelfabeni</a>) on <a href="http://codepen.io">CodePen</a>.</p>
</figure>

[Here](http://codepen.io/raphaelfabeni/pen/grPBGm) the link with the example above.

<script async src="//assets.codepen.io/assets/embed/ei.js"></script>
