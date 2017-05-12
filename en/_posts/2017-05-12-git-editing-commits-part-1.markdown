---
layout: post
title:  "Git: Editing your commits with rebase - part 1/2"
description: "Change the order of your commits or renaming the message of them is easy."
type: Post
image: 'https://cloud.githubusercontent.com/assets/1345662/11458148/a4df143e-96a1-11e5-8799-a9522faa7a66.jpg'
alt: 'Two elderly people weaving wire in an old machine.'
lang: en
url_en: /gitediting-commits-part-1/
url_br: /git-alterando-commits-parte-1/
---

The more I work with git, more I realize how powerful it is. Sometime ago I discovered that there is a way to organize/edit your _commits_. For what? Some useful cases:

* the commit message is wrong or it doesn't make sense.
* the order of the _commits_ is not nice regarding to GitHub history.
* there are more than one commit which make similar changes (or even the same thing).
* a commit grouped a lot of different code and it makes sense divide it in smaller _commits_.

## A quick example

A simple example: let's imagine that in your project you did a change and made a commit:

{% highlight bash %}
git commit -m 'CSS and JS adjusments in slideshow.'
{% endhighlight %}

So, you just remembered that you needed to update the `README`.

{% highlight bash %}
git commit -m 'Updates README.'
{% endhighlight %}

So, you went to get a cup of coffee and when you were returning to your desk, you remembered a last CSS adjustment that you have to do. So you do it, and make a new commit:

{% highlight bash %}
git commit -m 'More CSS adjustments in slideshow.'
{% endhighlight %}

A simple log to see the _commits_ would show something like that (the last 3):

{% highlight bash %}
git log --oneline
74e6f3e More CSS adjustments in slideshow.
1ee9572 Updates README.
9afe987 CSS and JS adjusments in slideshow.
{% endhighlight %}

If it's a small or even personal project, we could say that is okay to let the _commits_ this way. However, if you are working with other people in a big project, it could be weird three _commits_ for the same and small change. For help us, there is the interactive rebase: using it we could change the _commits_ in a branch.

## How I do it?

{% highlight bash %}
git rebase -i HEAD~3
{% endhighlight %}

About the code above:

* `-i` => interactive mode
* `-3` =>number of _commits_ we want to target.

Running that comand, a screen like this below will show (it will open in your default editor like Vim):

{% highlight bash %}
pick 74e6f3e More CSS adjustments in slideshow.
pick 1ee9572 Updates README.
pick 9afe987 CSS and JS adjusments in slideshow.

# Rebase 5644bdd..74e6f3e onto 5644bdd
#
# Commands:
#  p, pick = use commit
#  r, reword = use commit, but edit the commit message
#  e, edit = use commit, but stop for amending
#  s, squash = use commit, but meld into previous commit
#  f, fixup = like "squash", but discard this commit's log message
#  x, exec = run command (the rest of the line) using shell
{% endhighlight %}

## Reordering _commits_

In example above we could change the _commits_' order.

{% highlight bash %}
pick 1ee9572 Updates README.
pick 74e6f3e More CSS adjustments in slideshow.
pick 9afe987 CSS and JS adjusments in slideshow.
{% endhighlight %}

And.. it's done! If everything is ok, a message like that will appear:

{% highlight bash %}
Successfully rebased and updated refs/heads/develop.
{% endhighlight %}

Some conflicts could happen, and in this case the `rebase` command will stop untill you resolve the conflicts. After that you only need to run `git rebase --continue` to continue or `git rebase --abort` to quite and abort the process.

## Editing messages

Other thing really cool is the possibility to edit the message of the commit. In the previous examples, now we want to change message of the commit which updates the `README` file.

So, we run again the `rebase`.

{% highlight bash %}
git rebase -i HEAD~3
{% endhighlight %}

And the same screen with the _commits_ list will show for us. Now we change the `pick` word to `reword` in the commit which we want to change the message.

{% highlight bash %}
pick 1ee9572 Updates README.
pick 74e6f3e More CSS adjustments in slideshow.
pick 9afe987 CSS and JS adjusments in slideshow.
{% endhighlight %}

Doing that, a new screen will show for us:

{% highlight bash %}
Updates the README.

# Please enter the commit message for your changes. Lines starting
# with '#' will be ignored, and an empty message aborts the commit.
#
# Date:      Mon Dec 15 19:09:30 2014 -0200
#
# rebase in progress; onto 5644bdd
# You are currently editing a commit while rebasing branch 'develop' on '5644bdd'.
#
# Changes to be committed:
#       modified:   README.md
#
{% endhighlight %}

We just need to type the new message.

{% highlight bash %}
Updates README with JS dependencies.
...
{% endhighlight %}

And it's done! If we run a simple _log_, we will see the _commits_ list with the message updated:

{% highlight bash %}
1ee9572 Updates README with JS dependencies.
74e6f3e More CSS adjustments in slideshow.
9afe987 CSS and JS adjusments in slideshow.
{% endhighlight %}

## Forcing the push

As reminded by [Cicero Pablo](https://github.com/ciceropablo), when we use the _interactive rebase_, if you already have a repository with a _history of commits_, you will have to use the `push` command with the `--force` flag.

## There is more...

There is a second part of this post that I intend to write soon (merge and divide _commits_).

Some points:

* The names/structure of the files and message of _commits_ are only for example.
* I used the word _screen_ to make reference to every return of terminal after a command.