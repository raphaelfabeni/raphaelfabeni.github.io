---
layout: post
title: Preventing user error
description: Anticipate a possible user error and make the experience better.
type: Post
image: "https://cloud.githubusercontent.com/assets/1345662/14289662/365c31fe-fb32-11e5-9da0-20ff8216417e.jpg"
alt: "Picture shows two feet of a person jumping in a puddle"
lang: en
url_en: /user-error-prevention/
url_br: /prevencao-erro-usuario/
---

<figure class="thumb-right loading">
    <img src="https://cloud.githubusercontent.com/assets/1345662/14282421/9b6c48c2-fb14-11e5-8823-08ce793e60e1.png" alt="Print Screen shows a prevention user error of Gmail, which alert the user if a word like 'anexo' (portuguese) is present in the body of email and there is any attachment file.">
</figure>

Even if you did not work with technology or digital projects, probably you could have heard about the *10 usability heuristics of Jakob Nielsen*. In summary, are 10 items for a usability evaluation of a website with the purpose to avoid common mistakes.

One of these, and really nice, is about to prevent *user errors*. Directly: it's great to show an alert or a message for the user about the error, but could be better if we could avoid these errors.

One that I remembered and which helped me several times is writing an email in *Gmail*. If we had the word *attachment* (in portuguese works with *anexo*) in the email body, and there is any attachment file, so Gmail shows an *alert* to user asking if he/she forgot to attach the file.

With this idea in mind, we could do a lot of cool things, mainly in forms.

## Going further

So, we talk primarily about *real time* actions, which users make an action and the system responds immediately, or to avoid the error or to guide the user on the right way.

But if we think in long-term, when we could have some registered users in our system, app or whatever. Can we not prevent them from possible actions to be made? *Ahn?! Man, what are you talking about?*

Let's go there. Nothing better than use an real world example that occurred with me last week. I use an app which you need to register some documents. When you do that, you must put a *expiration date* related to the document. However, I believe that has already happened to most people, to forget a possible due date or pay attention to it the next day.

In summary: the due date of one of my documents had expired and I did not realize that. So, one day I tried to start the app and I couldn't because a message showed for me that one of my documents was expired. So, in the same hour, I updated the document, because I had the new version, but I did not had uploaded in the app system. However I couldn't use the app because the app took some time to validate the document.

This can be just a crazy idea of my mind, because in fact, the error was mine, but I was extremely angry with the situation and the first thing that I thought was: *"the app could have warned me.."*.

Do you like it? Did I write something stupid? Do you want to improve? Open an [issue](https://github.com/raphaelfabeni/raphaelfabeni.github.io/issues) mentioning the post and let's talk about it.