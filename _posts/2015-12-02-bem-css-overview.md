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

```html
<ul class="list">
  <li class="list-item active"></li>
  <li class="list-item"></li>
  <li class="list-item"></li>
</ul>
```

```css
.list {}
.list-item {}
.list-item.active {}
```

Applying the *BEM*, we have something like this:

```html
<ul class="list">
  <li class="list__item"></li>
  <li class="list__item"></li>
  <li class="list__item list__item--active"></li>
</ul>
```

```css
.list {}
  .list__item {}
  .list__item--active {}
```

I need to admit that some time ago when I discovered the **BEM** methodology I thought: *"This is so weird!"*. All those `__` and `--` were so strange . But now, that I know more about the idea, I can say that convinced me. Of course, like any others thoughts/methodologies, there are positive and negative points and it is up to you, give the final word.

Only some topics that I realized using the **BEM** (but are just my opinions):

* Easy *perception* of things: looking quickly to the HTML markup or CSS, you can understand what each thing does.
* Easier reuse *components*.

Do you like it? Did I write something stupid? Do you want to improve? Open an [issue](https://github.com/raphaelfabeni/raphaelfabeni.github.io/issues) mentioning the post and let's talk about it.
