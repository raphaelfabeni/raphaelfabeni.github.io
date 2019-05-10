---
layout: post
title:  "CSS level 4: matches selector"
description: "Based on a list of arguments, selecting elements easier."
type: Post
date: 2016-03-07
image: "https://cloud.githubusercontent.com/assets/1345662/13560552/4958f4e4-e3ff-11e5-8de4-20372d14ab0b.jpg"
alt: "A wooden box full of nuts"
lang: en
category: 'css'
permalink: 'css-matches/'
ref: 'css-seletor-matches'
---

CSS3 was already something really cool. Now, in version 4, or better saying, in *level 4*, as it will be divided from now, CSS has much more features. One of them is the `:matches` selector.

Using it, we could substitute something like that:

{% gist a7b5fc0e8c7d2f5edb983b791adef64d %}

For that:

{% gist eb85105186b637f39141eb60db5d6593 %}

In other words, we get every `highlight` class that are children of a `div` or `footer`.

We could even make the inverse way, as in the example below: we select all `p` elements that have the `success` class or that is `first-child`.

{% gist 5d1e3a873bec33562147be84f0eab917 %}