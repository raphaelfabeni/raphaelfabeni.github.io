---
layout: post
title: 'GitHub: Updating your fork'
description: 'Sync the fork of that cool project which you are contributing and avoid
  problems. '
type: Post
image: https://cloud.githubusercontent.com/assets/1345662/11458213/fff34934-96a2-11e5-9c4d-af162bc71a92.jpg
alt: Wooden table top view, full of tools
lang: en
category: git
permalink: updating-your-fork/
ref: fork-update

---
Contribute to _open-source_ projects is one of the coolest things in the development area. I also remember, that some years ago, the topic of one edition of FEMUG was exactly this: the contribution in open source projects.

It's common to be ashamed to contribute to some project, and one of the reasons for it is because you don't think you have something to contribute. And that's the point: you can start with anything: a simple revision of code or even a translation.

## The steps

As you get used to contributing, the process starts to be simple. But for a person who will contribute for the first time, some parts could be confusing.

A simple step by step could be something like that:

1. _Fork_ of the project to your Github user.
2. _Clone_ of the project _forked_ in your machine.
3. Your magic contribution.
4. Updating your project version with the original project.
5. Send your _commits_ to your GitHub.
6. Open a _pull request_ to the original project.

Believe it: doing is easier than writing. Step four was the most confusing for me. And that's why I decided to show you here.

## The _upstream_ guy

Let's suppose that we _forked_ the project _2017-is-awesome_ to our GitHub user account. So, at this moment, the _original project_ and your _fork_ are at the same point and equal.

So, we start to make many changes in our version of the project, and we commit them. Simultaneously, you realize that the original project merged a pull request. Now, the projects aren't equal: actually, they have a lot of differences.

* Your _local_ project has all your changes.
* The _original_ project has new changes from the pull request merged.

If you send your changes to GitHub and try to open a pull request, you will realize that it wouldn't be possible. To do that, we have updated our local project with the original; that's when the _upstream_ will help us.

Let's say you are contributing to my simple blog (the code is old!). We add a _remote_ based on the original version of the blog:

{% gist 98964a4188b35181e27c8efab7945b40 %}

After that, we have to update the _upstream_: `$ git fetch upstream`

With the _upstream_ updated, we have to `merge/rebase` our local version (supposing you're on the `master` branch):

{% gist 449b8a7a0ebc08dc28daabcc36ceae69 %}

Now, if you want to update your Github repository with your local repository before making your changes and commit them, we do:

{% gist 5665e29e6499b749b6e35c45a42ac479 %}

And that's it! Our local project is synchronized and updated with the original version, and if you send the changes to GitHub, the pull request will be enabled.