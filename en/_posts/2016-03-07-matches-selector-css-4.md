---
layout: post
title:  "CSS level 4: matches selector"
description: "Based on a list of arguments, selecting elements easier."
type: Post
date: 2016-03-07
image: "https://cloud.githubusercontent.com/assets/1345662/13560552/4958f4e4-e3ff-11e5-8de4-20372d14ab0b.jpg"
alt: "A wooden box full of nuts"
lang: en
url_en: /matches-selector-css-4/
url_br: /css-4-seletor-matches/
---

CSS3 was already something really cool. Now, in version 4, or better saying, in *level 4*, as it will be divided from now, CSS has much more features. One of them is the `:matches` selector.

Using it, we could substitute something like that:

{% highlight css %}
div .highlight,
footer .highlight {
  color: blue;
}
{% endhighlight %}

For that:

{% highlight css %}
:matches(div, footer) .highlight {
  color: blue;
}
{% endhighlight %}

In other words, we get every `highlight` class that are children of a `div` or `footer`.

We could even make the inverse way, as in the example below: we select all `p` elements that have the `success` class or that is `first-child`.

{% highlight css %}
p:matches(:first-child, .success) {
  color: green;
}
{% endhighlight %}

<figure class="text-center loading">
  <p data-height="400" data-theme-id="4240" data-slug-hash="LNGZYx" data-default-tab="result" data-user="raphaelfabeni" class="codepen">See the Pen <a href="http://codepen.io/raphaelfabeni/pen/LNGZYx/">:matches selector</a> by Raphael Fabeni (<a href="http://codepen.io/raphaelfabeni">@raphaelfabeni</a>) on <a href="http://codepen.io">CodePen</a>.</p>
</figure>

[Here](http://codepen.io/raphaelfabeni/pen/LNGZYx/) the link with the example above.

Do you like it? Did I write something stupid? Do you want to improve? Open an [issue](https://github.com/raphaelfabeni/raphaelfabeni.github.io/issues) mentioning the post and let's talk about it.

<script async src="//assets.codepen.io/assets/embed/ei.js"></script>