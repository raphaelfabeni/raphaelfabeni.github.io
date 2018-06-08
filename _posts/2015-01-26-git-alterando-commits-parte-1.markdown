---
layout: post
title:  "Git: Alterando seus commits com rebase - parte 1/2"
description: "Muitas vezes acabamos fazendo commits que acabam não tendo muito sentido na história como um todo, com rebase conseguimos brincar com isso."
type: Post
image: 'https://cloud.githubusercontent.com/assets/1345662/11458148/a4df143e-96a1-11e5-8799-a9522faa7a66.jpg'
alt: 'Dois idosos tecendo fio em uma máquina antiga'
lang: pt-br
url_en: /git-editing-commits-part-1/
url_br: /git-alterando-commits-parte-1/
category: 'git'
---

Quanto mais mexemos com *git* mais descobrimos coisas mirabolantes que ele pode fazer. Descobri há um tempo atrás uma maneira de organizar/alterar seus _commits_ e que me ajudou bastante.

Editar _commits_? Pra que? Pois é. Alguns casos:

* a mensagem do _commit_ está errada ou não faz sentido;
* a ordem dos commits não está legal em relação à história;
* existe mais de um _commit_ que fazem coisas similares (senão a mesma coisa).
* um _commit_ agrupou muito código diferente e faz sentido dividi-lo em _commits_ menores.

## Um exemplo rápido

Um exemplo simples e rápido. Imagine que no seu projeto você fez uma alteração e fez um _commit_:

```bash
git commit -m 'Ajustes de CSS e JS no slideshow.'
```

Aí você lembrou que tinha que atualizar o `README` (ou preferiu deixar em _commits_ separados) do projeto:

```bash
git commit -m 'Atualiza o README.'
```

Então você sai pra pegar um chá (não bebo café ¯\\\_(ツ)_/¯) e no meio do caminho lembra que faltou uma alteração de CSS. Aí você volta, faz a alteração e comita novamente:

```bash
git commit -m 'Mais ajustes de CSS e JS no slideshow.'
```

Se rodássemos um simples *log* para ver os _commits_ teríamos algo assim (limitei apenas aos 3 últimos, para o exemplo):

```bash
git log --oneline
74e6f3e Mais ajustes de CSS e JS no slideshow.
1ee9572 Atualiza o README.
9afe987 Ajustes de CSS e JS no slideshow.
```

Se o projeto é pequeno/pessoal, até daria pra deixar assim, no entanto, quando estamos trabalhando com outras pessoas em um projeto grande, pode ficar meio estranho no conjunto da história. É aí que entra o *interactive rebase*. Com ele conseguimos alterar _commits_ em um mesmo *branch*. Paremos de falar e vamos ao que interessa.

## Como faço?

```bash
git rebase -i HEAD~3
```

Rodamos o comando acima onde o:

* `-i` => modo interativo.
* `~3` => números de _commits_ para abranger.

Feito isso aparecerá uma tela similar a essa abaixo (todas *telas* citadas abaixo irão abrir no seu editor que estiver setado como *default*):

```bash
pick 74e6f3e Mais ajustes de CSS e JS no slideshow.
pick 1ee9572 Atualiza o README.
pick 9afe987 Ajustes de CSS e JS no slideshow.

# Rebase 5644bdd..74e6f3e onto 5644bdd
#
# Commands:
#  p, pick = use commit
#  r, reword = use commit, but edit the commit message
#  e, edit = use commit, but stop for amending
#  s, squash = use commit, but meld into previous commit
#  f, fixup = like "squash", but discard this commit's log message
#  x, exec = run command (the rest of the line) using shell
```

## Reordenando _commits_

No exemplo acima poderíamos alterar a ordem dos _commits_ deixando juntos os que são relacionados ao mesmo tema por exemplo. Pra isso, na tela anterior, edite a ordem copiando e colando as linhas na ordem que preferir. Para o exemplo, poderíamos algo mais ou menos assim:

```bash
pick 1ee9572 Atualiza o README.
pick 74e6f3e Mais ajustes de CSS e JS no slideshow.
pick 9afe987 Ajustes de CSS e JS no slideshow.
```

E ... pronto! Se Se ocorreu tudo certo aparecerá uma mensagem mais ou menos assim:

```bash
Successfully rebased and updated refs/heads/develop.
```

Pode ser que conflitos ocorram, nesse caso o `rebase` para até que você o corrija. Depois é só rodar um `git rebase --continue` para seguir ou um `git rebase --abort` se quiser desistir de tudo.

## Alterando mensagens

Outra coisa beeeem bacana é a possibilidade de alterar a mensagem de um _commit_. Voltando ao nosso exemplo, agora queremos trocar a mensagem do *commit do README*.

Rodamos novamente o *rebase*:

```bash
git rebase -i HEAD~3
```

Caímos novamente naquela tela com a listagem dos _commits_. Aí digitamos `reword` no _commit_ que quisermos editar a mensagem.

```bash
pick 9afe987 Ajustes de CSS e JS no slideshow.
pick 74e6f3e Mais ajustes de CSS e JS no slideshow.
reword 1ee9572 Atualiza o README.
```

Feito isso, caíremos em outra tela, similar a essa:

```bash
Atualiza o README.

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
```

Aí é só *taca-le pau* na nova mensagem.

```bash
Atualiza informações sobre dependências JS no README.
...
```

E... pronto! \o/ Se rodarmos um *log* simples, veremos a lista dos _commits_ com a mensagem atualizada:

```bash
1ee9572 Atualiza informações sobre dependências JS no README.
74e6f3e Mais ajustes de CSS e JS no slideshow.
9afe987 Ajustes de CSS e JS no slideshow.
```

## Forçando o push

[Como bem lembrado](https://github.com/raphaelfabeni/raphaelfabeni.github.io/issues/9) pelo [Cícero Pablo](https://github.com/ciceropablo), quando utilizamos o *rebase interativo*, caso você já tenha um repositório com uma *história de commits*, será preciso fazer `push`com a flag `--force`.

## Tem mais..

Pra não ficar muito extenso, dividi o assunto em 2 posts. No próximo vamos falar de mesclar _commits_ e dividir um _commit_ em dois. [Aqui você consegue ler a segunda parte do artigo](/git-alterando-commits-parte-2/).

**Obs**.

* Os nomes/estrutura dos arquivos e mensagens de _commit_ são a títulos de exemplo.
* Usei a palavra tela para referenciar cada retorno do terminal.
* Uso por padrão como editor o *vim*, o que facilita a edição das •telas• que comentei no tópico anterior.

Gostou? Escrevi alguma groselha? Quer melhorar? Abra uma [issue](https://github.com/raphaelfabeni/raphaelfabeni.github.io/issues) com a hashtag *1postperweek* e vamos conversar.








