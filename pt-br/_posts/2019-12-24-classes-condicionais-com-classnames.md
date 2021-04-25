---
layout: post
title: Classes condicionais com classnames
description: O pacote classnames auxilia em como lidar com classes CSS nos seus components.
type: Post
image: https://user-images.githubusercontent.com/1345662/40094697-e29d52e2-589e-11e8-8d9b-25ab842482d4.jpg
alt: Estrada de terra em formato de S em uma floresta.
lang: pt-br
category: tech
permalink: classes-condicionais-com-classnames/
ref: classnames

---
Não sou um _expert_ em React mas tenho trabalhado com o framework nos últimos meses e posso dizer que o pacote [classnames](https://github.com/JedWatson/classnames) é algo que tem ajudado bastante.

Como código é melhor que palavras, vamos ao que interessa. Eu costumava a fazer algo assim:

{% gist 893c216dbc22d16138c47da1040c52d6 %}

ou...

{% gist 5c26a6fb658f04d229a97e26acc894e8 %}

Já funciona! :) Mas dá pra deixar mais legal, principalmente pensando quando o número de classes CSS aumentar. Foi então que apareceu essa maravilha chamada _classnames_

{% gist 2b4953792611320f0a27e07acbe03225 %}
