---
layout: post
title: BEM CSS
description: Block element and modifier. A simple overview about BEM CSS.
type: Post
date: 2015-12-02
image: https://cloud.githubusercontent.com/assets/1345662/11520648/792ca134-988c-11e5-8d8a-3e5eb70b2bd7.jpg
alt: White wall of a house with several windows with details in gray, and two of them
  in orange
lang: en
category: css
permalink: bem-css-overview/
ref: bem-css

---
CSS is easy to learn? Most would say that yes, mainly because of the facility and the possibility of quickly seeing what we are doing. However, of course, that exists negative points and, when we talk about them, one of the principal is related to maintenance/organization of CSS.

Open a file and writing CSS is very easy and quick; however, give maintenance, organize it, and scale it are not trivial things. As your project grows, you start to lose patience with CSS or _break windows_ get bigger and bigger. A good reading tip is an article (in pt-BR) [Scalable CSS](https://medium.com/@shankarcabus/css-escalavel-parte-1-41e7e863799e#.4hmtk7tuv) do [Shankar Cabus](https://twitter.com/shankarcabus?lang=pt).

## BEM CSS

Several alternatives/thoughts/methodologies attempt to correct and assist in organizing and structuring a CSS project. One is the **BEM** (_Block Element Modifier_), created by the **Yandex** guys, a Russian search site.

As can be noted, the basic idea is to have three things:

* _Block_ => like a component. The father.
* _Element_ => part (s) which form (s) a block;
* _Modifier_ => A possible status of the two previous items.

Huh?! Imagine a list of items with an active item, something more like this:

{% gist d0160a9ac2a44f687c16a936c4ce7794 %}

{% gist 0cff30a4a26cd400ff465c86f3326cf0 %}

Applying the _BEM_, we have something like this:

{% gist 891e8543949e0669cc81978e21942d13 %}

{% gist 64909d9f695c856d4483bb5b305afc4e %}

I need to admit that some time ago when I discovered the **BEM** methodology, I thought: _"This is so weird!"_. All those `__` and `--` were so strange. But now that I know more about the idea, I can say that it convinced me. Of course, like any other thoughts/methodologies, there are positive and negative points, and it is up to you, give the final word.

Only some topics that I realized using the **BEM** (but are my opinions):

* Easy _perception_ of things: looking quickly at the HTML markup or CSS, you can understand what each thing does.
* Easier reuse of _components_.