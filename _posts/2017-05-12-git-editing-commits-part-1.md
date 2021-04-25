---
layout: post
title: 'Git: Editing your commits with rebase - part 1/2'
description: Change the order of your commits or renaming the message of them is easy.
type: Post
image: https://cloud.githubusercontent.com/assets/1345662/11458148/a4df143e-96a1-11e5-8799-a9522faa7a66.jpg
alt: Two elderly people weaving wire in an old machine.
lang: en
category: tech
permalink: git-editing-commits-part-1/
ref: edit-commit-rebase

---
The more I work with git, the more I realize how powerful it is. Some time ago, I discovered that there is a way to organize/edit your _commits_. For what? Some useful cases:

* the commit message is wrong, or it doesn't make sense.
* The order of the _commits_ is not nice regarding GitHub history.
* There is more than one commit that makes similar changes (or even the same thing).
* A commit grouped a lot of different code, making sense to divide it into smaller _commits_.

## A quick example

A simple example: let's imagine that in your project, you did a change and made a commit:

{% gist 6a0aafc048a4416d0c464033d9410d54 %}

So, you just remembered that you needed to update the `README`.

{% gist f2b857c5122658327bb38117f93ad914 %}

So, you went to get a coffee cup, and when you were returning to your desk, you remembered the last CSS adjustment you have to do. So you do it and make a new commit:

{% gist c21ef19c51750057b8a8cbbe4f834641 %}

A simple log to see the _commits_ would show something like that (the last 3):

{% gist 67794fc3684410b64f45258895d37c33 %}

If it's a small or even personal project, we could say that it is okay to let the _commits_ this way. However, if you are working with other people on a big project, it could be weird three _commits_ for the same and small change. There is the interactive rebase: using it; we could change the _commits_ in a branch to help us.

## How I do it?

{% gist 3c311e78b1ea83e571956ea06d3f642c %}

About the code above:

* `-i` => interactive mode
* `-3` =>number of _commits_ we want to target.

Running that command, a screen like this below will show (it will open in your default editor like Vim):

{% gist 72bafbf63ab01783cb06aa67ea295a1f %}

## Reordering _commits_

In the example above, we could change the _commits_' order.

{% gist 0a7fe1f8d01845bdc7135289dc4b9129 %}

And... it's done! If everything is ok, a message like that will appear:

{% gist d873a435ff7954d18a9f171ca4a7df80 %}

Some conflicts could happen and in this case the `rebase` command will stop until you resolve the conflicts. After that, you only need to run `git rebase --continue` to continue or `git rebase --abort` to quit and abort the process.

## Editing messages

Another thing really cool is the possibility to edit the message of the commit. In the previous examples, now we want to change the message of the commit, which updates the `README` file.

So, we run again the `rebase`.

{% gist 82690be5a679bbaba53f8e6f955fbef3 %}

And the same screen with the _commits_ list will show for us. Now we change the `pick` word to `reword` in the commit, which we want to change the message.

{% gist 6c7a588a264656c634e6babf796cecc3 %}

Doing that, a new screen will show for us:

{% gist cb7c957694ebb25359d0c88ff1564b1e %}

We need to type the new message.

{% gist bf18f891ed37f855c262c00106056fc2 %}

And it's done! If we run a simple _log_, we will see the _commits_ list with the message updated:

{% gist b867b5986d25ebdb0ebe4db5eaa75bb4 %}

## Forcing the push

As reminded by [Cicero Pablo](https://github.com/ciceropablo), when we use the _interactive rebase_, if you already have a repository with a _history of commits_, you will have to use the `push` command with the `--force` flag.

## There is more...

You can read [the second part of this article](/en/git-editing-commits-part-2/) that we talk about `merge` and `split` _commits_.

Some points:

* The names/structure of the files and messages of _commits_ are only, for example.
* I used the word _screen_ to refer to every return of the terminal after a command.
