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

{% gist 677088afc36ee7fca209e725c6d3d3d5 %}

And then, we see a screen like that:

{% gist 7c5fde1e19367ca87b61e89dedffa350 %}

So far, nothing new. Let's move on...

## Merging _commits_

Let's merge the _commits_ related to CSS and JS adjustments, which probably are similar (they even could edit the same code) and perhaps it makes sense if they were only one commit.

To do that, we type `squash` in a _commit_. Doing that, `git` understand we want to merge this marked _commit_  with the previous one (above).

{% gist b5622f6453a5e626b925dedae34f29f5 %}

After that, we see a screen that shoes both _commits_ messages:

{% gist 29da7420b8fa326337188d06fcacdc88 %}

Now we just have to remove or comment the lines with the _commits_ messages and insert the new message:

{% gist 911f36914065d88e0e8478cbc25fc76c %}

And... done! Now if we run a *log* of the commits, we will see something similar to:

{% gist 41d4e91fd6fbbb2596f70be9263426ed %}

## Splitting a *commit*

As we're crazy, now we want to revert the previous process and spit the _commit_ that was merged. Jokes apart, we can do it, for example, in a commit that with a lot of changes and perhaps we could split it to make the git commit story better to understand. So we run the `rebase`:

{% gist 0d4a974fb595ac86d7952788e99cf504 %}

We see a screen that we are used to knowing; then we change the word `pick` for `edit` in the _commit_ we want to edit.

{% gist ab809bf3e7e7e742cddef1e79bfa3371 %}

So, quit the edit mode and we're going to see this:

{% gist 178ade618c0ffe7bfe78a264b5b07c51 %}

This is the cool part. What happened here was the `rebase` stopped in the _commit_ we specified. Now we have three options:`

* `git commit --amend` => to change the _commit_ editing/adding one or more files.
* `git rebase --continue` => to move on with the`rebase` without doing anything (use this same command before the previous on to continue with the `rebase`).
* `git reset HEAD^` => Return the _commit_ we are stopped.

At this point, if we run a `git status` we would see the files that were modified in the _commit_:

{% gist d01f3892d76caa1de0db98ad7d73a377 %}

Now we could add the files and commit them. Theoretically, here you do the _commits_ splitting. For our example, we could do something like:

{% gist a9d13a6e14122a04a1f7e4c18a9565d2 %}

What we did was adding files step by step and make _commits_. With all of this done, we could move on with the `rebase`:

{% gist 1fabc06fb363a70685012dd0ff3332d9 %}

And... done! Now if we look the log, we would have something like that:

{% gist 81658d8c578abb9b8a0cafdb15cb54b0 %}

## Forcing the push

[As well remembered](https://github.com/raphaelfabeni/raphaelfabeni.github.io/issues/9) by [Cícero Pablo](https://github.com/ciceropablo), when we use the *interactive rebase* , if you already have a repository with a history of _commits_, you must do `push` with the `--force` flag.

**Some notes**.

* The file names/structure and messages of all _commits_ are just an example.
* We used the word _screen_ to make reference each return of the terminal.
* By default, my terminal editor is *vim*, that makes easier to edit the _screens_ that I commented in the previous topic.
