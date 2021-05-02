---
layout: post
type: Post
lang: pt-br
title: "Git: Alterando seus commits com rebase - parte 1/2"
draft: false
description: Muitas vezes acabamos fazendo commits que acabam não tendo muito
  sentido na história como um todo, com rebase conseguimos brincar com isso.
category: tech
permalink: git-alterando-commits-parte-1/
ref: edit-commit-rebase
date: 2015-02-01 22:02
image: https://cloud.githubusercontent.com/assets/1345662/11458148/a4df143e-96a1-11e5-8799-a9522faa7a66.jpg
alt: Dois idosos tecendo fio em uma máquina antiga
---

Quanto mais mexemos com *git* mais descobrimos coisas mirabolantes que ele pode fazer. Descobri há um tempo atrás uma maneira de organizar/alterar seus _commits_ e que me ajudou bastante.

Editar _commits_? Pra que? Pois é. Alguns casos:

* a mensagem do _commit_ está errada ou não faz sentido;
* a ordem dos commits não está legal em relação à história;
* existe mais de um _commit_ que fazem coisas similares (senão a mesma coisa).
* um _commit_ agrupou muito código diferente e faz sentido dividi-lo em _commits_ menores.

## Um exemplo rápido

Um exemplo simples e rápido. Imagine que no seu projeto você fez uma alteração e fez um _commit_:

{% gist 90a6a97130985c4b7c22c92521efa0cd %}

Aí você lembrou que tinha que atualizar o `README` (ou preferiu deixar em _commits_ separados) do projeto:

{% gist a1ae888b8bec5945c71bfd320dcd30ba %}

Então você sai pra pegar um chá (não bebo café ¯\\\_(ツ)_/¯) e no meio do caminho lembra que faltou uma alteração de CSS. Aí você volta, faz a alteração e comita novamente:

{% gist 69fab53ddba3552abf7a5bca490e1480 %}

Se rodássemos um simples *log* para ver os _commits_ teríamos algo assim (limitei apenas aos 3 últimos, para o exemplo):

{% gist 658e70c8020eb959214b6176f47c8cca %}

Se o projeto é pequeno/pessoal, até daria pra deixar assim, no entanto, quando estamos trabalhando com outras pessoas em um projeto grande, pode ficar meio estranho no conjunto da história. É aí que entra o *interactive rebase*. Com ele conseguimos alterar _commits_ em um mesmo *branch*. Paremos de falar e vamos ao que interessa.

## Como faço?

{% gist 3c311e78b1ea83e571956ea06d3f642c %}

Rodamos o comando acima onde o:

* `-i` => modo interativo.
* `~3` => números de _commits_ para abranger.

Feito isso aparecerá uma tela similar a essa abaixo (todas *telas* citadas abaixo irão abrir no seu editor que estiver setado como *default*):

{% gist 83068ff07ed98e3c5d72a6a9155a2e3e %}

## Reordenando _commits_

No exemplo acima poderíamos alterar a ordem dos _commits_ deixando juntos os que são relacionados ao mesmo tema por exemplo. Pra isso, na tela anterior, edite a ordem copiando e colando as linhas na ordem que preferir. Para o exemplo, poderíamos algo mais ou menos assim:

{% gist fb24d09ac3495ec6af419368ebc99a48 %}

E ... pronto! Se Se ocorreu tudo certo aparecerá uma mensagem mais ou menos assim:

{% gist d873a435ff7954d18a9f171ca4a7df80 %}

Pode ser que conflitos ocorram, nesse caso o `rebase` para até que você o corrija. Depois é só rodar um `git rebase --continue` para seguir ou um `git rebase --abort` se quiser desistir de tudo.

## Alterando mensagens

Outra coisa beeeem bacana é a possibilidade de alterar a mensagem de um _commit_. Voltando ao nosso exemplo, agora queremos trocar a mensagem do *commit do README*.

Rodamos novamente o *rebase*:

{% gist 82690be5a679bbaba53f8e6f955fbef3 %}

Caímos novamente naquela tela com a listagem dos _commits_. Aí digitamos `reword` no _commit_ que quisermos editar a mensagem.

{% gist 38ba4f56846faa26f6017caf26d5861a %}

Feito isso, caíremos em outra tela, similar a essa:

{% gist 8ed05e1d9253aacbe6aa1cbbe7a5e844 %}

Aí é só *taca-le pau* na nova mensagem.

{% gist 6944b66ccca4980a7f9c5e0c19bb7020 %}

E... pronto! \o/ Se rodarmos um *log* simples, veremos a lista dos _commits_ com a mensagem atualizada:

{% gist ccc86e3c2db01bd2df15769f3d80100d %}

## Forçando o push

[Como bem lembrado](https://github.com/raphaelfabeni/raphaelfabeni.github.io/issues/9) pelo [Cícero Pablo](https://github.com/ciceropablo), quando utilizamos o *rebase interativo*, caso você já tenha um repositório com uma *história de commits*, será preciso fazer `push`com a flag `--force`.

## Tem mais..

Pra não ficar muito extenso, dividi o assunto em 2 posts. No próximo vamos falar de mesclar _commits_ e dividir um _commit_ em dois. [Aqui você consegue ler a segunda parte do artigo](/git-alterando-commits-parte-2/).

**Obs**.

* Os nomes/estrutura dos arquivos e mensagens de _commit_ são a títulos de exemplo.
* Usei a palavra tela para referenciar cada retorno do terminal.
* Uso por padrão como editor o *vim*, o que facilita a edição das •telas• que comentei no tópico anterior.
