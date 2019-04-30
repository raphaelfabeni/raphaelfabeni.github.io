---
layout: post
title:  "Git: Alterando seus commits com rebase - parte 2/2"
description: "Com o rebase interativo, conseguimos editar nossos commits em um mesmo branch, seja mesclando-os, alterando a ordem e editando as mensagens."
type: Post
date: 2015-02-02
image: 'https://cloud.githubusercontent.com/assets/1345662/11458149/a4fe99da-96a1-11e5-8d30-0f4938603dcc.jpg'
alt: 'Dois senhores idosos jogando golf em um clube de campo'
lang: pt-br
url_en: /git-editing-commits-part-2/
url_br: /git-alterando-commits-parte-2/
category: 'git'
---

No [post anterior](/git-alterando-commits-parte-1/), vimos duas das coisas que são possíveis de se fazer com o *rebase* interativo:

* alterar a ordem dos _commits_;
* editar as mensagens.

Nesse post vamos ver como mesclar dois _commits_ em apenas um e, o processo inverso, de dividir um único _commit_ em dois.

## Relembrando

Voltando ao exemplo do [post anterior](/git-alterando-commits-parte-1) (recomendo que você leia, pra se atualizar com o fluxo), rodamos novamente o comando:

{% gist 677088afc36ee7fca209e725c6d3d3d5 %}

Após isso, caímos na tela abaixo:

{% gist f8ad12e50462728e5cb9e85adc0bc250 %}

Até aqui nada de novo. Então vamos lá..

## Mesclando _commits_

Vamos mesclar os dois _commits_ relacionados aos ajustes de CSS e JS do slideshow, que provavelmente mexeram coisas semelhantes (senão as mesmas coisas) e talvez tivesse mais sentido se ficassem juntos em apenas um _commit_.

Para isso, digitamos `squash` em um _commit_. Fazendo isso o moço *git* entende que queremos mesclar esse _commit_ marcado com o anterior (no caso, o de cima).

{% gist c7b36e1f1afa44f89ded7fd2cffb3dfd %}

Feito isso, caíremos numa tela que mostra as mensagens dos dois _commits_:

{% gist b8fd1917b385e6d6d0f0e6da379ceb6c %}

Agora é só apagarmos ou comentarmos as duas linhas de mensagens dos _commits_ e inserirmos a nova mensagem:

{% gist caf41b13d5fd7b44d64d108b26acc804 %}

E.. pronto! Agora se rodarmos um *log* dos commits, veremos algo similar a isso:

{% gist 6ede66fdabf8fb1cf0cd68d60c397aea %}

## Dividindo um _commit_

Sabe-se lá Deus por que, mas agora queremos reverter o processo anterior e dividir o _commit_ que foi mesclado anteriormente (brincadeiras a parte, podemos fazer isso por exemplo, em _commit_ que englobou muita alteração e que talvez pudéssemos querer dividir melhor o caminho que percorremos). Rodamos o *rebase*:

{% gist 0d4a974fb595ac86d7952788e99cf504 %}

Iremos cair nessa tela que já estamos acostumados, eaí trocamos o *pick* por *edit* no _commit_ que quisermos editar.

{% gist 478b4c6e28f6fcd51dc6077a1dd154a1 %}

Saindo do modo de edição e continuando iremos chegar aqui:

{% gist 4bd75525f197eaffa66246fbd68e1f25 %}

Essa parte é legal. O que aconteceu aqui foi que o *rebase* parou no _commit_ que especificamos. Temos agora três opções:

* `git commit --amend` => para editar o _commit_ editando/adicionando um arquivo.
* `git rebase --continue` => para seguir em frente com o *rebase* e não fazer nada (use esse comando também após o anterior para continuar com o *rebase*).
* `git reset HEAD^` => Volta o _commit_ em que estamos parados.

Nesse ponto se rodarmos um `git status` veremos os arquivos que foram modificados nesse _commit_ :

{% gist d01f3892d76caa1de0db98ad7d73a377 %}

Agora podemos adicionar os arquivos e *commitar*. Aqui que teoricamente você faz a divisão dos _commits_. Para o nosso exemplo, poderíamos fazer algo assim:

{% gist 35a9c53385083edc504406a4e136d08f %}

O que fizemos acima foi adicionar os arquivos por partes e fazer _commits_. Com tudo feito, é só continuarmos o *rebase*:

{% gist 1fabc06fb363a70685012dd0ff3332d9 %}

E... pronto! Se formos olhar o log, teríamos agora algo similar a isso:

{% gist b66552be6fc0f2aad12ce622333e8f66 %}

## Forçando o push

[Como bem lembrado](https://github.com/raphaelfabeni/raphaelfabeni.github.io/issues/9) pelo [Cícero Pablo](https://github.com/ciceropablo), quando utilizamos o *rebase interativo*, caso você já tenha um repositório com uma *história de commits*, será preciso fazer `push` com a flag `--force`.

**Obs**.

* Os nomes/estrutura dos arquivos e mensagens de _commit_ são a títulos de exemplo.
* Usei a palavra tela para referenciar cada retorno do terminal.
* Uso por padrão como editor o *vim*, o que facilita a edição das *telas* que comentei no tópico anterior.