---
layout: post
title:  "Git: Alterando seus commits com rebase - parte 2/2"
description: "Com o rebase interativo, conseguimos editar nossos commits em um mesmo branch, seja mesclando-os, alterando a ordem e editando as mensagens."
type: Post
date: 2015-02-03
image: 'git-commit-rebase-2.jpg'
---

No [post anterior](/git-editando-commit-parte-1/), vimos duas das coisas que é possível de se fazer com o *rebase* interativo:

* alterar a ordem dos *commits*;
* editar as mensagens.

Nesse post vamos ver como mesclar dois *commits* em apenas um e, o processo inverso, de dividir um único *commit* em dois.

## Relemnramdo

Voltando ao exemplo do post anterior (recomendo você ler, pra se atualizar com o fluxo), rodamos novamente o comando:

{% highlight bash %}
git rebase -i HEAD~3
{% endhighlight %}

Após isso, caímos na tela abaixo:

{% highlight bash %}
pick 9afe987 Ajustes de CSS e JS no slideshow.
pick 74e6f3e Mais ajustes de CSS e JS no slideshow.
pick 1ee9572 Atualiza informações sobre dependências JS no README.

# Rebase 5644bdd..1ee9572 onto 5644bdd
#
# Commands:
#  p, pick = use commit
#  r, reword = use commit, but edit the commit message
#  e, edit = use commit, but stop for amending
#  s, squash = use commit, but meld into previous commit
#  f, fixup = like "squash", but discard this commit's log message
#  x, exec = run command (the rest of the line) using shell
{% endhighlight %}

Até aqui nada de novo. Então vamos lá..

## Mesclando *commits*

Vamos mesclar os dois *commits* relacionados aos ajustes de CSS e JS do slideshow, que provavelmente mexeram coisas semelhantes (senão as mesmas coisas) e talvez tivesse mais sentido se ficassem juntos em apenas um *commit*.

Para isso, digitamos *squash* em um *commit*. Fazendo isso ele entende que qureremos mesclar esse *commit* marcado com o anterior (no caso, o de cima).

{% highlight bash %}
pick 9afe987 Ajustes de CSS e JS no slideshow.
squash 74e6f3e Mais ajustes de CSS e JS no slideshow.
pick 1ee9572 Atualiza informações sobre dependências JS no README.
{% endhighlight %}

Feito isso, caíremos numa tela que mostra a mensagem dos dois *commits*:

{% highlight bash %}
# This is a combination of 2 commits.
# The first commit's message is:

Ajustes de CSS e JS no slideshow.

# This is the 2nd commit message:

Mais ajustes de CSS e JS no slideshow.

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
{% endhighlight %}

Agora é só apagarmos ou comentarmos as duas linhas de mensagens dos *commits* e inserirmos a nova mensagem:

{% highlight bash %}
Ajustes gerais de CSS e JS no slideshow.
{% endhighlight %}

E.. pronto! Agora se rodarmos um *log* dos commits, veremos algo similar a isso:

{% highlight bash %}
f2feda9 Ajustes gerais de CSS e JS no slideshow.
1ee9572 Atualiza informações sobre dependências JS no README.
{% endhighlight %}

## Dividindo commits



