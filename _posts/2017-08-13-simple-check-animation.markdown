---
layout: post
title:  "CSS check animation"
description: "A simple check animation using only CSS."
type: Post
image: 'https://user-images.githubusercontent.com/1345662/29245728-fa2e38a4-7fb9-11e7-9581-655628e53093.jpg'
alt: 'Photograph of View of J. Edgar Hoover FBI Building from National Archives Roof'
lang: en
url: /simple-check-animation/
---

Some time ago, I presented a talk at FrontinSampa about tips of CSS and one of the topics was about a check animation that I tried to do using only CSS.

I tried in different ways and it's funny because when you're developing and animating in CSS you need to think like CSS even doing that be something really strange.

So, the first thing was to draw the check: the basic idea was to create a rectangle w/ borders and remove two of them making like a letter L. After that we only use the `rotate` and we have the check.

So, now it's the fun part: how to make the animation? The first thing that I thought was how to animate the borders? So, after a while, I realized that I should think different. Basically, I've drawn a rectangle, so I had to animate the shape: `width` and `height`.

The animation is simple and only animates these two properties plus the `opacity` to make it cooler. To finish, we just change the `origin` of `transform` to let the check centralized during the animation.

<iframe height='500' scrolling='no' title='Check animation' src='//codepen.io/raphaelfabeni/embed/vJxKZM/?height=428&theme-id=4240&default-tab=css,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>
</iframe>
