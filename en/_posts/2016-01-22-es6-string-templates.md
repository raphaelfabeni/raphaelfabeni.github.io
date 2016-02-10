---
layout: post
title:  "ES6: string templates"
description: "Stop to concatenate. String templates for our happiness"
type: Post
date: 2016-01-22
image: "https://cloud.githubusercontent.com/assets/1345662/12072297/319f5c76-b0bf-11e5-94c3-838746ffca56.jpg"
alt: "Photo shows four newspaper boxes, probably Americans in residential neighborhood"
lang: en
url_en: /es6-string-templates
url_br: /es6-string-templates
---

Play with *strings* can often be something a little bit painful (you can also read boring *இ_இ*). This is due mainly to the fact of having to concatenate words/phrases with variables.

{% highlight js %}
let author = 'Tiririca';
let word = 'Worse';

let oldMessage = word + ' than it is, it is impossible. - ' + author;

console.log(oldMessage);
// Worse than it is, it is impossible. - Tiririca
{% endhighlight %}

*Strings templates* for our [happiness](https://youtu.be/K02Cxo3fAC8?t=1m30s).

{% highlight js %}
let author = 'Tiririca';
let word = 'Worse';

let message = `${word} than it is, it is impossible. - ${author}`;

console.log(message);
// Worse than it is, it is impossible. - Tiririca
{% endhighlight %}

My friend [Rafael Rinaldi](https://twitter.com/rafaelrinaldi) made a good point: you can use any kind of expression, not just variables.

{% highlight js %}
const obj = {
  foo: 'bar'
};

const fn = foo => foo;

console.log( `${obj.foo}` );
// bar

console.log( `${fn('aloha')}` );
// aloha
{% endhighlight %}

[Here](http://jsbin.com/qovino/edit?js,console) you can find an JS Bin with the examples.

Do you like it? Did I write something stupid? Do you want to improve? Open an [issue](https://github.com/raphaelfabeni/raphaelfabeni.github.io/issues) mentioning the post and let's talk about it.
