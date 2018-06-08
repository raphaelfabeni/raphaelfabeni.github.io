---
layout: post
title:  "Git: Editing your commits with rebase - part 2/2"
description: "With the interactive rebase, we could edit commits in the same branch: it's possible merge them or change the order and message."
type: Post
image: 'https://cloud.githubusercontent.com/assets/1345662/11458149/a4fe99da-96a1-11e5-8d30-0f4938603dcc.jpg'
alt: 'Two elderly gentlemen playing golf at a country club'
lang: en
url_en: /git-editing-commits-part-2/
url_br: /git-alterando-commits-parte-2/
category: 'git'
---

In the [previous post](/en/git-editing-commits-part-1/), we have seen two of the things that are possible to do with interactive `rebase`:

* change the _commits_ order
* edit the _commits_ message

In this post, we're going to see how to merge two commits and also how to divide a commit in two.

## Remembering

I strongly recommend you read the previous post, to get used to the `rebase` flow. So, we run again the command:

```bash
git rebase -i HEAD~3
```

And then, we see a screen like that:

```bash
pick 9afe987 CSS and JS adjusments in slideshow.
pick 74e6f3e More CSS adjustments in slideshow.
pick 1ee9572 Updates README with JS dependencies.

# Rebase 5644bdd..1ee9572 onto 5644bdd
#
# Commands:
#  p, pick = use commit
#  r, reword = use commit, but edit the commit message
#  e, edit = use commit, but stop for amending
#  s, squash = use commit, but meld into previous commit
#  f, fixup = like "squash", but discard this commit's log message
#  x, exec = run command (the rest of the line) using shell
```

So far, nothing new. Let's move on...

## Merging _commits_

Let's merge the _commits_ related to CSS and JS adjustments, which probably are similar (they even could edit the same code) and perhaps it makes sense if they were only one commit.

To do that, we type `squash` in a _commit_. Doing that, `git` understand we want to merge this marked _commit_  with the previous one (above).

```bash
pick 9afe987 CSS and JS adjusments in slideshow.
squash 74e6f3e More CSS adjustments in slideshow.
pick 1ee9572 Updates README with JS dependencies.
```

After that, we see a screen that shoes both _commits_ messages:

```bash
# This is a combination of 2 commits.
# The first commit's message is:

CSS and JS adjusments in slideshow.

# This is the 2nd commit message:

More CSS adjustments in slideshow.

# Please enter the commit message for your changes. Lines starting
# with '#' will be ignored, and an empty message aborts the commit.
#
# Date:      Fri Dec 26 15:48:51 2014 -0200
#
# rebase in progress; onto 5644bdd
# You are currently editing a commit while rebasing branch 'develop' on '5644bdd'.
#
# Changes to be committed:
#       modified:   dev/js/slideshow.js
#       modified:   dev/css/style.css
```

Now we just have to remove or comment the lines with the _commits_ messages and insert the new message:

```bash
CSS and JS adjusments in slideshow.
```

And... done! Now if we run a *log* of the commits, we will see something similar to:

```bash
1ee9572 Updates README with JS dependencies.
f2feda9 CSS and JS adjusments in slideshow.
```

## Splitting a *commit*

As we're crazy, now we want to revert the previous process and spit the _commit_ that was merged. Jokes apart, we can do it, for example, in a commit that with a lot of changes and perhaps we could split it to make the git commit story better to understand. So we run the `rebase`:

```bash
git rebase -i HEAD~2
```

We see a screen that we are used to knowing; then we change the word `pick` for `edit` in the _commit_ we want to edit.

```bash
edit f2feda9 CSS and JS adjusments in slideshow.
pick 1ee9572 Updates README with JS dependencies.
...
```

So, quit the edit mode and we're going to see this:

```bash
Stopped at f2feda9... Ajustes gerais de CSS e JS no slideshow.
You can amend the commit now, with
   git commit --amend
Once you are satisfied with your changes, run
   git rebase --continue
```

This is the cool part. What happened here was the `rebase` stopped in the _commit_ we specified. Now we have three options:`

* `git commit --amend` => to change the _commit_ editing/adding one or more files.
* `git rebase --continue` => to move on with the`rebase` without doing anything (use this same command before the previous on to continue with the `rebase`).
* `git reset HEAD^` => Return the _commit_ we are stopped.

At this point, if we run a `git status` we would see the files that were modified in the _commit_:

```bash
dev/js/slideshow.js
dev/js/main.js
dev/css/style.css
dev/css/slideshow.css
```

Now we could add the files and commit them. Theoretically, here you do the _commits_ splitting. For our example, we could do something like:

```bash
git add dev/js/slideshow.js

git add dev/css/slideshow.css

git commit -m "CSS and JS adjustments in the slideshow core."

git add dev/css/style.css

git commit -m "Slideshow CSS adjustments in internal pages."

git add dev/js/main.js

git commit -m "Changes the parameters in the slideshow function call."
```

What we did was adding files step by step and make _commits_. With all of this done, we could move on with the `rebase`:


```bash
git rebase --continue

Successfully rebased and updated refs/heads/develop.
```

And... done! Now if we look the log, we would have something like that:

```bash
1ee9572 Updates README with JS dependencies.
f74a46e Changes the parameters in the slideshow function call.
41ab775 Slideshow CSS adjustments in internal pages.
7ccdd4c CSS and JS adjustments in the slideshow core.
```

## Forcing the push

[As well remembered](https://github.com/raphaelfabeni/raphaelfabeni.github.io/issues/9) by [Cícero Pablo](https://github.com/ciceropablo), when we use the *interactive rebase* , if you already have a repository with a history of _commits_, you must do `push` with the `--force` flag.

**Some notes**.

* The file names/structure and messages of all _commits_ are just an example.
* We used the word _screen_ to make reference each return of the terminal.
* By default, my terminal editor is *vim*, that makes easier to edit the _screens_ that I commented in the previous topic.
