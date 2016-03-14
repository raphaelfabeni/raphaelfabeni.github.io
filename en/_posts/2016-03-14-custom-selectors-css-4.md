---
layout: post
title:  "CSS level 4: custom selectors"
description: "Hold some selectors in a variable. Yes, it is possible."
type: Post
date: 2016-03-14
image: "https://cloud.githubusercontent.com/assets/1345662/13733793/fd6e4256-e975-11e5-8498-ff80c382917d.jpg"
alt: "Two dogs almost standing looking at the picture"
lang: en
url_en: /custom-selectors-css-4
url_br: /css-4-custom-selectors
---

The possibility to stock some values in variables was one of the main features among others, in my opinion, to the growth of the adoption of the pre-processor. What if we could store selectors? Yes, I will cry. ʘ‿ʘ

It is possible to do something like that:

{% highlight css %}
@custom-selector :--button button, .btn, input[type="submit"];

:--button {
  /* css magic */ 
}
{% endhighlight %}

What we did was store all the elements `button` and `input[type="submit"]` and also every element with with `btn` class in `:--button`. Then, we declare the style rules in `:--button`.

Based on this, we can play a bit more and do something like:

{% highlight css %}
@custom-selector :--enter :hover, :focus, .is-hover;
@custom-selector :--active :active, .is-active;

:--button:--enter {
  /* :hover, :focus and .is-hover styles */
}

:--button:--active {
  /* :active and .is-active styles */
}
{% endhighlight %}

What we did above was:

* Store the states `:hover`, `:focus` and all the elements with the class `is:hover` in `:--enter`.
* Store the states `:active` and all the elements with the class `.is-active` in `:--active`.
* We put everything together: everything in `:--button` with `:--enter` and `:--active`.

We could also get the same result using our friend [matches](/en/matches-selector-css-4/):

{% highlight css %}
:--button:matches(:hover, :focus, .is-hover) {
  /* :hover, :focus and .is-hover styles */
}

:--button:matches(:active, .is-active) {
  /* :active and .is-active styles */  
}
{% endhighlight %}

The difference, remembered by my friend [Rafael Rinaldi](https://twitter.com/rafaelrinaldi) is that our great `custom selectors` is a choice of *preset* compared with `matches`, which makes more easy to reuse.

<figure class="text-center loading">
  <p data-height="145" data-theme-id="4240" data-slug-hash="eZzjVw" data-default-tab="result" data-user="raphaelfabeni" class="codepen">See the Pen <a href="http://codepen.io/raphaelfabeni/pen/eZzjVw/">:not selector</a> by Raphael Fabeni (<a href="http://codepen.io/raphaelfabeni">@raphaelfabeni</a>) on <a href="http://codepen.io">CodePen</a>.</p>
</figure>

[Here](http://codepen.io/raphaelfabeni/pen/eZzjVw) the link with the example above.

Do you like it? Did I write something stupid? Do you want to improve? Open an [issue](https://github.com/raphaelfabeni/raphaelfabeni.github.io/issues) mentioning the post and let's talk about it.

<script async src="//assets.codepen.io/assets/embed/ei.js"></script>