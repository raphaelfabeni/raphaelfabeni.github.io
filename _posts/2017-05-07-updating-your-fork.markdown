---
layout: post
title:  "GitHub: Updating your fork"
description: "Sync the fork of that cool project which you are contributing and avoid problems. "
type: Post
image: 'https://cloud.githubusercontent.com/assets/1345662/11458213/fff34934-96a2-11e5-9c4d-af162bc71a92.jpg'
alt: 'Wooden table top view, full of tools'
lang: en
url_en: /updating-your-fork/
url_br: /atualizando-seu-fork/
category: 'git'
---

Contribute in *open source* projects is one of the coolest things in development area. I also remember, that some years ago, the topic of one edition of FEMUG was exactly this: the contribution in open source projects.

It's common to be ashamed to contribute with some project, and one of the reasons for it is because you don't think you have something to contribute. And that's the point: you can start with anything: a simple revision of code or even a translation.

## The process

As you get used to contribute, the process becomes automatic. But for a person who is going to contribute for the first time, some parts could be confusing.

A simple step by step could be something like that:

1. *Fork* of the project to your Github user.
2. *Clone* of the project *forked* in your machine.
3. Your magic contribution.
4. Updating of your project version with the original project.
5. Send your *commits* to your GitHub.
6. Open a *pull request* to the original project.

Believe it: doing is easier than writing. The step four was the most confuse for me. And that's why I decided to show here.

## The *upstram* guy

Let's suppose that we *foked* the project *2017-is-awesome* to our GitHub user account. So, at this moment, the *original project* and your *fork* are at the same point and equal.

So, we start to make a lot of changes in our version of the project and we commit them. Simultaneously, you realize that the original project merged a pull request. Now, the projects aren't equal: actually they have a lot of diferences.

* Your *local* project has all your changes.
* The *original* project has new changes from the pull request merged.

If you send your changes to GitHub and try to open a pull request, you are going to realize that it wouldn't be possible. For do that, we have update our local project with the original; and that's when the *upstream* will help us.

Let's say you are contributing with my simple blog (the code is really old!). We add a *remote* based on the original version of the blog:

{% gist 98964a4188b35181e27c8efab7945b40 %}

After that, we have to update the *upstream*: `$ git fetch upstream`

With the *upstream* updated, we have to `merge/rebase` our local version (supposing you're on the `master` branch):

{% gist 449b8a7a0ebc08dc28daabcc36ceae69 %}

Now if you want to update your Github repository with your local repository before making your changes and commit them, we do:

{% gist 5665e29e6499b749b6e35c45a42ac479 %}

And that's it! Now our local project is sync and updated with the original version, and if you send the changes to GitHub, the pull request will be enabled.
