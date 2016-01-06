---
layout: post
title:  "ES6: function parameters with default values"
description: "You can now assign values to parameters if they are not passed. o/"
type: Post
date: 2016-01-06
image: "https://cloud.githubusercontent.com/assets/1345662/12068674/5c23b1b6-aff9-11e5-8118-2d1b6ddbab78.jpg"
alt: "A part of bed with some pillows and next to a small closet with an alarm clock on top."
lang: en
url_en: /es6-default-values-parameters
url_br: /es6-valores-padrao-parametros
---

We could pass some parameters in functions, right? Okay. With ES6 it is possible assign default values for them if they are not passed.

When we create a function, we could verify that the values were passed or not, and maybe assign a value to it; something like that.

{% highlight js %}
function oldHello(name) {
  var name = (!name) ? 'James Bond' : name;
  var nickname = (!nickname) ? 'James Bond' : nickname;
  
  console.log('My name is ' + nickname + ', ' + name);
}

oldHello();
// My name is Bond, James Bond
{% endhighlight %}

Now, we could do something like that:

{% highlight js %}
function hello(name = 'James Bond', nickname = 'Bond') {
  console.log('My name is ' + nickname + ', ' + name);
}

hello();
// My name is Bond, James Bond
{% endhighlight %}

[Here](http://jsbin.com/kofifu/edit?js,console) you can find an JS Bin with the examples.

Do you like it? Did I write something stupid? Do you want to improve? Open an [issue](https://github.com/raphaelfabeni/raphaelfabeni.github.io/issues) mentioning the post and let's talk about it.
