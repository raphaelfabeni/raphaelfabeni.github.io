---
layout: post
title:  "Git: Alterando seus commits com rebase - parte 2/2"
description: "Com o rebase interativo, conseguimos editar nossos commits em um mesmo branch, seja mesclando-os, alterando a ordem e editando as mensagens."
type: Post
date: 2015-02-02
image: 'https://cloud.githubusercontent.com/assets/1345662/11458149/a4fe99da-96a1-11e5-8d30-0f4938603dcc.jpg'
imageExternal: true
alt: 'Dois senhores idosos jogando golf em um clube de campo'
---

No [post anterior](/git-alterando-commits-parte-1/), vimos duas das coisas que são possíveis de se fazer com o *rebase* interativo:

* alterar a ordem dos *commits*;
* editar as mensagens.

Nesse post vamos ver como mesclar dois *commits* em apenas um e, o processo inverso, de dividir um único *commit* em dois.

## Relembrando

Voltando ao exemplo do [post anterior](/git-alterando-commits-parte-1) (recomendo que você leia, pra se atualizar com o fluxo), rodamos novamente o comando:

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

Para isso, digitamos *squash* em um *commit*. Fazendo isso o moço *git* entende que queremos mesclar esse *commit* marcado com o anterior (no caso, o de cima).

{% highlight bash %}
pick 9afe987 Ajustes de CSS e JS no slideshow.
squash 74e6f3e Mais ajustes de CSS e JS no slideshow.
pick 1ee9572 Atualiza informações sobre dependências JS no README.
{% endhighlight %}

Feito isso, caíremos numa tela que mostra as mensagens dos dois *commits*:

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
1ee9572 Atualiza informações sobre dependências JS no README.
f2feda9 Ajustes gerais de CSS e JS no slideshow.
{% endhighlight %}

## Dividindo um *commit*

Sabe-se lá Deus por que, mas agora queremos reverter o processo anterior e dividir o *commit* que foi mesclado anteriormente (brincadeiras a parte, podemos fazer isso por exemplo, num *commit* que englobou muita alteração e que talvez pudéssemos querer dividir melhor o caminho que percorremos). Rodamos o *rebase*:

{% highlight bash %}
git rebase -i HEAD~2
{% endhighlight %}

Iremos cair nessa tela que já estamos acostumados, eaí trocamos o *pick* por *edit* no *commit* que quisermos editar.

{% highlight bash %}
edit f2feda9 Ajustes gerais de CSS e JS no slideshow.
pick 1ee9572 Atualiza informações sobre dependências JS no README.
...
{% endhighlight %}

Saindo do modo de edição e continuando iremos chegar aqui:

{% highlight bash %}
Stopped at f2feda9... Ajustes gerais de CSS e JS no slideshow.
You can amend the commit now, with
   git commit --amend
Once you are satisfied with your changes, run
   git rebase --continue
{% endhighlight %}

Essa parte é legal. O que aconteceu aqui foi que o *rebase* parou no *commit* que especificamos. Temos agora três opções:

* `git commit --amend` => para editar o *commit* editando/adicionando um arquivo.
* `git rebase --continue` => para seguir em frente com o *rebase* e não fazer nada (use esse comando também após o anterior para continuar com o *rebase*).
* `git reset HEAD^` => Volta o *commit* em que estamos parados.

Nesse ponto se rodarmos um `git status` veremos os arquivos que foram modificados nesse *commit* :

{% highlight bash %}
dev/js/slideshow.js
dev/js/main.js
dev/css/style.css
dev/css/slideshow.css
{% endhighlight %}

Agora podemos adicionar os arquivos e *commitar*. Aqui que teoricamente você faz a divisão dos *commits*. Para o nosso exemplo, poderíamos fazer algo assim:

{% highlight bash %}
git add dev/js/slideshow.js

git add dev/css/slideshow.css

git commit -m "Ajustes de CSS e JS no core do slideshow."

git add dev/css/style.css

git commit -m "Ajustes de CSS do slideshow para as páginas internas."

git add dev/js/main.js

git commit -m "Troca da chamada nos parâmetros da função do slideshow."
{% endhighlight %}

O que fizemos acima foi adicionar os arquivos por partes e fazer *commits*. Com tudo feito, é só continuarmos o *rebase*:

{% highlight bash %}
git rebase --continue

Successfully rebased and updated refs/heads/develop.
{% endhighlight %}

E... pronto! Se formos olhar o log, teríamos agora algo similar a isso:

{% highlight bash %}
1ee9572 Atualiza informações sobre dependências JS no README.
f74a46e Troca da chamada nos parâmetros da função do slideshow.
41ab775 Ajustes de CSS do slideshow para as páginas internas.
7ccdd4c Ajustes de CSS e JS no core do slideshow.
{% endhighlight %}

## Forçando o push

[Como bem lembrado](https://github.com/raphaelfabeni/raphaelfabeni.github.io/issues/9) pelo [Cícero Pablo](https://github.com/ciceropablo), quando utilizamos o *rebase interativo*, caso você já tenha um repositório com uma *história de commits*, será preciso fazer *push* com a flag `--force`.

**Obs**.

* Os nomes/estrutura dos arquivos e mensagens de *commit* são a títulos de exemplo.
* Usei a palavra tela para referenciar cada retorno do terminal.
* Uso por padrão como editor o *vim*, o que facilita a edição das *telas* que comentei no tópico anterior.

Gostou? Escrevi alguma groselha? Quer melhorar? Abra uma [issue](https://github.com/raphaelfabeni/raphaelfabeni.github.io/issues) com a hashtag *1postperweek* e vamos conversar.









