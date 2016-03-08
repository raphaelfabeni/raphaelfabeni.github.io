---
layout: post
title:  "ES6: spread operator"
description: "Expand the data from an array smiling! o/"
type: Post
date: 2016-01-29
image: "https://cloud.githubusercontent.com/assets/1345662/12072840/6360f8ae-b0de-11e5-8584-b748798c95c3.jpg"
alt: "Colorful fireworks in a dark sky"
lang: en
url_en: /es6-spread-operator
url_br: /es6-spread-operator
---

The *spread* guy allow us extract/expand data from an array make our lifes easier. Confused? I guess I could not explain. Go to practice. Imagine the following arrays:

{% highlight js %}
let mortalKombat = ['Scorpion', 'Sub Zero', 'Liu Kang'];
let newCharacters = ['Reptile', 'Kitana'];
{% endhighlight %}

If we had to add the new *fighters* to the main *array*, we could try something like that:

{% highlight js %}
mortalKombat.push(newCharacters);

console.log(mortalKombat);
// ['Scorpion', 'Sub Zero', 'Liu Kang', ['Reptile', 'Kitana']]
{% endhighlight %}

The data is there, but not in the way that we want. So we need to manipulate it before:

{% highlight js %}
newCharacters.forEach(function(fighter) {
  mortalKombat.push(fighter);
});

console.log(mortalKombat);
// ['Scorpion', 'Sub Zero', 'Liu Kang', 'Reptile', 'Kitana']
{% endhighlight %}

The operator *spread* arrives making magic and leaving everything beautiful.

{% highlight js %}
mortalKombat.push(...newCharacters);

console.log(mortalKombat);
// ['Scorpion', 'Sub Zero', 'Liu Kang', 'Reptile', 'Kitana']
{% endhighlight %}

[Here](http://jsbin.com/cubiko/edit?js,console) you can find an JS Bin with the examples.

Do you like it? Did I write something stupid? Do you want to improve? Open an [issue](https://github.com/raphaelfabeni/raphaelfabeni.github.io/issues) mentioning the post and let's talk about it.
