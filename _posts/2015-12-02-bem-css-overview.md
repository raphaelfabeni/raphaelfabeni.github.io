---
layout: post
title:  "BEM CSS"
description: "Block element and modifier. A simple overview about BEM CSS."
type: Post
date: 2015-12-02
image: "https://cloud.githubusercontent.com/assets/1345662/11520648/792ca134-988c-11e5-8d8a-3e5eb70b2bd7.jpg"
alt: "White wall of a house with several windows with details in gray, and two of them in orange"
lang: en
url_en: /bem-css-overview/
url_br: /bem-css/
category: 'css'
---

CSS is easy to learn? Most would say that yes, mainly because of the facility and the possibility to see quickly what we are doing. However, of course that exists the negative points and, when we talk about them, one of the principal is related to maintenance/organization of CSS.

Open a file and writing CSS is very easy and quick, however, give maintenance, organize it and scale it are not trivial things. As your project grows, the trend of you start to lose patience with CSS or *break windows* get bigger and bigger. A good reading tip is the article (in pt-br) [Scalable CSS](https://medium.com/@shankarcabus/css-escalavel-parte-1-41e7e863799e#.4hmtk7tuv) do [Shankar Cabus](https://twitter.com/shankarcabus?lang=pt).

## BEM css

There are several alternatives/thoughts/methodologies that attempt to correct and assist in this matter of how to organize and structure the CSS of a project. One is the **BEM** (*Block Element Modifier*), which was created by the **Yandex** guys, a Russian searches site.

As can be noted, the basic idea is to have three things:

* *Block* => like a component. The father.
* *Element* => part (s) which form (s) a block;
* *Modifier* => A possible status of the two previous items.

Huh?! Imagine a list of items with an active item, something more like this:

{% gist d0160a9ac2a44f687c16a936c4ce7794 %}

{% gist 0cff30a4a26cd400ff465c86f3326cf0 %}

Applying the *BEM*, we have something like this:

{% gist 891e8543949e0669cc81978e21942d13 %}

{% gist 64909d9f695c856d4483bb5b305afc4e %}

I need to admit that some time ago when I discovered the **BEM** methodology I thought: *"This is so weird!"*. All those `__` and `--` were so strange . But now, that I know more about the idea, I can say that convinced me. Of course, like any others thoughts/methodologies, there are positive and negative points and it is up to you, give the final word.

Only some topics that I realized using the **BEM** (but are just my opinions):

* Easy *perception* of things: looking quickly to the HTML markup or CSS, you can understand what each thing does.
* Easier reuse of *components*.
